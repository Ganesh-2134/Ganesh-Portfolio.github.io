import { useTheme } from "./hooks/useTheme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Timeline from "./components/Timeline";
import PipelineFlow from "./components/PipelineFlow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <Nav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Timeline />
        <PipelineFlow />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
