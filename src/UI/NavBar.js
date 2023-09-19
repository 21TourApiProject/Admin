import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/logo.png';
import { formatDate } from '../utils/date';

const NavBar = props => {
  return (
    <div className="nav-bar">
      <Link to="/" className="link">
        <div className="nav-logo">
          <div className="nav-title">Admin</div>
        </div>
      </Link>
      <div className="nav-right">
        <div className="nav-time">{formatDate()}</div>
        <button className="nav-sign">Sign up</button>
      </div>
    </div>
  );
};

export default NavBar;
