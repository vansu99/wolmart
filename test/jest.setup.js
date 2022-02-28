import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';

Vue.use(Vuetify);
Vue.use(Vuex);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

localize({ en });

Vue.config.productionTip = false;
