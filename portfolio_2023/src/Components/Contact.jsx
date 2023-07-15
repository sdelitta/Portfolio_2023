import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div id="contact" className="container py-5">
      <h2>Contact Me</h2>
      <form>
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
      </form>
      {/* Add your social media links here */}
    </div>
  );
}

export default Contact;
