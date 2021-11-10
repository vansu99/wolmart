import { request } from '@/utils';

const userApis = {
  login: (data) => {
    return request.post('/login', data);
  },
  register: (data) => {
    return request.post('/register', data);
  },
};

export default userApis;
