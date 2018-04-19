import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="inner-container contact-border">
        <div className="left-container">
          <h1 className="section-title">CONTACT</h1>
          <hr className="section-dashes"/>
          <img className="contact-icon icon" src={ require('./mail.svg') } alt="Icon under representing contact me" />
        </div>
        <div className="right-container">
          <h2 className="title-name">Let's Connect</h2>
          <hr className="section-dashes"/>
          <div className="icon-row-1">
            <a href="https://www.linkedin.com/in/samuel-y-singer/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon" src={ require('./linkedin.png') } alt="Icon LinkedIn"/></a>
            <a href="https://www.facebook.com/samuel.singer.5" target="_blank" rel="noopener noreferrer"><img className="facebook-icon" src={ require('./facebook.png') } alt="Icon Facebook"/></a>
            <img className="gmail-icon" src={ require('./gmail.png') } alt="Icon Gmail"/>
          </div>
        </div>
      </div>
      <div className="email-container">
        <h2 className="email-address">samuel.singer1@gmail.com</h2>
      </div>
    </div>
  )
}

export default Contact;
