import { links } from "../data";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr__inner">
        <div className="hdr__l">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand__mark">MA</span>
          </a>
        </div>
        <nav className="hdr__nav" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hdr__r">
          <a className="hdr__icon" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="hdr__icon" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
