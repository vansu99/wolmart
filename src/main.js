import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import 'nprogress/nprogress.css';
import './assets/styles/index.scss';
import { ValidationObserver } from 'vee-validate';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
