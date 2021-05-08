const lsSupported = typeof window !== 'undefined' && window.localStorage;
let memoryStorage = Object.create(null);

export default {
  getItem(key) {
    return lsSupported ? localStorage.getItem(key) : memoryStorage[key];
  },

  setItem(key, value) {
    if (lsSupported) {
      localStorage.setItem(key, value);
    } else {
      memoryStorage[key] = value;
    }
  },

  removeItem(key) {
    if (lsSupported) {
      localStorage.removeItem(key);
    } else {
      delete memoryStorage[key];
    }
  },

  clear() {
    if (lsSupported) {
      localStorage.clear();
    } else {
      memoryStorage = Object.create(null);
    }
  },
};
