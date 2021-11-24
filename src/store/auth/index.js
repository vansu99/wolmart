import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { TOKEN } from '@/constants';

const state = {
  isAuthenticated: !!localStorage.getItem(TOKEN),
  currentUser: null,
  token: null,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
