self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/test-pwa/images/', '/test-pwa/images/1.jpg'])
    }).catch(err => {
      console.warn('error caching', err)
    })
  )
});