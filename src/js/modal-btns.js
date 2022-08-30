import { addStorage, getStorage } from "./local-storage";
import SearchFilm from './trending-movies';

const addQueueBtn = document.querySelector(".btnQueueModal");




// test-----------------------------------------------------
// const modalTest = document.querySelector(".testModalBtn");
// modalTest.addEventListener('click', () => getFilm(20));

// const FilmsService = new SearchFilm();
// function getFilm(id) {
//     FilmsService
//         .getMoviesById(id)
//         .then(result => console.log(result))

// };
// function logo(a = "hello") {
//     console.log(a);
// }
// ==========================================================

// --------------------------------v1-----------------------------------
// нужно передать в addToStorage
let item = { id: 1, title: "a;", genresShortList: "b;", releaseDate: "c;" };
// let listTog = [{ id: 1, title: "a;", genresShortList: "b;", releaseDate: "c;" },
// { id: 2, title: "ddd", genresShortList: "aaa", releaseDate: "nnn" },
// { id: 3, title: "ccc", genresShortList: "sss", releaseDate: "mmm" }];

// addQueueBtn.addEventListener('click', () => addToStorage("watchedList", listTog));
addQueueBtn.addEventListener('click', () => addToStorage("watchedList", item));




function addToStorage(listName, film) {
    // let items = [];
    let items = getStorage(listName);
    console.log(items);


    if (items.find(item => item.id === film.id)) {
        let array = items.filter(item => item.id !== film.id)

        addStorage(`${listName}`, array)

    }
    if (!items.find(item => item.id === film.id)) {
        let array = [...items, film]
        addStorage(`${listName}`, array)
    }
}

// ---------------------reserved--------------------------------------------------
// addQueueBtn.addEventListener('click', () => addToStorage("watchedList", item));


// function addToStorage(listName, list) {
//     // console.log(listName, list);
//     let array = [];

//     array = [...array, ...list]
//     addStorage(`${listName}`, array)
//     // console.log(addStorage);
// };

// let items = getStorage("watchedList");
// console.log(items);
// =============================================================================