self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/finaciamientos/',
        '/finaciamientos/index.html',
        '/finaciamientos/manifest.json',
        'https://i.postimg.cc/9QS0f1tN/T-tulo-primario-1.png
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
