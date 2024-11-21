import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Projects() {
  const [showModal, setShowModal] = useState(null);
  const handleShow = (projectName) => setShowModal(projectName);
  const handleClose = () => setShowModal(null);

  return (
    <div id="projects" className="container py-5">
      <h2>My Projects</h2>
      <Carousel className="project-carousel">
        <Carousel.Item>
          <a href="http://www.GothicGetaways.com" target="_blank" rel="noopener noreferrer">
            <img className="d-block w-100" src="/Assets/Gothic.png" alt="Gothic Getaways" />
          </a>
          <div className="project_info">
            <h3><a href="http://www.GothicGetaways.com" target="_blank" rel="noopener noreferrer">Gothic Getaways</a></h3>
            <p>Gothic Getaways is a unique blog site that delves into the niche world of gothic destinations and attractions. The site features visually captivating images generated using AI technology, paired with finely curated content that offers readers deep insights into gothic travel experiences. The site is also optimized for mobile users, ensuring a seamless and responsive interface across all devices.</p>
            <Button variant="primary" onClick={() => handleShow('GothicGetaways')}>Read More</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://www.PetCarePurrsuit.com" target="_blank" rel="noopener noreferrer">
            <img className="d-block w-100" src="/Assets/PetCare.png" alt="Pet Care Purrsuit" />
          </a>
          <div className="project_info">
            <h3><a href="http://www.PetCarePurrsuit.com" target="_blank" rel="noopener noreferrer">Pet Care Purrsuit</a></h3>
            <p>Pet Care Purrsuit is a comprehensive resource for pet owners, offering a wide range of articles on pet care and product recommendations. The site integrates AI-generated visuals and a custom search engine to help users easily find information tailored to their needs. It also supports affiliate marketing, enhancing its commercial potential.</p>
            <Button variant="primary" onClick={() => handleShow('PetCarePurrsuit')}>Read More</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://boo-cursor.web.app/" target="_blank" rel="noopener noreferrer">
            <img className="d-block w-100" src="/Assets/Boo.png" alt="Boo" />
          </a>
          <div className="project_info">
            <h3><a href="https://boo-cursor.web.app/" target="_blank" rel="noopener noreferrer">Super Mario Animated Cursor</a></h3>
            <p>This project features an interactive animation inspired by the Boo character from the Super Mario franchise. The "mousemove" animation mimics Boo's behavior of chasing when the user's back is turned and freezing when confronted, with expressions changing based on cursor movements.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      <Modal className="modal" show={showModal !== null} onHide={handleClose}>
        <Modal.Header className="modal_header" closeButton>
          <Modal.Title className="modal_title"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          {showModal === 'GothicGetaways' && (
            <div id="modal-background">
              <p>Gothic Getaways is a specialized blog dedicated to exploring gothic-themed destinations and attractions. The site is rich in AI-generated imagery and features well-curated content that guides readers through the world of gothic travel. A custom search engine allows users to filter articles based on their interests, making it easier to find relevant content. The site is designed for optimal performance on both desktop and mobile devices.</p>
            </div>
          )}
          {showModal === 'PetCarePurrsuit' && (
            <div id="modal-background">
              <p>Pet Care Purrsuit serves as a detailed guide for pet owners, offering articles on pet care, product reviews, and more. The site is equipped with a custom search engine for easy navigation and features AI-generated visuals that enhance the user experience. Additionally, it incorporates affiliate marketing to monetize content effectively.</p>
            </div>
          )}
          {/* Add more descriptions for other projects as needed */}
        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <Button className="modal_button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Projects;