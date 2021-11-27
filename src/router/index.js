import Vue from 'vue';
import Router from 'vue-router';
import { checkAuth } from '@/utils';
import PublicLayout from '@/layout/default';
import LayoutSecond from '@/layout/LayoutSecond';

Vue.use(Router);

const router = new Router({
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
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login'),
      meta: { layout: LayoutSecond, breadcrumb: false },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/Register'),
      meta: { layout: LayoutSecond, breadcrumb: false },
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
      path: '/:slug/:categoryId/:productId',
      name: 'ProductDetail',
      component: () => import('@/pages/Detail'),
      meta: {
        layout: PublicLayout,
        breadcrumb: true,
      },
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/User'),
      meta: {
        isAuth: true,
        layout: PublicLayout,
        breadcrumb: true,
        title: 'Thông tin tài khoản',
      },
      children: [
        {
          path: 'account/profile',
          name: 'UserProfile',
          component: () => import('@/pages/User/components/UserProfile'),
          meta: {
            isAuth: true,
            layout: PublicLayout,
            breadcrumb: true,
            title: 'Thông tin tài khoản',
          },
        },
      ],
      beforeEnter: checkAuth,
    },
    {
      path: '*',
      name: 'NotFound404',
      component: () => import('@/components/NotFound404/NotFound404.vue'),
      meta: {
        layout: PublicLayout,
        title: '404 Not Found',
      },
    },
  ],
});

//router.beforeEach(checkAuth);

export default router;
