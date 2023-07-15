import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
    return (
        <div className="border-end bg-white d-none d-lg-block" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Steven DeLitta</div>
            <div className="list-group list-group-flush">
                <a href="#home" className="list-group-item list-group-item-action list-group-item-light p-3">Home</a>
                <a href="#about" className="list-group-item list-group-item-action list-group-item-light p-3">About</a>
                <a href="#skills" className="list-group-item list-group-item-action list-group-item-light p-3">Skills</a>
                <a href="#projects" className="list-group-item list-group-item-action list-group-item-light p-3">Projects</a>
                <a href="#experience" className="list-group-item list-group-item-action list-group-item-light p-3">Experience</a>
                <a href="#contact" className="list-group-item list-group-item-action list-group-item-light p-3">Contact</a>
            </div>
        </div>
    );
}

export default Sidebar;