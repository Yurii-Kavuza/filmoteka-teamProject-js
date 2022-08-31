// import { Notify } from 'notiflix';
import API_KEY from './api-key';
import pagination from './pagination';
import { preloaderShow, hidePreloader } from './preloader';
// import headMarkup from './gallery-item';
import searchMovies from './trending-movies';
import TrendingMovies from './trending-movies';
// import axios from 'axios';
// const axios = require('axios');

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
// const gallery = document.querySelector('.container');
// const trendingMovies = new TrendingMovies();
// const searchMovies = new searchMovies();

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  let searchQuery = input.value.trim();
  if (searchQuery === '') {
    return Notify.failure('Please enter name of the film.', {
      timeout: 5000,
      position: 'center-top',
      width: 200,
      showOnlyTheLastOne: true,
    });
  }
  try {
    preloaderShow();
    // тут якась фигня
    const data = await API_KEY.searchMovies(searchedText);

    if (data.total_results === 0) {
      input.value = '';
      hidePreloader();
      return Notify.failure(
        'There is no films with this name. Please try again.',
        {
          timeout: 5000,
          position: 'center-top',
          width: 200,
          showOnlyTheLastOne: true,
        }
      );
    }
    Notify.info('Your request is successfull.', {
      timeout: 5000,
      position: 'center-top',
      width: 200,
      showOnlyTheLastOne: true,
    });
    // pagination;

    input.value = '';
    hidePreloader();
  } catch (error) {
    console.log(error);
  }
}

// preloaderShow();
// const onSubmit = new onSubmit();
// const searchedText = '';
// onSubmit.searchMovies(значення з формы);
// onSubmit
//   .searchMovies(searchedText)
//   .then(({ results, total_results, total_pages, page }) => {
//     const markup = createMarkup(results);
//     pagination(total_pages, page);
//     // очистити вміст галереї

//     refs.listFilm.insertAdjacentHTML('beforeend', markup);
//     hidePreloader();
//   });

// // function headMarkup(cards) {
// //   return cards.reduce((acc, card) => acc + headMarkup(card), '');
// // }
