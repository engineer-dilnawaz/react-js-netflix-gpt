import { useSelector } from "react-redux";
import { useNowPlaying } from "../hooks/useNowPlaying";
import HeroContainer from "./HeroContainer";
import HorizontalSection from "./HorizontalSection";
import { useTopRated } from "../hooks/useTopRated";
import { useUpcoming } from "../hooks/useUpcoming";
import { usePopular } from "../hooks/usePopular";

const Browse = () => {
  const nowPlayingMoviesList = useSelector((state) => state.movies.nowPlaying);
  const popularMoviesList = useSelector((state) => state.movies.popular);
  const upcomingMoviesList = useSelector((state) => state.movies.upcoming);
  const topRatedMoviesList = useSelector((state) => state.movies.topRated);

  useNowPlaying();
  useTopRated();
  useUpcoming();
  usePopular();

  return (
    <div className="bg-black text-white">
      <HeroContainer />

      <div className="mt-4 flex flex-col gap-3">
        <HorizontalSection title="Trending Now" list={nowPlayingMoviesList} />
        <HorizontalSection title="Top Rated" list={topRatedMoviesList} />
        <HorizontalSection title="Popular" list={popularMoviesList} />
        <HorizontalSection title="Upcoming" list={upcomingMoviesList} />
      </div>
    </div>
  );
};

export default Browse;
