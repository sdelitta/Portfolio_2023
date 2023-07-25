import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row align-items-center justify-content-between text-center">
                    <div className="col-6 col-md-3">
                        <p>&copy; 2023 Steven DeLitta</p>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <p className="mb-0">Email: your-email@example.com</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <a href="https://github.com/your-github-username" className="text-white me-3">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://www.instagram.com/your-instagram-username" className="text-white">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;