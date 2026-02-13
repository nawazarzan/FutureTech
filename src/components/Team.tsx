import "./Team.css";

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <p className="team-tag">THE TEAM</p>
        <h2 className="team-title">Meet the Founders</h2>
        <p className="team-subtitle">
          Two passionate developers united by a shared vision to build
          exceptional software that makes a real difference.
        </p>

        <div className="team-grid">
          {/* Arzan */}
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Arzan"
            />
            <h3>Arzan</h3>
            <span>Co-Founder & Developer</span>
            <p>
              Full-stack developer with a passion for building scalable systems and mentoring the next generation of tech talent.
            </p>
            <div className="tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Cloud Architecture</span>
            </div>
          </div>

          {/* Azam */}
          <div className="team-card highlight">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
              alt="Azam"
            />
            <h3>Azam</h3>
            <span>Co-Founder & Developer</span>
            <p>
              Software architect focused on delivering elegant solutions to
              complex problems with modern web technologies.
            </p>

            <div className="tags">
              <span>System Design</span>
              <span>DevOps</span>
              <span>Mobile Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
