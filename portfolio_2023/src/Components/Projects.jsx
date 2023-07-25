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
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/Assets/Gothic.png" alt="Gothic Getaways" />
          <Carousel.Caption>
            <h3><a href="http://www.GothicGetaways.com" target="_blank" rel="noopener noreferrer">Gothic Getaways</a></h3>
            <div>
              <p>Gothic Getaways, launched in June 2023, is a testament to the rapid strides I've made in web development and digital marketing. This intriguing blog site delves into the fascinating niche of gothic destinations and attractions, offering readers unique insights and engaging content. What sets Gothic Getaways apart is its foundation in solid SEO practices, drawing upon my extensive experience with tools like Google Analytics and Google Console to drive site traffic.</p>
            </div>
            <Button variant="primary" onClick={() => handleShow('GothicGetaways')}>
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Assets/PetCare.png" alt="Pet Care Purrsuit" />
          <Carousel.Caption>
            <h3><a href="http://www.PetCarePurrsuit.com" target="_blank" rel="noopener noreferrer">Pet Care Purrsuit</a></h3>
            <div>
              <p>Pet Care Purrsuit is a passion project launched in January 2023 that marries my love for pets with my skills in web development and digital marketing. The site, built using JavaScript and React, serves as a comprehensive resource for pet owners, offering a range of articles focused on pet care and product recommendations.</p>
            </div>
            <Button variant="primary" onClick={() => handleShow('PetCarePurrsuit')}>
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Assets/Boo.png" alt="Boo" />
          <Carousel.Caption>
            <h3><a href="https://boocursor.netlify.app/" target="_blank" rel="noopener noreferrer">Super Mario Animated Cursor</a></h3>
            <p>The adorable spectre from the Super Mario franchise, Boo, is known for giving chase when our heroes back is turned, but then cowardly freezes in its tracks when Mario confronts it. This "mousemove" animation is meant to mimic those behaviors as well as change expressions depending on when the user moves their cursor.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Modal show={showModal !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showModal === 'GothicGetaways' && (
            <div id="modal-background">
            <p>Gothic Getaways, launched in June 2023, is a testament to the rapid strides I've made in web development and digital marketing. This intriguing blog site delves into the fascinating niche of gothic destinations and attractions, offering readers unique insights and engaging content. What sets Gothic Getaways apart is its foundation in solid SEO practices, drawing upon my extensive experience with tools like Google Analytics and Google Console to drive site traffic.</p>

            <p>In the creation of Gothic Getaways, I was able to significantly reduce the development time compared to my previous project, Pet Care Purrsuit. This accomplishment speaks to my growing proficiency in building efficient, high-performance websites. Like Pet Care Purrsuit, Gothic Getaways also utilizes affiliate marketing and innovative AI image generation technology, Midjourney, to enhance user engagement.</p>

            <p>However, Gothic Getaways goes a step further by incorporating a custom search engine that allows users to easily filter through articles, providing a more personalized user experience. The site is also optimized for mobile users, leveraging Bootstrap to ensure a seamless and responsive interface across all devices.</p>

            <p>Gothic Getaways represents the culmination of my learning journey so far, combining all the skills and experiences I've gained into a refined, efficient, and user-focused website that serves a distinct niche.</p>
          </div>
          )}
          {showModal === 'PetCarePurrsuit' && (
            <div id="modal-background">
            <p>Pet Care Purrsuit is a passion project launched in January 2023 that marries my love for pets with my skills in web development and digital marketing. The site, built using JavaScript and React, serves as a comprehensive resource for pet owners, offering a range of articles focused on pet care and product recommendations.</p>
          
            <p>In the creation of Pet Care Purrsuit, I utilized Firebase for web app deployment and database management, ensuring a seamless and responsive user experience. To optimize the site's reach and engagement, I deployed strategic SEO tactics, leveraging tools like Google Analytics and Google Console to gather insightful data and inform my SEO decisions.</p>

            <p>Moreover, Pet Care Purrsuit also integrates innovative AI image generation technology, Midjourney, enhancing the site's visual appeal and user engagement. The project not only allowed me to deepen my technical skills but also offered valuable insights into affiliate marketing strategies, bolstering the site's commercial potential.</p>

            <p>Pet Care Purrsuit is more than just a blog site - it is a testament to my ability to create meaningful and impactful web experiences that cater to specific user needs and interests.</p>
          </div>
          )}
          {/* Add more lines as needed for each project */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}

export default Projects;