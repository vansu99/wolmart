import { request } from '@/utils';

const productApis = {
  getProductList: () => {
    return request.get('/products');
  },
  getProductDetail: (id) => {
    return request.get(`/products/${id}`);
  },
  searchProduct: text => {
    return request.get(`/home?q=${text}`)
  }
};

export default productApis;
