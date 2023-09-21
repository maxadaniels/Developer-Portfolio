// Import necessary Next.js components and React
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

// Define styles for the layout
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

// Define the Layout component
const Layout = (props) => (
   <div>
    {/* Add a <head> section for metadata and external stylesheet */}
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    {/* Create the main layout container with specified styles */}
    <div style={layoutStyle}>
      {/* Include the Header component for navigation */}
      <Header />
      {/* Render the children components */}
      {props.children}
    </div>
  </div>
)

// Export the Layout component as the default export
export default Layout
