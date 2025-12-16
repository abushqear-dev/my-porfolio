import Image from "next/image";
import { personalInfo, projects, experience, skills } from "./data";

export default function Home() {
  const monoFont = "font-[family-name:var(--font-ibm-mono)]";

  return (
    // MAIN CONTAINER: Locked to viewport height on desktop, flowing on mobile
    <main className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full overflow-hidden bg-[#FFFDF4] text-[#2E2E2E]">
      
      {/* LEFT PANEL: Static Profile Section */}
      {/* Full width on mobile, 1/3 on desktop. Fixed on desktop. */}
      <section className="w-full lg:w-1/3 flex flex-col items-center justify-center p-8 lg:border-r lg:border-black shrink-0">
        <div className="space-y-6 text-center">
            <div className="h-48 w-48 rounded-full bg-gray-300 mx-auto overflow-hidden relative border-2 border-black">
              <Image src="/my-photo.jpeg" alt={`${personalInfo.name} profile photo`} fill className="object-cover" />
            </div>
            
            <div className="space-y-2">
                <h1 className={`text-4xl lg:text-5xl font-bold ${monoFont} tracking-tight`}>{personalInfo.name}</h1>
                <p className={`text-lg lg:text-xl ${monoFont} opacity-80`}>{personalInfo.title}</p>
            </div>

            <div className="pt-4 flex flex-col gap-4 opacity-70">
              <p className="text-sm lg:text-base text-center max-w-md mx-auto leading-relaxed">
                {personalInfo.bio}
              </p>
                {/* Social Placeholders */}
                <div className="flex flex-col gap-3 text-sm mt-4 items-center w-full">
                  <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"/></svg>
                    <p>{personalInfo.phone}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <p>{personalInfo.email}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity text-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <p className="max-w-[200px]">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6 pt-6 border-t border-gray-300 w-full justify-center">
                  <a href={personalInfo.links.linkedin} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href={personalInfo.links.github} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                </div>
            </div>
        </div>
      </section>

      {/* RIGHT PANEL: The Scrollable Zone */}
      {/* On mobile: standard flow. On desktop: independent scroll. */}
      <section className="flex-1 w-full lg:h-full lg:overflow-y-auto p-8 lg:p-16 scrollbar-hide bg-[#FFFDF4] relative">
        <div className="max-w-2xl mx-auto space-y-24 pb-24">

            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-10 bg-[#FFFDF4]/90 backdrop-blur-sm py-4 mb-12 border-b border-black/5 flex gap-6 text-sm lg:hidden">
              <a href="#projects" className={`hover:opacity-60 transition-opacity ${monoFont}`}>Projects</a>
              <a href="#experience" className={`hover:opacity-60 transition-opacity ${monoFont}`}>Experience</a>
              <a href="#skills" className={`hover:opacity-60 transition-opacity ${monoFont}`}>Skills</a>
            </nav>
            <nav className="sticky top-0 z-10 bg-[#FFFDF4]/90 backdrop-blur-sm py-4 mb-12 border-b border-black/5 hidden lg:flex gap-6 text-sm">
              <a href="#projects" className={`hover:opacity-60 transition-opacity ${monoFont}`}>[Projects]</a>
              <a href="#experience" className={`hover:opacity-60 transition-opacity ${monoFont}`}>[Experience]</a>
              <a href="#skills" className={`hover:opacity-60 transition-opacity ${monoFont}`}>[Skills]</a>
            </nav>
            
            {/* PROJECTS SECTION */}
            <div id="projects" className="space-y-12">
                <h2 className={`text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block ${monoFont}`}>Projects</h2>
                
                {projects.map((project, index) => (
                  <div key={index} className="space-y-4 group">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-fit">
                          <h3 className={`text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 transition-all ${monoFont}`}>{project.title} ↗</h3>
                      </a>
                      <p className="text-gray-600 text-sm">{project.period}</p>
                      <p className="leading-relaxed opacity-90">
                          {project.description}
                      </p>
                      <ul className="list-disc list-inside space-y-1 opacity-80 text-sm">
                          {project.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                      </ul>
                  </div>
                ))}
            </div>

            {/* EXPERIENCE SECTION */}
            <div id="experience" className="space-y-12">
                 <h2 className={`text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block ${monoFont}`}>Experience</h2>
                 
                 {experience.map((exp, index) => (
                    <div key={index} className="space-y-4 group cursor-pointer">
                      <h3 className={`text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 transition-all ${monoFont}`}>{exp.title} <span className={`text-lg font-normal opacity-70 ${monoFont}`}>at {exp.company}</span></h3>
                      <p className="text-gray-600 font-mono text-sm">{exp.period}</p>
                      <ul className="list-disc list-inside space-y-2 opacity-90 mt-4">
                          {exp.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                      </ul>
                    </div>
                 ))}
            </div>

            {/* SKILLS SECTION */}
            <div id="skills" className="space-y-8">
                <h2 className={`text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block ${monoFont}`}>Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Technical Column */}
                    <div className="space-y-8">
                        <div>
                            <h4 className={`font-bold mb-3 text-lg border-b border-black/10 pb-1 inline-block ${monoFont}`}>Frontend</h4>
                            <p className="opacity-80 leading-relaxed">{skills.frontend}</p>
                        </div>
                        <div>
                            <h4 className={`font-bold mb-3 text-lg border-b border-black/10 pb-1 inline-block ${monoFont}`}>Backend</h4>
                            <p className="opacity-80 leading-relaxed">{skills.backend}</p>
                        </div>
                        <div>
                            <h4 className={`font-bold mb-3 text-lg border-b border-black/10 pb-1 inline-block ${monoFont}`}>Tools</h4>
                            <p className="opacity-80 leading-relaxed">{skills.tools}</p>
                        </div>
                    </div>

                    {/* Soft Skills Column */}
                    <div>
                         <h4 className={`font-bold mb-3 text-lg border-b border-black/10 pb-1 inline-block ${monoFont}`}>Soft Skills</h4>
                         <p className="opacity-80 leading-relaxed">{skills.soft}</p>
                    </div>

                </div>
            </div>

        </div>
      </section>

    </main>
  );
}