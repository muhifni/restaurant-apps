import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // service worker bisa menampilkan, bahkan memanipulasi request yang dilakukan client
  // console.log(event.request);

  // sebelum akhirnya mengirim request ke server.
  // event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
