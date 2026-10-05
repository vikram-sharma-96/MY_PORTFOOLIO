import { skillGroups } from "../data/portfolio";
import { SectionHeading, SkillIcon } from "./UI";

export default function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="MY TOOLKIT"
          title="Learning the tools."
          accent="Connecting the dots."
        >
          The technologies I’m working with and exploring. A growing toolkit,
          built through practice.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.name}
              className="skill-card reveal"
              style={{ "--reveal-delay": `${(index % 3) * 70}ms` }}
            >
              <div className="skill-card-top">
                <span className="icon-box">
                  <SkillIcon name={group.icon} size={22} />
                </span>
                <span className="skill-number">0{index + 1}</span>
              </div>
              <h3>{group.name}</h3>
              <p>{group.label}</p>
              <div className="tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="skill-indicator" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>
        <p className="section-footnote">
          Always learning. No inflated percentages — just tools I’m putting into
          practice.
        </p>
      </div>
    </section>
  );
}
