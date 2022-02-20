import { request } from '@/utils';

const productApis = {
  getProductList: () => {
    return request.get('/products');
  },
  getProductDetail: (id) => {
    return request.get(`/products/${id}`);
  },
  searchProduct: (text) => {
    return request.get(`/home?q=${text}`);
  },
  createProduct: (val) => {
    return request.post('/products', val, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateProduct: (val, id) => {
    return request.put(`/products/${id}`, val, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  removeProduct: id => {
    return request.delete(`/products/${id}`)
  }
};

export default productApis;
