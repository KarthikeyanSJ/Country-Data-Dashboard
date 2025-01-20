const cacheStore = new Map();
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export const cache = {
  has(key: string) {
    return cacheStore.has(key);
  },
  get(key: string) {
    return cacheStore.get(key)?.data;
  },
  set(key: string, data: any) {
    cacheStore.set(key, { data, expiry: Date.now() + CACHE_TTL });
  },
  clean() {
    const now = Date.now();
    for (const [key, { expiry }] of cacheStore.entries()) {
      if (expiry < now) {
        cacheStore.delete(key);
      }
    }
  },
};

setInterval(cache.clean, CACHE_TTL);