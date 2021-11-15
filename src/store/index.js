import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/auth';
import category from '@/store/category'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    category
  },
});

export default store;
