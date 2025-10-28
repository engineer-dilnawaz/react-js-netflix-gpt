import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const { loggedInUser } = useSelector((state) => state.auth);

  return (
    <div className="px-2 py-0.5 outline-0 z-10 w-full flex items-center justify-between ">
      <Link to={loggedInUser ? "/browse" : "/"}>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="app logo"
          className="w-40 bg-transparent"
        />
      </Link>
      {loggedInUser && (
        <Link to="/profile">
          <img
            src={loggedInUser?.photoURL}
            className="w-10 h-10 rounded-full bg-slate-200"
          />
        </Link>
      )}
    </div>
  );
};

export default Header;
