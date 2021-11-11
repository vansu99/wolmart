export function formatPrice(value) {
  return value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

export function calDiscountPrice(price, discount) {
  return (price / 100) * (100 - discount);
}

export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
