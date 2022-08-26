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

  async getGenres() {
    try {
      const response = await axios.get(GENRES_URL);
      const genres = await response.data.genres;
      localStorage.setItem('genres', JSON.stringify(genres));
    } catch {
      console.log(error);
    }
  }

  async getMovies() {
    const query = `${TRENDING_URL}/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`;

    try {
      const response = await axios.get(query);
      return response.data;
    } catch {
      console.log(error);
    }
  }
}
