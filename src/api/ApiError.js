export class ApiError extends Error {
  constructor({ statusCode, code, message, requestId, details }) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
    this.requestId = requestId;
    this.details = details;
  }

  isUnauthorized()  { return this.statusCode === 401; }
  isForbidden()     { return this.statusCode === 403; }
  isNotFound()      { return this.statusCode === 404; }
  isConflict()      { return this.statusCode === 409; }
  isValidation()    { return this.statusCode === 422; }
  isRateLimit()     { return this.statusCode === 429; }
  isServerError()   { return this.statusCode >= 500; }
}
