import "./FutureTechAdvantage.css";

export default function FutureTechAdvantage() {
  return (
    <section className="fta">

      {/* STATS */}
      <div className="fta-stats">
        <div>
          <span>🎖️</span>
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div>
          <span>👥</span>
          <h3>40+</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <span>📈</span>
          <h3>300%</h3>
          <p>Avg. Growth Rate</p>
        </div>
        <div>
          <span>⚡</span>
          <h3>99.9%</h3>
          <p>Uptime Guaranteed</p>
        </div>
      </div>

      {/* TITLE */}
      <div className="fta-header">
        <h2>The Future Tech Advantage</h2>
        <p>
          We're not just another software agency. Here's what sets us apart and
          makes us the trusted partner for forward-thinking businesses.
        </p>
      </div>

      {/* CARDS */}
      <div className="fta-grid">
        <div className="fta-card blue">
          <div className="icon">🚀</div>
          <h4>Proven Track Record</h4>
          <p>
            50+ successful projects delivered on time with measurable business
            results.
          </p>
        </div>

        <div className="fta-card purple">
          <div className="icon">🛡️</div>
          <h4>Enterprise-Grade Security</h4>
          <p>
            Bank-level security protocols to protect your data and systems.
          </p>
        </div>

        <div className="fta-card orange">
          <div className="icon">⏱️</div>
          <h4>Agile Development</h4>
          <p>
            Fast iterations, transparent communication, and flexible delivery.
          </p>
        </div>

        <div className="fta-card green">
          <div className="icon">🏅</div>
          <h4>Quality Assurance</h4>
          <p>
            Every line of code reviewed, tested, optimized — then tested again.
          </p>
        </div>

        <div className="fta-card violet">
          <div className="icon">🎧</div>
          <h4>24/7 Support</h4>
          <p>
            Our team is always available to ensure your success never sleeps.
          </p>
        </div>

        <div className="fta-card pink">
          <div className="icon">📊</div>
          <h4>Scalability Built-In</h4>
          <p>
            Architecture that scales seamlessly from startup to enterprise.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="fta-cta">
        <h3>Ready to experience the difference?</h3>
        <p>
          Join 40+ companies that trust Future Tech with their digital
          transformation.
        </p>
      </div>

    </section>
  );
}
