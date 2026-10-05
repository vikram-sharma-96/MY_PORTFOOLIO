import {
  Github,
  Linkedin,
  Download,
  ArrowDown,
  Code2,
  Braces,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/portfolio";
import { Arrow, ResourceLink, RevealText } from "./UI";

function DeveloperVisual() {
  return (
    <div
      className="developer-visual"
      aria-label="Decorative code window showing Vikram’s interests"
    >
      <div className="orbital orbital-one" aria-hidden="true" />
      <div className="orbital orbital-two" aria-hidden="true" />
      <div className="spatial-scene" aria-hidden="true">
        <span className="spatial-halo" />
        <span className="spatial-ring spatial-ring-one" />
        <span className="spatial-ring spatial-ring-two" />
        <span className="spatial-cube">
          <i className="cube-face cube-front" />
          <i className="cube-face cube-back" />
          <i className="cube-face cube-right" />
          <i className="cube-face cube-left" />
          <i className="cube-face cube-top" />
          <i className="cube-face cube-bottom" />
        </span>
        <span className="spatial-point point-one" />
        <span className="spatial-point point-two" />
        <span className="spatial-point point-three" />
      </div>
      <div className="floating-chip chip-react" aria-hidden="true">
        <Braces size={23} />
        <span>think. build. repeat.</span>
      </div>
      <div className="visual-stage">
        <div className="code-window">
          <div className="window-top">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.js</span>
            <Code2 size={16} />
          </div>
          <div className="code-body" aria-hidden="true">
            <div>
              <span className="ln">01</span>
              <span className="code-comment">
                // a work in progress, always.
              </span>
            </div>
            <div>
              <span className="ln">02</span>
              <span className="code-purple">const</span> developer{" "}
              <span className="code-purple">=</span> {"{"}
            </div>
            <div>
              <span className="ln">03</span> name:{" "}
              <span className="code-green">'Vikram Sharma'</span>,
            </div>
            <div>
              <span className="ln">04</span> role:{" "}
              <span className="code-green">'Aspiring SWE'</span>,
            </div>
            <div>
              <span className="ln">05</span> education:{" "}
              <span className="code-green">'B.Tech CSE'</span>,
            </div>
            <div>
              <span className="ln">06</span> interests: [
            </div>
            <div>
              <span className="ln">07</span>{" "}
              <span className="code-green">'Web'</span>,{" "}
              <span className="code-green">'AI'</span>,{" "}
              <span className="code-green">'Cloud'</span>
            </div>
            <div>
              <span className="ln">08</span> ],
            </div>
            <div>
              <span className="ln">09</span> mindset:{" "}
              <span className="code-green">'Keep learning'</span>
            </div>
            <div>
              <span className="ln">10</span>
              {"};"}
            </div>
            <div>
              <span className="ln">11</span>{" "}
            </div>
            <div>
              <span className="ln">12</span>developer.
              <span className="code-yellow">buildSomething</span>();
              <span className="caret" />
            </div>
          </div>
          <div className="window-bottom">
            <span>
              <span className="tiny-dot" /> Learning in public
            </span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
      <div className="floating-chip chip-status">
        <Sparkles size={16} />
        <span>Curiosity is the starting point.</span>
      </div>
      <span className="visual-coordinate" aria-hidden="true">
        &lt; / &gt; &nbsp; IDEAS INTO REALITY
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-spotlight" />
        <span className="hero-light hero-light-one" />
        <span className="hero-light hero-light-two" />
      </div>
      <div className="hero-content">
        <p className="eyebrow hero-enter">
          <span className="status-dot" /> OPEN TO LEARNING. READY TO BUILD.
        </p>
        <h1 className="hero-enter">
          <RevealText text="Hi, I’m" />
          <br />
          <span>
            <RevealText text="Vikram Sharma" offset={2} />
            <span className="hero-period">.</span>
          </span>
        </h1>
        <p className="hero-role hero-enter">
          2nd Year B.Tech CSE Student <span>|</span>
          <br className="role-break" /> Aspiring Software Engineer
        </p>
        <p className="hero-description hero-enter">
          I build software projects, explore AI and cloud technologies, and
          continuously improve my problem-solving and development skills.
        </p>
        <div className="hero-actions hero-enter">
          <a className="button button-primary magnetic" href="#projects">
            View Projects <Arrow />
          </a>
          <ResourceLink
            href={profile.resume}
            download
            className="button button-secondary"
            label="Download Resume"
          >
            <Download size={17} /> Download Resume
          </ResourceLink>
        </div>
        <div className="hero-socials hero-enter">
          <ResourceLink href={profile.github} label="GitHub">
            <Github size={17} /> GitHub <Arrow size={13} />
          </ResourceLink>
          <ResourceLink href={profile.linkedin} label="LinkedIn">
            <Linkedin size={17} /> LinkedIn <Arrow size={13} />
          </ResourceLink>
          <span className="social-divider" />
          <span>Always a student. Always a builder.</span>
        </div>
      </div>
      <DeveloperVisual />
      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-icon">
            <ArrowDown size={14} />
          </span>{" "}
          SCROLL TO EXPLORE
        </a>
        <span>PORTFOLIO / 2026</span>
      </div>
    </section>
  );
}
