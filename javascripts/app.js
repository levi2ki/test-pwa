if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/images/img-worker.js', {scope: '/images/'})
    .then(reg => {
      console.log('register success', reg);
    }).catch(err => {
      console.warn('register worker failed', err)
    });
}