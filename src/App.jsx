import Starfield from "./components/Starfield";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { About, Focus, Stack, Work, Experience, Education } from "./components/Sections";
import Contact from "./components/Contact";
import { links } from "./data";

export default function App() {
  return (
    <>
      <Starfield />
      <Header />
      <div className="page">
        <main>
          <Hero />
          <About />
          <Focus />
          <Stack />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        <footer className="ftr">
          <div className="ftr__l">
            <span className="brand__mark sm">MA</span>
            <span>© {new Date().getFullYear()} Mateeb Alharbi · all rights reserved</span>
          </div>
          <div className="ftr__r">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </footer>
      </div>
    </>
  );
}
