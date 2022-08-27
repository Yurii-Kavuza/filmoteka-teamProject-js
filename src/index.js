import TrendingMovies from './js/trending-movies';
import { headMarkup } from './js/markup';
import { preloaderToggle, hidePreloader } from './js/preloader';

const refs = {
  listFilm: document.querySelector('.listFilm'),
};

const trendingMovies = new TrendingMovies();
trendingMovies.getGenres();
trendingMovies.getMovies().then(({ results, total_results, page }) => {
  const markup = createMarkup(results);
  refs.listFilm.insertAdjacentHTML('beforeend', markup);
});

function createMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}
