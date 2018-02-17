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

function init() {
  const allBtns = Array.from(document.querySelectorAll('.btn'));
  const playerBtns = allBtns.filter(x => x.dataset.class = 'play' && x.dataset.src);

  playerBtns.forEach(x => {
    const au = new Audio();
    
    const audio = fetch(x.dataset.src).then(response => {
      return response.blob();
    }).then(blob => {
      au.src = URL.createObjectURL(blob);
      x.addEventListener('click', function(e) {
        if(au.paused) {
          au.play();  
        } else {
          au.pause();
          au.load();
          au.play();
        }
      })
    })    
  })
}

init();