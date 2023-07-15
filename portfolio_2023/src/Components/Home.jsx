import React from 'react';

function Home() {
  return (
    <div id="home" className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>A brief introduction about yourself...</p>
        <a href="#about" className="btn btn-primary">Learn More About Me</a>
      </div>
    </div>
  );
}

export default Home;
