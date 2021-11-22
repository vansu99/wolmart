export default function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
}
