import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src="src\assets\image1.png" alt="" />
        </div>
        <div className="about-text">
          <div className="text">
            <p className="actual-heading">About Me</p>
            <p className="actual-text">
              A passionate Computer Engineering graduate with a strong
              foundation in software development and AI-driven solutions. I
              specialize in crafting innovative tools for real-time analysis,
              smarter cities, sustainable farming, and seamless digital
              experiences. With hands-on experience in modern tech stacks and a
              flair for solving complex problems, I aim to deliver impactful
              results through technology.
            </p>
            <div className="progressBar">
              <div className="webProgress Commonprogress">
                <p>Programming Languages</p>
                <div className="progress-stacked">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Segment one"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    <div className="progress-bar bg-sunset"></div>
                  </div>
                </div>
              </div>
              <div className="webProgress Commonprogress">
                <p>Web Technology</p>
                <div className="progress-stacked">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Segment two"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    <div className="progress-bar bg-ocean"></div>
                  </div>
                </div>
              </div>
              <div className="webProgress Commonprogress">
                <p>Tools and Technology</p>
                <div className="progress-stacked">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Segment three"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  >
                    <div className="progress-bar bg-lavender"></div>
                  </div>
                </div>
              </div>
              <div className="webProgress Commonprogress">
                <p>Other's</p>
                <div className="progress-stacked">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Segment four"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  >
                    <div className="progress-bar bg-forest"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
