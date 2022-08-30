function preloaderShow() {
  document.querySelector('.preloader-overlay').classList.add('is-open');
}
function hidePreloader() {
  document.querySelector('.preloader-overlay').classList.remove('is-open');
}

export { preloaderShow, hidePreloader };
