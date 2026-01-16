import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../constants/app-constants";
import { addHeroMovie } from "../store/slices/moviesSlice";

const HorizontalList = ({ data }) => {
  const dispatch = useDispatch();

  const handleUpdateMainMovie = () => {
    dispatch(addHeroMovie(data));
  };

  return (
    <div
      className="aspect-square bg-black h-48 relative cursor-pointer"
      onClick={handleUpdateMainMovie}
    >
      <img
        src={API_CONSTANTS.posters.original + data?.poster_path}
        className="h-full"
      />
      {/* <div className="absolute bottom-0 left-0 right-0 text-white bg-linear-to-l from-black to-black/30 line-clamp-1 ">
        <h1 className="font-semibold text-lg text-white">{data?.title}</h1>
      </div> */}
    </div>
  );
};

export default HorizontalList;
