import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

localize({ en });

Vue.config.productionTip = false;
