import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-box" />
          <span>Future Tech</span>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact">
          <button className="nav-btn">Get Started</button>
        </Link>
      </div>
    </header>
  );
}
