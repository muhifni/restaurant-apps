self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
});

self.addEventListener('active', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  // service worker bisa menampilkan, bahkan memanipulasi request yang dilakukan client
  console.log(event.request);

  // sebelum akhirnya mengirim request ke server.
  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
