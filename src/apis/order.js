import { request } from '@/utils';

const orderApies = {
  getOrder: () => {
    return request.get('/order');
  },
};
export default orderApies;
