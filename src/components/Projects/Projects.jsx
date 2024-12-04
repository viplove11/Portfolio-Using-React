import React from "react";
import "./Projects.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Tasty Bite's",
      imgSrc: "/tasty bites.jpg",
      githubLink: "https://github.com/viplove11/Tasty-Bites-Using-MERN.git",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink: "https://tasty-biites.netlify.app/",
    },
    {
      title: "GreenSense AI",
      imgSrc: "/Greensense.jpg",
      githubLink:
        "https://github.com/viplove11/GreenSenseAI-Revolutionize-Plant-Care.git",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink:
        "https://github.com/viplove11/GreenSenseAI-Revolutionize-Plant-Care.git",
    },
    {
      title: "Traffic Sense AI",
      imgSrc: "/trafficcSense.jpg",
      githubLink:
        "https://github.com/viplove11/Traffic-Sense-AI-Smarter-Cities-Seamless-Routes.git",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink:
        "https://github.com/viplove11/Traffic-Sense-AI-Smarter-Cities-Seamless-Routes.git",
    },
    {
      title: "VIP Fortune Banking Application",
      imgSrc: "/bank application.png",
      githubLink:
        "https://github.com/viplove11/Online-Banking-Application-using-Java.git",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink:
        "https://github.com/viplove11/Online-Banking-Application-using-Java.git",
    },
    {
      title: "Gemini 2.0",
      imgSrc: "/gemini.jpg",
      githubLink: "https://github.com/viplove11/Gemini-Clone.git",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink: "https://cwv-gemini.netlify.app",
    },
    {
      title: "Home Automation Using IoT",
      imgSrc: "/home automation interface.png",
      githubLink: "https://github.com/viplove11",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink: "https://github.com/viplove11",
    },
    {
      title: "Expense Ease",
      imgSrc: "/expense tracking application interface.png",
      githubLink:
        "https://github.com/viplove11/Expense-Trcaker-Using-React.git",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink: "https://cwv-expense-ease.netlify.app",
    },
    {
      title: "'Curious for More? Explore My GitHub!'",
      imgSrc: "/version.png",
      githubLink: "https://github.com/viplove11/",
      linkedInLink: "www.linkedin.com/in/viploveparsai",
      projectLink: "https://github.com/viplove11/",
    },
  ];

  return (
    <div className="project" id="projects">
      <p>Featured Projects</p>
      <div className="feature-project">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.imgSrc} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <div className="icon-tooltip">
                <a href={project.githubLink}>
                  <FaGithub className="icon" id="github" />
                </a>

                <a href={project.linkedInLink}>
                  <FaLinkedinIn className="icon" id="linkedin" />
                </a>
                <a href={project.projectLink} target="blank">
                  <FaLink className="icon" id="link" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
