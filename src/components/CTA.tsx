import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <span className="cta-badge">⚡ Ready to Get Started?</span>

        <h2>
          Let&apos;s Build Something <br />
          <span>Amazing Together</span>
        </h2>

        <p>
          Ready to transform your ideas into reality? Get in touch and let&apos;s
          discuss how we can help your business grow.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">
            Schedule a Call →
          </button>
          <button className="cta-secondary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
