import { getStorage } from "./local-storage";
import { headMarkup, watchedMarkup } from './gallery-item';
import { createMarkup } from '../index';

const galleryLibr = document.querySelector(".listFilm");
// -------------------------------------------------------------------
const onLibraryWatchedBtn = document.querySelector(".library_watched");
onLibraryWatchedBtn.addEventListener('click', () => handlWatched("watchedList"));

// -------------------------------------------------------------------
const onLibraryQueueBtn = document.querySelector(".library_queue");
onLibraryQueueBtn.addEventListener('click', () => handlWatched("queueList"));

// ===================================================================
function handlWatched(key) {
    // let array = [];
    // let newGalleryList = getStorage("watchedList")
    let newGalleryList = getStorage(key)
    // const filmId = { filmObject }
    // array = [...array, filmId]
    // console.log(newGalleryList);

    if (newGalleryList === undefined || newGalleryList.length === 0) {
        console.log("error");
        // нужно добавить оповещение о пустом 
    } else {
        //---- рендер разметки-------------

        // console.log(newGalleryList);
        const array = newGalleryList.map(item => headMarkup(item));

        // headMarkup({...newGalleryList});
        // debugger
        galleryLibr.innerHTML = "";
        galleryLibr.insertAdjacentHTML('beforeend', array);
        console.log('ответ для рендера', newGalleryList);

    }
};
// ------------------------------------------------------------------

