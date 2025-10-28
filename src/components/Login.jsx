import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { SignIn, SignUp } from "../constants/authtentication-schema";
import { useAuth } from "../hooks/useAuth";
import { ShowToast, TOAST_TYPE } from "../utils/toast";
import Input from "./UI/Input";

const Login = () => {
  const { handleSignUp, handleSignIn, LoggedInUser } = useAuth();
  const [isSignIn, setIsSignIn] = useState(true);
  const schema = useMemo(() => (isSignIn ? SignIn : SignUp), [isSignIn]);
  const previouslyLoggedIn = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSignToggle = () => {
    setIsSignIn((prev) => !prev);
    reset();
  };

  const handleOnSubmit = async (data) => {
    if (previouslyLoggedIn.current === JSON.stringify(data)) {
      return ShowToast(
        "Invalid credentials please check your email or password",
        TOAST_TYPE.INFO
      );
    }
    previouslyLoggedIn.current = JSON.stringify(data);
    if (!isSignIn) {
      await handleSignUp(data.name, data.email, data.password);
      previouslyLoggedIn.current = null;
      reset();
    } else {
      await handleSignIn(data.email, data.password);
      previouslyLoggedIn.current = null;
      reset();
    }
  };

  return (
    <div className="h-full">
      <div className="relative h-screen flex flex-col justify-center items-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/PK-en-20251020-TRIFECTA-perspective_38affad5-942d-4214-9a8d-e193c7261c53_large.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/55">
        <div className="lg:w-4/12 w-8/12 bg-black/65  p-4 rounded-sm z-10">
          <h1 className="font-bold text-3xl text-white mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form
            className="flex flex-col transition-all"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {!isSignIn && (
              <Input
                placeholder="Enter your name"
                type="text"
                {...register("name")}
                error={errors.name}
              />
            )}
            <Input
              placeholder="Enter your email"
              type="email"
              {...register("email")}
              error={errors.email}
            />
            <Input
              placeholder="Enter your password"
              type="password"
              {...register("password")}
              error={errors.password}
            />

            {!isSignIn && (
              <Input
                placeholder="Confirm password"
                type="password"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
              />
            )}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500  py-2 text-white font-bold text-2xl mt-2 outline-0 rounded-md cursor-pointer select-none"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {isSignIn ? (
            <div
              className="flex gap-1 items-center mt-4 cursor-pointer"
              onClick={handleSignToggle}
            >
              <p className="text-white text-lg select-none">New to Netflix?</p>
              <p className="text-red-500 underline  select-none">
                Register Now
              </p>
            </div>
          ) : (
            <div
              className="flex gap-1 items-center mt-4 cursor-pointer"
              onClick={handleSignToggle}
            >
              <p className="text-white text-lg  select-none">
                Already a have an account?
              </p>
              <p className="text-red-500 underline inline-block select-none">
                Sign In now
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
