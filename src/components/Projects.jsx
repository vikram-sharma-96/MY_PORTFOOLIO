import {
  Github,
  Leaf,
  Mic,
  CalendarDays,
  AudioLines,
  Plus,
  ExternalLink,
} from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeading, ResourceLink } from "./UI";

function ProjectVisual({ type }) {
  return (
    <div
      className={`project-visual visual-${type}`}
      aria-label="Illustrative project interface concept"
    >
      <span className="concept-label">INTERFACE CONCEPT</span>
      {type === "krishisetu" && (
        <div className="crop-preview">
          <div className="mockup-heading">
            <span>
              <Leaf size={19} /> KrishiSetu
            </span>
            <span>कृषिसेतु</span>
          </div>
          <div className="crop-preview-body">
            <div className="crop-scan">
              <Leaf size={76} strokeWidth={1} />
              <i />
              <span>PLANT HEALTH</span>
            </div>
            <div className="crop-copy">
              <span className="mini-label">SMARTER FARMING</span>
              <strong>
                A healthier crop.
                <br />A better tomorrow.
              </strong>
              <p>Crop insights, in your language.</p>
              <span className="mockup-button">
                Explore crop diagnosis <span>↗</span>
              </span>
            </div>
          </div>
          <div className="crop-footer">
            <span>AI-powered insights</span>
            <span>Multilingual · Accessible</span>
          </div>
        </div>
      )}
      {type === "interview" && (
        <div className="interview-preview">
          <div className="mockup-heading">
            <span>
              <AudioLines size={20} /> interview
              <span className="mockup-dot">.ai</span>
            </span>
            <span>PRACTICE SPACE</span>
          </div>
          <div className="mic-orbit">
            <Mic size={26} />
            <span />
          </div>
          <strong>Your next chapter starts here.</strong>
          <p>A space to practice. A chance to improve.</p>
          <div className="waveform" aria-hidden="true">
            {Array.from({ length: 33 }, (_, i) => (
              <i
                key={i}
                style={{
                  "--bar-height": `${8 + Math.abs(Math.sin(i * 1.7)) * 28}px`,
                  "--bar-delay": `${i * 45}ms`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      {type === "events" && (
        <div className="events-preview">
          <div className="mockup-heading">
            <span>
              <CalendarDays size={18} /> event
              <span className="mockup-dot">space</span>
            </span>
            <span>YOUR NEXT BIG THING</span>
          </div>
          <div className="events-body">
            <div>
              <span className="mini-label">CONNECT. CREATE. COLLABORATE.</span>
              <strong>
                Make room
                <br />
                for great ideas.
              </strong>
              <div className="event-pills">
                <span>Hackathons</span>
                <span>Workshops</span>
              </div>
            </div>
            <div className="event-calendar">
              <span>THE POSSIBILITIES</span>
              <div>
                {Array.from({ length: 28 }, (_, i) => (
                  <i
                    key={i}
                    className={[5, 12, 13, 19, 25].includes(i) ? "marked" : ""}
                  >
                    {i + 1}
                  </i>
                ))}
              </div>
              <span>One place. Every event.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Ideas, turned into"
        accent="something real."
      >
        A selection of projects where I explore, experiment, and put what I
        learn to work.
      </SectionHeading>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-shell reveal"
            key={project.id}
            style={{ "--reveal-delay": `${(index % 2) * 110}ms` }}
          >
            <div className="project-pin" aria-hidden="true">
              <span>
                {project.number} / {project.category}
              </span>
              <i />
              <b />
            </div>
            <article className={`project-card project-${project.id}`}>
              <ProjectVisual type={project.id} />
              <div className="project-details">
                <div className="project-category">
                  <span>{project.category}</span>
                  <span>/{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <ResourceLink
                    href={project.github}
                    label={`${project.title} GitHub`}
                  >
                    <Github size={16} /> GitHub
                  </ResourceLink>
                  {project.live ? (
                    <ResourceLink href={project.live}>
                      <ExternalLink size={15} /> Live Demo
                    </ResourceLink>
                  ) : (
                    <span className="demo-note">Live demo coming soon</span>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
        <article className="future-project reveal">
          <span className="future-icon">
            <Plus size={30} strokeWidth={1} />
          </span>
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h3>
            There’s always
            <br />
            another idea.
          </h3>
          <p>
            More experiments, practical projects, and late-night “what ifs” are
            on the way.
          </p>
          <a href="#contact" className="text-link">
            Have an idea? Let’s talk <span>↗</span>
          </a>
          <span className="future-code" aria-hidden="true">
            {'{ next: "possibilities" }'}
          </span>
        </article>
      </div>
    </section>
  );
}
