import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Experience() {
  return (
    <div id="experience" className="container py-5">
      <h2>Work Experience</h2>
      <div className="row">
        <div className="col-lg-6">
          <h4>Web Developer</h4>
          <h5>Self Learning</h5>
          <h6>2021 - Present</h6>
          <p>Over the past two years, I've been focused on learning web development, starting from the basics of Javascript to creating full-stack web applications. I've completed the General Assembly Software Engineering bootcamp, and have built several projects using JavaScript, React, Bootstrap, and more while utilizing the latest SEO strategies and Ai technologies.</p>
        </div>
        <div className="col-lg-6">
          <h4>Non-Tech Work Experience</h4>
          <h5>Select Services</h5>
          <h6>2022 - Present</h6>
          <p>As a Direct Service Provider for individuals who suffer with epilepsy, I provide guidance and aid to those who are having difficulty adapting to life outside their home. In this role, communication is critical. I've found progress cannot be made until trust and a bond is made through attentive communication and understanding.</p>

          <p>The role of a DSP also requires the ability to assess and adapt to new goals and challenges on a daily basis. For instance, the individual may be resistant to the scheduled plan for the day and they may have trouble communicating their apprehension. Recognizing subtle cues, responding kindly and offering solutions in the moment is necessary to maintain their trust.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
