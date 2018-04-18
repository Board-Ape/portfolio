import React from 'react';
import './Header.css';
import Quote from '../Quote/Quote';

const Header = () => {
  return (
    <div className="header-container">
      <div className="inner-container">
        <h1 className="my-name">
          SAMUEL SINGER
        </h1>
      </div>
      <div className="description-container">
        <h2 className="software">SOFTWARE DEVELOPER</h2>
        <hr className="software-dash"/>
        <h3 className="description">
          Creating full scale applications utilizing
          the lastest in technologies and frameworks.
        </h3>
      </div>
      <Quote />
    </div>
  )
}

export default Header;
