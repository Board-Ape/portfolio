import React from 'react';
import ParticleBoard from '../Particles/Particles.js';
import './Body.css';

const Body = () => {
  return (
    <div className="body-container">
      <h1 className="hey">Hey there,<br/><span className="welcome">Welcome to my personal site!</span></h1>
      <img className="background-table" src={ require('./crows.jpg') } alt="Wooden desk with a lamp" />
      <ParticleBoard />
    </div>
  )
}

export default Body;
