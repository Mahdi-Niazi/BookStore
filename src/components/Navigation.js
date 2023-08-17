import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navbar">
    <div>
      <Link to="/bookstore-cms/">
        <h1>Bookstore CMS</h1>
      </Link>
    </div>
    <ul className="nav-item">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/bookstore-cms/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
