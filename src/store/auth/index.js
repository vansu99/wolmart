import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { getToken } from '@/utils/storage';
import { USER_INFO } from '@/constants';
import { getStorage } from '@/utils/storageWeb';

const state = {
  cart: [],
  currentUser: getStorage(USER_INFO) || null,
  token: getToken() || '',
  isAuthenticated: !!getToken(),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
