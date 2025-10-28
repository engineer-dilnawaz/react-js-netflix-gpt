import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AUTH } from "../utils/firebase-config";
import { ShowToast, TOAST_TYPE } from "../utils/toast";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateProfileDetails } from "../store/slices/authSlice";

export const useAuth = () => {
  // const dispatch = useDispatch();
  const LoggedInUser = AUTH.currentUser;
  const [isLogginOut, setIsLoggingOut] = useState(false);

  const handleSignUp = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(AUTH, email, password);
      ShowToast("Signed Up successfully", TOAST_TYPE.SUCCESS);
      await handleProfileUpdate(name);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Code", errorCode);
      console.log("Error Message", errorMessage);
      ShowToast(errorMessage, TOAST_TYPE.ERROR);
    }
  };

  const handleProfileUpdate = async (name) => {
    const userUpdatingInfo = {
      displayName: name,
      photoURL: "https://avatar.iran.liara.run/public",
    };
    try {
      await updateProfile(AUTH.currentUser, userUpdatingInfo);
      // dispatch(updateProfileDetails(userUpdatingInfo));
      ShowToast("Profile setup successfully", TOAST_TYPE.SUCCESS);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Code", errorCode);
      console.log("Error Message", errorMessage);
      ShowToast(errorMessage, TOAST_TYPE.ERROR);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        AUTH,
        email,
        password
      );
      const user = userCredential.user;
      console.log("LoggedIn ", user);
      ShowToast("Signed in successfully", TOAST_TYPE.SUCCESS);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Code", errorCode);
      console.log("Error Message", errorMessage);

      ShowToast(errorMessage, TOAST_TYPE.ERROR);
    }
  };
  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(AUTH);
      ShowToast("Signed out", TOAST_TYPE.INFO);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Code", errorCode);
      console.log("Error Message", errorMessage);
      ShowToast(errorMessage, TOAST_TYPE.ERROR);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return {
    LoggedInUser,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    isLogginOut,
  };
};
