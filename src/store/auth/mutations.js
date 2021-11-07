export default {
  LOGIN(state, value) {
    state.isAuthenticated = true;
    state.currentUser = value;
  },
};
