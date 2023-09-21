// pages/about.js

// Import React and the Layout component
import React from 'react';
import Layout from '../components/MyLayout';

// Define the About component
const About = () => (
  // Use the Layout component as a wrapper for the page content
  <Layout>
    <h1>About</h1>
    <p>
      This page serves as an introduction to me as a developer. Here's a bit about myself:
    </p>

    {/* Educational History */}
    <h2>Educational History</h2>
    <p>
      I am attending University at Varsity College and have completed an online course through Hyperion Development<br/>
      During my academic journey, I gained a strong foundation in programming and problem-solving.
    </p>

    {/* Work History */}
    <h2>Work History</h2>
    <p>
      I have had the privilege of working with several companies, including Axxess and Vox.<br />
      In these roles, I've had the opportunity to collaborate on a wide range of projects, from web development to mobile app development.
    </p>

    {/* Who I Am */}
    <h2>Who I Am</h2>
    <p>
      I'm a passionate developer who enjoys tackling complex challenges and learning new technologies.<br />
      I believe in the power of code to create innovative solutions that can make a positive impact on the world.
    </p>

    {/* What I'm Passionate About */}
    <h2>What I'm Passionate About</h2>
    <p>
      My passion lies in creating elegant and efficient software solutions.<br/> 
      I'm particularly interested in front-end development, where I can bring user interfaces to life and create seamless user experiences.<br/>
      Additionally, I'm enthusiastic about open-source projects and contributing to the developer community.
    </p>
  </Layout>
);

// Export the About component as the default export
export default About;
