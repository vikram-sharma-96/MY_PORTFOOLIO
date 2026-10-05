import { useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";
import { profile } from "../data/portfolio";
import { ResourceLink } from "./UI";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState(null);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi Vikram,\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`;
    setDraft(message);
    setCopied(false);
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`)}&body=${encodeURIComponent(message)}`;
      setStatus(
        "Your email app has been requested. Review and send the message there; nothing has been sent by this website.",
      );
    } else
      setStatus(
        "Your draft is ready below. Email is not connected yet, so this message has not been sent. You can copy and save it.",
      );
  }
  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setStatus("Draft copied. Nothing has been sent.");
    } catch {
      setStatus("Copy is unavailable. Select and copy the draft below.");
    }
  }
  return (
    <section id="contact" className="section container contact-section">
      <div className="contact-copy reveal">
        <p className="eyebrow">
          <span>06 /</span> SAY HELLO
        </p>
        <h2>
          Let’s build
          <br />
          something
          <br />
          <span>together.</span>
          <span className="contact-asterisk" aria-hidden="true">
            ✳
          </span>
        </h2>
        <p>
          A project idea, a learning opportunity, or just a conversation about
          technology — I’d love to connect.
        </p>
        <div className="contact-channels">
          <ResourceLink
            href={profile.email ? `mailto:${profile.email}` : ""}
            label="Email"
          >
            <Mail size={18} />
            <span>{profile.email || "Email to be added"}</span>
          </ResourceLink>
          <ResourceLink href={profile.github} label="GitHub">
            <Github size={18} /> GitHub
          </ResourceLink>
          <ResourceLink href={profile.linkedin} label="LinkedIn">
            <Linkedin size={18} /> LinkedIn
          </ResourceLink>
        </div>
      </div>
      <form className="contact-form reveal" onSubmit={submit}>
        <h3>Start a conversation</h3>
        <p>
          {profile.email
            ? "Prepare a message to send with your email app."
            : "Prepare a message. Contact details are coming soon."}
        </p>
        <div className="form-row">
          <label htmlFor="name">
            Your name
            <input
              id="name"
              name="name"
              placeholder="What should I call you?"
              autoComplete="name"
              required
              maxLength={100}
            />
          </label>
          <label htmlFor="email">
            Your email
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              maxLength={254}
            />
          </label>
        </div>
        <label htmlFor="message">
          Your message
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about your idea…"
            rows={5}
            required
            maxLength={3000}
          />
        </label>
        <button className="button button-primary" type="submit">
          {profile.email ? "Open email draft" : "Prepare message"}{" "}
          <Send size={16} />
        </button>
        <p className="form-note">
          {profile.email
            ? "Opens your email app. No data is stored on this site."
            : "Draft only · Sending will be available when email is added."}
        </p>
        <p className="form-status" role="status">
          {status}
        </p>
        {draft && (
          <div className="draft-preview">
            <label htmlFor="draft">Your message draft</label>
            <textarea id="draft" readOnly value={draft} rows={6} />
            <button className="text-link" type="button" onClick={copyDraft}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy draft"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
