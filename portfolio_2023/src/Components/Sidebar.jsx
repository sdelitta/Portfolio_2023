import React from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Sidebar.css"

function Sidebar() {
    return (
        <div className="d-none d-lg-block px-0" id="sidebar-wrapper">
            <div id="sidebar-top" className="px-3 py-5 text-white">
                <Logo />
                {/* <img src="path-to-your-logo.jpg" alt="Your Name" className="img-fluid mb-3" /> */}
                <h3>Steve</h3>
                <p>Web Developer</p>
            </div>
            <div className="list-group list-group-flush">
                <a href="#home" className="list-group-item list-group-item-action p-3">Home</a>
                <a href="#about" className="list-group-item list-group-item-action p-3">About</a>
                <a href="#skills" className="list-group-item list-group-item-action p-3">Skills</a>
                <a href="#projects" className="list-group-item list-group-item-action p-3">Projects</a>
                <a href="#experience" className="list-group-item list-group-item-action p-3">Experience</a>
                <a href="#contact" className="list-group-item list-group-item-action p-3">Contact</a>
            </div>
            <div className="list-group-item p-3 text-center">
                <a href="https://github.com/your-github-username" className="text-white me-3">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://www.instagram.com/your-instagram-username" className="text-white">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
