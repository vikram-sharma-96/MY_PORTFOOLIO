// Add your real details here. Empty values render honest, disabled placeholders.
export const profile = {
  name: "Vikram Sharma",
  github: "https://github.com/vikram-sharma-96",
  linkedin: "https://www.linkedin.com/in/vikram-sharma-a7375835a/",
  email: "",
  resume: "", // Put resume.pdf in public/ and set this to '/resume.pdf'.
};

export const projects = [
  {
    id: "krishisetu",
    number: "01",
    title: "KrishiSetu",
    category: "AI FOR IMPACT",
    subtitle: "Technology with roots in the real world.",
    description:
      "A multilingual AI crop disease diagnosis & offline advisory platform, designed to help farmers identify crop diseases and access practical advisory information.",
    technologies: ["AI", "Python", "FastAPI", "HTML / CSS / JS"],
    github: "",
    live: "",
  },
  {
    id: "interview",
    number: "02",
    title: "AI Interview Agent",
    category: "GENERATIVE AI",
    subtitle: "A little more practice. A lot more confidence.",
    description:
      "An AI-powered interview practice platform exploring how conversational AI can make preparation more accessible and interactive.",
    technologies: ["React", "FastAPI", "Ollama", "Qwen", "JavaScript"],
    github: "",
    live: "",
  },
  {
    id: "events",
    number: "03",
    title: "Event Manager",
    category: "WEB APPLICATION",
    subtitle: "Good events start with better organization.",
    description:
      "A web application for managing hackathons, workshops, conferences, and coding events in one organized place.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    github: "",
    live: "",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    icon: "code",
    label: "The foundations",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    name: "Frontend",
    icon: "layout",
    label: "Ideas into interfaces",
    skills: ["HTML", "CSS", "React.js", "Vite"],
  },
  {
    name: "Backend",
    icon: "server",
    label: "Behind the scenes",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Cloud",
    icon: "cloud",
    label: "Beyond the local machine",
    skills: ["AWS", "Cloud Computing"],
  },
  {
    name: "Tools",
    icon: "terminal",
    label: "My everyday toolkit",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    name: "AI",
    icon: "sparkles",
    label: "Exploring what comes next",
    skills: ["Generative AI", "AI tools", "AI-assisted development"],
  },
  // Add a Database / API group here when you have technologies to share.
];

export const journey = [
  {
    title: "Building a foundation",
    tag: "B.TECH CSE · YEAR 2",
    description:
      "Studying Computer Science and strengthening the fundamentals behind the software I want to build.",
    icon: "graduation",
  },
  {
    title: "From markup to meaningful interfaces",
    tag: "WEB DEVELOPMENT & REACT",
    description:
      "Learning full-stack development with HTML, CSS, JavaScript, React, and Node.js through practical projects.",
    icon: "layout",
  },
  {
    title: "Exploring new possibilities",
    tag: "AI / GENERATIVE AI & CLOUD",
    description:
      "Exploring generative AI, AI-assisted development, and AWS to understand how modern applications work.",
    icon: "sparkles",
  },
  {
    title: "Learning by doing, every day",
    tag: "DSA, PROJECTS & HACKATHONS",
    description:
      "Practicing data structures and algorithms, exploring competitive programming, and developing ideas for projects and hackathons.",
    icon: "code",
  },
];

// These are placeholders, not claims of completed certifications.
// Supply the exact name, issuer, year, and certificate URL when confirmed.
export const certificates = [
  { name: "CS50", issuer: "", year: "", url: "", category: "COMPUTER SCIENCE" },
  {
    name: "Google Generative AI",
    issuer: "",
    year: "",
    url: "",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    name: "Google Cloud certifications / badges",
    issuer: "",
    year: "",
    url: "",
    category: "CLOUD COMPUTING",
  },
  {
    name: "Other certificates",
    issuer: "",
    year: "",
    url: "",
    category: "CONTINUOUS LEARNING",
  },
];
