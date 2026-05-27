import { ApiError } from './ApiError';

export function getErrorMessage(error) {
  if (!(error instanceof ApiError)) return 'Une erreur inattendue est survenue.';
  switch (error.code) {
    case 'AUTH_INVALID_CREDENTIALS':     return 'Identifiant ou mot de passe incorrect.';
    case 'AUTH_INVALID_OTP':             return 'Code invalide ou expiré.';
    case 'AUTH_OTP_MAX_ATTEMPTS':        return 'Trop de tentatives OTP.';
    case 'AUTH_EMAIL_TAKEN':             return 'Cet email est déjà utilisé.';
    case 'AUTH_PHONE_TAKEN':             return 'Ce numéro est déjà utilisé.';
    case 'AUTH_ACCOUNT_SUSPENDED':       return 'Votre compte est suspendu.';
    case 'AUTH_REFRESH_TOKEN_INVALID':
    case 'SESSION_EXPIRED':              return 'Session expirée, veuillez vous reconnecter.';
    case 'CHAT_CONVERSATION_CLOSED':     return 'Cette conversation a été fermée.';
    case 'CHAT_ESCORT_NOT_APPROVED':     return 'Ce prestataire n\'est pas encore approuvé.';
    case 'DIRECTORY_REVEAL_NOT_ALLOWED': return 'Vous devez avoir une conversation active pour voir ce contact.';
    case 'CARRIER_KYC_INCOMPLETE':       return 'Documents KYC incomplets.';
    case 'CARRIER_ALREADY_SUBMITTED':    return 'Déjà soumis, en attente de revue.';
    case 'FILE_TOO_LARGE':               return 'Fichier trop volumineux (max 10 MB).';
    case 'FILE_MIME_NOT_ALLOWED':        return 'Format de fichier non autorisé.';
    case 'RATE_LIMIT_EXCEEDED': {
      const secs = error.details?.retryAfterSeconds;
      return secs ? `Trop de tentatives. Réessayez dans ${secs}s.` : 'Trop de tentatives.';
    }
    case 'NETWORK_ERROR':    return 'Pas de connexion réseau.';
    case 'REQUEST_TIMEOUT':  return 'La requête a pris trop de temps.';
    default:                 return error.message;
  }
}

export const isAuthError       = (e) => e instanceof ApiError && (e.statusCode === 401 || e.code === 'SESSION_EXPIRED');
export const isValidationError = (e) => e instanceof ApiError && e.statusCode === 400 && e.code === 'VALIDATION_ERROR';
export const isRateLimitError  = (e) => e instanceof ApiError && e.code === 'RATE_LIMIT_EXCEEDED';
export const isNotFoundError   = (e) => e instanceof ApiError && e.statusCode === 404;
export const isConflictError   = (e) => e instanceof ApiError && e.statusCode === 409;
