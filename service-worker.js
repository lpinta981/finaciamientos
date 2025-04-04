self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/finaciamientos/',
        '/finaciamientos/index.html',
        '/finaciamientos/manifest.json',
        'https://i.ibb.co/JR9P9YJf/T-tulo-primario.png'
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