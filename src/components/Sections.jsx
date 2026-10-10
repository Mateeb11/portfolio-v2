import { about, focus, stack, projects, experience, education } from "../data";

import ecommerce from "../assets/projects/E-commerce product page/desktop.png";
import multistep from "../assets/projects/Multi-step form/desktop.png";
import easybank from "../assets/projects/EasyBank landing page/desktop.png";

const images = { ecommerce, multistep, easybank };

function SectionHead({ tag, children }) {
  return (
    <div className="sec__head">
      <div className="sec__tag">{tag}</div>
      <h2 className="sec__title">{children}</h2>
    </div>
  );
}

export function About() {
  return (
    <section className="sec" id="about">
      <SectionHead tag="01 / About">
        From shipping software to building <em>agent platforms</em>.
      </SectionHead>
      <ol className="path">
        {about.path.map((p, i) => (
          <li className="path__step" key={p.step}>
            <div className="path__label">
              <span className="path__num">{String(i + 1).padStart(2, "0")}</span>
              {p.step}
            </div>
            <p className="path__text">{p.text}</p>
          </li>
        ))}
      </ol>
      <p className="path__bring">
        <span className="path__bring-label">What I bring</span>
        {about.bring}
      </p>
    </section>
  );
}

export function Focus() {
  return (
    <section className="sec" id="focus">
      <SectionHead tag="02 / Focus">
        Building <em>agent platforms</em> with the discipline of production software.
      </SectionHead>
      <div className="focus-grid">
        {focus.map((it) => (
          <div className="focus-card" key={it.num}>
            <div className="focus-card__num">{it.num}</div>
            <h3 className="focus-card__title">{it.title}</h3>
            <p className="focus-card__body">{it.body}</p>
            <div className="focus-card__tags">
              {it.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section className="sec" id="stack">
      <SectionHead tag="03 / Stack">
        A working toolkit for agentic AI, built on a software engineering foundation.
      </SectionHead>
      <div>
        {stack.map((g) => (
          <div className="stack__group" key={g.label}>
            <h3 className="stack__group-h">{g.label}</h3>
            <div className="stack__items">
              {g.items.map((name) => (
                <div className="stack-chip" key={name}>
                  <span className="stack-chip__dot" />
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountriesSchematic() {
  const flags = [
    ["#0046a8", "#fff", "#ce1126"], ["#000", "#fcd116", "#ce1126"], ["#fcd116", "#003580", "#ce1126"],
    ["#009b3a", "#fcd116", "#002776"], ["#012169", "#fff", "#c8102e"], ["#bf0a30", "#fff", "#002868"],
    ["#cd0000", "#fff", "#000"], ["#000", "#dc143c", "#fcd116"], ["#0073cf", "#fff", "#0073cf"],
  ];
  return (
    <svg className="proj__schematic" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="REST Countries explorer preview">
      <rect width={600} height={340} fill="var(--panel-2)" />
      <text x={30} y={36} fontFamily="Rubik" fontSize={10} letterSpacing={2} fill="rgba(255,255,255,0.4)">COUNTRIES · 250</text>
      <rect x={420} y={20} width={150} height={26} rx={13} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={435} y={37} fontFamily="Rubik" fontSize={11} fill="rgba(255,255,255,0.5)">⌕  search…</text>
      {flags.map((f, i) => {
        const x = 30 + (i % 3) * 190;
        const y = 70 + Math.floor(i / 3) * 90;
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <rect width={170} height={70} rx={6} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
            <rect x={10} y={10} width={50} height={34} rx={2} fill={f[1]} />
            <rect x={10} y={10} width={50} height={11} fill={f[0]} />
            <rect x={10} y={33} width={50} height={11} fill={f[2]} />
            <rect x={70} y={16} width={70} height={6} rx={2} fill="rgba(255,255,255,0.18)" />
            <rect x={70} y={28} width={50} height={5} rx={2} fill="rgba(255,255,255,0.08)" />
            <rect x={70} y={38} width={60} height={5} rx={2} fill="rgba(255,255,255,0.08)" />
          </g>
        );
      })}
    </svg>
  );
}

export function Work() {
  return (
    <section className="sec" id="work">
      <SectionHead tag="05 / Work">
        Selected frontend projects: the engineering foundation under the AI work.
      </SectionHead>
      <div className="work">
        {projects.map((p) => (
          <article className="proj" key={p.id}>
            <div className="proj__hdr">
              <span>{"// frontend · "}{p.id}</span>
              <span className="badge">Live</span>
            </div>
            <div className="proj__media-wrap">
              {p.image ? (
                <img className="proj__media" src={images[p.image]} alt={p.title} loading="lazy" />
              ) : (
                <CountriesSchematic />
              )}
            </div>
            <div className="proj__content">
              <h3 className="proj__title">{p.title}</h3>
              <p className="proj__desc">{p.desc}</p>
              <div className="proj__stack">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="proj__cta">
                <a href={p.site} target="_blank" rel="noopener noreferrer">Site ↗</a>
                <a href={p.code} target="_blank" rel="noopener noreferrer">Code ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="sec" id="experience">
      <SectionHead tag="04 / Experience">
        From software engineering to AI Enablement.
      </SectionHead>
      <div className="xp">
        {experience.map((r) => (
          <div className="xp__row" key={r.title + r.when}>
            <div className="xp__when">
              {r.now ? <><span className="now">●</span> </> : null}
              {r.when}
            </div>
            <div className="xp__main">
              <h3>{r.title}</h3>
              <div className="where">{r.where}</div>
              {r.bullets.length > 0 && (
                <ul>
                  {r.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
            <div className="xp__type">{r.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="sec" id="education">
      <SectionHead tag="06 / Education">Education and training.</SectionHead>
      <div className="xp">
        {education.map((r) => (
          <div className="xp__row" key={r.title}>
            <div className="xp__when">{r.when}</div>
            <div className="xp__main">
              <h3>{r.title}</h3>
              <div className="where">{r.where}</div>
              <p>{r.detail}</p>
            </div>
            <div className="xp__type" />
          </div>
        ))}
      </div>
    </section>
  );
}
