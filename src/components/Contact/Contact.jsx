import React, { useRef, useState } from "react";
import "./Contact.css";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = "D6gEWTz7WCpnahHOe";
    const serviceId = "service_m40lded";
    const templateId = "template_3f6mbzg";

    const formData = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
      to_email: "viploveparsai1@gmail.com",
      to_name: "Viplove Parsai (Admin)",
    };

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      (err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact" id="">
      <div className="contact-title">
        <p>Get In Touch</p>
      </div>
      <div className="contact-content">
        <form onSubmit={sendEmail} ref={form}>
          <div className="form-floating mb-5">
            <input
              type="text"
              className="form-control"
              name="from_name"
              placeholder="Full Name"
              required
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="form-floating mb-5">
            <input
              type="email"
              className="form-control"
              name="from_email"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control"
              name="message"
              placeholder="Leave a comment here !!"
              style={{ height: "100px" }}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="btn mybtn">
            Send Message
          </button>
        </form>

        {/* contact information */}
        <div className="contact-info">
          <div className="contact-information">
            <p id="ContactInformation">Contact Information</p>
            <p>
              <IoIosMail id="mail-icon" />
              viploveparsai1@gmail.com
            </p>
            <p>
              <MdPhone id="contact-icon" />
              +91 917518690
            </p>
            <p>
              <FaLocationDot id="location-icon" />
              Bilaspur, India
            </p>
          </div>
          <div className="social-contact">
            <p>Follow Me</p>
            <div className="social-contact-icon">
              <a href="">
                <FaLinkedin className="linkedin-icon" />
              </a>
              <a href="">
                <BsInstagram className="insta-icon" />
              </a>
              <a href="">
                <FaGithub className="git-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
