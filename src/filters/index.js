export function formatPrice(value) {
  return value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

export function calDiscountPrice(price, discount) {
  if (!price || !discount) {
    return 0;
  } else {
    return Math.ceil(price - (price * discount) / 100);
  }
}

export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
