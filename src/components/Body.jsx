import { Outlet } from "react-router";

import Header from "./Header";

const Body = () => {
  return (
    <div className="bg-black h-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
