import { ApiError } from './ApiError';

const BASE_URL          = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
const REQUEST_TIMEOUT   = 15_000;

const ACCESS_KEY  = 'PRESTIGE_ACCESS_TOKEN';
const REFRESH_KEY = 'PRESTIGE_REFRESH_TOKEN';

export const tokenStorage = {
  getAccess:  ()      => localStorage.getItem(ACCESS_KEY),
  setAccess:  (t)     => localStorage.setItem(ACCESS_KEY, t),
  getRefresh: ()      => localStorage.getItem(REFRESH_KEY),
  setRefresh: (t)     => localStorage.setItem(REFRESH_KEY, t),
  clear:      ()      => { localStorage.removeItem(ACCESS_KEY); localStorage.removeItem(REFRESH_KEY); },
};

// Single in-flight refresh — concurrent 401s are queued
let isRefreshing = false;
let refreshQueue = [];

async function doRefresh() {
  const refreshToken = tokenStorage.getRefresh();
  if (!refreshToken) throw new ApiError({ statusCode: 401, code: 'NO_REFRESH_TOKEN', message: 'Session expired' });

  const res = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError({ statusCode: res.status, code: 'REFRESH_FAILED', message: 'Session expired', ...body });
  }

  const data = await res.json();
  tokenStorage.setAccess(data.accessToken);
  if (data.refreshToken) tokenStorage.setRefresh(data.refreshToken);
  return data.accessToken;
}

/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown, headers?: Record<string,string>,
 *           isFormData?: boolean, skipAuth?: boolean, idempotencyKey?: string }} options
 * @param {boolean} _retry
 */
async function request(path, options = {}, _retry = true) {
  const { method = 'GET', body, headers = {}, isFormData, skipAuth, idempotencyKey } = options;

  const reqHeaders = { ...headers };
  if (!isFormData) reqHeaders['Content-Type'] = 'application/json';

  if (!skipAuth) {
    const token = tokenStorage.getAccess();
    if (token) reqHeaders['Authorization'] = `Bearer ${token}`;
  }

  if (idempotencyKey) reqHeaders['Idempotency-Key'] = idempotencyKey;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: reqHeaders,
      body: isFormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError')
      throw new ApiError({ statusCode: 408, code: 'REQUEST_TIMEOUT', message: 'Request timed out' });
    throw new ApiError({ statusCode: 0, code: 'NETWORK_ERROR', message: 'Network error' });
  }
  clearTimeout(timer);

  // Token expired — attempt silent refresh once
  if (res.status === 401 && !skipAuth && _retry) {
    if (isRefreshing) {
      return new Promise((resolve, reject) =>
        refreshQueue.push({ resolve, reject, path, options })
      );
    }
    isRefreshing = true;
    try {
      await doRefresh();
      isRefreshing = false;
      const pending = refreshQueue.splice(0);
      for (const q of pending) q.resolve(request(q.path, q.options, false));
      return request(path, options, false);
    } catch (err) {
      isRefreshing = false;
      const pending = refreshQueue.splice(0);
      for (const q of pending) q.reject(err);
      tokenStorage.clear();
      window.dispatchEvent(new CustomEvent('auth:expired'));
      throw err;
    }
  }

  if (res.status === 204) return null;

  let json;
  try { json = await res.json(); }
  catch { json = null; }

  if (!res.ok) {
    throw new ApiError(
      json ?? { statusCode: res.status, code: 'UNKNOWN_ERROR', message: res.statusText }
    );
  }

  return json;
}

export const api = {
  get:    (path, opts)       => request(path, { ...opts, method: 'GET' }),
  post:   (path, body, opts) => request(path, { ...opts, method: 'POST',  body }),
  put:    (path, body, opts) => request(path, { ...opts, method: 'PUT',   body }),
  patch:  (path, body, opts) => request(path, { ...opts, method: 'PATCH', body }),
  delete: (path, opts)       => request(path, { ...opts, method: 'DELETE' }),
  upload: (path, formData, opts) =>
    request(path, { ...opts, method: 'POST', body: formData, isFormData: true }),
};
