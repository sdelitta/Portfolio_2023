import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  return (
    <div id="skills" className="container py-5">
      <h2>My Skills</h2>
      <div className="my-3">
        <h4>JavaScript</h4>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
        </div>
      </div>
      {/* Add more skills here */}
    </div>
  );
}

export default Skills;
