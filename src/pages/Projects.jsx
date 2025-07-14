import ProjectCard from "../components/ProjectCard";
import React from "react";
import SectionTitle from "../components/SectionTitle";


function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="ShareBite"
          tech="React, Django, Google Maps API"
          description="A food-sharing platform that connects donors with recipients in real-time using geolocation."
          github="https://github.com/chike005/sharebite"
          demo="https://sharebite.vercel.app"
        />
        <ProjectCard
  title="EcoNuclearHub"
  tech="Django, Bootstrap, Python"
  description="A collaborative ecommerce web application for selling eco-focused products such as humidity control equipment and environmental monitoring tools. Built with Django for backend and Bootstrap for frontend."
  github="https://github.com/chike005/Econuclearhub"
/>
        <ProjectCard
          title="Portfolio Website"
          tech="React, Tailwind CSS"
          description="My personal portfolio showcasing my skills, projects, and contact information."
          github="https://github.com/chike005/chike-portfolio"
          demo="https://chike-portfolio.vercel.app"
        />
      </div>
    </div>
  );
}

export default Projects;
