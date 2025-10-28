import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_ENDPOINTS } from "../constants/app-constants";
import { addTopRated } from "../store/slices/moviesSlice";
import { fetch_helper } from "../utils/api-call";

export const useTopRated = () => {
  const dispatch = useDispatch();

  const fetchMoviesList = useCallback(async () => {
    try {
      const data = await fetch_helper(
        `${API_ENDPOINTS.MOVIES_LIST.TOP_RATED}?page=1`
      );

      dispatch(addTopRated(data.results));
    } catch (error) {
      console.log('Error while fetching "Now Playing Movies" - ', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchMoviesList();
  }, [fetchMoviesList]);

  return { fetchMoviesList };
};
