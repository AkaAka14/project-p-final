// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://${process.env.VITE_REACT_APP_API_URL}';
export const API_TIMEOUT = 30000; // 30 seconds

// App Configuration
export const APP_CONFIG = {
  name: 'PMS Admin',
  version: '1.0.0',
  apiUrl: API_BASE_URL,
  storagePrefix: 'pms_',
};
export const API_CONFIG = {
  BASE_URL: 'http://${process.env.VITE_REACT_APP_API_URL}/v1',
  TIMEOUT: 10000,
  ENDPOINTS: {
    AUTH: {
      BASE: '/user',
      LOGIN: '/login',
      REGISTER: '/register',
      LOGOUT: '/logout',
      PROFILE: '/me',
      FORGOT_PASSWORD: '/forgot-password',
      RESET_PASSWORD: '/reset-password',
      VERIFY_EMAIL: '/verify-email'
    }
  }
};
// Auth Configuration
export const AUTH_CONFIG = {
  tokenKey: 'access_token',
  refreshTokenKey: 'refresh_token',
  tokenExpireKey: 'token_expire',
  endpoints: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    refreshToken: '/auth/refresh-token',
    profile: '/auth/profile',
  }
};

// Table Configuration
export const TABLE_CONFIG = {
  defaultPageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
};

// Notification Configuration
export const NOTIFICATION_CONFIG = {
  defaultDuration: 3000,
  position: {
    vertical: 'top',
    horizontal: 'right',
  },
};

// File Upload Configuration
export const FILE_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedTypes: {
    image: '.jpg,.jpeg,.png',
    document: '.pdf,.doc,.docx',
    excel: '.xls,.xlsx',
  },
};

// Date Format Configuration
export const DATE_FORMAT = {
  display: 'dd MMM yyyy',
  api: 'yyyy-MM-dd',
  datetime: 'dd MMM yyyy HH:mm',
}; 