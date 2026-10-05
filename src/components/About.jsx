import { Code2, BrainCircuit, Cloud, Terminal } from "lucide-react";
import { SectionHeading } from "./UI";

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading
        number="01"
        eyebrow="A LITTLE ABOUT ME"
        title="Curiosity drives me."
        accent="Building defines me."
      />
      <div className="about-grid">
        <div className="about-copy reveal">
          <p>
            I’m Vikram, a second-year{" "}
            <strong>B.Tech Computer Science student</strong> with a growing
            interest in software engineering and a simple approach: learn
            something, build something, make it better.
          </p>
          <p>
            I’m learning full-stack development, exploring AI and Generative AI,
            and getting familiar with cloud technologies. Along the way, I
            practice DSA and competitive programming to become a more thoughtful
            problem solver.
          </p>
          <p>
            I’m interested in practical projects, collaborative learning, and
            hackathons — places where an idea becomes something you can actually
            use.
          </p>
          <a href="#experience" className="text-link">
            A look at my journey <span>↗</span>
          </a>
        </div>
        <div className="about-notes reveal">
          <div className="note-label">
            <Terminal size={16} />
            <span>CURRENTLY IN MY WORLD</span>
          </div>
          {[
            [Code2, "Building", "Full-stack web development"],
            [BrainCircuit, "Exploring", "AI & Generative AI"],
            [Cloud, "Learning", "Cloud computing & AWS"],
            [Terminal, "Practicing", "Data structures & algorithms"],
          ].map(([Icon, title, desc]) => (
            <div className="focus-row" key={title}>
              <Icon size={21} aria-hidden="true" />
              <div>
                <span>{title}</span>
                <strong>{desc}</strong>
              </div>
              <span className="focus-plus">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
