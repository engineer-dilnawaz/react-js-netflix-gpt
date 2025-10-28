import { useSelector } from "react-redux";
import MoviePoster from "./MoviePoster";
import MovieTrailer from "./MovieTrailer";

const HeroContainer = () => {
  const { mainMovie } = useSelector((state) => state.movies.heroMovie);
  return (
    <div className="h-[70vh] relative">
      <MovieTrailer />
      <div className="absolute left-0 px-10 text-white bg-linear-to-t from-black/30 to-black">
        <h1 className="font-bold text-4xl mb-3">{mainMovie?.title}</h1>
        <div className="w-4/12">
          <p className="text-white text-sm font-normal line-clamp-2">
            {mainMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
