import TrendingMovies from './js/trending-movies';
import { preloaderShow, hidePreloader } from './js/preloader';
import { headMarkup } from './js/gallery-item';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
/* import { pagination } from './js/pagination'; */
import './js/local-storage';
import './js/modal-footer';
import './js/open-close-modal';
//import './js/modal-btns'
import './js/scrolling'

const paganation = new Pagination('#tui-pagination-container', {
  totalItems: 0,
  itemsPerPage: 30,
  visiblePages: 5,
  page: 1,
});

const page = paganation.getCurrentPage();

const refs = {
  listFilm: document.querySelector('.listFilm'),
};

preloaderShow();
const trendingMovies = new TrendingMovies();
const startPage = 1;
trendingMovies.getGenres();
trendingMovies
  .getMovies(startPage)
  .then(({ results, total_results, total_pages, page }) => {
    const markup = createMarkup(results);

    paganation.reset(total_results);
    refs.listFilm.insertAdjacentHTML('beforeend', markup);
    hidePreloader();
  });

function createMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}

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
