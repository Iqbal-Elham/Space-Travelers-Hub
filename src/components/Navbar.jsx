import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import planet from './styles/images/planet.png';

const Navbar = () => {
  const clickedStyle = ({ isActive }) => ({
    color: isActive ? 'black' : '#a19e9e',
    textDecoration: isActive ? 'underline' : 'none',

  });

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>
          <img src={planet} alt="planet logo" width="70" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <ul>
          <li>
            <NavLink style={clickedStyle} to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink style={clickedStyle} to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink style={clickedStyle} to="/my-profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
