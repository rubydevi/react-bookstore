import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li className="logo-item">
        <Link className="nav-item logo-link" to="/">
          <span className="website-name">Bookstore CMS</span>
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/">Books</Link>
      </li>
      <li>
        <Link className="nav-item" to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
