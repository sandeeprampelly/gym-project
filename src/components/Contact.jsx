import React from 'react';
import './styles/contact.css';
const Contact = () => {
  return(
    <section className="contact" id='Contact'>
      <div className="contact-overlay">
        <h2>
          Contact <span>IronFit Elite</span>
        </h2>

        <p>Have questions or want to join? Let's get in touch!</p>

        <form className="contact-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
};

export default Contact;
