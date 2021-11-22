import axios from 'axios';
import { BASE_URL, TOKEN } from '@/constants';
import * as queryString from 'query-string';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// interceptor request
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

// interceptor response
httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      //const originalRequest = error.config;
      if (error.response.status === 401 || error.response.status === 500) {
        // logout
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default httpClient;
