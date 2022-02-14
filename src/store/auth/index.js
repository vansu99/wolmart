import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { TOKEN } from '@/constants';
import { getToken } from "@/utils/storage";

const state = {
  cart: [],
  currentUser: null,
  token: getToken() || '',
  isAuthenticated: !!localStorage.getItem(TOKEN),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
