import "./Services.css";

const services = [
  {
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks like React, Next.js, and Node.js.",
    icon: "💻",
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud architecture on AWS, Azure, and GCP.",
    icon: "☁️",
  },
  {
    title: "Backend Systems",
    desc: "Robust APIs and microservices handling millions of requests.",
    icon: "🗄️",
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights.",
    icon: "📊",
  },
  {
    title: "Data Science",
    desc: "Machine learning and AI solutions for prediction and automation.",
    icon: "🧠",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <p className="services-tag">WHAT WE DO</p>
        <h2 className="services-title">Services That Drive Results</h2>
        <p className="services-subtitle">
          End-to-end technology solutions tailored to your business needs.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
