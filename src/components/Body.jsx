import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { logIn, logout } from "../store/slices/authSlice";
import { AUTH } from "../utils/firebase-config";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(AUTH, (user) => {
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
  }, [dispatch, navigate]);

  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
