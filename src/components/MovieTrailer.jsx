import { VscMute, VscUnmute } from "react-icons/vsc";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

import { useState } from "react";
import { API_CONSTANTS, VIDEO_TYPES } from "../constants/app-constants";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const MovieTrailer = () => {
  const { mainMovie, movieTrailers } = useSelector(
    (state) => state.movies.heroMovie
  );
  const [mute, setMute] = useState(true);
  useMovieTrailer(mainMovie?.id);

  const trailer = movieTrailers?.filter(
    (item) => item.type === VIDEO_TYPES.TRAILER
  )?.[0];

  return (
    <div className="w-screen h-10/12 relative">
      {trailer?.key && (
        <ReactPlayer
          src={API_CONSTANTS.youtube_base_url + trailer?.key}
          controls={false}
          autoPlay
          muted={mute}
          height={"100%"}
          width={"100%"}
        />
      )}
      <div className="bg-linear-to-r from-red-400 absolute right-[2%] bottom-[40%] z-30 py-0.5 min-w-[15%] px-2 rounded-sm flex items-center gap-3">
        <div onClick={() => setMute((prev) => !prev)}>
          {mute ? (
            <VscMute className="h-9 w-9 text-white/70" />
          ) : (
            <VscUnmute className="h-9 w-9 text-white/70" />
          )}
        </div>
        {!mainMovie?.adult && (
          <p className="text-white font-semibold text-lg">+18</p>
        )}
      </div>
    </div>
  );
};

export default MovieTrailer;
