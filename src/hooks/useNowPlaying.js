import { useCallback, useEffect } from "react";
import { fetch_helper } from "../utils/api-call";
import { API_ENDPOINTS } from "../constants/app-constants";
import { useDispatch } from "react-redux";
import { addHeroMovie, addNowPlayingMovies } from "../store/slices/moviesSlice";

export const useNowPlaying = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = useCallback(async () => {
    try {
      const data = await fetch_helper(
        `${API_ENDPOINTS.MOVIES_LIST.NOW_PLAYING}?page=1`
      );

      dispatch(addNowPlayingMovies(data.results));
      dispatch(addHeroMovie(data?.results?.[1] ?? {}));
    } catch (error) {
      console.log('Error while fetching "Now Playing Movies" - ', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, [fetchNowPlayingMovies]);

  return { fetchNowPlayingMovies };
};
