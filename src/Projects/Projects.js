import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="project-container repeat-blue-block">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="project-title">PROJECTS</h1>
          <hr className="software-dash" />
          <img className="projects-icon icon" src={ require('./project-screen-shots/laptop.svg') } alt="Icon for the projects section"/>
        </div>
        <div className="right-container">
          <h2 className="project-1 projects-title">Palette Picker</h2>
            <img className="desktop" src={ require('./project-screen-shots/palette-picker.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/palette-picker-mobile.png') } alt="Mobile screen size." />
            <br />
            <a className="live-link" href="https://palette-picker-pwa-sam-singer.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/palette-picker-pwa" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-2 projects-title">Accordian Layout</h2>
            <img className="desktop" src={ require('./project-screen-shots/accordian.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/accordian-mobile.png') } alt="Mobile screen size." />
            <br />
            <a className="live-link" href="https://cache123.github.io/pattern-party/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/pattern-party" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-3 projects-title">Movie Tracker</h2>
            <img className="desktop" src={ require('./project-screen-shots/movie-tracker.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/movie-tracker-mobile.png') } alt="Mobile screen size." />
            <br />
            <a className="live-link" href="http://movie-tracker-sys.surge.sh/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/movie-tracker-2.0" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-4 projects-title">Swapi Box</h2>
            <img className="desktop" src={ require('./project-screen-shots/swapi-box.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/swapi-box-mobile.png') } alt="Mobile screen size." />
            <br />
            <a className="live-link" href="http://swapi-box-sys.surge.sh/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/swapi-box-2" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
        </div>
      </div>
    </div>
  )
}

export default Projects;
