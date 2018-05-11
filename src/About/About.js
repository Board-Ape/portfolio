import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="section-title fade-in">ABOUT</h1>
          <hr className="section-dashes fade-in"/>
          <img className="about-icon icon fade-in" src={ require('./001-people.svg') } alt="Icon under the about section"/>
        </div>
        <div className="right-container">
          <h2 className="title-name fade-in"> Samuel Y Singer </h2>
          <p className="first-paragraph para fade-in">
           Sam is an aspiring developer who strives to write code based upon
           a few key principals: scalability, performance,
           reusability and great user experience.
          <br />
           His strengths surround code written in JavaScript, utilizing a
           variety of the latest technologies, frameworks and libraries.
          </p>
          <p className="second-paragraph para fade-in">
            As an imaginative designer and empathetic developer, it is critical
            to him to create code that conforms to the industry best practices,
            standards and accessibility. The design choices Sam strives for are
            simple, refined and intuitive UI/UX.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
