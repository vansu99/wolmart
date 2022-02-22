export function setStorage(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeStorage(key) {
  return localStorage.removeItem(key);
}
