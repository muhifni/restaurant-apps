import CONFIG from '../globals/config';

const CacheHelper = {
  // caching app shell
  async cachingAppShell(request) {
    const cache = await this._openCache();
    cache.addAll(request);
  },

  // menghapus cache lama yang sudah tidak diperlukan
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
        .filter((name) => name !== CONFIG.CACHE_NAME)
        .map((filteredName) => caches.delete(filteredName));
  },

  /* memasukkan atau menambahkan fetch request ke caches
     * menggunakan teknik stale while revalidate */
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  // membuka/membuat caches
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  // melakukan fetch request
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  // fungsi utk memasukkan request ke dalam cache
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;
