import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = () => (
  <div className="header__wrapper">
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  </div>
);

export default Header;
