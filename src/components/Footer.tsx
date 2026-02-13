import "./Footer.css";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-box" />
            <span>Future Tech</span>
          </div>

          <p>
            Crafting exceptional software solutions that drive business growth.
            Founded by Arzan and Azam with a passion for innovation.
          </p>

          <div className="footer-socials">
            <span>in</span>
            <span>gh</span>
            <span>tw</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📧 arzanaaz16@gmail.com</p>
          <p>📞 +91 8651620623</p>
          <p>📍 Bangalore ,Patna </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Future Tech. All rights reserved.</span>
        <div>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
