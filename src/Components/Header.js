import React from 'react';
import './Header.css';
import oliveiraLabLogo from '../Assets/Lab Logo Final.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Oliveira Lab</h1>
        <p>Innovative Fluid Dynamics</p>
        <a href="#cta" className="cta-button">Multifluidics</a>
      </div>
      <img src={oliveiraLabLogo} alt="Oliveira Labs Logo" className="header-image" />
    </header>
  );
};

export default Header;
