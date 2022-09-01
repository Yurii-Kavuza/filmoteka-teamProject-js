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

function createIndexMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}

const headMarkup = item => {
  const genresFullList = getGenreFullList(item.genres);
  const genresShortList = getGenresShortList(genresFullList);
  const imageOriginal = `${IMG_URL}/original${item.poster_path}`;
  const markup = `<li class="gallery__item" id="${item.id}">
  <a class="slot__thumb">
            <img class="img__gallery" src="${imageOriginal}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${genresFullList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdrop_path}"/>
          <h2 class="title__gallery">${item.title.toUpperCase()}</h2>
          <p class="other__gallery">${genresShortList}<span> | </span>${item.release_date.slice(
    0,
    4
  )}</p>
		  </a>
        </li>`;
  return markup;
};

const watchedMarkup = item => {
  const genresFullList = getGenreFullList(item.genres);
  const genresShortList = getGenresShortList(genresFullList);
  const imageOriginal = `${IMG_URL}/original/${item.poster_path}`;
  const markup = `<li class="gallery__item" id="${item.id}">
  <a class="slot__thumb">
            <img class="img__gallery" src="${imageOriginal}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${genresFullList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2 class="title__gallery">${item.title}</h2>
          <div class="alt__img">
         <p class="other__gallery">${item.genres
           .map(genre => genre.name)
           .join(', ')}<span> | </span>${item.release_date.slice(0, 4)}
          <button class="btn-vote">${item.vote_average.toFixed(1)}</button></p>
          </div>
		  </a>
        </li>`;
  return markup;
};

export { headMarkup, watchedMarkup, createIndexMarkup };
