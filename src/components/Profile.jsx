import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Loading from "./UI/Loading";

const Profile = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { handleSignOut, isLogginOut } = useAuth();

  const onGoBack = () => {
    navigate(-1);
  };

  const onLogout = () => {
    handleSignOut();
  };

  if (isLogginOut) return <Loading text="Logging Out" />;

  if (!loggedInUser) return <Loading text="Redirecting..." />;

  return (
    <div className="flex flex-col bg-slate-100 h-dvh justify-center items-center">
      <div className="bg-black/10 p-4 rounded-sm w-6/12 flex flex-col items-center justify-center">
        <img src={loggedInUser?.photoURL} className="h-32 w-32 rounded-full" />
        <p className="mt-2 font-bold text-black text-2xl">
          {loggedInUser.displayName}
        </p>
        <p className="font-light text-black text-lg">{loggedInUser.email}</p>
        <button
          className="bg-red-400 py-2 px-4 rounded-sm text-center mt-4 w-full cursor-pointer"
          onClick={onLogout}
        >
          <p className="text-white font-semibold">Log out</p>
        </button>
        <button
          className="bg-red-400 py-2 px-4 rounded-sm text-center mt-4 w-full cursor-pointer"
          onClick={onGoBack}
        >
          <p className="text-white font-semibold">Go back</p>
        </button>
      </div>
    </div>
  );
};

export default Profile;
