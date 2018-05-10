import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container repeat-blue-block">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="project-title">EDUCATION</h1>
          <hr className="software-dash" />
          <img className="education-icon icon" src={ require('./mortarboard.svg') } alt="Icon for the education section" />
        </div>
        <div className="right-container">
          <h2 className="projects-title">Turing School of Software & Design</h2>
          <h3 className="education-description">Front-End Engineering Certificate - 1500+ Hrs</h3>
          <h4 className="date-range">06, 2017 - 03, 2018</h4>
          <hr className="software-dash spacing" />
          <h2 className="projects-title">Colorado State University</h2>
          <h3 className="education-description">B.A. in Psychology</h3>
          <h4 className="date-range">08, 2008 - 05, 2012</h4>
          <hr className="software-dash spacing last-hr" />
        </div>
      </div>
    </div>
  )
}

export default Education;
