<template>
  <div id="header">
    <div class="wrapper">
      <div class="container">
        <div class="row d-flex">
          <div class="header-left">
            <p class="welcome-msg">Welcome to Wolmart Store message or remove it!</p>
          </div>
          <div class="header-right d-flex">
            <div class="item drop-down">
              <p class="selected-lang">USD</p>
              <div class="select-box">
                <p class="type-money">USD</p>
                <p class="type-money">EUR</p>
              </div>
            </div>
            <div class="item drop-down">
              <div class="select-lang">
                <img src="../../assets/images/Header/eng.png" alt="" />
                <span class="language">USD</span>
              </div>
              <div class="select-box">
                <div class="type-langs">
                  <img src="../../assets/images/Header/eng.png" alt="" />
                  <span class="language">USD</span>
                </div>
                <div class="type-langs">
                  <img src="../../assets/images/Header/fra.png" alt="" />
                  <span class="language">FRA</span>
                </div>
              </div>
            </div>
            <div class="item menu">
              <a class="text-decoration" href="#">Blogs</a>
              <a class="text-decoration" href="#">Contact Us</a>
              <a class="text-decoration" href="#">My Account</a>
              <div class="account-login" v-if="isAuthenticated">
                <div class="text-decoration account-login-wrapper" @click="openModal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M 24 4 C 18.494917 4 14 8.494921 14 14 C 14 19.505079 18.494917 24 24 24 C 29.505083 24 34 19.505079 34 14 C 34 8.494921 29.505083 4 24 4 z M 24 7 C 27.883764 7 31 10.116238 31 14 C 31 17.883762 27.883764 21 24 21 C 20.116236 21 17 17.883762 17 14 C 17 10.116238 20.116236 7 24 7 z M 12.5 28 C 10.032499 28 8 30.032499 8 32.5 L 8 33.699219 C 8 36.640082 9.8647133 39.277974 12.708984 41.091797 C 15.553256 42.90562 19.444841 44 24 44 C 28.555159 44 32.446744 42.90562 35.291016 41.091797 C 38.135287 39.277974 40 36.640082 40 33.699219 L 40 32.5 C 40 30.032499 37.967501 28 35.5 28 L 12.5 28 z M 12.5 31 L 35.5 31 C 36.346499 31 37 31.653501 37 32.5 L 37 33.699219 C 37 35.364355 35.927463 37.127823 33.677734 38.5625 C 31.428006 39.997177 28.068841 41 24 41 C 19.931159 41 16.571994 39.997177 14.322266 38.5625 C 12.072537 37.127823 11 35.364355 11 33.699219 L 11 32.5 C 11 31.653501 11.653501 31 12.5 31 z"
                    ></path>
                  </svg>
                  {{ currentUser.name }}
                </div>
                <div class="account-login-list">
                  <span class="account-login-item">Thông tài tài khoản</span>
                  <span class="account-login-item">Đơn mua</span>
                  <span class="account-login-item" @click="handleLogout">Đăng xuất</span>
                </div>
              </div>
              <div v-else>
                <a class="text-decoration" @click="openModal('login')">Sign In</a>
                <span>/</span>
                <a class="text-decoration" @click="openModal('register')">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container header-middle">
      <div class="row d-flex">
        <div class="header-left d-flex">
          <div class="logo">
            <router-link to="/"
              ><img src="../../assets/images/Header/logo.png" alt="Wolmart"
            /></router-link>
          </div>
          <div class="form d-flex">
            <div class="search-input">
              <input type="text" name="" placeholder="Search in..." id="" />
            </div>
            <div class="btn-search">
              <button class="search">
                <img
                  class="icon-search"
                  src="../../assets/images/Header/Icon/search-solid.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div class="header-right d-flex">
          <div class="contact items d-flex">
            <div><img src="../../assets/images/Header/Icon/phone-volume-solid.svg" alt="" /></div>
            <div>
              <a class="text-decoration live-chat" href="">Live Chat </a>
              <span> or : </span>
              <div>
                <a href="" class="telephone text-decoration">0(800)123-456</a>
              </div>
            </div>
          </div>
          <div class="wishlist items">
            <a class="text-decoration" href="">
              <img src="../../assets/images/Header/Icon/heart-regular.svg" alt="" />
              <span class="d-block">Wishlist</span></a
            >
          </div>
          <div class="compare items">
            <a class="text-decoration" href="">
              <img src="../../assets/images/Header/Icon/balance-scale-solid.svg" alt="" /><span
                class="d-block"
                >Compare</span
              ></a
            >
          </div>
          <div class="cart items" values="2">
            <a class="text-decoration" href="">
              <img src="../../assets/images/Header/Icon/shopping-bag-solid.svg" alt="" /><span
                class="d-block"
                >Cart</span
              ></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-wrapper">
          <ul class="header-bottom-list">
            <li class="header-bottom-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="header-bottom-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="header-bottom-item">
              <router-link to="/shop">Shop</router-link>
            </li>
            <li class="header-bottom-item">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
          <div class="header-bottom-right">
            <router-link to="/order" class="right-text">
              <i class="fas fa-map-marker-alt right-icon"></i>
              Track order
            </router-link>
            <router-link to="/order" class="right-text">
              <i class="fas fa-tag right-icon"></i>daily deals
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <modal-login>
      <Login />
    </modal-login>
    <modal-register>
      <register />
    </modal-register>
  </div>
</template>

<script>
import ModalLogin from './modals/modal-login';
import Login from '@/modules/Login';
import Register from '@/modules/Register';
import ModalRegister from './modals/modal-register';
import { mapGetters } from 'vuex';
export default {
  name: 'Header',
  components: {
    Register,
    Login,
    ModalLogin,
    ModalRegister,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },
  methods: {
    openModal(type) {
      this.$modal.show(type);
    },
    handleLogout() {
      this.$store.dispatch('auth/logout');
    },
  },
  watch: {
    isAuthenticated() {
      this.isAuthenticated && this.$modal.hide('login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Header';
</style>
