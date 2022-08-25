import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending';
const API_KEY = 'd984b4c758c2885930eb52b6130716de';
const TIME_WINDOW = 'week';
const MEDIA_TYPE = 'movie';

export default class TrendingMovies {
  constructor() {
    this.results = [];
    this.total_results = 0;
    this.page = 1;
  }

  async getMovies() {
    const query = `${BASE_URL}/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`;

    try {
      const response = await axios.get(query);
      return response.data;
    } catch {
      console.log(error);
    }
  }
}
