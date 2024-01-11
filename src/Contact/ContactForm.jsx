// ContactForm.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import "./Contact.css";
import "./Contactresponsive.css";


import {
  faAddressCard,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [text, setText] = useState("Send Message");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "", // New field for phone number
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message, phoneNumber } = formData;
    const errors = {};

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name field
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    // Validate email field
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    // Validate message field
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    // Validate phone number field
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      sendEmail();
    } else {
      setErrors(formErrors);
    }
  };

  const sendEmail = () => {
    const serviceID = "service_uf9lhaz";
    const templateID = "template_15uicz8";
    const userID = "pr6ImLwlWeomB8shk";
    setText("Sending");

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        //alert('Email sent successfully!');

        setFormData({
          name: "",
          email: "",
          message: "",
          phoneNumber: "", // Clear phone number field after sending email
        });
        setErrors({});
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email");
      });
  };

  return (
    <div className="contact">
      <div className="divs">
        <h2>Contact Us</h2>
        <p>Any question or remarks? Just write us a message</p>
      </div>
      

<div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Send Us a Message</h3>
          </div>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Taylor Wave"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Taylor@protonmail.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-input">
            <label htmlFor="phoneNumber">Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(123)-456-7890"
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="form-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Start your message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <div className="button-div">
            <button type="submit">{text}</button>
          </div>
        </form>

        <div className="maincontact">
          <div className="contact-container">
            <h3>Contact Infomation</h3>
            <div className="contact-list">
              <li>
                <em className="icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </em>
                <a className="text">USA</a>
              </li>
              <li>
                <em className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </em>
                <a href="tel:435738292992" className="text">
                  (521) 267-8362
                </a>
              </li>
              <li>
                <em className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </em>
                <a href="mailto:da" className="text">
                  Wigwonderland@gmail.com
                </a>
              </li>
              <li>
                
                <em className="icon">
                  <FontAwesomeIcon icon={faAddressCard} />
                </em>
                <a className="text">
                  10226 Battlefield Dr Manassas, Virginia(VA), 20110
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
            }
export default ContactForm;