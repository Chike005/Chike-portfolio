function ProjectCard({ title, tech, description, github, demo }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold mb-1 text-dark">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{tech}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-4">
        <a href={github} target="_blank" rel="noreferrer" className="text-primary hover:underline">
          GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="text-green-600 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;