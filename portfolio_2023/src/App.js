import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import "./App.css"

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div id="main">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;