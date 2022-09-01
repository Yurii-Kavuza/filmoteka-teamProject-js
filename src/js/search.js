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
  const startPage = trendingMovies.getSearchPage();
  trendingMovies
    .searchMovies(input, startPage)
    .then(({ results, total_results }) => {
      if (results.length === 0) {
        refs.errorMes.classList.remove("visually-hidden");
        hidePreloader();   
        return};
     if(!refs.errorMes.classList.contains("visually-hidden")){
        refs.errorMes.classList.add("visually-hidden");
      }
      const markup = createIndexMarkup(results);
      console.log(results);
      refs.listFilm.innerHTML = '';
      paginationSearch.reset(total_results);
      refs.listFilm.insertAdjacentHTML('beforeend', markup);
      hidePreloader();
    });
}

export { onSubmit };
