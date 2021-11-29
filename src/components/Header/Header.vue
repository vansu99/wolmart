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
                <div class="text-decoration account-login-wrapper">
                  <icon name="account" />
                  {{ currentUser.name }}
                </div>
                <div class="account-login-list">
                  <router-link :to="{ name: 'UserProfile' }" class="account-login-item"
                    >Thông tin tài khoản
                  </router-link>
                  <router-link :to="{ name: 'UserOrder' }" class="account-login-item"
                    >Đơn mua</router-link
                  >
                  <span class="account-login-item" @click="handleLogout">Đăng xuất</span>
                </div>
              </div>
              <div v-else>
                <router-link class="text-decoration" to="/login">Sign In</router-link>
                <span>/</span>
                <router-link class="text-decoration" to="/register">Register</router-link>
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
          <!--  Search-->
          <search @onSearch="handleSearchAll" :results="resultSearch" />
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { productApis } from '@/apis';
import Search from '@/components/Search';
import Icon from "@/components/SvgIcons";
import { removeToken } from '@/utils/storage';

export default {
  name: 'Header',
  components: {
    Icon,
    Search,
  },
  data() {
    return {
      resultSearch: [],
    };
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },
  methods: {
    // openModal(type) {
    //   this.$modal.show(type);
    // },
    handleLogout() {
      this.$store.dispatch('auth/logout');
      removeToken();
      this.$router.push({ name: 'Home' });
    },
    async handleSearchAll(value) {
      try {
        const response = await productApis.searchProduct(value);
        if (response.status === 200) {
          this.resultSearch = [...response.data];
        }
      } catch (e) {
        console.log('error ', e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Header';
</style>
