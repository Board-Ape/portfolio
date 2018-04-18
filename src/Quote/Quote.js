import React from 'react';
import './Quote.css';

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="inner-container">
        <h1 className="quote-text">
        "You miss 100% of the shots you don't take!"
        <br />
          <span className="quote-name">
          - Wayne Gretzky
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Quote;
