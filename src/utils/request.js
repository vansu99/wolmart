import axios from 'axios';
import Nprogress from 'nprogress';
import { BASE_URL } from '@/constants';
import { getToken } from '@/utils/storage';
import * as queryString from 'query-string';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

let loop = 0;
let isRefreshing = false;
let subscribers = [];

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

// function onRrefreshed(token) {
//   subscribers.map((cb) => cb(token));
// }

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
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (status === 401 && loop < 1) {
      loop++;
      if (!isRefreshing) {
        isRefreshing = true;
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      });
    }

    return Promise.reject(error.response.data);
  }
);

export default httpClient;
