import { CART_INFO } from '@/constants';
import { setStorage } from '@/utils/storageWeb';
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
    setStorage(CART_INFO, value);
  },
  addToCart(state, value) {
    let exist = state.cart.find((item) => item.id == value.id);
    if (exist) {
      exist.cart_quantity += value.cart_quantity;
      if (exist.cart_quantity > exist.quantity) {
        exist.cart_quantity = exist.quantity;
      }
    } else state.cart.push(value);
    setStorage(CART_INFO, state.cart);
  },
  setQuantity(state, value) {
    let product = state.cart.find((item) => item.id == value.id);
    if (product.cart_quantity > product.quantity)
      product.cart_quantity = product.quantity;
    if (product.cart_quantity < 1) product.cart_quantity = 1;
    setStorage(CART_INFO, state.cart);
  },
  increaseQuantity(state, value) {
    let product = state.cart.find((item) => item.id == value.id);
    if (product.cart_quantity < product.quantity) product.cart_quantity++;
    setStorage(CART_INFO, state.cart);
  },
  decreaseQuantity(state, value) {
    let product = state.cart.find((item) => item.id == value.id);
    if (product.cart_quantity > 1) product.cart_quantity--;
    setStorage(CART_INFO, state.cart);
  },
  deleteFromCart(state, value) {
    state.cart = state.cart.filter((item) => item.id !== value.id);
    setStorage(CART_INFO, state.cart);
  },
};
