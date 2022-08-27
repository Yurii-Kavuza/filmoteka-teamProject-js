import axios from 'axios';
import { API_KEY } from './api-key';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending';
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const TIME_WINDOW = 'week';
const MEDIA_TYPE = 'movie';
export const IMG_URL = 'https://image.tmdb.org/t/p/original';
//https://www.themoviedb.org/talk/5f3ef4eec175b200365ee352?language=uk-UA

export default class TrendingMovies {
  constructor() {
    this.results = [];
    this.total_results = 0;
    this.page = 1;
  }

  genres = this.getGenres();

  async getGenres() {
    try {
      const response = await axios.get(GENRES_URL);
      const genres = await response.data.genres;
      return genres;
    } catch {
      console.log(error);
    }
  }

  async getMovies() {
    const query = `${TRENDING_URL}/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`;

    try {
      const response = await axios.get(query);
      console.log(this.genres);

      const newResults = response.data.results.map(result => {
        const newResult = {};
        newResult.id = result.id;
        newResult.genresShortList = '3 genres';
        newResult.genresAllList = 'All genres';
        newResult.title = result.original_title || result.title;
        newResult.overview = result.overview;
        newResult.posterPath = IMG_URL + result.poster_path;
        newResult.backdropPath = IMG_URL + result.backdrop_path;
        newResult.voteAverage = result.vote_average;
        newResult.releaseDate = result.release_date.slice(0, 4);
        return newResult;
      });
      const newData = {};
      newData.total_results = response.data.total_results;
      newData.page = response.data.page;
      newData.pages = response.data.total_pages;
      newData.results = newResults;
      return newData;
    } catch {
      console.log(error);
    }
  }
}
