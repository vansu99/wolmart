export default function isEmptyObject(obj) {
  if (obj === null || obj === undefined) return true;

  if (Object.keys(obj)?.length === 0) {
    return true;
  } else {
    return false;
  }
}
