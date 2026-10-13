import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import CaseStudyDialog from "../components/CaseStudyDialog";
import { useState } from "react";

const filters = ["All", "React", "TypeScript", "Django", "API"];

const projects = [
  {
    title: "ShareBite",
    tech: "React, TypeScript, Django, Google Maps API",
    description:
      "A food-sharing platform that helps donors and receivers coordinate through staffed collection points. Includes role-aware dashboards, a received-only reservation workflow, and donation status tracking.",
    github: "https://github.com/Chike005/Sharebitefrontend",
    backend: "https://github.com/Chike005/sharebite_backend",
    number: "01",
    tone: "lime",
    featured: true,
    technologies: ["React", "TypeScript", "Django", "API"],
  },
  {
    title: "EcoNuclearHub",
    tech: "Django, Python, Bootstrap",
    description:
      "A collaborative e-commerce application for eco-focused products, including humidity control and environmental monitoring equipment.",
    github: "https://github.com/chike005/Econuclearhub",
    number: "02",
    tone: "blue",
    technologies: ["Django", "Python"],
  },
  {
    title: "Portfolio Website",
    tech: "React, JavaScript, Tailwind CSS",
    description:
      "A personal portfolio for sharing selected work, technical interests, and ways to get in touch.",
    github: "https://github.com/chike005/chike-portfolio",
    demo: "https://chike-portfolio.vercel.app",
    number: "03",
    tone: "green",
    technologies: ["React", "JavaScript"],
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const closeCaseStudy = () => setSelectedProject(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter),
        );

  return (
    <main className="page-shell min-h-[calc(100svh-76px)] py-14 sm:py-20">
      <SectionTitle title="Projects" />
      <section className="mt-8" aria-label="Filter projects">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#829087]">
            Explore by tech
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e] ${
                activeFilter === filter
                  ? "border-[#087f6e] bg-[#087f6e] text-white"
                  : "border-[#dfe6dd] bg-white text-[#50615a] hover:border-[#a9c9b4] hover:bg-[#eef3ec]"
              }`}
            >
              {filter}
            </button>
          ))}
          <span className="ml-auto text-xs text-[#829087]" aria-live="polite">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>
      <div className="mt-5 grid gap-5 md:grid-cols-2" aria-live="polite">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onViewCaseStudy={
              project.title === "ShareBite"
                ? () => setSelectedProject(project)
                : undefined
            }
          />
        ))}
        {filteredProjects.length === 0 && (
          <p className="rounded-2xl border border-dashed border-[#bfcfc4] bg-white/60 p-8 text-sm text-[#66746e] md:col-span-2">
            No projects match this technology yet. Try another filter.
          </p>
        )}
      </div>
      <div className="mt-10 rounded-2xl border border-[#dfe6dd] bg-white/70 px-6 py-5 text-sm leading-7 text-[#66746e]">
        <span className="font-semibold text-[#18332e]">Always in progress.</span>{" "}
        I’m continuing to learn, improve these projects, and build new things.
      </div>
      <CaseStudyDialog
        project={selectedProject}
        onClose={closeCaseStudy}
      />
    </main>
  );
}

export default Projects;
