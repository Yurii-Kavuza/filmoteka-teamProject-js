import TrendingMovies from './js/trending-movies';
import { preloaderShow, hidePreloader } from './js/preloader';
import { headMarkup } from './js/gallery-item';
import { pagination } from './js/pagination';
import './js/local-storage';
import './js/modal-footer';
import './js/open-close-modal';
import './js/search';
// import './js/scrolling'
//import './js/modal-btns'

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
    pagination(total_pages, page);
    refs.listFilm.insertAdjacentHTML('beforeend', markup);
    hidePreloader();
  });

function createMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}
/* примитивный вызов для наглядности рендеринка, позже изменить */
/* pagination(totalPage, currentPage); */
