import { request } from '@/utils';

const orderApies = {
  getOrder: () => {
    return request.get('/order');
  },
  createOrder: (order) => {
    return request.post('/order', order);
  },
};
export default orderApies;
