import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none pe-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">Steven DeLitta</a>
                <button ref={buttonRef} className="navbar-toggler border-0" type="button" onClick={toggle} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isOpen && (
                    <div ref={dropdownRef} className="dropdown-menu show py-2" style={{position: 'absolute', right: 0, top: '56px'}}>
                        <a className="dropdown-item" href="#home">Home</a>
                        <a className="dropdown-item" href="#about">About</a>
                        <a className="dropdown-item" href="#skills">Skills</a>
                        <a className="dropdown-item" href="#projects">Projects</a>
                        <a className="dropdown-item" href="#experience">Experience</a>
                        <a className="dropdown-item" href="#contact">Contact</a>
                        {/* Add more links here */}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;