import React from "react";
import "./Home.css";
import Software_Developer_Resume from "../../assets/Software_Developer_Resume.pdf";
const Home = () => {
  return (
    <div className="home container" id="home">
      <div className="home-content">
        <p>Innovative Software Developer & AI Enthusiast</p>
        <span>
          Blending advanced algorithms and real-time analytics to build smarter
          cities, sustainable farming tools, and secure online experiences.
        </span>
        <div className="view-cv">
          <a href="#projects" className="view">
            View Projects
          </a>
          <a className="download" href={Software_Developer_Resume} download>
            Download CV
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src="src\assets\image1.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
