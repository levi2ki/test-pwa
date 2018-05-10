const currentVersion = 'v2.0.1';

async function clearCahe() {
  const allCaches = await caches.keys();
  const removalReport = await allCaches.filter(c => c !== currentVersion).map(async c => {
    return await caches.delete(c);
  });
  const results = removalReport.reduce((c, n) => {
    return !c + !n;
  });
  return !results;
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentVersion).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './main.js',
        './main.css',
        './assets',
        './assets/audio',
        './assets/audio/badumts.mp3',
        './assets/audio/swerch.mp3',
        './assets/audio/sad-trombone.mp3',
      ]);
    })
      .then(clearCahe)
      .catch(err => {
        console.warn('error caching', err);
      }),
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch', event.request.url);
  event.respondWith(caches.match(event.request));
});
