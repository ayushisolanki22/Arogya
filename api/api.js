import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Replace with your Laravel backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor (For Authorization if needed)
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token'); // Retrieve token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
