import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skillset from '../Skillset/Skillset';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Skillset />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
