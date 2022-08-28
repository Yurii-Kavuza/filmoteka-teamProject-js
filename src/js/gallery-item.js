const headMarkup = item =>
  `<li class="gallery__item">
  <div class="slot__thumb">
            <img class="img__gallery" src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresAllList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2 class="title__gallery">${item.title}</h2>
          <p class="other__gallery">${item.genresShortList.join(
            ', '
          )}<span> | </span>${item.releaseDate}</p>
		  </div>
        </li>`;

const watchedMarkup = item =>
  `<li class="gallery__item">
  <div class="slot__thumb">
            <img class="img__gallery" src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresAllList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2 class="title__gallery">${item.title}</h2>
          <p class="other__gallery">${item.genresShortList.join(
            ', '
          )}<span> | </span>${item.releaseDate}</p>
          <button>${item.vote_count}</button>
          
		  </div>
        </li>`;

export { headMarkup, watchedMarkup };
//<svg id="icon-vote">${item.vote_count}</svg>
