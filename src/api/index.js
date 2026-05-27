export { api, tokenStorage } from './client';
export { ApiError } from './ApiError';
export { normalizePage } from './pagination';
export { getErrorMessage, isAuthError, isValidationError, isRateLimitError, isNotFoundError, isConflictError } from './errorHandler';
export { connectSocket, disconnectSocket, getSocket } from './socket';

export { authApi }             from './modules/auth';
export { filesApi }            from './modules/files';
export { serviceProvidersApi } from './modules/serviceProviders';
export { catalogApi }          from './modules/catalog';
export { directoryApi }        from './modules/directory';
export { chatApi }             from './modules/chat';
export { subscriptionsApi }    from './modules/subscriptions';
export { paymentsApi }         from './modules/payments';
export { pushApi }             from './modules/push';
