import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6">
           {/* Replace with your image */}
          <img src="path-to-your-image.jpg" className="img-fluid rounded-circle mb-3" alt="Your Name" />
        </div>
        <div className="col-lg-6">
          <h2>About Me</h2>
          <p>A detailed description about yourself...</p>
        </div>
      </div>
    </div>
  );
}

export default About;
