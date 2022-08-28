import { IMG_URL } from './trending-movies';

const headMarkup = item =>
  `<li class="gallery__item">
  <div class="slot__thumb">
            <img src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresFullList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2>${item.title}</h2>
          <p>${item.genresShortList}</p>
          <p>${item.releaseDate}</p>
		  </div>
        </li>`;

const watchedMarkup = item =>
  `<li>
  <div class="slot__thumb">
            <img src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresFullList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2>${item.title}</h2>
          <p>Genre id = ${item.genresShortList}</p>
          <p>${item.releaseDate}</p>
          <p>${item.vote}</p>
		  </div>
        </li>`;

const modalMarkup = item =>
  `<img src="#" alt="#" />
	 <h1>head</h1>
	 <table>
        <tr>
          <td>Vote / Votes</td>
          <td>7.3 /1260</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td></td>
        </tr>
        <tr>
          <td>Original Title</td>
          <td></td>
        </tr>
        <tr>
          <td>Genre</td>
          <td></td>
        </tr>
      </table>
	 <h2>ABOUT</h2>
	 <p></p>`;

export { headMarkup, watchedMarkup, modalMarkup };
