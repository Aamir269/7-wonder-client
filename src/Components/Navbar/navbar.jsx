import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/context.auth";
import WonderCard from "../../Pages/WonderCard/wondercard";
import './navbar.css';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbarContainer gap-x-4 h-10 mt-8">
      <div className="mt-3">
        <Link to="/">
          <button className="navbarBtnConfiguration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 me-12">Home</button>
        </Link>
      </div>
      <div className="mainTitle">
        <h2>Welcome to 7 Wonders of the World Explorer!</h2>
      </div>
      <div className="gap-x-4">
        {isLoggedIn ? (
          <div className="flex gap-x-4 mt-3">
            <Link to="/wonder/card" element={<WonderCard />} className="navbarWonderListBtnConfiguration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50">
              <p className="mt-2.5">Wonder List</p>
            </Link>
            <p>{user && user.name}</p>
            <button className="navbarBtnConfiguration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50" onClick={logOutUser}>Logout</button>
          </div>
        ) : (
          <div className="mt-3">
            <Link to="/signup">
                <button className="navbarBtnConfiguration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50">Signup</button>
            </Link>
            <Link to="/login">
                <button className="navbarBtnConfiguration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 ml-2.5">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;