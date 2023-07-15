import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Experience() {
  return (
    <div id="experience" className="container py-5">
      <h2>Work Experience</h2>
      <div className="row">
        <div className="col-lg-6">
          <h4>Job Title 1</h4>
          <h5>Company Name 1</h5>
          <h6>Start Date - End Date</h6>
          <p>A brief description of your role and responsibilities...</p>
        </div>
        <div className="col-lg-6">
          <h4>Job Title 2</h4>
          <h5>Company Name 2</h5>
          <h6>Start Date - End Date</h6>
          <p>A brief description of your role and responsibilities...</p>
        </div>
      </div>
      {/* Add more rows here for more jobs */}
    </div>
  );
}

export default Experience;
