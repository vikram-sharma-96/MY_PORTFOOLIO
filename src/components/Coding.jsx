import { Github, GitBranch, Braces, FolderCode } from "lucide-react";
import { profile, projects } from "../data/portfolio";
import { ResourceLink } from "./UI";

export default function Coding() {
  return (
    <section
      className="container coding-section"
      aria-labelledby="coding-title"
    >
      <div className="coding-panel reveal">
        <div className="coding-header">
          <span className="eyebrow">
            <Github size={19} /> BEHIND THE COMMITS
          </span>
          <span className="static-label">
            {profile.github
              ? "ACTIVITY NOT CONNECTED"
              : "PROFILE NOT CONNECTED"}
          </span>
        </div>
        <div className="coding-grid">
          <div>
            <h2 id="coding-title">
              Small steps.
              <br />
              <span>Better code.</span>
            </h2>
            <p>
              Practicing problems, exploring ideas, and building projects. The
              progress happens one commit at a time.
            </p>
            <ResourceLink
              href={profile.github}
              className="text-link"
              label="GitHub profile"
            >
              Explore my GitHub <Github size={17} />
            </ResourceLink>
          </div>
          <div className="coding-status">
            {[
              [
                GitBranch,
                "Coding activity",
                "Activity integration not configured",
              ],
              [
                FolderCode,
                "Projects",
                `${projects.length} projects showcased in this portfolio`,
              ],
              [Braces, "DSA progress", "Practicing · statistics not added"],
            ].map(([Icon, title, desc]) => (
              <div key={title}>
                <Icon size={20} />
                <span>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </span>
                <span className="status-dash">—</span>
              </div>
            ))}
            <p>No live statistics or contribution data displayed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
