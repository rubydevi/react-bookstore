import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link className="logo-link" to="/">
      <span className="website-name">Bookstore CMS</span>
    </Link>
    <ul className="nav-list">
      <li>
        <NavLink className="nav-item" to="/" activeclassname="active">Books</NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/categories" activeclassname="active">Categories</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">
        <FaUser />
      </span>
    </button>
  </nav>
);

export default Navbar;
