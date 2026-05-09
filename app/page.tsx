
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, experience, skills } from "./data";
import { Sidebar } from "@/components/sidebar";

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim().replace(/\.$/, ""))
    .filter(Boolean);

export default function Home() {
  const monoFont = "font-[family-name:var(--font-mono)]";

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
        <Sidebar />

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
              <Link
                href="/blog"
                className="group flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
              >
                <span className={`uppercase tracking-[0.2em] ${monoFont}`}>
                  Blog
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
