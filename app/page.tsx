import Image from "next/image";
import { personalInfo, projects, experience, skills } from "./data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const monoFont = "font-[family-name:var(--font-ibm-mono)]";

  return (
    <main className="min-h-screen w-full bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col lg:flex-row overflow-hidden font-[family-name:var(--font-ibm-sans)]">
      
      {/* LEFT PANEL: Profile Section */}
      <section className="w-full lg:w-[480px] shrink-0 border-b lg:border-b-0 lg:border-r border-border flex flex-col p-8 lg:p-16 h-fit lg:h-screen lg:overflow-y-auto scrollbar-hide">
        <div className="flex justify-between items-start mb-16">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-full border-2 border-border/30 scale-[1.08]"></div>
            <div className="absolute inset-0 rounded-full border-2 border-border scale-100 overflow-hidden">
              <Image 
                src="/images/my-photo.jpeg" 
                alt={`${personalInfo.name} profile photo`} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
          <div className="lg:absolute lg:top-8 lg:right-8">
            <ThemeToggle />
          </div>
        </div>

        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className={`text-4xl lg:text-5xl font-bold ${monoFont} tracking-tight uppercase text-heading`}>
              {personalInfo.name}
            </h1>
            <p className={`text-xl opacity-80 ${monoFont}`}>{personalInfo.title}</p>
          </div>

          <p className="text-base leading-relaxed opacity-60 max-w-md mx-auto lg:mx-0">
            {personalInfo.bio}
          </p>

          <div className="space-y-4 pt-6 border-t border-border/30">
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-sm">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="text-sm lowercase">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-sm">{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex gap-4 pt-8 text-sm">
            <span className="opacity-30 uppercase tracking-widest text-xs font-bold">Contact me:</span>
            <a href={personalInfo.links.linkedin} target="_blank" className="opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={personalInfo.links.github} target="_blank" className="opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* RIGHT PANEL: Sequential Sections */}
      <section className="flex-1 lg:h-screen lg:overflow-y-auto scrollbar-hide">
        
        {/* PROJECTS */}
        <div id="projects" className="p-8 lg:p-16 border-b border-border">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-16 uppercase ${monoFont} text-heading tracking-wide`}>Projects</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="space-y-4 group">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2">
                  <a href={project.link} target="_blank" className="block">
                    <h3 className={`text-2xl font-bold group-hover:underline underline-offset-8 decoration-border/50 ${monoFont} text-heading`}>{project.title}</h3>
                  </a>
                  <span className="text-sm opacity-40 font-mono tracking-tighter">{project.period}</span>
                </div>
                <p className="opacity-60 leading-relaxed max-w-3xl">{project.description}</p>
                <ul className="space-y-2 opacity-50 text-sm list-none">
                  {project.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-foreground shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div id="experience" className="p-8 lg:p-16 border-b border-border">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-16 uppercase ${monoFont} text-heading tracking-wide`}>Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2">
                  <h3 className={`text-2xl font-bold ${monoFont} text-heading`}>
                    {exp.title} <span className="text-lg opacity-40 font-normal lowercase text-foreground">at</span> {exp.company}
                  </h3>
                  <span className="text-sm opacity-40 font-mono tracking-tighter">{exp.period}</span>
                </div>
                <ul className="space-y-3 opacity-60 list-none">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 w-1 h-1 bg-foreground shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills" className="p-8 lg:p-16 pb-24 lg:pb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-16 uppercase ${monoFont} text-heading tracking-wide`}>Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="space-y-2">
                <h4 className={`text-sm font-bold uppercase tracking-widest opacity-40 ${monoFont}`}>Soft</h4>
                <p className="opacity-80 leading-relaxed lowercase">{skills.soft}</p>
              </div>
              <div className="space-y-2">
                <h4 className={`text-sm font-bold uppercase tracking-widest opacity-40 ${monoFont}`}>Tech</h4>
                <p className="opacity-80 leading-relaxed lowercase">{skills.frontend}, {skills.backend}</p>
              </div>
              <div className="space-y-2">
                <h4 className={`text-sm font-bold uppercase tracking-widest opacity-40 ${monoFont}`}>Tools</h4>
                <p className="opacity-80 leading-relaxed lowercase">{skills.tools}</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}