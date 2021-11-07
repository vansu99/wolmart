import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/home';
import PublicLayout from '@/layout/default';
// pages
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: PublicLayout },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/modules/Login'),
    },
  ],
});
