import { getStorage } from "./local-storage"

const onLibraryWatchedBtn = document.querySelector(".library_watched");
console.log(onLibraryWatchedBtn);

onLibraryWatchedBtn.addEventListener('click', () => handlWatched());


// ------------------------------------------------------------------
// const btnWatched = document.querySelector(".btnWatchedModal");
// console.log(btnWatched);
// btnWatched.addEventListener('click', () => handlWatched())

function handlWatched() {
    // let array = [];
    const newGalleryList = getStorage("watchedList")
    // const filmId = { filmObject }
    // array = [...array, filmId]
    console.log(newGalleryList);

    if (newGalleryList.length === 0) {
        console.log(error);
        // нужно добавить оповещение о пустом м
    } else {
        // watchedMarkup()
        // renderImgs(newGalleryList.list);
        // ренедерити
    }
};
// ------------------------------------------------------------------