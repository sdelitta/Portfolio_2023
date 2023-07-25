import React from 'react';

function Home() {
  return (
    <div id="home" className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div>
        <div className="welcome">
          <h1>Hi,</h1>
          <h1>I'm Steve,</h1>
          <h1>Web Developer</h1>
          <p>Front End Developer / SEO Specialist</p>
        </div>
        <a href="#about" className="btn btn-primary">Learn More About Me</a>
      </div>
    </div>
  );
}

export default Home;
