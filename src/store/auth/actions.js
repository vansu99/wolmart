import { userApis } from '@/apis';

export default {
  login({ commit }, value) {
    commit('LOGIN', value);
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
  async getMe({ commit }) {
    try {
      const response = await userApis.getUserInfo();
      if (response.status === 200) {
        commit('setUser', response.data);
      }
    } catch (e) {
      throw Error('Verification failed, please Login again.');
    }
  },
};
