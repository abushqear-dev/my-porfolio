export const personalInfo = {
  name: "Mohammed Abu-Shqear",
  title: "Software Engineer",
  bio: "Software Engineer with full-stack experience (React, Next.js, Node.js, PostgreSQL) and a background in game development (Unity, Godot). Co-Founder of BURAQ Games Studio, where I combine hands-on engineering and UI/UX design with building the studio's culture, processes, and internal tools.",
  phone: "+962 78 974 5350",
  email: "m.abushqear.dev@gmail.com",
  location: "Amman, Jordan",
  links: {
    linkedin: "https://www.linkedin.com/in/abushqear-dev/",
    github: "https://github.com/abushqear-dev"
  },
  resumeUrl: "/resume.pdf",
  version: "2.1.0"
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  link: string;
  period: string;
  description: string;
  points: string[];
  screenshots?: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    title: "Wastons Gone",
    link: "",
    period: "2026 September - Present",
    description: "Buraq Games Studio's first full production — a PC game currently in development, targeting release on Steam. Leading it as Project Manager.",
    points: [
      "Leading the studio's first full production as Project Manager, running planning, scheduling, and cross-discipline coordination toward a planned December 2026 milestone.",
      "Designed and drove a two-phase production framework covering GDD breakdown, team/role structuring, product backlog creation, and milestone timelines.",
      "Actively iterating the framework mid-production based on continuous evaluation.",
      "Ran cycle planning, daily/periodic stand-ups, and review/approval workflows to keep the backlog moving and unblock leads."
    ]
  },
  {
    title: "Brackeys Jam 2026",
    link: "",
    period: "2026 August",
    description: "Team Lead for BURAQ Games Studio's entry in the Brackeys game jam.",
    points: [
      "Led the team through the game jam.",
      "Developed an early framework for daily progress, later matured into Buraq's full production framework.",
      "Created concept UI for the game (Excalidraw)."
    ]
  },
  {
    title: "Anjez",
    link: "",
    period: "2025 December - 2026 January",
    description: "Web-based task management application to help users organize, track, and manage tasks efficiently.",
    points: [
      "Developing the frontend using Next.js, React, TypeScript, and Tailwind CSS with a focus on performance and usability.",
      "Implementing backend functionality using Node.js, Express.js, Prisma ORM, and PostgreSQL.",
      "Designing the full UI/UX in Figma.",
      "Used Claude Code and Codex to accelerate prototyping and iteration across the frontend and backend."
    ],
    screenshots: [
      { src: "/screenshots/anjez/board-light.jpg", alt: "Anjez task board, light theme" },
      { src: "/screenshots/anjez/board-dark.jpg", alt: "Anjez task board, dark theme" },
      { src: "/screenshots/anjez/auth-light.jpg", alt: "Anjez sign in / register screen, light theme" },
      { src: "/screenshots/anjez/auth-dark.jpg", alt: "Anjez sign in / register screen, dark theme" }
    ]
  },
  {
    title: "CodeQuest",
    link: "https://github.com/abushqear-dev/CodeQuest",
    period: "2024 February - 2024 June",
    description: "A Unity-based educational prototype designed to gamify the programming learning curve, using an adaptive difficulty system to guide users through technical concepts based on their career interests.",
    points: [
      "Built an adaptive-difficulty learning system that gamifies programming education based on user career interests.",
      "Collaborated on game mechanics and learning flow to improve player retention.",
      "Took a complete game level from Figma mockups to a playable Unity build.",
      "Created the game's promotional materials, including the official poster."
    ],
    screenshots: [
      { src: "/screenshots/codequest/poster.jpg", alt: "CodeQuest official poster artwork" },
      { src: "/screenshots/codequest/main-menu.jpg", alt: "CodeQuest main menu screen" },
      { src: "/screenshots/codequest/registration.jpg", alt: "CodeQuest terminal-style registration screen" },
      { src: "/screenshots/codequest/news-updates.jpg", alt: "CodeQuest news and updates panel" }
    ]
  },
  {
    title: "HEXYBER (3D)",
    link: "",
    period: "2026 January - 2026 April",
    description: "A 3D multiplayer game built in Godot with Blender-integrated assets.",
    points: [
      "Developed an online multiplayer system, allowing players to host or join rooms via IP and port.",
      "Built the core gameplay mechanics from scratch.",
      "Imported, configured, and integrated 3D assets (Blender) within Godot."
    ]
  },
  {
    title: "Al-Hakika",
    link: "",
    period: "2025 May - 2025 July",
    description: "A news website designed to deliver timely and accurate content to readers.",
    points: [],
    screenshots: [
      { src: "/screenshots/al-hakika/article-light.jpg", alt: "Al-Hakika article page, light theme" },
      { src: "/screenshots/al-hakika/article-dark.jpg", alt: "Al-Hakika article page, dark theme" },
      { src: "/screenshots/al-hakika/auth.jpg", alt: "Al-Hakika sign in / register screen" }
    ]
  }
];

export const experience = [
  {
    title: "Co-Founder",
    company: "BURAQ Games Studio",
    period: "2026 January - Present",
    points: [
      "Collaborated on studio vision, mission, and strategy, and phrased and designed the Burraq Studio Charters.",
      "Managed game design, development planning, team coordination, and production tasks.",
      "Built the studio's infrastructural framework, contributing to a sustainable, process-driven system that maximizes team productivity and supports continuous growth.",
      "Wrote and maintained studio documentation, and expanded and restructured communication and community channels.",
      "Designed the UI/UX of the studio's website and internal apps, and introduced management tools including a new-hire meeting template and an in-progress org management tool.",
      "Used tools such as Unity, Godot, Blender, GitHub, Gitea, Plane, and Figma."
    ]
  },
  {
    title: "Software Engineer",
    company: "Black Iris",
    period: "2024 September - 2025 September",
    points: [
      "Contributed to the development and maintenance of software features.",
      "Collaborated with the team to debug issues, review code, and improve system reliability.",
      "Worked on both frontend and backend tasks using modern development practices."
    ]
  },
  {
    title: "Full-Stack Engineer",
    company: "Trek Medics International",
    period: "2023 January - 2024 July",
    points: [
      "Built and maintained full-stack features to support internal and user-facing workflows.",
      "Integrated APIs and improved communication between different system components.",
      "Collaborated remotely with the team to deliver stable and user-focused updates."
    ]
  }
];

export const skills = {
  frontend: "React, Next.js, TanStack Query, Tailwind, Figma",
  backend: "TypeScript, JavaScript, .NET, Node.js, Express.js, C#, Java, Python",
  apisTools: "RESTful APIs, Git & GitHub, Docker, Gitea, Plane, Notion",
  databases: "PostgreSQL, MySQL, MongoDB, Prisma, Drizzle ORM",
  gameDev: "Godot, GDScript, 3D Modeling, Unity",
  ai: "Prompt Engineering, Claude Code, Codex, Kimi",
  production: "Project Management, Production Planning, Agile-style Frameworks",
  soft: "Teamwork, Time Management, Dependability, Organization, Adaptability, Continuous learning"
};
