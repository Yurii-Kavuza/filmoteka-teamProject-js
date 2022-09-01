import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createIndexMarkup } from './gallery-item';
import TrendingMovies from './trending-movies';
import { hidePreloader, showPreloader } from './preloader';

//const page = pagination.getCurrentPage();

const refs = {
  listFilm: document.querySelector('.listFilm'),
  form: document.querySelector('#search-form'),
};

const params = {
  totalItems: 0,
  itemsPerPage: 30,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination('#tui-pagination-container', params);

const paginationSearch = new Pagination('#tui-pagination-container', params);

const trendingMovies = new TrendingMovies();

const trendMovi = event => {
  trendingMovies.getMovies(event.page).then(({ results }) => {
    reworkPromise(results);
  });
};

const searchMovie = event => {
  const search = trendingMovies.getSearch();
  trendingMovies.searchMovies(search, event.page).then(({ results }) => {
    reworkPromise(results);
  });
};

function reworkPromise(results) {
  const markup = createIndexMarkup(results);
  refs.listFilm.innerHTML = '';
  refs.listFilm.insertAdjacentHTML('beforeend', markup);
  hidePreloader();
  window.scrollTo(0, 200);
}

function startTrendMovies() {
  const startPage = 1;
  trendingMovies.getGenres();

  trendingMovies
    .getMovies(startPage)
    .then(({ results, total_results, total_pages, page }) => {
      const markup = createIndexMarkup(results);
      pagination.reset(total_results);
      refs.listFilm.insertAdjacentHTML('beforeend', markup);
      hidePreloader();
    });
}

export {
  pagination,
  paginationSearch,
  trendMovi,
  searchMovie,
  trendingMovies,
  startTrendMovies,
};
