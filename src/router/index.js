import Vue from 'vue';
import Router from 'vue-router';
import PublicLayout from '@/layout/default';

Vue.use(Router);
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home/home'),
      meta: { layout: PublicLayout, breadcrumb: false },
      children: [],
    },
    {
      path: '/:slug/:categoryId',
      name: 'Products',
      component: () => import('@/pages/Products'),
      meta: {
        layout: PublicLayout,
        breadcrumb: true,
      },
    },
    {
      path: '/:slug/:productId',
      name: 'ProductDetail',
      component: () => import('@/pages/Detail'),
      meta: {
        layout: PublicLayout,
        breadcrumb: true,
      },
    },
  ],
});
