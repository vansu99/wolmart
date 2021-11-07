import { request } from '@/utils';

const productApis = {
  getProductList: () => {
    return request.get('/products');
  },
  getProductDetail: (id) => {
    return request.get(`/products/${id}`);
  },
};

export default productApis;
