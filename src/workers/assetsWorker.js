const currentVersion = 'v2.0.1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentVersion).then(cache => {
      return cache.addAll([
        // '/assets/',
        // '/assets/audio/',
        '/assets/audio/badumts.mp3',
        '/assets/audio/swerch.mp3',
        '/assets/audio/sad-trombone.mp3',
        '/assets/audio/WebServerApplicationServer.mp3',
      ]);
    })
      .then(() => {
        console.log('caches success');
      })
      .catch(err => {
        console.warn('error caching', err);
      }),
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch', event.request.url);
  event.respondWith(caches.match(event.request));
});
