import React from 'react';
import midjourneyLogo from '../CSS/Midjourney_Emblem.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div id="contact" className="container-fluid py-12">
      <h2>Contact Me</h2>
      <section className="contact-section">
        <div className="row contact-info">
          <div className="col-sm-6 col-md-6 contact-left">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:sdelitta@gmail.com">sdelitta@gmail.com</a>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:914-830-6885">914-830-6885</a>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/sdelitta" target="_blank" rel="noreferrer">Github</a>
            </div>

            <div className="contact-item midjourney">
              <img src={midjourneyLogo} alt="Midjourney"/>
              <a href="https://www.midjourney.com/app/users/3415f0ab-8a2f-414e-a347-6e013e702a1b/" target="_blank" rel="noreferrer">Midjourney Profile</a>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 contact-right">
            <div className="contact-item">
              <FontAwesomeIcon icon={faYoutube} />
              <a href="https://www.youtube.com/gutshotfilms" target="_blank" rel="noreferrer">Personal Youtube</a>            
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faYoutube} />            
              <a href="https://www.youtube.com/@stevenjames2681" target="_blank" rel="noreferrer">Drumming Youtube</a>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faInstagram} />
              <a href="https://www.instagram.com/steve__toast/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          
        </div>
      </section>
      {/* <form>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form> */}
      {/* Add your social media links here */}
    </div>
  );
}

export default Contact;