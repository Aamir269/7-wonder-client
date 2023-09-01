import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wonder-list">7 Wonder List</Link></li>
          <li><Link to="/user-profile">Profile</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          {/* Add other navigation links here */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
