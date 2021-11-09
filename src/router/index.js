import Vue from 'vue';
import Router from 'vue-router';
import PublicLayout from '@/layout/default';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home/home'),
      meta: { layout: PublicLayout },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/modules/Login'),
    },
  ],
});
