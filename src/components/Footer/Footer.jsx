import React from "react";
import "./Footer.css";
import Software_Developer_Resume from "../../assets/Software_Developer_Resume.pdf";

const Footer = () => {
  return (
    <div className="footer" id="hire">
      <div className="footer-content">
        <div className="footer-column footer-col-img">
          <img src="/FinalLogo.png" alt="" />
        </div>
        <div className="footer-column">
          <p>Quick Links</p>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="footer-column">
          <p>Services</p>
          <ul>
            <li>Web developement</li>
            <li>Ai & IoT Solutions</li>
            <li>Training and Mentoring</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Get In Touch</p>
          <a className="download" href={Software_Developer_Resume} download>
            Download CV
          </a>
        </div>
      </div>
      <hr />
      <p className="text-center lastPara">
        &copy; 2024 Viplove Parsai. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
