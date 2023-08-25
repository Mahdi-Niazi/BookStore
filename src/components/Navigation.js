import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => (
  <>
    <nav className="navbar">
      <>
        <Link to="/bookstore-cms/">
          <h1 className="bookstoreTitle">Bookstore CMS</h1>
        </Link>
      </>
      <ul className="nav-item">
        <li>
          <Link to="/">
            <span className="books">Books</span>
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <span className="category">Categories</span>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
