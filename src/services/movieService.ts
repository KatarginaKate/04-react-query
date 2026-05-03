import axios from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchMovies(
  query: string,
  page: number
): Promise<FetchMoviesResponse> {
  const response = await axios.get<FetchMoviesResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    }
  );

  return response.data;
}
