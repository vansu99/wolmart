import { TOKEN } from '@/constants';

export default function checkAuthentication(to, from, next) {
  const token = localStorage.getItem(TOKEN) || '';
  const isAuthRoute = to.matched.some((item) => item.meta.isAuth);
  if (isAuthRoute && token) {
    next();
  } else {
    next({ name: 'Home', params: {} });
  }
}
