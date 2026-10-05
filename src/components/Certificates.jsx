import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data/portfolio";
import { SectionHeading, ResourceLink } from "./UI";

export default function Certificates() {
  return (
    <section id="certificates" className="section container">
      <SectionHeading
        number="05"
        eyebrow="LEARNING MILESTONES"
        title="Knowledge is"
        accent="always worth pursuing."
      >
        Space for courses, certifications, and badges. Details and credentials
        will be added once confirmed.
      </SectionHeading>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <article className="certificate-card reveal" key={cert.name}>
            <div className="certificate-top">
              <Award size={28} strokeWidth={1.4} />
              <span>{cert.url ? "CREDENTIAL" : "PLACEHOLDER"}</span>
            </div>
            <p className="eyebrow">{cert.category}</p>
            <h3>{cert.name}</h3>
            <p className="certificate-meta">
              Issuer: {cert.issuer || "To be added"}
              <br />
              Year: {cert.year || "To be added"}
            </p>
            <ResourceLink href={cert.url} label={`${cert.name} certificate`}>
              <span>View Certificate</span>
              <ExternalLink size={14} />
            </ResourceLink>
          </article>
        ))}
      </div>
    </section>
  );
}
