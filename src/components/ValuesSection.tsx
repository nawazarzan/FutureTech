import "./ValuesSection.css";

const values = [
  {
    title: "Excellence",
    desc: "We pursue perfection in every line of code, every pixel, and every interaction.",
    icon: "🎯",
  },
  {
    title: "Client-First",
    desc: "Your success is our success. We build relationships, not just software.",
    icon: "❤️",
  },
  {
    title: "Innovation",
    desc: "We stay ahead of the curve, embracing new technologies and methodologies.",
    icon: "⚡",
  },
  {
    title: "Collaboration",
    desc: "Great products come from great teamwork—with you and among ourselves.",
    icon: "🤝",
  },
];

export default function ValuesSection() {
  return (
    <section className="values">
      <p className="values-tag">WHAT WE STAND FOR</p>
      <h2 className="values-title">Our Values</h2>

      <div className="values-grid">
        {values.map((v, i) => (
          <div key={i} className="value-card">
            <div className="value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
