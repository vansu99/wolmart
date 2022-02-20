import axios from 'axios';
import Nprogress from 'nprogress';
import { BASE_URL } from '@/constants';
import { getToken, removeToken } from '@/utils/storage';
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
    Nprogress.start();
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Nprogress.done();
    return Promise.reject(error.response.data);
  }
);

// interceptor response
httpClient.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response.data;
  },
  (error) => {
    Nprogress.done();
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 500) {
        // logout
        removeToken();
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default httpClient;
