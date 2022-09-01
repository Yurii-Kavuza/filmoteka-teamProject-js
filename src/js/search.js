import { refs } from './refs';
import { paginationSearch, trendingMovies } from './pagination';
import { showPreloader, hidePreloader } from './preloader';
import { createIndexMarkup } from './gallery-item';

function onSubmit(evt) {
  evt.preventDefault();
  const input = evt.target.elements.searchQuery.value;
  if (input.length === 0) {
    console.log('wrong input');
    return;
  }
  showPreloader();
  const startPage = trendingMovies.getPage();
  trendingMovies
    .searchMovies(input, startPage)
    .then(({ results, total_results }) => {
      const markup = createIndexMarkup(results);
      console.log(results);
      refs.listFilm.innerHTML = '';
      paginationSearch.reset(total_results);
      refs.listFilm.insertAdjacentHTML('beforeend', markup);
      hidePreloader();
    });
}

export { onSubmit };
