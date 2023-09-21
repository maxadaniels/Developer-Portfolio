// components/Header.js

// Import React and Next.js Link component
import React from 'react';
import Link from 'next/link';

// Define styles for the header and navigation links
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px solid #ddd',
};

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
};

// Define the Header component
const Header = () => (
  // Create the header element with the specified styles
  <header style={headerStyle}>
    {/* Create a navigation link to the Home page */}
    <Link href="/">
      <p style={linkStyle}>Home</p>
    </Link>
    {/* Create a navigation link to the About page */}
    <Link href="/about">
      <p style={linkStyle}>About</p>
    </Link>
    {/* Create a navigation link to the Projects page */}
    <Link href="/projects">
      <p style={linkStyle}>Projects</p>
    </Link>
    {/* Create a navigation link to the Contact page */}
    <Link href="/contact">
      <p style={linkStyle}>Contact</p>
    </Link>
  </header>
);

// Export the Header component as the default export
export default Header;
