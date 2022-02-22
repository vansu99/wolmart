import { request } from '@/utils';

const userApis = {
  login: (data) => {
    return request.post('/login', data);
  },
  refreshToken: () => {
    return request.post('/')
  },
  register: (data) => {
    return request.post('/register', data);
  },
  getUserInfo: () => {
    return request.get('/user-profile');
  },
  updateUserInfo: (data) => {
    return request.put('/change-info', data);
  },
  changePassword: (data) => {
    return request.put('/change-info', data);
  },
};

export default userApis;
