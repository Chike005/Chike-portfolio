function Skills() {
  const skills = {
    "Frontend": ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Django", "Python", "SQLite3", "REST APIs"],
    "Tools & Platforms": ["Git & GitHub", "Postman", "Figma", "Vercel", "Google Maps API"],
    "Others": ["Team Collaboration", "Agile Development", "Problem Solving"],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">{category}</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
