import { IMG_URL } from './trending-movies';

const getGenreFullList = genres => genres.map(genre => genre.name);

const getGenresShortList = genres => {
  let newGenres = [...genres];
  if (genres.length > 3) {
    newGenres = genres.slice(0, 2);
    newGenres.push('Other');
  }
  return newGenres;
};

const headMarkup = item => {
  const genresFullList = getGenreFullList(item.genres);
  const genresShortList = getGenresShortList(genresFullList);
  const markup = `<li class="gallery__item" id="${item.id}">
  <a class="slot__thumb">
            <img class="img__gallery" src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresAllList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2 class="title__gallery">${item.title.toUpperCase()}</h2>
          <p class="other__gallery">${genresShortList}<span> | </span>${
    item.releaseDate
  }</p>
		  </a>
        </li>`;
  return markup;
};

const watchedMarkup = item => {
  const genresFullList = getGenreFullList(item.genres);
  const genresShortList = getGenresShortList(genresFullList);
  const markup = `<li class="gallery__item" id="${item.id}">
  <a class="slot__thumb">
            <img class="img__gallery" src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresAllList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2 class="title__gallery">${item.title}</h2>
          <p class="other__gallery">${item.genres
            .map(genre => genre.name)
            .join(', ')}}<span> | </span>${item.releaseDate}</p>
          <button class="btn-vote">${item.vote_count}</button>
		  </a>
        </li>`;
  return markup;
};

export { headMarkup, watchedMarkup };
