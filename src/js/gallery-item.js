const headMarkup = item =>
  `<li>
  <div class="slot__thumb">
          <a href="#">
            <img src="${IMG_URL}${item.poster_path}" alt="${item.title}" />
          </a>
          <h2>${item.title || item.original_title}</h2>
          <p>${Object.values(item.genre_ids)}</p>
          <p>${item.release_date.slice(0, 4)}</p>
		  </div>
        </li>`;

const watchedMarkup = item =>
  `<li>
  <div class="slot__thumb">
  <a href="#">
            <img src="${IMG_URL}${item.poster_path}" alt="${item.title}" />
          </a>
          <h2>${item.title || item.original_title}</h2>
          <p>${Object.values(item.genre_ids)}</p>
          <p>${item.release_date.slice(0, 4)}</p>
          <p>${item.vote}</p>
		  </div>
        </li>`;
