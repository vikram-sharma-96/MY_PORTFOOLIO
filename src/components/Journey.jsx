import { journey } from "../data/portfolio";
import { SectionHeading, SkillIcon } from "./UI";

export default function Journey() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="container journey-layout">
        <div className="journey-intro">
          <SectionHeading
            number="04"
            eyebrow="MY JOURNEY"
            title="Not there yet."
            accent="Getting closer."
          />
          <p>
            Every concept learned and every project built is another step
            forward. Here’s what my journey looks like so far.
          </p>
          <span className="journey-note">
            <span className="status-dot" /> A STUDENT. A WORK IN PROGRESS.
          </span>
        </div>
        <ol className="timeline">
          {journey.map((item, index) => (
            <li key={item.title} className="reveal">
              <span className="timeline-icon">
                <SkillIcon name={item.icon} size={20} />
              </span>
              <span className="timeline-step">0{index + 1}</span>
              <p className="eyebrow">{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
