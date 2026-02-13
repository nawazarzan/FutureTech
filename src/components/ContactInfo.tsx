import "./ContactInfo.css";

const info = [
  {
    title: "Email Us",
    value: "arzanaaz16@gmail.com",
    sub: "We reply within 24 hours"
  },
  {
    title: "Call Us",
    value: "+91 8651620623",
    sub: "Mon–Fri, 9AM–6PM PST"
  },
  {
    title: "Visit Us",
    value: "Delhi, Patna",
    sub: "Available for in-person meetings"
  }
];

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>Reach out through any of these channels.</p>

      {info.map((i) => (
        <div key={i.title} className="info-card">
          <h4>{i.title}</h4>
          <strong>{i.value}</strong>
          <span>{i.sub}</span>
        </div>
      ))}
    </div>
  );
}
