import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import 'nprogress/nprogress.css';
import './assets/styles/index.scss';
import VModal from 'vue-js-modal';
import * as filters from '@/filters';
import VueSkeletonLoader from 'skeleton-loader-vue';
import { ValidationObserver } from 'vee-validate';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.component('vue-skeleton-loader', VueSkeletonLoader);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// setup global filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
