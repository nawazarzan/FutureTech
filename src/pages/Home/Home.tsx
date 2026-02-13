import "./Home.css";
import Services from "../../components/Services";
import Team from "../../components/Team";
import Process from "../../components/Process";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          ✨ Building Tomorrow’s Technology Today
        </div>

        <h1>
          We Build <br />
          <span>Digital Excellence</span>
        </h1>

        <p>
          From concept to deployment, we craft scalable software
          solutions that transform businesses and deliver
          measurable results.
        </p>

        <div className="hero-buttons">
          <Link to="/contact">
            <button className="primary">
              Start Your Project →
            </button>
          </Link>

          <Link to="/services">
            <button className="secondary">
              Explore Services
            </button>
          </Link>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>99%</strong>
              <span>Client Satisfaction</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Services />
      <Team />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />

    </main>
  );
}
