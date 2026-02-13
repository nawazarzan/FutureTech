import "./ServicesSection.css";

const services = [
  {
    title: "Web Development",
    icon: "💻",
    desc: "Custom web applications built with modern frameworks for optimal performance and scalability.",
    points: [
      "React & Next.js Development",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Custom CMS Development",
    ],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    points: [
      "iOS & Android Apps",
      "React Native Development",
      "Flutter Applications",
      "App Store Optimization",
    ],
  },
  {
    title: "Cloud Solutions",
    icon: "☁️",
    desc: "Scalable cloud architecture that powers your applications with reliability and efficiency.",
    points: [
      "AWS & Azure Setup",
      "Cloud Migration",
      "Serverless Architecture",
      "Auto-scaling Solutions",
    ],
  },
  {
    title: "Backend Development",
    icon: "🗄️",
    desc: "Robust APIs and microservices architecture that handle millions of requests with ease.",
    points: [
      "REST & GraphQL APIs",
      "Microservices",
      "Database Design",
      "Real-time Systems",
    ],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    desc: "Transform raw data into actionable insights with advanced analytics and visualization.",
    points: [
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Custom Dashboards",
    ],
  },
  {
    title: "Data Science",
    icon: "🧠",
    desc: "Leverage machine learning and AI to unlock patterns, predictions, and opportunities.",
    points: [
      "Machine Learning Models",
      "AI Integration",
      "Data Mining",
      "Statistical Analysis",
    ],
  },
  {
    title: "Automation with n8n",
    icon: "🔗",
    desc: "Streamline workflows and connect your tools with powerful no-code automation.",
    points: [
      "Workflow Automation",
      "API Integration",
      "Process Optimization",
      "Custom n8n Workflows",
    ],
  },
  {
    title: "UI / UX Design",
    icon: "🎨",
    desc: "User-centered design combining aesthetics with functionality for maximum engagement.",
    points: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
];

export default function ServicesSection() {
  return (
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>

            <h3>{s.title}</h3>
            <p className="service-desc">{s.desc}</p>

            <ul>
              {s.points.map((p, idx) => (
                <li key={idx}>✔ {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    
  );
}
