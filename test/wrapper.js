import Vuetify from 'vuetify';
import Vuex from 'vuex'
import VueRouter from "vue-router";
import { createLocalVue } from '@vue/test-utils';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.component('ValidationObserver', ValidationObserver)
localVue.component('ValidationProvider', ValidationProvider)

const wrapperOps = {
  localVue,
};

export default wrapperOps;
