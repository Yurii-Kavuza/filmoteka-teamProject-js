import { addStorage } from "./storage.js";


const addQueueBtn = document.querySelector(".btnQueueModal");
addQueueBtn.addEventListener('click', () => addToStorage("watchedList", list));
// addStorage('watchQueue', array);



function addToStorage(listName, list) {
    // console.log(listName, list);
    let array = [];

    // const filmId = { filmObject }
    array = { ...array, list }
    addStorage(`${listName}`, array)
    // console.log(addStorage);
};

let items = getStorage("watchedList");
console.log(items);