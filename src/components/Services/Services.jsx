import React from "react";
import "./Services.css";
import { LuCode2 } from "react-icons/lu";
import { PiShareNetworkBold } from "react-icons/pi";
import { MdModelTraining } from "react-icons/md";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="service-container">
        <p className="service-heading">Services</p>
        <div className="services-list">
          <div className="service-item">
            <LuCode2 className="service-icon" />
            <p className="service-title">Web Development</p>
            <p className="service-detail">
              {" "}
              Custom website design and development using HTML, CSS, JavaScript,
              and React.js. Responsive design for cross-device compatibility.
            </p>
          </div>
          <div className="service-item">
            <PiShareNetworkBold className="service-icon" />
            <p className="service-title">AI & IoT Solutions</p>
            <p className="service-detail">
              {" "}
              Developing AI-integrated tools for smarter cities and sustainable
              farming. Expertise in real-time analytics and IoT-based system
              integration.
            </p>
          </div>
          <div className="service-item">
            <MdModelTraining className="service-icon" />
            <p className="service-title">Training & Mentoring</p>
            <p className="service-detail">
              {" "}
              Conducting workshops and training sessions on coding and software
              development. Mentoring freshers in learning DSA, web technologies,
              and backend frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
