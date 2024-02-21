// utils/api.js
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend API URL
  withCredentials: true, // Enable cookies
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403 || error.response.status === 401 ||error.response.status === 500 || error.response.status === 400) {
      // Unauthorized, user not authenticated, redirect to /login
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default api;
