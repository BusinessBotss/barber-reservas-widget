const CACHE_NAME = 'barber-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/assets/style.css',
  '/assets/main.js',
  '/assets/translations.json'
];

// Instalación: cachear assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpiar caches antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      })
    ))
  );
  self.clients.claim();
});

// Fetch: devolver cache, luego red, fallback offline
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // actualizar cache dinámico
        const resClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        return response;
      })
      .catch(() => caches.match(event.request)
        .then(cacheResp => cacheResp || caches.match('/offline.html'))
      )
  );
});
