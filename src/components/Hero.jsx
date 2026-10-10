import { hero } from "../data";

function Chip({ variant, top, left, children }) {
  return (
    <span className={`skill-chip${variant ? ` skill-chip--${variant}` : ""}`} style={{ top, left }}>
      <span className="skill-chip__dot" /> {children}
    </span>
  );
}

// Small Jupiter-like planet at the center, with skill chips floating on three orbits.
function HeroOrbit() {
  return (
    <div className="orbit-stage" aria-hidden="true">
      <div className="orbit-stage__bg" />
      <div className="orbit-ring orbit-ring--1" />
      <div className="orbit-ring orbit-ring--2" />
      <div className="orbit-ring orbit-ring--3" />

      {/* Inner orbit — core focus */}
      <div className="orb-spin orb-spin--1">
        <Chip top="50%" left="100%">Agentic AI</Chip>
        <Chip top="50%" left="0%">MCP</Chip>
      </div>

      {/* Middle orbit — how I work */}
      <div className="orb-spin orb-spin--2">
        <Chip variant="alt" top="0%" left="50%">AI Enablement</Chip>
        <Chip variant="alt" top="75%" left="93%">Software Engineering</Chip>
        <Chip variant="alt" top="75%" left="7%">Python</Chip>
      </div>

      {/* Outer orbit — tools */}
      <div className="orb-spin orb-spin--3">
        <Chip variant="cool" top="15%" left="15%">AI Agents</Chip>
        <Chip variant="cool" top="15%" left="85%">Google ADK</Chip>
        <Chip variant="cool" top="85%" left="15%">FastAPI</Chip>
        <Chip variant="cool" top="85%" left="85%">GCP</Chip>
      </div>

      <div className="planet" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__l">
        <h1 className="hero__name">
          Welcome to my page, I&rsquo;m <span className="hero__name-accent">Mateeb Alharbi</span>
        </h1>
        <p className="hero__lede">{hero.lede}</p>
        <div className="hero__cta">
          <a href="#experience" className="btn btn--primary">
            See my experience <span className="btn__arrow">→</span>
          </a>
          <a href="#contact" className="btn">Contact me</a>
        </div>
      </div>
      <HeroOrbit />
    </section>
  );
}
