import { registerWorker } from './lib/registerWorker';

require('../assets/css/mcw.min.css');
require('../assets/css/style.css');

const main = () => {

  if ('serviceWorker' in navigator) {
    registerWorker('./indexWorker.js'/*, {scope: '/'}*/);
    registerWorker('./assets/assetsWorker.js'/*, {scope: '/assets/'}*/);
   }
};

function init() {
  const allBtns = Array.from(document.querySelectorAll('.btn-play'));
  const playerBtns = allBtns.filter(x => x.dataset.class = 'play' && x.dataset.src);

  playerBtns.forEach(x => {
    const au = new Audio();
    
    const audio = fetch(x.dataset.src).then(response => {
      return response.blob();
    }).then(blob => {
      au.src = URL.createObjectURL(blob);
      x.addEventListener('click', function() {
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

window.onload = function() {
  main();
  init();
  setTimeout(function(){
    const pb = document.getElementById('progressbar');
    pb.classList.remove('mdc-linear-progress--indeterminate');
    pb.classList.add('hidden');
  }, 1500);
};
