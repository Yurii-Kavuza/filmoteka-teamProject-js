import { Notify } from 'notiflix';
import API_KEY from './api-key';
// import pagination from './pagination';
import { preloaderShow, hidePreloader } from './preloader';
// import headMarkup from './gallery-item';
// import searchMovies from './trending-movies';

const submitForm = document.querySelector('.search-form');
const inputArea = document.querySelector('.search-form__input');

submitForm.addEventListener('submit', search);

// 1. получить данные от функции ниже
// 2. сделать проверку полученых результатов
// 3. отрисовать после проверки два варианта
// 3.1.успех - новую галерею
// 3.2. провал - выдать сообщение об ошибке

// function searchMovies(searchedText) {
//     const query = `BASE_URL/search/${MEDIA_TYPE}?api_key=${API_KEY}&language=en-US&page=1&query=${searchedText}`;
//     try {
//       const response = await axios.get(query);
//       const newResults = response.data.results.map(result => {
//         const newResult = {};
//         newResult.id = result.id;
//         newResult.genresFullList = this.genresTextual(result.genre_ids);
//         newResult.genresShortList = this.genresGetShortList(
//           newResult.genresFullList
//         );
//         newResult.title = result.title || result.original_title;
//         newResult.overview = result.overview;
//         newResult.posterPath = IMG_URL + result.poster_path;
//         newResult.backdropPath = IMG_URL + result.backdrop_path;
//         newResult.voteAverage = result.vote_average;
//         newResult.releaseDate = result.release_date.slice(0, 4);
//         return newResult;
//       });
//       const newData = {};
//       newData.total_results = response.data.total_results;
//       newData.page = response.data.page;
//       newData.total_pages = response.data.total_pages;
//       newData.results = newResults;
//       this.page = 1;
//       return newData;
//     } catch {
//       console.log(error);
//     }
//   }
