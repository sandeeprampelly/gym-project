import React from 'react';
import './styles/Hero.css';
const Hero = () => {
  return (
    <section className="hero" id='Hero'>
        <div className="hero-overlay">
            <div className='hero-content'>
                <h1 className="hero-title">TRANSFORM YOUR <span>BODY</span> & MIND</h1>
                <p className="hero-subtitle">Join  transformed <strong>IronFit Elite</strong> -with our expert training programs 
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Join Now</button>
                    <button className="btn-secondary">Explore Programs</button>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Hero;