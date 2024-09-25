import { useEffect, useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Location from "./contact/Location";

const Contact = ({ data, weather }) => {
  const contactData = data[0];
  const { email, phone } = contactData;

  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [cooldown, setCooldown] = useState(0);

  const SUBMISSION_LIMIT = 3;
  const COOLDOWN_PERIOD_MS = 300000;
  const TIMEOUT_RESET_PERIOD_MS = 600000;

  useEffect(() => {
    const savedCooldown = localStorage.getItem("cooldownExpiry");
    const savedSpamCount = parseInt(localStorage.getItem("spamCount") || 0, 10);
    const firstSubmitTime = localStorage.getItem("firstSubmitTime");

    if (firstSubmitTime && savedSpamCount > 0) {
      const timeElapsed = Date.now() - firstSubmitTime;

      if (timeElapsed > TIMEOUT_RESET_PERIOD_MS) {
        localStorage.removeItem("spamCount");
        localStorage.removeItem("cooldownExpiry");
        localStorage.removeItem("firstSubmitTime");
      }
    }

    if (savedCooldown && savedSpamCount) {
      const remainingTime = Math.floor((savedCooldown - Date.now()) / 1000);

      if (remainingTime > 0) {
        setCooldown(remainingTime);
      } else {
        localStorage.removeItem("cooldownExpiry");
        localStorage.removeItem("spamCount");
      }
    }
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);

      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const validateUserEmail = (userEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(userEmail);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Full Name is required";

    if (!userEmail) newErrors.userEmail = "Email Address is required";

    if (!validateUserEmail(userEmail))
      newErrors.userEmail = "Must be a valid Email Address";

    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("");

    const spamCount = parseInt(localStorage.getItem("spamCount") || 0, 10);
    const savedCooldown = localStorage.getItem("cooldownExpiry");

    if (savedCooldown && savedCooldown > Date.now()) {
      setSubmitStatus("submitTimeout");
      return;
    }

    if (validateForm() && validateUserEmail(userEmail)) {
      const formData = { fullName, userEmail, message };

      if (spamCount >= SUBMISSION_LIMIT) {
        setSubmitStatus("submitTimeout");
        const cooldownExpiry = Date.now() + COOLDOWN_PERIOD_MS;
        localStorage.setItem("cooldownExpiry", cooldownExpiry);
        setCooldown(COOLDOWN_PERIOD_MS / 1000);
        return;
      }

      if (spamCount === 0) localStorage.setItem("firstSubmitTime", Date.now());

      setLoading(true);

      try {
        const response = await fetch("/api/send-mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFullName("");
          setUserEmail("");
          setMessage("");
          localStorage.setItem("spamCount", spamCount + 1);
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setLoading(false);
      }
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
          <div className="contact-content">
            <div className="center-content">
              <EnvelopeIcon className="icon" />
              <p>{email}</p>
            </div>
            <div className="center-content">
              <PhoneIcon className="icon" />
              <p>{phone}</p>
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
              <p className="error">{errors.fullName ? errors.fullName : ""}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <p className="error">
                {errors.userEmail ? errors.userEmail : ""}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p className="error">{errors.message ? errors.message : ""}</p>
            </div>
            {submitStatus === "success" && (
              <p className="success">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="error">
                Failed to send the message. Please try again later.
              </p>
            )}
            {submitStatus === "submitTimeout" && (
              <p className="error">You are in timeout. Please wait.</p>
            )}
            <div className="btn-container">
              <button
                type="submit"
                className="submit-btn"
                disabled={loading || cooldown > 0}
              >
                {loading
                  ? "Sending..."
                  : submitStatus === "submitTimeout"
                  ? `Timeout ${cooldown}s`
                  : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
