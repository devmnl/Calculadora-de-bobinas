// service-worker.js
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('calculadora-v1').then(cache => {
        return cache.addAll([
          
          'images',
          'index.html',
          'styles.css',
          'script.js',
          'manifest.json'
          // Adicione outros arquivos que deseja armazenar em cache
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
  