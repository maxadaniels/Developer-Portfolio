// pages/index.js

// Import React and the Layout component
import React from 'react';
import Layout from '../components/MyLayout';

// Define styles for the heading and image
const headingStyle = {
  textAlign: 'center', // Center-align the heading
  fontSize: '36px',    // Adjust the font size as needed
  margin: '20px 0',    // Add some margin for spacing
  color: '#007bff',    // Change the text color to blue (you can adjust it)
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center-align the image horizontally
  marginTop: '20px',         // Add some top margin for spacing
};

const imageStyle = {
  maxWidth: '100%',   // Ensure the image doesn't exceed its container width
  height: 'auto',     // Maintain the image's aspect ratio
};

// Define the Home component
const Home = () => (
  // Use the Layout component as a wrapper for the page content
  <Layout>
    <div>
      {/* Display the heading with the defined styles */}
      <h1 style={headingStyle}>Max Daniels - Web Developer</h1>
      {/* Create a container for the image with specified styles */}
      <div style={imageContainerStyle}>
        {/* Display the image with specified source, alt text, and styles */}
        <img
          src="/static/images/ITPic.jpg"
          alt="IT Pic"
          style={imageStyle}
        />
      </div>
    </div>
  </Layout>
);

// Export the Home component as the default export
export default Home;
