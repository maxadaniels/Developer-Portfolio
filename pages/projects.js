// pages/projects.js

// Import React and the Layout component
import React from 'react';
import Layout from '../components/MyLayout';

// Define styles for the projects container and project images
const projectsContainerStyle = {
  textAlign: 'center',  // Center-align the content
};

const projectImageStyle = {
  maxWidth: '500px',    // Set the maximum width for the images (adjust as needed)
  height: 'auto',       // Maintain the image's aspect ratio
  marginBottom: '20px', // Add some bottom margin for spacing
  border: '1px solid #ccc', // Add a border for visual separation
  borderRadius: '4px',  // Add rounded corners
};

// Define the Projects component
const Projects = () => (
  // Use the Layout component as a wrapper for the page content
  <Layout>
    <div style={projectsContainerStyle}>
      <h1>Projects</h1>
      <p>
        This page contains some of my best work, showcasing diversity in my projects.
      </p>

      {/* Project 1 */}
      <div>
        <h2>Hangman Game</h2>
        <img
          src="/static/images/hangman.png"  // Replace with your project image URL
          alt="Project 1"
          style={projectImageStyle}
        />
        <p>
          I created a Hangman game that allows users to play Hangman.<br/>
          The game was created using React, HTML, CSS, and Javascript.
        </p>
        <a href="https://github.com/maxadaniels/Hangman-Game.git" target="_blank" rel="noopener noreferrer">Link to Github</a> 
      </div>

      {/* Project 2 */}
      <div>
        <h2>Itunes Search API</h2>
        <img
          src="/static/images/itunes.png"  // Replace with your project image URL
          alt="Project 2"
          style={projectImageStyle}
        />
        <p>
          I created an iTunes Search API that allows users to search for a wide<br/>
          variety of entertainment to learn the author name, title, and release date.<br/>
          This was created using React for the Frontend and Javascript for the Backend.
        </p>
        <a href="https://github.com/maxadaniels/itunes-search-app.git" target="_blank" rel="noopener noreferrer">Link to Github</a> 
      </div>
      
    </div>
  </Layout>
);

// Export the Projects component as the default export
export default Projects;
