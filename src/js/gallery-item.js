import { IMG_URL } from './trending-movies';

const DEFAULT_IMG_PATH = 'https://poster.keepcalmandposters.com/4680205.jpg';

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
  ${returnImageMarkup(item, 'img__gallery')}
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
  ${returnImageMarkup(item, 'img__gallery')}
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

function returnImageMarkup(item, classImg) {
  let imageMarkup = '';

  if (item.poster_path) {
    imageMarkup = `<picture>
                <source
                    srcset="
                    ${IMG_URL}/w780${item.poster_path}     1x,
                    ${IMG_URL}/original${item.poster_path} 2x
                    "
                    media="(min-width: 1024px)"
                    
                />
                <source
                    srcset="
                    ${IMG_URL}/w500${item.poster_path} 1x,
                    ${IMG_URL}/w780${item.poster_path} 2x
                    "
                    media="(min-width: 768px)"
                />
                <source
                    srcset="
                    ${IMG_URL}/w342${item.poster_path} 1x,
                    ${IMG_URL}/w500${item.poster_path} 2x
                    "
                    media="(min-width: 320px)"
                />
                <img
                    src="${IMG_URL}/original${item.poster_path}" loading="lazy"
                    alt="${item.original_title}"
                    class=${classImg}
                    data-id="${item.id}"
                    
                />
                </picture>`;
  } else {
    imageMarkup = `<img class=${classImg} loading="lazy" alt="${item.original_title}" src="${DEFAULT_IMG_PATH}" data-id="${item.id}"/>`;
  }
  return imageMarkup;
}

export { headMarkup, watchedMarkup, createIndexMarkup, returnImageMarkup };
