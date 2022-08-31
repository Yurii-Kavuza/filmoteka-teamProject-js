import { Notify } from 'notiflix';
import API_KEY from './api-key';
import pagination from './pagination';
import { preloaderShow, hidePreloader } from './preloader';
import headMarkup from './gallery-item';
import searchMovies from './trending-movies';
// import axios from 'axios';
// const axios = require('axios');

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const gallery = document.querySelector('.container');

form.addEventListener('submit', onSubmit);

// 1. получить данные от функции earchMovies из './trending-movies'
// 2. сделать проверку полученых результатов
// 3. отрисовать после проверки два варианта
// 3.1.успех - новую галерею
// 3.2. провал - выдать сообщение об ошибке

// черновик

// preloaderShow();
// const onSearch = new onSearch();
// const searchedText = '';
// onSearch.searchMovies();
// onSearch
//   .searchMovies(searchedText)
//   .then(({ results, total_results, total_pages, page }) => {
//     const markup = createMarkup(results);
//     pagination(total_pages, page);
//     refs.listFilm.insertAdjacentHTML('beforeend', markup);
//     hidePreloader();
//   });

// function headMarkup(cards) {
//   return cards.reduce((acc, card) => acc + headMarkup(card), '');
// }
