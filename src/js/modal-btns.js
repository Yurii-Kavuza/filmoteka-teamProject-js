import { addStorage, getStorage } from "./local-storage";
import SearchFilm from './trending-movies';
import "./open-close-modal";

export function addToStorage(listName, film) {

    let items = getStorage(listName) !== undefined ? getStorage(listName) : [];

    if (items.find(item => item.id === film.id)) {
        let array = items.filter(item => item.id !== film.id)

        addStorage(`${listName}`, array)
    }

    if (!items.find(item => item.id === film.id)) {
        let array = [...items, film]
        addStorage(`${listName}`, array)
    }
}

// let x = document.querySelector(".button");
// x.addEventListener('click', handl);

// function handl() {
//     if (x.innerHTML === "HELLO") {
//         x.innerHTML = "Swapped text!";
//     } else {
//         x.innerHTML = "HELLO";
//     }
// }
