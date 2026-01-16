import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { APP_LOGO } from "../constants/app-constants";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from "../utils/firebase-config";
import { logIn, logout } from "../store/slices/authSlice";

const Header = () => {
  const { loggedInUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTH, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        if (displayName && email && uid && photoURL) {
          dispatch(logIn({ displayName, email, uid, photoURL }));
          navigate("/browse");
        }
      } else {
        dispatch(logout());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="sticky top-0 left-0 right-0 px-2 py-0.5 outline-0 z-10 w-full flex items-center bg-linear-to-b bg-black text-white">
      <Link to={loggedInUser ? "/browse" : "/"}>
        <img src={APP_LOGO} alt="app logo" className="w-40 bg-transparent" />
      </Link>
      {loggedInUser && (
        <div className="flex flex-1 justify-end items-center mr-3 gap-4">
          <Link
            to="/gpt-search"
            className="bg-indigo-500 px-4 py-1.5 rounded-sm hover:bg-indigo-700"
          >
            GPT Search
          </Link>
          <Link to="/profile">
            <img
              src={loggedInUser?.photoURL}
              className="w-10 h-10 rounded-full bg-slate-200"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
