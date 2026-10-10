import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";

import { links } from "../data";
import planet from "../assets/planet.png";

const fields = [
  { id: "user_name", label: "Name", type: "text", placeholder: "Your name", required: true },
  { id: "user_email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
  { id: "user_company", label: "Company / Context", type: "text", placeholder: "Where you're reaching out from" },
  { id: "message", label: "Message", type: "textarea", placeholder: "What you're trying to ship…", required: true },
];

export default function Contact() {
  const form = useRef();
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState({});
  const [status, setStatus] = useState({ state: "idle", text: "" });
  const [attempted, setAttempted] = useState(false);

  const invalid = (f) => {
    const v = (values[f.id] || "").trim();
    if (f.required && !v) return true;
    if (f.type === "email" && v && !isEmail(v)) return true;
    return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);
    const bad = fields.find(invalid);
    if (bad) {
      setStatus({
        state: "error",
        text: bad.type === "email" && values[bad.id] ? "Enter a valid email address." : "Fill in your name, email and message.",
      });
      return;
    }
    setStatus({ state: "sending", text: "Sending…" });
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ state: "ok", text: "Thanks, your message was sent. I'll get back to you." });
      setValues({});
      setAttempted(false);
      form.current.reset();
    } catch {
      setStatus({ state: "error", text: `The message didn't send. Email me directly at ${links.email}.` });
    }
  };

  return (
    <section className="sec" id="contact">
      <div className="sec__head">
        <div className="sec__tag">05 / Contact</div>
        <h2 className="sec__title">
          Building <em>agent platforms</em> and the infrastructure that lets AI agents use company systems safely.
        </h2>
      </div>
      <div className="contact">
        <div className="contact__l">
          <img className="contact__planet" src={planet} alt="" aria-hidden="true" />
          <div className="contact__channels">
            <a href={`mailto:${links.email}`}>
              <span className="label">Email</span>
              <span>{links.email}</span>
              <span className="arr">→</span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="label">LinkedIn</span>
              <span>/in/mateeb-alharbi</span>
              <span className="arr">↗</span>
            </a>
          </div>
        </div>
        <form ref={form} className="contact__r form" onSubmit={onSubmit} noValidate>
          {fields.map((f) => {
            const cls = ["form__row", focused === f.id && "focused", attempted && invalid(f) && "invalid"]
              .filter(Boolean)
              .join(" ");
            const common = {
              id: f.id,
              name: f.id,
              placeholder: f.placeholder,
              onFocus: () => setFocused(f.id),
              onBlur: () => setFocused(null),
              onChange: (e) => setValues((v) => ({ ...v, [f.id]: e.target.value })),
            };
            return (
              <div className={cls} key={f.id}>
                <label htmlFor={f.id}>{f.label}</label>
                {f.type === "textarea" ? <textarea {...common} /> : <input type={f.type} {...common} />}
              </div>
            );
          })}
          <button type="submit" className="btn btn--primary form__submit" disabled={status.state === "sending"}>
            Send message <span className="btn__arrow">→</span>
          </button>
          {status.text && (
            <p className={`form__status ${status.state}`} role="status">{status.text}</p>
          )}
        </form>
      </div>
    </section>
  );
}
