import TrendingMovies from './trending-movies';

// открытие-закрытие модалки
const closeModalButton = document.querySelector('.close-button');
const modalBackdrop = document.querySelector('.modal__backdrop');
const gallery = document.querySelector('.listFilm');
const modalCard = document.querySelector('.modal-card');
const trendingMovies2 = new TrendingMovies();

console.log(closeModalButton);

// gallery.addEventListener('click', onModalOpen);
// closeModalButton.addEventListener('click', onModalClose);
// modalBackdrop.addEventListener('click', onBackdropClick);

function onModalOpen() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}
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

  trendingMovies.getMoviesById(id).then(res => {
    renderModalCard(res);
  });
}
function createModalMarkup(item) {
  return `
      <div class="modal__backdrop  js-backdrop">

        <div class="modal__container">

            <button class="close-button" data-action="close-modal">
            </button>
            <div class="modal__content">
                <div class="film__poster">
                    <img class="film__image"
                        src="${item.posterPath}" alt="${item.title}">
            </div>
            <div class=" film_description">
                    <h2 class="film__title">"${item.title}"</h2>

                    <div class="grid-container">
                        <table>
                            <tr>
                                <td class="film__info">Vote / Votes</td>
                                <td class="film__vote">"${item.vote}"</td>
                            </tr>
                            <tr>
                                <td class="film__info">Popularity</td>
                                <td class="film__value">"${item.popularity}"</td>
                            </tr>
                            <tr>
                                <td class="film__info">Original Title</td>
                                <td class="film__original">"${item.releaseDate}"</td>
                            </tr>
                            <tr>
                                <td class="film__info">Genre</td>
                                <td class="film__value">"${item.genresShortList}"</td>
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
