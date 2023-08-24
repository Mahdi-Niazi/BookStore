import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => (
  <>
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
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
