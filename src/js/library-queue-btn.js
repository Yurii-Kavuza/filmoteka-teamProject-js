import { getStorage } from "./local-storage"

const onLibraryQueueBtn = document.querySelector(".library_queue");
console.log(onLibraryQueueBtn);

onLibraryQueueBtn.addEventListener('click', () => { handlQueue });
function handlQueue() {
    // let array = [];
    const newGalleryList = getStorage("queueList")
    // const filmId = { filmObject }
    // array = [...array, filmId]
    console.log(newGalleryList);

    if (newGalleryList.length === 0) {
        console.log(error);
        // нужно добавить оповещение о пустом м
    } else {

        // renderImgs(newGalleryList.list);
        // ренедерити
    }
};