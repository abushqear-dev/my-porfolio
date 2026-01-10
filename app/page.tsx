import Image from "next/image";
import { personalInfo, projects, experience, skills } from "./data";
import { ThemeToggle } from "@/components/theme-toggle-wrapper";

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim().replace(/\.$/, ""))
    .filter(Boolean);

export default function Home() {
  const monoFont = "font-[family-name:var(--font-mono)]";
  const phoneHref = personalInfo.phone.replace(/\s+/g, "");

  const contactItems = [
    {
      key: "phone",
      label: personalInfo.phone,
      href: `tel:${phoneHref}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      key: "email",
      label: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      className: "lowercase",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      key: "location",
      label: personalInfo.location,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      key: "linkedin",
      label: "LinkedIn",
      href: personalInfo.links.linkedin,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      key: "github",
      label: "GitHub",
      href: personalInfo.links.github,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
  ];

  const experienceItems = experience.filter(
    (item) =>
      item.title ||
      item.company ||
      item.period ||
      item.points?.some((point) => point.trim())
  );

  const skillGroups = [
    { title: "Frontend", items: splitList(skills.frontend) },
    { title: "Backend", items: splitList(skills.backend) },
    { title: "Tools", items: splitList(skills.tools) },
    { title: "Soft skills", items: splitList(skills.soft) },
    { title: "Other", items: splitList(skills.other) },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-float motion-reduce:animate-none" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-accent-2/20 blur-[160px] animate-float animate-delay-300 motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-10 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-10 lg:py-16">
        <aside className="space-y-10 lg:sticky lg:top-10 lg:self-start">
          <div className="flex items-start justify-between gap-4">
            <div className="relative h-28 w-28 shrink-0">
              <div className="absolute -inset-2 rounded-[28px] border border-border/50 bg-surface/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)]" />
              <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-border/70 bg-surface">
                <Image
                  src="/images/my-photo.jpeg"
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  sizes="(min-width: 1024px) 180px, 128px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <ThemeToggle className="mt-1" />
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p className={`text-xs uppercase tracking-[0.35em] text-muted ${monoFont}`}>
                Portfolio
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold text-heading lg:text-4xl">
                  {personalInfo.name}
                </h1>
                <span
                  className={`rounded-full border border-border/60 bg-surface-2/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted ${monoFont}`}
                >
                  v{personalInfo.version}
                </span>
              </div>
              <p className="text-base font-medium text-accent">
                {personalInfo.title}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {personalInfo.bio}
            </p>
          </div>

          <div className="space-y-3">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface-2 text-foreground">
                    {item.icon}
                  </span>
                  <span className={`text-sm text-foreground/80 ${item.className ?? ""}`}>
                    {item.label}
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.key}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-surface/70 px-4 py-3 transition hover:border-accent/60 hover:bg-surface-2/70"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.key}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/70 px-4 py-3"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.32em] text-muted">
            <a href="#projects" className="transition hover:text-heading">
              Projects
            </a>
            {experienceItems.length > 0 && (
              <a href="#experience" className="transition hover:text-heading">
                Experience
              </a>
            )}
            <a href="#skills" className="transition hover:text-heading">
              Skills
            </a>
          </nav>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted transition hover:border-accent/60 hover:text-heading ${monoFont}`}
              >
                <span className="text-foreground">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        <div className="space-y-16">
          <section
            id="projects"
            className="space-y-8 animate-fade-up motion-reduce:animate-none"
          >
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.35em] text-muted ${monoFont}`}
                >
                  Selected work
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-heading lg:text-4xl">
                  Projects
                </h2>
              </div>
            </header>

            <div className="grid gap-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-accent/60 hover:bg-surface"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl font-semibold text-heading transition group-hover:text-accent"
                      >
                        {project.title}
                      </a>
                      <span
                        className={`text-xs uppercase tracking-[0.3em] text-muted ${monoFont}`}
                      >
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {project.points.map((point, index) => (
                        <li key={`${project.title}-point-${index}`} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {experienceItems.length > 0 && (
            <section
              id="experience"
              className="space-y-8 animate-fade-up animate-delay-100 motion-reduce:animate-none"
            >
              <header className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.35em] text-muted ${monoFont}`}
                  >
                    Timeline
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-heading lg:text-4xl">
                    Experience
                  </h2>
                </div>
                <p className="text-sm text-muted">
                  Roles and milestones from recent work.
                </p>
              </header>

              <div className="grid gap-6">
                {experienceItems.map((exp, index) => (
                  <article
                    key={`${exp.title}-${exp.company}-${index}`}
                    className="rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                        <h3 className="text-xl font-semibold text-heading">
                          {exp.title} {exp.company && "-"} {exp.company}
                        </h3>
                        <span
                          className={`text-xs uppercase tracking-[0.3em] text-muted ${monoFont}`}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        {exp.points
                          ?.filter((point) => point.trim())
                          .map((point, pointIndex) => (
                            <li
                              key={`${exp.title}-point-${pointIndex}`}
                              className="flex gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                              {point}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section
            id="skills"
            className="space-y-8 animate-fade-up animate-delay-200 motion-reduce:animate-none"
          >
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.35em] text-muted ${monoFont}`}
                >
                  Expertise
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-heading lg:text-4xl">
                  Skills
                </h2>
              </div>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <h3
                    className={`text-xs uppercase tracking-[0.35em] text-muted ${monoFont}`}
                  >
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item, index) => (
                      <li
                        key={`${group.title}-${item}-${index}`}
                        className="rounded-full border border-border/60 bg-surface-2/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
