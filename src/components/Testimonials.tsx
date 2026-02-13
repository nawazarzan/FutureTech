import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"Exceptional developers who truly care."</p>
          <span>— Sarah Mitchell</span>
        </div>

        <div className="testimonial-card">
          <p>"They understood our vision from day one."</p>
          <span>— Michael Chen</span>
        </div>

        <div className="testimonial-card">
          <p>"Delivered quality beyond expectations."</p>
          <span>— Emily Rodriguez</span>
        </div>
      </div>
    </section>
  );
}
