import { getStorage } from './local-storage';
import { headMarkup, watchedMarkup } from './gallery-item';
// import { createMarkup } from '../index';

// const galleryLibr = document.querySelector('.listFilm');
// -------------------------------------------------------------------
const onLibraryWatchedBtn = document.querySelector('.library_watched');
const listFilm = document.querySelector('.listFilm');

onLibraryWatchedBtn.addEventListener('click', () =>
  handlWatched('watchedList')
);

// -------------------------------------------------------------------
const onLibraryQueueBtn = document.querySelector('.library_queue');
onLibraryQueueBtn.addEventListener('click', () => handlWatched('queueList'));

// ===================================================================
function handlWatched(key) {

  let newGalleryList = getStorage(key);

  if (newGalleryList === undefined || newGalleryList.length === 0) {
    listFilm.innerHTML = '';
    console.log('error: нічого не добавлено ');
    // нужно добавить оповещение о пустом
  } else {
    //---- рендер разметки-------------

    // console.log(newGalleryList);
    // const array = newGalleryList.map(item => {
    //   console.log(item);
    //   headMarkup({ ...item });
    // });

    // headMarkup({...newGalleryList});
    // debugger
    // galleryLibr.innerHTML = '';
    // galleryLibr.insertAdjacentHTML('beforeend', array);
    // console.log('ответ для рендера', newGalleryList);
    const markup = createMarkup(newGalleryList, watchedMarkup);
    listFilm.innerHTML = '';
    // listFilm.innerHTML(markup);
    listFilm.insertAdjacentHTML('beforeend', markup);
  }
}

function createMarkup(cards, markupFunc) {
  return cards.reduce((acc, card) => acc + markupFunc(card), '');
}

export { handlWatched };

// ------------------------------------------------------------------
