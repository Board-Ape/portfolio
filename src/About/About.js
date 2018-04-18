import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="section-title">ABOUT</h1>
          <hr className="section-dashes"/>
          <img className="about-icon icon" src={ require('./001-people.svg') } alt="Icon under the about section"/>
        </div>
        <div className="right-container">
          <h2 className="title-name"> Samuel Y Singer </h2>
          <p className="first-paragraph para">
           Sam is an aspiring developer who strives to write code based around
           a few key principals, but are not limited to: scalability, performance,
           reusability and great user experience.
          <br />
           His strengths surround code written in JavaScript, utilizing a
           variety of the latest technologies, frameworks and libraries.
          </p>
          <p className="second-paragraph para">
            As an imaginative designer and empathetic developer, creating code
            that conforms to the industry best practices, standards and
            accessibility are critical to him. The design choice Sam often
            strives for are simple, refined and intuitive UI/UX.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;

// May or may not use in the future
// <br />
// <img className="profile-picture" src={  require('./sam-singer.jpg') } alt="My face"/>
// <p className="hover-darken-text">HOVER TO DARKEN</p>
