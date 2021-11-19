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
      path: '/categories/:category',
      name: 'Category',
      component: () => import('@/modules/Login'),
    },
    {
      path: '/products/:product',
      name: 'Product',
      component: () => import('@/pages/ProductDetail/ProductDetail'),
    },
  ],
});
