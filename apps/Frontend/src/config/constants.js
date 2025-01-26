import process from "process";
window.process = process;

// // API Configuration
export const API_BASE_URL =  process.env.VITE_API_URL || 'http://localhost:3000/api/v1';
export const API_TIMEOUT = 30000; // 30 seconds

// App Configuration
export const APP_CONFIG = {
  name: 'PMS Admin',
  version: '1.0.0',
  apiUrl: API_BASE_URL,
  storagePrefix: 'pms_',
};
export const API_CONFIG = {
  // BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  BASE_URL: process.env.VITE_API_URL || 'https://project-p-final-backend.vercel.app/api/v1',

  TIMEOUT: 30000,
  ENDPOINTS: {
    AUTH: {
      BASE: '/user',
      LOGIN: '/login',
      REGISTER: '/register',
      LOGOUT: '/logout',
      PROFILE: '/me',
      FORGOT_PASSWORD: '/forgot-password',
      RESET_PASSWORD: '/reset-password',
      VERIFY_EMAIL: '/verify-email',
      REFRESH_TOKEN: '/refresh-token'
    },
    STUDENT: {
      BASE: '/student',
      PROFILE: '/student/profile',
      APPLICATIONS: '/student/applications',
      RESUME: '/student/resume',
      COMPLETE_PROFILE: '/student/complete-profile',
    },
    COMPANY: {
      BASE: '/company',
      PROFILE: '/profile',
      JOBS: '/jobs'
    },
    ADMIN: {
      BASE: '/admin',
      DASHBOARD: '/dashboard',
      USERS: '/users'
    }
  }
};

export const AUTH_CONFIG = {
  STORAGE_KEYS: {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    TOKEN_EXPIRE: 'token_expire',
    USER_ROLE: 'user_role',
    USER_ID: 'user_id'
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