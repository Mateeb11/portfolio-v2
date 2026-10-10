// Site content. Kept in sync with the CV (Mateeb_Alharbi_CV_2026).

export const links = {
  email: "mateeb.alh@gmail.com",
  linkedin: "https://www.linkedin.com/in/mateeb-alharbi/",
  github: "https://github.com/Mateeb11",
};

export const hero = {
  lede: "AI Enablement Engineer focused on preparing enterprise infrastructure for AI agents consumption and building internal tools that help stakeholders integrate AI agents into their workflows.",
};

// The bio, split into the steps of the path so it reads in short pieces.
export const about = {
  path: [
    {
      step: "Where I started",
      text: "My path started with Computer Science at Umm Al-Qura University. I then worked as a frontend engineer at WAKI, building Angular features and learning how to ship and maintain software that real users depend on.",
    },
    {
      step: "Joining Mobily",
      text: "I joined Mobily through the Elite Graduate Development Program. I rotated across the technical departments, built PoCs, and completed an Executive Leadership Program with IE Business School, where our team won \"Most Feasible Project\" in Madrid. We closed the program by presenting our project to the CEO and executive leadership.",
    },
    {
      step: "Today",
      text: "Today I'm an AI & ML Senior Specialist at Mobily. I build agent platforms and the infrastructure behind them, including MCP servers, secure code execution and authentication, and I take them from prototype to production. I've taught agentic engineering to around 155 colleagues, benchmarked AI coding tools for leadership, and presented products to executives.",
    },
  ],
  bring: "A software engineer's discipline (testing, security, clean delivery) applied to agentic AI, and the ability to explain it to both engineers and business teams.",
};

export const focus = [
  {
    num: "01",
    title: "Agent platforms, prototype to production",
    body: "Building agent platforms and the infrastructure underneath them, then taking them to production with the same discipline as any other software: testing, security reviews and staged rollouts.",
    tags: ["Agent platforms", "Google ADK", "Production"],
  },
  {
    num: "02",
    title: "Secure MCP infrastructure",
    body: "MCP servers, safe code execution and authentication that let AI agents use company systems securely.",
    tags: ["MCP", "OAuth", "Secure execution"],
  },
  {
    num: "03",
    title: "AI enablement",
    body: "Teaching agentic engineering to around 155 colleagues, benchmarking AI coding tools on real engineering tasks for leadership, and presenting AI products to executives.",
    tags: ["Workshops", "Benchmarks", "Adoption"],
  },
];

export const stack = [
  {
    label: "Agentic AI",
    items: ["AI Agents", "MCP / FastMCP", "Google ADK", "Claude API", "OpenAI API", "Gemini", "RAG", "Prompt Engineering", "LLM Evaluation"],
  },
  { label: "Backend & data", items: ["Python", "FastAPI", "PostgreSQL", "REST APIs"] },
  { label: "Cloud & security", items: ["GCP", "Vertex AI", "Docker", "OAuth"] },
  { label: "Frontend", items: ["TypeScript", "Angular", "React"] },
  { label: "Engineering practice", items: ["Software Engineering", "Test Automation", "Git"] },
];

export const projects = [
  {
    id: "case-01",
    title: "E-commerce product page",
    image: "ecommerce",
    desc: "Image gallery with lightbox, quantity controls, cart state, and full mobile parity, built as a stress test of component composition and state.",
    tags: ["React", "CSS", "State"],
    site: "https://present-hook.surge.sh/",
    code: "https://github.com/Mateeb11/ecommerce-product-page",
  },
  {
    id: "case-02",
    title: "REST Countries explorer",
    image: null,
    desc: "Search, filter and routing across 250 countries with a theme switcher and a Redux store. An exercise in routing, async data and design-system thinking.",
    tags: ["React", "Redux Toolkit", "React Router", "CSS"],
    site: "https://humdrum-smell.surge.sh/",
    code: "https://github.com/Mateeb11/rest-countries-api-with-color-theme-switcher-master",
  },
  {
    id: "case-03",
    title: "Multi-step onboarding form",
    image: "multistep",
    desc: "Validated step flow with summary review, plan toggling and clear error states.",
    tags: ["React", "Sass", "Validation"],
    site: "https://aback-icicle.surge.sh/",
    code: "https://github.com/Mateeb11/multi-step-form",
  },
  {
    id: "case-04",
    title: "EasyBank landing page",
    image: "easybank",
    desc: "Marketing landing page built from a design brief: responsive grid, motion and a tight content rhythm.",
    tags: ["React", "Sass", "Responsive"],
    site: "https://gifted-selection.surge.sh/",
    code: "https://github.com/Mateeb11/easybank-landing-page-master",
  },
];

export const experience = [
  {
    when: "07/2026 — Present",
    now: true,
    title: "AI & ML Senior Specialist",
    where: "Mobily · Riyadh",
    type: "Full time",
    bullets: [
      "Developed agent platforms and the underlying infrastructure, transitioning them from prototype to production.",
      "Built secure MCP servers for safe code execution and authentication, ensuring AI agents could access company systems securely.",
      "Conducted benchmarking of AI coding tools on real engineering tasks, presenting findings to leadership for informed decision-making.",
    ],
  },
  {
    when: "12/2025 — 06/2026",
    title: "AI & ML Specialist",
    where: "Mobily · Riyadh",
    type: "Full time",
    bullets: [
      "Developed prototypes and proofs of concept for agent platforms, MCP servers, and AI products, showcasing innovation to executives.",
      "Conducted hands-on workshops on agentic engineering for approximately 155 colleagues, enhancing team capabilities.",
      "Authored a comprehensive written guide to support ongoing learning and application of agentic engineering principles.",
    ],
  },
  {
    when: "06/2024 — 12/2025",
    title: "Elite Specialist · Graduate Development Program",
    where: "Mobily · Riyadh",
    type: "Full time",
    bullets: [
      "Participated in Mobily's Elite Graduate Development Program, focusing on technical rotations across various departments.",
      "Developed Proof of Concepts (PoCs) to support different teams, enhancing collaboration and innovation.",
      "Completed an Executive Leadership Program at IE Business School, where our team won \"Most Feasible Project\" in Madrid.",
      "Presented our project to the CEO and executive leadership, showcasing our strategic insights and solutions.",
    ],
  },
  {
    when: "11/2023 — 06/2024",
    title: "Junior Software Engineer",
    where: "WAKI · Jeddah",
    type: "Full time",
    bullets: [
      "Analyzed requirements to deliver clean and reliable technical solutions.",
      "Collaborated with UX/UI designers to convert designs into responsive frontend code using Angular JS.",
      "Integrated UI components with APIs and databases alongside back-end developers.",
      "Focused on writing high-quality, scalable, and reusable code while continuously improving the user interface based on feedback.",
    ],
  },
  {
    when: "08/2023 — 10/2023",
    title: "Junior Software Developer",
    where: "WAKI · Misk Traineeship Program",
    type: "Internship",
    bullets: [
      "Developed Angular features based on design specifications and integrated them with backend APIs.",
      "Debugged production issues and refactored code to enhance maintainability and performance.",
      "Improved user interface based on user feedback, ensuring a better user experience.",
    ],
  },
  {
    when: "06/2022 — 08/2022",
    title: "IoT & Software Development Intern",
    where: "Smart Methods · Makkah",
    type: "Internship",
    bullets: [],
  },
];

export const education = [
  {
    when: "2018 — 2023",
    title: "B.Sc. Computer Science",
    where: "Umm Al-Qura University · Makkah",
    detail: "GPA 3.71 / 4, Second Honors",
  },
  {
    when: "2026",
    title: "Executive Leadership Program",
    where: "Headspring · IE Business School · Madrid",
    detail: "Part of Mobily's Elite Graduate Development Program. Our team won \"Most Feasible Project\".",
  },
];
