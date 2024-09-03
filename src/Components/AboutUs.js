import React from 'react';
import './AboutUs.css';
import dualPumpImage from '../Assets/Pumprender.png'; //Change to the renders that wisdom gave. Also add a feature subtitle.

const AboutUs = () => {
  return (
    <section id="about-us" className="section">
      <div className="container">
        <div className="centered-content">
          <h2 className="title">About Us</h2>
          <p>
            Our company's  mission and values. See why customers trust our product.
          </p>
          <p>
          At Oliveira Labs, our mission is to revolutionize fluid control technology by designing and delivering innovative, efficient, and reliable pump solutions. We are committed to enhancing operational efficiency and environmental sustainability across industries, providing our customers with superior performance and peace of mind
          </p>
        </div>
        <div className="lab-description">
          <h3>Our Dual Pump Setup</h3>
          <div className="dual-pump-container">
            <div className="features-left">
              <ul>
                <li>High Precision</li>
                <li>Compact Design</li>
                <li>Low Maintenance</li>
              </ul>
            </div>
            <img src={dualPumpImage} alt="Dual Pump Setup" className="dual-pump-image" />
            <div className="features-right">
              <ul>
                <li>Easy to Operate</li>
                <li>Cost-Effective</li>
                <li>Modular</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
