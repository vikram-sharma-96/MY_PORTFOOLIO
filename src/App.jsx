import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Certificates from "./components/Certificates";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useMotion from "./hooks/useMotion";

export default function App() {
  useMotion();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <div className="reading-progress" aria-hidden="true" />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certificates />
        <Coding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
