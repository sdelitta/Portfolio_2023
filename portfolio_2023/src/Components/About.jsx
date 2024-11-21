import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 d-flex">
          <div>
            <h2>About Me</h2>
            <p>I’m a Web Developer and SEO enthusiast based in Westchester, NY, with a passion for creating websites that are not only functional but also enjoyable to use. I love working with modern tools like React, MongoDB, and SQL to bring ideas to life, and I’m always looking for ways to make the web a little better—whether that’s through clean code or innovative SEO strategies.</p>
            <div>
              <img src="/Assets/HeadShot.jpg" className="img-fluid rounded-circle mb-3 floating-image" alt="Headshot" />
            </div>
            <p>Beyond the technical side of things, I really care about design and user experience. I enjoy making sure that the websites I build look great and are easy to navigate, so people have a smooth and enjoyable experience. I also use tools like Figma, Trello, and LucidChart to keep things organized and make sure projects stay on track.</p>
            <p>One of my most rewarding projects was building a pet adoption app that matches people with adoptable animals based on their preferences and location. It was a project that combined my technical skills with something I’m passionate about—helping animals find loving homes.</p>
            <p>I’m always excited to collaborate with people who are passionate about what they do, especially when it comes to causes I care about—like animal welfare, music, film, or food. In the future, I’d love to grow into a senior developer role where I can help lead a team and mentor others to reach their full potential.</p>
            <p>If you’re working on something interesting and think I could help, I’d love to connect and chat more about how we can collaborate!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
