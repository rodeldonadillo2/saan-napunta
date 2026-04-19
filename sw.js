/* ─────────────────────────────────────────────
   Saan Napunta? · Service Worker
   Imus City Civic Transparency App
   ───────────────────────────────────────────── */

const CACHE_NAME = 'saan-napunta-v1';
const CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap',
];

/* ── INSTALL: cache core assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_URLS).catch(err => {
        console.warn('Cache addAll partial failure (expected for fonts):', err);
      });
    })
  );
  self.skipWaiting();
});

/* ── ACTIVATE: clean old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── FETCH: serve from cache, fall back to network ── */
self.addEventListener('fetch', event => {
  /* Skip non-GET and chrome-extension requests */
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          /* Only cache valid responses from same origin or CDN fonts */
          if (
            response &&
            response.status === 200 &&
            (response.type === 'basic' || event.request.url.includes('fonts.g'))
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          /* Offline fallback for navigation requests */
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
