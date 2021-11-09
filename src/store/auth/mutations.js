export default {
  LOGIN(state, value) {
    state.isAuthenticated = true;
    state.currentUser = value;
  },
  LOGOUT(state) {
    state.isAuthenticated = false;
    state.currentUser = null;
  }
};
