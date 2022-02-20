export default {
  login({ commit }, value) {
    commit('LOGIN', value);
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
  setUserInfo({ commit }, value) {
    commit('setUser', value);
  },
};
