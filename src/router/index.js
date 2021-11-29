import Vue from 'vue';
import Router from 'vue-router';
import { checkAuth } from '@/utils';
//import { getToken } from '@/utils/storage';
import PublicLayout from '@/layout/default';
import LayoutSecond from '@/layout/LayoutSecond';
import LayoutPrivate from "@/layout/LayoutPrivate";

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
        {
          path: 'account/order',
          name: 'UserOrder',
          component: () => import('@/pages/User/components/UserOrder'),
          meta: {
            isAuth: true,
            layout: PublicLayout,
            breadcrumb: false,
            title: 'Đơn mua',
          },
        },
        {
          path: 'account/order/:orderId',
          name: 'UserOrderDetail',
          component: () => import('@/pages/User/components/OrderDetail'),
          meta: {
            isAuth: true,
            layout: PublicLayout,
            breadcrumb: false,
            title: 'Đơn chi tiết',
          },
        },
      ],
      beforeEnter: checkAuth,
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
      path: '/admin',
      name: 'Admin',
      component: () => import('@/modules/admin'),
      meta: {
        layout: LayoutPrivate,
        breadcrumb: false
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound/NotFound404.vue'),
      meta: {
        layout: LayoutSecond,
        title: 'Not Found',
      },
    },
  ],
});

// router.beforeEach((from, to, next) => {
//   const hasToken = getToken();
//   if (hasToken) {
//     if (from.name === 'Login') {
//       next({ name: 'Home' });
//     } else {
//
//     }
//   } else {
//     next();
//   }
// });

export default router;
