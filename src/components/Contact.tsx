import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

// Note: To receive emails directly, get a free Access Key at https://web3forms.com/ and replace this placeholder.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" ? "4e6504a7-8025-45dc-b9d9-bb59dc3e6bb6" : WEB3FORMS_ACCESS_KEY, // Default fallback working key for test or user key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name + " (Portfolio)",
          replyto: formData.email
        })
      });

      const result = await response.json();
      if (response.status === 200 || result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="contact-main-title">Get In Touch</h3>
        <div className="contact-grid">
          {/* Left Column: Info & Links */}
          <div className="contact-info-col">
            <div className="contact-info-block">
              <h4>Email</h4>
              <p>
                <a href="mailto:kshivamm1234@gmail.com" data-cursor="disable" className="contact-link-item">
                  kshivamm1234@gmail.com
                </a>
              </p>
            </div>
            
            <div className="contact-info-block">
              <h4>Phone</h4>
              <p>
                <a href="tel:+918292268257" data-cursor="disable" className="contact-link-item">
                  +91 82922 68257
                </a>
              </p>
            </div>

            <div className="contact-info-block">
              <h4>Social Channels</h4>
              <div className="contact-socials-list">
                <a
                  href="https://github.com/Shivam8292"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Github <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivamx12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Linkedin <MdArrowOutward />
                </a>
              </div>
            </div>

            <div className="contact-credit-block">
              <h2>
                Customized & Developed <br /> by <span>Shivam</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h4>Send a Message</h4>
              <form onSubmit={handleSubmit} className="contact-message-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, question, or how I can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    data-cursor="disable"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={status === "submitting"}
                  data-cursor="disable"
                >
                  {status === "submitting" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <MdArrowOutward />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="form-feedback success">
                    Your message was sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="form-feedback error">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
