import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div id="about" className="container py-5" data-aos="fade-up">
      <div className="row justify-content-center">
      <div className="col-lg-7 d-flex">
  <div>
    <h2>About Me</h2>
    <p>I'm a dedicated Web Developer and SEO specialist from Westchester, NY. Since graduating from the General Assembly Software Engineering bootcamp, I've launched a number of professional websites and developed a knack for driving traffic to their domains by implementing the latest strategic SEO tactics, each time refining my craft and learning more about the digital world we live in.</p>
    <div>
    <img src="/Assets/HeadShot.jpg" className="img-fluid rounded-circle mb-3 floating-image" alt="Your Name" />
  </div>
    <p>My tool belt is filled with a variety of languages and technologies including JavaScript, CSS, Bootstrap, HTML, and Python. For database management, I've dabbled in MongoDB, Django, and SQL and I've launched several web apps with Firebase. I'm a big fan of React for most projects, but I've also been known to use Gatsby for creating smooth single-page applications. Want to see how I manage projects? Check out my GitHub! And when it comes to planning and design, you'll often find me using LucidChart, Trello, and Figma.</p>
    <p>What fuels me is the impact I can make through my projects. One of my personal favorites is the Petcare web app I developed - a platform that connects potential pet owners with adoptable pets based on their location and preferences. It's projects like these that combine my love for coding with my passion for animal welfare that really get me fired up.</p>
    <p>Looking ahead, I dream of joining a company that aligns with my personal passions, whether that be animal welfare, music, cinema, culinary pursuits, or social betterment. I envision myself starting as a front end developer in a spirited startup, before eventually stepping into a senior role where I can guide and mentor a team.</p>
    <p>Want to chat more? Just hit the button below to contact me. I'm always open to discussing potential projects, shared interests, or the latest web development trends.</p>
  </div>
</div>

      </div>
    </div>
  );
  
}

export default About;