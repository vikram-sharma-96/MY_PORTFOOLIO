import { useEffect, useRef, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "../data/portfolio";
import { ResourceLink } from "./UI";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event) => {
      if (
        event.key === "Escape" &&
        toggle.current?.getAttribute("aria-expanded") === "true"
      ) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1050) setOpen(false);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    links.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner container">
        <a
          href="#home"
          className="brand"
          aria-label="Vikram Sharma home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            v<span>.</span>
          </span>
          <span>
            Vikram Sharma<span className="brand-period">.</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map(([id, text]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {text}
            </a>
          ))}
          <ResourceLink
            href={profile.resume}
            download
            className="nav-resume"
            label="Resume"
          >
            Resume <Download size={14} aria-hidden="true" />
          </ResourceLink>
        </nav>
      </div>
    </header>
  );
}
