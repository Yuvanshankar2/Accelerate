

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul  >
        <li className="li">
          <Link to="/">Home</Link>
        </li>
        <li className="li">
          <Link to="/about">About</Link>
        </li>
        <li className="li">
          <Link to="/roster">Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
