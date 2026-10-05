import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer container">
      <a className="brand" href="#home">
        <span className="brand-mark">
          v<span>.</span>
        </span>
        <span>Keep learning. Keep building.</span>
      </a>
      <p>© 2026 Vikram Sharma. Built with React.</p>
      <a href="#home" className="back-top" aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
