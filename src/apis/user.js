import { request } from '@/utils';

const userApis = {
  login: (data) => {
    return request.post('/login', data);
  },
};

export default userApis;
