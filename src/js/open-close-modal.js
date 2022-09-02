import TrendingMovies from './trending-movies';
import { returnImageMarkup } from './gallery-item';
import { addStorage, getStorage, isInStorage } from './local-storage';
import { addToStorage } from './modal-btns';
// открытие-закрытие модалки
const IMG_URL = 'https://image.tmdb.org/t/p';

const gallery = document.querySelector('.listFilm');
const modalCard = document.querySelector('.modal-card');
const trendingMovies2 = new TrendingMovies();

gallery.addEventListener('click', clickOnMovie);

function onModalClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  document.body.style.overflow = 'auto';
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
    // btn---------------------------------------------------
    const addQueueBtn = document.querySelector('.btnQueueModal');
    const addWatchedBtn = document.querySelector('.btnWatchedModal');

    const onLibraryWatchedBtn = document.querySelector('.library_watched');
    const onLibraryQueueBtn = document.querySelector('.library_queue');

    addWatchedBtn.addEventListener('click', e => {
      handlWatch();
      addToStorage('watchedList', res);
      if (onLibraryQueueBtn != null) {
        onLibraryQueueBtn.click();
      }
    });
    addQueueBtn.addEventListener('click', e => {
      handlQueue();
      addToStorage('queueList', res);
      if (onLibraryQueueBtn != null) {
        onLibraryQueueBtn.click();
      }
    });
    // ------------------------handlBtnS--------------------------

    function handlQueue() {
      if (addQueueBtn.textContent === 'Add to queue') {
        addQueueBtn.textContent = 'Remove from queue';
      } else {
        addQueueBtn.textContent = 'Add to queue';
      }
    }
    function handlWatch() {
      if (addWatchedBtn.textContent === 'Add to watched') {
        addWatchedBtn.textContent = 'Remove from watched';
      } else {
        addWatchedBtn.textContent = 'Add to watched';
      }
    }
    // ==============================================================
  });
}

function renderListButton(listName, id) {
  if (isInStorage(listName, id)) {
    return 'Remove from ';
  } else {
    return 'Add to ';
  }
}

function createModalMarkup(item) {
  // console.log(isInStorage('queueList', item.id));
  return `
      <div class="js-backdrop">

        <div class="modal__container">

            <button class="close-button" data-action="close-modal">
            </button>
            <div class="modal__content">
                <div class="film__poster">
                ${returnImageMarkup(item, 'film__image')}
                    
            </div>
            <div class=" film_description">
                    <h2 class="film__title">${item.title}</h2>

                    <div class="grid-container">
                        <table>
                            <tr>
                                <td class="film__info">Vote / Votes</td>
                                <td class="film__value">
                                <span class="film__vote film__vote--orange">${item.vote_average.toFixed(
                                  1
                                )}</span>
        <span>/</span>
        <span film__vote film__vote--orange>${item.vote_count}</span>
        </td>
                            </tr>
                            <tr>
                                <td class="film__info">Popularity</td>
                                <td class="film__value">${item.popularity.toFixed(
                                  1
                                )}</td>
                            </tr>
                            <tr>
                                <td class="film__info">Original Title</td>
                                <td class="film__value film__original">${
                                  item.original_title
                                }</td>
                            </tr>
                            <tr>
                                <td class="film__info">Genre</td>
                                <td class="film__value">${item.genres
                                  .map(genre => genre.name)
                                  .join(', ')}</td>
                            </tr>
                        </table>
                    </div>

                    <h3 class="film__about">About</h3>
                    <p class="film__overview">${item.overview}</p>

                    <div class="modal__buttons">
                        <button type="button" class="film__button btn__watch btnWatchedModal" data-id="${
                          item.id
                        }" data-list="watchedList">${renderListButton(
    'watchedList',
    item.id
  )}watched</button>
                        <button type="button" class="film__button btn__queue btnQueueModal" data-id="${
                          item.id
                        }" data-list="queueList">${renderListButton(
    'queueList',
    item.id
  )}queue</button>
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
