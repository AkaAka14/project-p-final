import axios from 'axios';
import { API_CONFIG } from '../config/constants';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL + '/user',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

const handleRedirect = (user_role, userId) => {
  switch (user_role) {
    case 'student':
      localStorage.setItem('userId', userId);
      window.location.href = '/student/complete-profile';
      break;
    case 'company':
      window.location.href = '/company/dashboard';
      break;
    case 'admin':
      window.location.href = '/admin/dashboard';
      break;
    default:
      window.location.href = '/admin/dashboard';
  }
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
);

const authService = {
  register: async (userData) => {
    try {
      console.log('Registration data:', userData);
      
      const response = await api.post('/register', {
        email: userData.email,
        password: userData.password,
        user_role: userData.user_role
      });

      console.log('Registration response:', response.data);

      if (response.data.success || response.data.statusCode === 201) {
        const loginResponse = await authService.login({
          email: userData.email,
          password: userData.password,
          user_role: userData.user_role
        });
        return loginResponse;
      }

      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      console.log('Login attempt with:', {
        email: credentials.email,
        user_role: credentials.user_role
      });

      const response = await api.post('/login', {
        email: credentials.email,
        password: credentials.password,
        user_role: credentials.user_role
      });

      console.log('Login response:', response.data);

      if (response.data.success || response.data.statusCode === 200) {
        const { data } = response.data;
        
        // Store auth data
        const authData = {
          authToken: data.authToken,
          refreshToken: data.refreshToken,
          userRole: credentials.user_role,
          user: data.user,
          userId: data.user._id
        };

        Object.entries(authData).forEach(([key, value]) => {
          if (value) localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
        });

        handleRedirect(credentials.user_role, data?.user?._id);
      }

      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/logout');
      localStorage.clear();
      return response.data;
    } catch (error) {
      localStorage.clear();
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await api.get('/me');
      return response.data;
    } catch (error) {
      console.error('Failed to get current user:', error);
      throw error;
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await api.post('/forgot-password', { email });
      return response.data;
    } catch (error) {
      console.error('Failed to process forgot password:', error);
      throw error;
    }
  },

  resetPassword: async (resetToken, newPassword) => {
    try {
      const response = await api.post('/reset-password', {
        resetToken,
        newPassword
      });
      return response.data;
    } catch (error) {
      console.error('Failed to reset password:', error);
      throw error;
    }
  },

  verifyEmail: async (token) => {
    try {
      const response = await api.post('/verify-email', { token });
      return response.data;
    } catch (error) {
      console.error('Failed to verify email:', error);
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await api.post('/refresh-token', { refreshToken });
      
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.data.authToken);
      }
      
      return response.data;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      throw error;
    }
  },

  updateProfile: async (userData) => {
    try {
      const response = await api.put('/me', userData);
      return response.data;
    } catch (error) {
      console.error('Failed to update profile:', error);
      throw error;
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await api.post('/change-password', {
        currentPassword,
        newPassword
      });
      return response.data;
    } catch (error) {
      console.error('Failed to change password:', error);
      throw error;
    }
  }
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default authService;