import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="inner-container">
        <h1 className="my-name">
          Samuel Y. Singer
        </h1>
        <img className="profile-picture" src={  require('./face.png') } alt="My face"/>
      </div>
    </div>
  )
}

export default Header;
