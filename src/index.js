import TrendingMovies from './js/trending-movies';
import { headMarkup } from './js/markup';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const trendingMovies = new TrendingMovies();
trendingMovies.getGenres();
trendingMovies.getMovies().then(({ results, total_results, page }) => {
  console.log(...results);
  const markup = createMarkup(results);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  const mup = headMarkup(results[0]);
  console.log(mup);
});

function createMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}
