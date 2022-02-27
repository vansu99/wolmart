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
  setCartData(state, value) {
    state.cart = value;
  },
  addToCart(state, value) {
    let exist = state.cart.find((item) => item.id == value.id);
    if (exist) exist.cart_quantity += value.cart_quantity;
    else state.cart.push(value);
  },
  increaseQuantity(state, value) {
    let product = state.cart.find((item) => item.id == value.id);
    if (product.cart_quantity < product.quantity) product.cart_quantity++;
  },
  decreaseQuantity(state, value) {
    let product = state.cart.find((item) => item.id == value.id);
    if (product.cart_quantity > 1) product.cart_quantity--;
  },
  deleteFromCart(state, value) {
    state.cart = state.cart.filter((item) => item.id !== value.id);
  },
};
