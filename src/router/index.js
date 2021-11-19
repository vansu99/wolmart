import Vue from 'vue';
import Router from 'vue-router';
import PublicLayout from '@/layout/default';
import {checkAuth} from "@/utils";

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
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/User'),
      meta: {
        isAuth: true,
        layout: PublicLayout,
        breadcrumb: true,
        title: 'Thông tin tài khoản'
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
            title: 'Thông tin tài khoản'
          },
        },
        {
          path: 'account/settings',
          name: 'UserPassword',
          component: () => import('@/pages/User/components/UserPassword'),
          meta: {
            isAuth: true,
            layout: PublicLayout,
            breadcrumb: true,
            title: 'Thông tin tài khoản'
          },
        }
      ],
      beforeEnter: checkAuth
    }
  ],
});

//router.beforeEach(checkAuth);

export default router;
