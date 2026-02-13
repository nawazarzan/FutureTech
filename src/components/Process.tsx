import "./Process.css";

const steps = [
  { no: "01", title: "Discovery", desc: "Understanding your business needs." },
  { no: "02", title: "Strategy", desc: "Planning architecture and roadmap." },
  { no: "03", title: "Development", desc: "Agile development with transparency." },
  { no: "04", title: "Launch & Scale", desc: "Deploy, optimize, and grow." }
];

export default function Process() {
  return (
    <section className="process">
      <h2>Our Process</h2>

      <div className="process-grid">
        {steps.map((s) => (
          <div key={s.no} className="process-step">
            <span>{s.no}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
