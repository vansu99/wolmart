export default function checkAuthentication(to, from, next) {
  const token = localStorage.getItem('accessToken') || '';
  const isAuthRoute = to.matched.some((item) => item.meta.isAuth);
  if (isAuthRoute && token) {
    next();
  } else {
    next({ name: 'Home', params: {} });
  }
}
