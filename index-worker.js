self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/test-pwa/index.html'])
    }).catch(err => {
      console.warn('error caching', err)
    })
  )
});