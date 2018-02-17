self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/test-pwa/', '/test-pwa/index.html'])
    }).catch(err => {
      console.warn('error caching', err)
    })
  )
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch', event.request.url);
  event.respondWith(caches.match(event.request));
})