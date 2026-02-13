import { Link } from "react-router-dom";
import "./ServicesCTA.css";

export default function ServicesCTA() {
  return (
    <section className="service-cta">
      <div className="service-cta-box">
        <h2>Not Sure What You Need?</h2>

        <p>
          Let's have a conversation about your goals and we'll recommend
          the perfect solution for your business.
        </p>
        <Link to="/contact">
          <button className="service-cta-btn">
            Get Free Consultation <span>→</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
