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

pagination.on('afterMove', trendMovi);
paginationSearch.on('afterMove', searchMovie);
