// Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/context.auth";
import WonderCard from "../../Pages/WonderCard/wonderCard";
import './navbar.css';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/">
            <button className="navbarBtn Configuration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 me-12">Home</button>
          </Link>
        </div>
        <div className="navbarRight">
          {isLoggedIn ? (
            <div className="flex gap-x-4">
              <Link to="/wonder/card" element={<WonderCard />} className="navbarWonderListBtn Configuration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50">
                <p className="mt-2.5">Wonder List</p>
              </Link>
              <p>{user && user.name}</p>
              <button className="navbarBtn Configuration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50" onClick={logOutUser}>Logout</button>
            </div>
          ) : (
            <div className="flex gap-x-4">
              <Link to="/signup">
                <button className="navbarBtn Configuration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50">Signup</button>
              </Link>
              <Link to="/login">
                <button className="navbarBtn Configuration border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mainTitle">
        <h2>Welcome to 7 Wonders of the World Explorer!</h2>
      </div>
    </div>
  );
}

export default Navbar;
