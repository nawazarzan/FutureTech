import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-row">
        <div>
          <label>Your Name</label>
          <input placeholder="John Doe" />
        </div>
        <div>
          <label>Email Address</label>
          <input placeholder="john@example.com" />
        </div>
      </div>

      <label>Company (Optional)</label>
      <input placeholder="Your Company Name" />

      <label>Your Message</label>
      <textarea placeholder="Tell us about your project, goals, and timeline..." />

      <button type="submit">
        Send Message →
      </button>
    </form>
  );
}
