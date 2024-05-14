// src/utils/axiosConfig.js
import axios from 'axios';

const apiHackathon = axios.create({
  baseURL: 'https://hackathonback1-production.up.railway.app',
  timeout: 5000,
});

apiHackathon.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

export default apiHackathon;
