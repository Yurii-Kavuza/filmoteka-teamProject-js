// const headMarkup = item =>
//   `<li class="gallery__item">
//   <div class="slot__thumb">
//             <img src="${item.posterPath}"
//              alt="${item.title}"
//              data-id="${item.id}"
//              data-allGenres="${item.genresAllList}"
//              data-overwiew="${item.overview}"
//              data-backdrop="${item.backdropPath}"/>
//           <h2>${item.title}</h2>
//           <p>Genre id = ${item.genresShortList}</p>
//           <p>${item.releaseDate}</p>
// 		  </div>
//         </li>`;
const headMarkup = item =>
  `<li class="gallery__item">
  <div class="slot__thumb">
            <img src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresAllList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2>${item.title}</h2>
          <p>Genre id = ${item.genresShortList}</p>
          <p>${item.releaseDate}</p>
		  </div>
        </li>`;

const watchedMarkup = item =>
  `<li class="gallery__item">
  <div class="slot__thumb">
            <img src="${item.posterPath}"
             alt="${item.title}"
             data-id="${item.id}"
             data-allGenres="${item.genresAllList}"
             data-overwiew="${item.overview}"
             data-backdrop="${item.backdropPath}"/>
          <h2>${item.title}</h2>
          <p>Genre id = ${item.genresShortList}</p>
          <p>${item.releaseDate}</p>
          <p>${item.vote}</p>
		  </div>
        </li>`;

export { headMarkup, watchedMarkup };
