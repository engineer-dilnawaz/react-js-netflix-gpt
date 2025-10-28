import { useCallback, useEffect } from "react";
import { fetch_helper } from "../utils/api-call";
import { API_ENDPOINTS } from "../constants/app-constants";
import { useDispatch } from "react-redux";
import { addHeroMovieTrailer } from "../store/slices/moviesSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = useCallback(async () => {
    if (!movieId) return;

    try {
      const data = await fetch_helper(
        `${API_ENDPOINTS.MOVIES_LIST.VIDEOS(movieId)}`
      );

      dispatch(addHeroMovieTrailer(data.results));
    } catch (error) {
      console.log('Error while fetching "Movies Trailers" - ', error);
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    fetchMovieTrailer();
  }, [fetchMovieTrailer]);

  return { fetchMovieTrailer };
};
