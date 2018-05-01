self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './index.js',
        './stylesheets/style.css',
        './stylesheets/mcw.min.css',
        './assets',
        './assets/audio',
        './assets/audio/badumts.mp3',
        './assets/audio/swerch.mp3',
        './assets/audio/sad-trombone.mp3'
      ]);
    }).catch(err => {
      console.warn('error caching', err)
    })
  )
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch', event.request.url);
  event.respondWith(caches.match(event.request));
})