import React from 'react';
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            IronFit<span>Elit</span>
        </div>
        <ul className="nav-links">
           <a href="#Hero"><li>Home</li></a>
            <a href="#Programs"><li>Programs</li></a>
            <a href="#Trainers"><li>Trainers</li></a>
            <a href="#Contact"><li>Contact</li></a>
        </ul>
        <button className='join-btn'>Join Now</button>
    </nav>
  )
};

export default Navbar;