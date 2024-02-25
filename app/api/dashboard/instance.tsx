import axios from 'axios';
import backendUrl from '@/app/config/api';
const axiosInstance = axios.create({
  baseURL: backendUrl, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here if needed
  },
});

// Add interceptor to set authorization header for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('reartify_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
