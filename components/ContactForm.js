// Import React and useState hook
import React, { useState } from 'react';

// Define styles for the form container, form, input fields, and button
const formContainerStyle = {
  maxWidth: '400px',
  margin: '0', // Remove 'auto' margin to align left
  textAlign: 'left', // Align the form to the left
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  marginBottom: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  cursor: 'pointer',
};

// Define the ContactForm component
const ContactForm = () => {
  // Use state to manage form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Event handler for name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for message textarea change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add the logic to handle form submission, such as sending an email or saving the message to a database.

    // After submission, clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        {/* Name input field */}
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          style={inputStyle}
          placeholder="Name"
          required
        />
        {/* Email input field */}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
          placeholder="Email"
          required
        />
        {/* Message textarea */}
        <textarea
          value={message}
          onChange={handleMessageChange}
          style={textareaStyle}
          placeholder="Message"
          required
        />
        {/* Submit button */}
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </div>
  );
};

// Export the ContactForm component as the default export
export default ContactForm;
