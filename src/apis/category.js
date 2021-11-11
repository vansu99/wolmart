import { request } from '@/utils';

const categoryApis = {
  getCategoryList: () => {
    return request.get('/home/categories');
  },
  getProductListBaseOnCategory: (id) => {
    return request.get(`/categories/${id}`);
  },
};

export default categoryApis;
