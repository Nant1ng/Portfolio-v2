import { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Location from "./contact/Location";

const Contact = ({ data, weather }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Full Name is required";
    if (!email) newErrors.email = "Email Address is required";
    if(!validateEmail(email)) newErrors.email= "Must be a vaild Email Adrress"
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm() && validateEmail(email)) {
      console.log("Form submitted: ", { fullName, email, message });
    }
  };

  return (
    <div className="container">
      <h3>Contact</h3>
      <div className="flex-container">
        <div className="contact">
          <div className="contact-heading">
            <h4>
              If you have any questions or just want to get to know me better,
              feel free to <span>call or email me!</span>
            </h4>
          </div>
          <Location data={weather} />
          <div className="contact-content">
            <div className="center-content">
              <EnvelopeIcon className="icon" />
              <p>{data.email}</p>
            </div>
            <div className="center-content">
              <PhoneIcon className="icon" />
              <p>{data.phone}</p>
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <p className="error">
                {errors.fullName ? errors.fullName : ""}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="error">{errors.email ? errors.email : ""}</p>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p className="error">
                {errors.message ? errors.message : ""}
              </p>
            </div>
            <div className="btn-container">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
