

trendingMovies
  .getMovies(startPage)
  .then(({ results, total_results, total_pages, page }) => {
    const markup = createMarkup(results);
    pagination(total_pages, page);
    refs.listFilm.insertAdjacentHTML('beforeend', markup);
    hidePreloader();
    