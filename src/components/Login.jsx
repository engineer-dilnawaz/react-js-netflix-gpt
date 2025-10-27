import { useState } from "react";
import Header from "./Header";
import Input from "./UI/Input";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignToggle = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-full">
      <Header />
      <div className="h-screen flex flex-col justify-center items-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/PK-en-20251020-TRIFECTA-perspective_38affad5-942d-4214-9a8d-e193c7261c53_large.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/55">
        <div className="w-4/12 bg-black/65  p-4 rounded-sm z-10">
          <h1 className="font-bold text-3xl text-white mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col transition-all">
            {!isSignIn && <Input placeholder="Enter your name" type="text" />}
            <Input placeholder="Enter your email" type="email" />
            <Input placeholder="Enter your password" type="password" />
            <button
              onClick={handleOnSubmit}
              className="bg-red-600 hover:bg-red-500  py-2 text-white font-bold text-2xl mt-2 outline-0 rounded-md cursor-pointer"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {isSignIn ? (
            <p
              className="text-white text-lg mt-4 cursor-pointer select-none"
              onClick={handleSignToggle}
            >
              New to Netflix?
              <p className="text-red-500 underline inline-block ml-0.5">
                Register Now
              </p>
            </p>
          ) : (
            <p
              className="text-white text-lg mt-4 cursor-pointer select-none"
              onClick={handleSignToggle}
            >
              Already a have an account?
              <p className="text-red-500 underline inline-block ml-0.5">
                Sign In now
              </p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
