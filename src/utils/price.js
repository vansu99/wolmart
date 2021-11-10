export const formatPrice = function (value) {
  return value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};
export const currentPrice = (price, discount) => {
  return (price / 100) * (100 - discount);
};
