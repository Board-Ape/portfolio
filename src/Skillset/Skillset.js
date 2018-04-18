import React from 'react';
import './Skillset.css';

const Skillset = () => {
  return (
    <div className="skillset-container">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="section-title">SKILLSET</h1>
          <hr className="section-dashes"/>
          <img className="skillset-icon icon" src={ require('./tech-icons/database.svg') } alt="Icon under representing skillset" />
        </div>
        <div className="right-container">
          <h2 className="title-name"> Technologies </h2>
          <div className="icon-row-1">
            <img className="icon-s js-icon" src={ require('./tech-icons/js.png') } alt="Icon JavaScript"/>
            <img className="icon-s html-icon" src={ require('./tech-icons/html.png') } alt="Icon HTML"/>
            <img className="icon-s css-icon" src={ require('./tech-icons/css.png') } alt="Icon CSS"/>
            <img className="icon-s sass-icon" src={ require('./tech-icons/sass.svg') } alt="Icon CSS"/>
          </div>
          <div className="icon-row-2">
            <img className="icon-s react-icon" src={ require('./tech-icons/react.png') } alt="Icon React"/>
            <img className="icon-s redux-icon" src={ require('./tech-icons/redux.png') } alt="Icon Redux"/>
            <img className="icon-s router-icon" src={ require('./tech-icons/router.png') } alt="Icon Router"/>
          </div>
          <div className="icon-row-3">
            <img className="icon-s node-icon" src={ require('./tech-icons/node.png') } alt="Icon Node"/>
            <img className="icon-s postgresql-icon" src={ require('./tech-icons/postgresql.png') } alt="Icon PostgreSQL"/>
            <img className="icon-s heroku-icon" src={ require('./tech-icons/heroku.png') } alt="Icon Heroku"/>
          </div>
          <div className="icon-row-4">
            <img className="icon-s jquery-icon" src={ require('./tech-icons/jquery.png') } alt="Icon jQuery"/>
            <img className="icon-s jest-icon" src={ require('./tech-icons/jest.png') } alt="Icon Jest"/>
            <img className="icon-s mocha-chai-icon" src={ require('./tech-icons/mocha-chai.png') } alt="Icon Mocha/Chai"/>
          </div>
          <div className="icon-row-5">
            <img className="icon-s Github-icon" src={ require('./tech-icons/Github.svg') } alt="Icon Github"/>
            <img className="icon-s circle-ci-icon" src={ require('./tech-icons/circle-ci.png') } alt="Icon Circle-CI"/>
            <img className="icon-s npm-icon" src={ require('./tech-icons/npm.png') } alt="Icon NPM"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillset;
