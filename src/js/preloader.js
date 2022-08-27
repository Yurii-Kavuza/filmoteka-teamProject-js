function preloaderToggle() {
  document.querySelector('.loader-overlay').classList.toggle('is-open');
}
function hidePreloader() {
  document.querySelector('.loader-overlay').classList.remove('is-open');
}

export {preloaderToggle, hidePreloader};