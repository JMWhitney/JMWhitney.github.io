import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Justin Whitney" />

    <div id="background">
      <div className="grid-wrapper">
        <div className="grid">
          <div className="vertical">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="horizontal">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
    
    <form id="contact" action="https://formspree.io/JMWhitney96@gmail.com" method="POST">
      <h1>Send Me a Message</h1>
      <div className="field-half">
        <input type="text" name="name" placeholder="Your Name"></input>
        <input type="email" name="email" placeholder="Your email"></input>
      </div>
      <textarea name="message" placeholder="Message"></textarea>
      <div className="field-half">
        <button type="submit">Send</button>
        <button type="reset">Clear</button>
      </div>
    </form>

  </Layout>
);
 
export default Contact;