import { useSelector } from "react-redux";
import { useMoviePoster } from "../hooks/useMoviePoster";
import { API_CONSTANTS } from "../constants/app-constants";

const MoviePoster = () => {
  const { mainMovie, posters } = useSelector((state) => state.movies.heroMovie);
  useMoviePoster(mainMovie?.id);
  return (
    <div className="w-screen flex items-center justify-center bg-black">
      <img
        className="h-[650px]  bg-amber-300"
        src={`${API_CONSTANTS.posters.original}${posters?.[0]?.file_path}`}
      />
    </div>
  );
};

export default MoviePoster;
