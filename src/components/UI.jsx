import {
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  Server,
  Cloud,
  Terminal,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const icons = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  cloud: Cloud,
  terminal: Terminal,
  sparkles: Sparkles,
  graduation: GraduationCap,
};
export function SkillIcon({ name, ...props }) {
  const Icon = icons[name] || Code2;
  return <Icon aria-hidden="true" {...props} />;
}

export function RevealText({ text, className = "", offset = 0 }) {
  const words = text.split(" ");
  return (
    <span className={`reveal-text ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="word-clip">
            <span
              className="word-reveal"
              style={{ "--word-delay": `${(index + offset) * 65}ms` }}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export function SectionHeading({ number, eyebrow, title, accent, children }) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </p>
        <h2>
          <RevealText text={title} />{" "}
          <RevealText
            text={accent}
            className="heading-accent"
            offset={title.split(" ").length}
          />
        </h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

export function ResourceLink({
  href,
  children,
  className = "",
  download = false,
  label,
}) {
  if (!href)
    return (
      <span className={`resource-placeholder ${className}`}>
        <button
          type="button"
          disabled
          aria-label={`${label || (typeof children === "string" ? children : "Link")} — coming soon`}
        >
          {children}
        </button>
        <span className="resource-hint">Coming soon</span>
      </span>
    );
  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
    >
      {children}
    </a>
  );
}

export function Arrow({ size = 17 }) {
  return <ArrowUpRight size={size} aria-hidden="true" />;
}
