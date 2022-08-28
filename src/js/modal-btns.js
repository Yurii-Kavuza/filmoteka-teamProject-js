import { addStorage } from "./storage.js";

const addQueueBtn = document.querySelector(".btnQueueModal");
console.log(addQueueBtn);
addQueueBtn.addEventListener('click', addToStorage);

addStorage('watchQueue', array)


function addToStorage(listName, filmObject) {
    console.log(listName);
    let array = [];
    const filmId = { filmObject }
    array = [...array, filmId]
    addStorage(`${listName}`, array)
};
