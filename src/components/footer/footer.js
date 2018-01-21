import React from 'react';
import { FaAngleUp, FaFacebook, FaInstagram } from 'react-icons/lib/fa';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer d-f">
        <div className="footer-ele f-1">
          <FaAngleUp/> About
        </div>
        <div className="footer-ele f-1">
          <FaAngleUp /> Contact
        </div>
        <div className="footer-ele f-1">
          <FaAngleUp /> Policy
        </div>
        <div className="footer-ele f-1">
          <FaAngleUp /> Payment Method
        </div>
        <div className="footer-ele f-1">
          Follow us <FaFacebook className="social-icons" /> <FaInstagram className="social-icons"/>
        </div>
      </footer>
    )
  }
}

export default Footer;