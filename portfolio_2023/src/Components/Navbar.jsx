import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#343a40'}}>
            <div className="container-fluid">
                <div className="logo-container"></div>
                <a className="navbar-brand text-light" href="#home">Steven DeLitta</a>
                <button ref={buttonRef} className="navbar-toggler border-0" type="button" onClick={toggle} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isOpen && (
                    <div ref={dropdownRef} className="dropdown-menu bg-dark show py-2" style={{position: 'absolute', right: 0, top: '56px'}}>
                        <a className="dropdown-item text-light" href="#home">Home</a>
                        <a className="dropdown-item text-light" href="#about">About</a>
                        <a className="dropdown-item text-light" href="#skills">Skills</a>
                        <a className="dropdown-item text-light" href="#projects">Projects</a>
                        <a className="dropdown-item text-light" href="#experience">Experience</a>
                        <a className="dropdown-item text-light" href="#contact">Contact</a>
                        {/* Add more links here */}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;