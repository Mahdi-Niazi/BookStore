import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import './styles/Navigation.css';

const Navigation = () => {
  const clickedStyle = ({ isActive }) => ({
    color: isActive ? 'black' : '#a19e9e',
  });
  return (
    <>
      <nav className="navbar">
        <>
          <NavLink to="/">
            <h1 className="bookstoreTitle">Bookstore CMS</h1>
          </NavLink>
        </>
        <ul className="nav-item">
          <li>
            <NavLink style={clickedStyle} to="/">
              <span className="books">Books</span>
            </NavLink>
          </li>
          <li>
            <NavLink style={clickedStyle} to="/categories">
              <span className="category">Categories</span>
            </NavLink>
          </li>
        </ul>
        <div className="userIconContainer">
          <GoPerson className="userIcon" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
