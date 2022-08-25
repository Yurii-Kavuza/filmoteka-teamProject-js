import { IMG_URL } from './trending-movies';

const headMarkup = item => {
  return `<li>
  <div class="slot__thumb gallery__item">
          <a href="#">
            <img src="${IMG_URL}${item.poster_path}" alt="${item.title}" />
          </a>
          <h2>${item.title || item.original_title}</h2>
          <p>Genre id = ${Object.values(item.genre_ids)}</p>
          <p>${item.release_date.slice(0, 4)}</p>
		  </div>
        </li>`;
};

const watchedMarkup = item => {
  return `<li>
  <div class="slot__thumb">
  <a href="#">
            <img src="${IMG_URL}${item.poster_path}" alt="${item.title}" />
          </a>
          <h2>${item.title}</h2>
          <p>Genre id = ${Object.values(item.genre_ids)}</p>
          <p>${item.release_date.slice(0, 4)}</p>
        </li>`;
};

const modalMarkup = item => {
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
};

export { headMarkup, watchedMarkup, modalMarkup };
