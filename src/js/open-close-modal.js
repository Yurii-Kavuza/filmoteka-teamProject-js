import TrendingMovies from './trending-movies';

// открытие-закрытие модалки
const IMG_URL = 'https://image.tmdb.org/t/p';

const gallery = document.querySelector('.listFilm');
const modalCard = document.querySelector('.modal-card');
const trendingMovies2 = new TrendingMovies();

gallery.addEventListener('click', clickOnMovie);

// function onModalOpen() {
//   window.addEventListener('keydown', onEscKeyPress);
//   closeModalButton.addEventListener('click', onModalClose);
//   modalBackdrop.addEventListener('click', onBackdropClick);
//   document.body.classList.add('show-modal');
// }
function onModalClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}
function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onModalClose();
  }
}
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onModalClose();
  }
}

function clickOnMovie(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }
  let id = e.target.dataset.id;

  trendingMovies2.getMoviesById(id).then(res => {
    renderModalCard(res);
    const closeModalButton = document.querySelector('.close-button');
    window.addEventListener('keydown', onEscKeyPress);
    closeModalButton.addEventListener('click', onModalClose);
    const modalBackdrop = document.querySelector('.modal__backdrop');
    modalBackdrop.addEventListener('click', onBackdropClick);
    document.body.classList.add('show-modal');
  });
}
function createModalMarkup(item) {
  console.log(item);
  console.log(`${IMG_URL}/original/${item.poster_path}`);
  return `
      <div class="modal__backdrop  js-backdrop">

        <div class="modal__container">

            <button class="close-button" data-action="close-modal">
            </button>
            <div class="modal__content">
                <div class="film__poster">
                    <img class="film__image"
                        src="${IMG_URL}/original/${item.poster_path}" alt="${
    item.title
  }">
            </div>
            <div class=" film_description">
                    <h2 class="film__title">"${item.title}"</h2>

                    <div class="grid-container">
                        <table>
                            <tr>
                                <td class="film__info">Vote / Votes</td>
                                <td class="film__vote">${item.vote_average.toFixed(
                                  1
                                )}/${item.vote_count}</td>
                            </tr>
                            <tr>
                                <td class="film__info">Popularity</td>
                                <td class="film__value">${item.popularity.toFixed(
                                  1
                                )}</td>
                            </tr>
                            <tr>
                                <td class="film__info">Original Title</td>
                                <td class="film__original">${
                                  item.original_title
                                }</td>
                            </tr>
                            <tr>
                                <td class="film__info">Genre</td>
                                <td class="film__value">"${item.genres
                                  .map(genre => genre.name)
                                  .join(', ')}"</td>
                            </tr>
                        </table>
                    </div>

                    <h3 class="film__about">About</h3>
                    <p class="film__overview">"${item.overview}"</p>

                    <div class="modal__buttons">
                        <button type="button" class="film__button btn__watch">Add to watched</button>
                        <button type="button" class="film__button btn__queue">Add to queue</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
 `;
}

function renderModalCard(res) {
  const markup = createModalMarkup(res);
  modalCard.innerHTML = markup;
  modalCard.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
