import axios from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(
  query: string,
  page: number
): Promise<FetchMoviesResponse> {
  const response = await axios.get<FetchMoviesResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  return response.data;
}

