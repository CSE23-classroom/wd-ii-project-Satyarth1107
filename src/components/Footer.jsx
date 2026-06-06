import React from 'react';
import './Footer.css';

const footerLinks = [
  {
    title: 'Get to Know Us',
    links: ['Careers', 'Blog', 'About Amazon', 'Investor Relations', 'Amazon Devices', 'Amazon Science'],
  },
  {
    title: 'Make Money with Us',
    links: ['Sell on Amazon', 'Sell under Amazon Accelerator', 'Protect and Build Your Brand', 'Amazon Global Selling', 'Become an Affiliate', 'Fulfilment by Amazon', 'Advertise Your Products', 'Amazon Pay on Merchants'],
  },
  {
    title: 'Let Us Help You',
    links: ['COVID-19 and Amazon', 'Your Account', 'Returns Centre', 'Recalls and Product Safety Alerts', '100% Purchase Protection', 'Amazon App Download', 'Help'],
  },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-back-top" onClick={scrollTop}>
        Back to top
      </div>

      <div className="footer-links">
        {footerLinks.map((col) => (
          <div key={col.title} className="footer-col">
            <h4 className="footer-col-title">{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}><a href="#" className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="footer-logo"
        />
        <div className="footer-meta">
          <span>© 1996–2024, Amazon.com, Inc. or its affiliates</span>
          <div className="footer-meta-links">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;