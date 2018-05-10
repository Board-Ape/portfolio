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
            <p className="project-description">
              <strong>Palette Picker</strong> allows users to selectively generate random color palettes. Capabilities include: lock-in preferred color
              selections, and create/save/delete palettes and hex code display of generated color. Utilizing NodeJS with RESTful API design,
              this fully functioning backend is displayed using JavaSript, jQuery, HTML, and CSS.
            </p>
            <a className="live-link" href="https://palette-picker-pwa-sam-singer.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/palette-picker-pwa" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-2 projects-title">Movie Tracker</h2>
            <img className="desktop" src={ require('./project-screen-shots/movie-tracker.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/movie-tracker-mobile.png') } alt="Mobile screen size." />
            <br />
            <p className="project-description">
              <strong>Movie Tracker</strong> allows users to populate the top 20 movies currently playing. Capabilities include: create/save/retrieve
              user log-in, favorite/unfavorite movie selections, poster flips to provide movie description. Utilizing JavaSript, postgreSQL, React/Redux,
              HTML, SASS.
            </p>
            <a className="live-link" href="http://movie-tracker-sys.surge.sh/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/movie-tracker-2.0" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-3 projects-title">Enigma</h2>
            <img className="desktop" src={ require('./project-screen-shots/enigma-opening.png') } alt="Desktop screen size." />
            <img className="desktop" src={ require('./project-screen-shots/enigma-end.png') } alt="Desktop screen size." />
            <br />
            <p className="project-description">
              <strong>Enigma</strong> is a game rendition of the mobile hit Flappy Bird. Capabilities include: custom artwork, collision detection/real
              world physics, score tracking. Utilizing JavaSript, jQuery, HTML, and CSS.
            </p>
            <a className="live-link" href="https://enigma-sys.surge.sh/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/JorgeEdPerezGa/game-time" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-4 projects-title">Accordian Layout</h2>
            <img className="desktop" src={ require('./project-screen-shots/accordian.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/accordian-mobile.png') } alt="Mobile screen size." />
            <br />
            <p className="project-description">
              <strong>Accordian Layout</strong> allows users to create an accordian portfolio. Capabilities include: click through and display of
              accordian cards, smooth/simple UI/UX, responsive web design for mobile. Utilizing JavaSript, jQuery, HTML, and CSS.
            </p>
            <a className="live-link" href="https://cache123.github.io/pattern-party/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/pattern-party" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing" />
          <h2 className="project-5 projects-title">Swapi Box</h2>
            <img className="desktop" src={ require('./project-screen-shots/swapi-box.png') } alt="Desktop screen size." />
            <img className="mobile" src={ require('./project-screen-shots/swapi-box-mobile.png') } alt="Mobile screen size." />
            <br />
            <p className="project-description">
              <strong>Swapi Box</strong> allows users to generate cards of information pertaining to Star Wars. Capabilities include: selecting to view
              characters/vehicles/worlds, adding/deleting favorites, scroll UX text. Utilizing JavaSript, React, Enzyme, HTML, and SASS.
            </p>
            <a className="live-link" href="http://swapi-box-sys.surge.sh/" target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href="https://github.com/Cache123/swapi-box-2" target="_blank" rel="noopener noreferrer">Github Code</a>
            <hr className="software-dash spacing last-hr" />
        </div>
      </div>
    </div>
  )
}

export default Projects;
