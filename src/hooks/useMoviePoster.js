import { useCallback, useEffect } from "react";
import { fetch_helper } from "../utils/api-call";
import { API_ENDPOINTS } from "../constants/app-constants";
import { useDispatch } from "react-redux";
import { addHeroMoviePoster } from "../store/slices/moviesSlice";

export const useMoviePoster = (movieId) => {
  const dispatch = useDispatch();

  const fetchMoviePosters = useCallback(async () => {
    if (!movieId) return;

    try {
      const data = await fetch_helper(
        `${API_ENDPOINTS.MOVIES_LIST.IMAGES(movieId)}`
      );

      dispatch(addHeroMoviePoster(data.posters));
    } catch (error) {
      console.log('Error while fetching "Movies Posters" - ', error);
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    fetchMoviePosters();
  }, [fetchMoviePosters]);

  return { fetchMoviePosters };
};
