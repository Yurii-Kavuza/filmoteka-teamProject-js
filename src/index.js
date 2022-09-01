import { showPreloader, hidePreloader } from './js/preloader';
import { createIndexMarkup } from './js/gallery-item';
import {
  paginationSearch,
  pagination,
  trendMovi,
  searchMovie,
  trendingMovies,
  startTrendMovies,
} from './js/pagination';
import './js/local-storage';
import './js/modal-footer';
import './js/open-close-modal';
import { refs } from './js/refs';
import { onSubmit } from './js/search';

//import './js/modal-btns'
import './js/scrolling'

showPreloader();

startTrendMovies();

refs.form.addEventListener('submit', onSubmit);

const trendMovi = event => {
  trendingMovies
    .getMovies(event.page)
    .then(({ results, total_results, total_pages, page }) => {
      const markup = createMarkup(results);
      refs.listFilm.innerHTML = '';
      refs.listFilm.insertAdjacentHTML('beforeend', markup);
      hidePreloader();
     window.scrollTo(0, 200);
    });
};
paganation.on('afterMove', trendMovi);
