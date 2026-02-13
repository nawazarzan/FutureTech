import "./OurStory.css";
import Aboutpic from "../assets/Aboutpic.png"; // 👆 replace with your actual image path
// 👆 replace with your actual image path

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story-container">

        {/* LEFT CONTENT */}
        <div className="our-story-text">
          <h2>Our Story</h2>

          <p>
            Future Tech began in a small co-working space where two developers,
            Arzan and Azam, realized they shared more than just coding skills—
            they shared a vision for how technology should be built and delivered.
          </p>

          <p>
            After years of working in corporate environments, they saw firsthand
            how businesses struggled to find tech partners who truly understood
            their needs. Too often, projects ran over budget, missed deadlines,
            or simply didn’t deliver the promised value.
          </p>

          <p>
            That’s why they founded Future Tech—to be the kind of tech partner
            they always wished existed. One that combines technical excellence
            with genuine care for client success.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="our-story-image">
          <img src={Aboutpic} alt="Team working together" />
        </div>

      </div>
    </section>
  );
}
