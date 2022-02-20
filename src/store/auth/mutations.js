export default {
  LOGIN(state, value) {
    state.isAuthenticated = true;
    state.currentUser = value;
  },
  LOGOUT(state) {
    state.isAuthenticated = false;
    state.currentUser = null;
  },
  setToken(state, value) {
    state.token = value;
  },
  setUser(state, value) {
    state.isAuthenticated = true;
    state.currentUser = value;
  },
};
