import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  return (
    <div id="projects" className="container py-5">
      <h2>My Projects</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          {/* Add more buttons here for more projects */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="path-to-your-image.jpg" className="d-block w-100" alt="Project 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Project 1</h5>
              <p>A brief description of the project...</p>
            </div>
          </div>
          {/* Add more items here for more projects */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
