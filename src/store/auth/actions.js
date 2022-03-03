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
  setCart({ commit }, value) {
    commit('setCartData', value);
  },
  addProductToCart({ commit }, value) {
    commit('addToCart', value);
  },
  setProductQuantity({ commit }, value) {
    commit('setQuantity', value);
  },
  increaseProductQuantity({ commit }, value) {
    commit('increaseQuantity', value);
  },
  decreaseProductQuantity({ commit }, value) {
    commit('decreaseQuantity', value);
  },
  deleteProductFromCart({ commit }, value) {
    commit('deleteFromCart', value);
  },
};
