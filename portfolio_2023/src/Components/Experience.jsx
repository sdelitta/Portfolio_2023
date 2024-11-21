import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Experience() {
  return (
    <div id="experience" className="container py-5">
      <h2>Work Experience</h2>
      <div className="mt-4 resume-button">
        <a href="https://docs.google.com/document/d/1y_3bs3AjMjPLcX7JcLHzXjeFKnZVax9R4UGU6gawv84/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View My Resume
        </a>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>Web Developer</h4>
          <h5>Boot Camp Certification</h5>
          <h6>2021 - Present</h6>
          <p>Since 2021, I have dedicated myself to mastering web development, evolving from foundational JavaScript to architecting full-stack applications. I am a graduate of the General Assembly Software Engineering bootcamp, where I honed my skills in JavaScript, React, Bootstrap, and beyond. My work emphasizes the integration of advanced SEO strategies and cutting-edge AI technologies, ensuring each project meets modern standards for performance and innovation.</p>
        </div>
        <div className="col-12">
          <h4>AI Data Specialist</h4>
          <h5>Data Annotation</h5>
          <h6>2023 - Present</h6>
          <p>As an AI Data Specialist at Data Annotation, I work on curating and annotating data sets to train and improve AI models. This role involves a deep understanding of data patterns and the nuances required to optimize AI performance. My work directly contributes to enhancing the accuracy and efficiency of AI systems, ensuring they meet the specific needs of various projects.</p>
          <p>In this position, I leverage both technical skills and domain knowledge to deliver high-quality data annotations, playing a key role in the development of robust AI solutions.</p>
        </div>
        <div className="col-12">
          <h4>Non-Tech Work Experience</h4>
          <h5>Select Services</h5>
          <h6>2022 - Present</h6>
          <p>As a Direct Service Provider for individuals with epilepsy, I provide essential support to help them adapt to life outside their homes. This role demands strong communication skills to build trust and understanding with those I assist.</p>
          <p>Every day presents unique challenges, requiring me to adapt and respond effectively to ensure the well-being and progress of those in my care.</p>
        </div>
      </div>      
    </div>
  );
}

export default Experience;
