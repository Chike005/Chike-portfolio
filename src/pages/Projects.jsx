import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "ShareBite",
    tech: "React, TypeScript, Django, Google Maps API",
    description:
      "A food-sharing platform that helps donors and receivers coordinate through staffed collection points. Includes role-aware dashboards, a received-only reservation workflow, and donation status tracking.",
    github: "https://github.com/Chike005/Sharebitefrontend",
    backend: "https://github.com/Chike005/sharebite_backend",
    demo: "https://sharebite.vercel.app",
    number: "01",
    tone: "lime",
    featured: true,
  },
  {
    title: "EcoNuclearHub",
    tech: "Django, Python, Bootstrap",
    description:
      "A collaborative e-commerce application for eco-focused products, including humidity control and environmental monitoring equipment.",
    github: "https://github.com/chike005/Econuclearhub",
    number: "02",
    tone: "blue",
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
  },
];

function Projects() {
  return (
    <main className="page-shell min-h-[calc(100svh-76px)] py-14 sm:py-20">
      <SectionTitle title="Projects" />
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-[#dfe6dd] bg-white/70 px-6 py-5 text-sm leading-7 text-[#66746e]">
        <span className="font-semibold text-[#18332e]">Always in progress.</span>{" "}
        I’m continuing to learn, improve these projects, and build new things.
      </div>
    </main>
  );
}

export default Projects;
