import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { TOKEN } from '@/constants';

const state = {
  token: null,
  currentUser: null,
  isAuthenticated: !!localStorage.getItem(TOKEN),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
