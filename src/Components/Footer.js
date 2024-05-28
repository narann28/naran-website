import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h2>Contact Me!</h2>
        <div className="footer-social">
        <a href="https://www.linkedin.com/in/naran-nathan/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/narann28" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.instagram.com/naran2n/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
        </div>
      </div>
      <div className="copyright">&#169; Naran's Portfolio | All Right Reserved</div>
    </div>
  );
};

export default Footer;