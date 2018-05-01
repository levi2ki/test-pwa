export const registerWorker = (workerPath, options) => {
  navigator.serviceWorker.register(workerPath, options)
    .then(reg => {
      console.log('register success', reg.scope);
    }).catch(err => {
      console.warn('register worker failed', err)
    });
}
