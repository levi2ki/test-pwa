if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/test-pwa/images/img-worker.js', {scope: '/test-pwa/images/'})
    .then(reg => {
      console.log('register success', reg);
    }).catch(err => {
      console.warn('register worker failed', err)
    });
    navigator.serviceWorker.register('/test-pwa/index-worker.js', {scope: '/test-pwa/'})
    .then(reg => {
      console.log('register success', reg.scope);
    }).catch(err => {
      console.warn('register worker failed', err)
    });
}



//button
const au = new Audio('/test-pwa/sounds/badumts.mp3');
document.getElementById('btn-play').addEventListener('click', function(e) {
  if(au.paused) {
    au.play();  
  } else {
    au.pause();
    au.load();
    au.play();
  }
})