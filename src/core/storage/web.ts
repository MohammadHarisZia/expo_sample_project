const webStorage = {
  setStringAsync(key: string, value: string) {
    window.localStorage.setItem(key, value);
    return Promise.resolve();
  },

  getStringAsync(key: string) {
    return Promise.resolve(window.localStorage.getItem(key));
  },

  deleteStringAsync(key: string) {
    window.localStorage.removeItem(key);
    return Promise.resolve();
  },
};

export default webStorage;
