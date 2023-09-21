// pages/contact.js

// Import React, the Layout component, and the ContactForm component
import React from 'react';
import Layout from '../components/MyLayout';
import ContactForm from '../components/ContactForm';

// Define the Contact component
const Contact = () => (
  // Use the Layout component as a wrapper for the page content
  <Layout>
    <h1>Contact</h1>
    <p>
      Please feel free to reach out using the form below or contact me directly:
    </p>

    {/* Contact Details */}
    <div>
      <h2>Contact Details</h2>
      <p>Email: maxadaniels@icloud.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>

    {/* Contact Form */}
    <div>
      <h2>Contact Form</h2>
      {/* Include the ContactForm component to display the form */}
      <ContactForm />
    </div>
  </Layout>
);

// Export the Contact component as the default export
export default Contact;
