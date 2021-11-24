import { isEmptyObject, request } from '@/utils';
import * as queryString from 'querystring';

const categoryApis = {
  getCategoryList: () => {
    return request.get('/home/categories');
  },
  getProductListBaseOnCategory: (id, query = {}) => {
    const queryParams = queryString.stringify(query);
    if (!isEmptyObject(query)) {
      return request.get(`/categories/${id}?${queryParams}`);
    } else {
      return request.get(`/categories/${id}`);
    }
  },
};

export default categoryApis;
