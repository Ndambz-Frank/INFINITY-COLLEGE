import React from "react";

import "./ourcomponents.css"

  const Footer = () => { 
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} INFINITY COLLEGE</p>
      </div>
    </footer>
  );
};

export default Footer;