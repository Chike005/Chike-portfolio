const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that feel clear, responsive, and considered.",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Application logic, data, and APIs that work together.",
    skills: ["Django", "Python", "REST APIs", "SQLite"],
  },
  {
    number: "03",
    title: "Tools & platforms",
    description: "The everyday toolkit I use to design, build, and ship.",
    skills: ["Git & GitHub", "Postman", "Figma", "Vercel", "Google Maps API"],
  },
  {
    number: "04",
    title: "Ways of working",
    description: "Good engineering is a team effort and a continuous practice.",
    skills: ["Collaboration", "Agile development", "Problem solving"],
  },
];

function Skills() {
  return (
    <main className="page-shell min-h-[calc(100svh-76px)] py-14 sm:py-20">
      <p className="eyebrow">The tools behind the work</p>
      <div className="mt-4 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
        <h1 className="display-font text-5xl leading-[1.05] tracking-tight text-[#18332e] sm:text-6xl">
          Skills &amp; <span className="text-[#087f6e]">approach.</span>
        </h1>
        <p className="max-w-xl text-sm leading-7 text-[#66746e] sm:text-base">
          A practical mix of frontend and backend experience, with curiosity
          and thoughtful problem-solving at the centre of how I work.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.number}
            className="rounded-[1.4rem] border border-[#dfe6dd] bg-white p-6 transition hover:border-[#b9d4c1] hover:shadow-[0_12px_35px_rgba(24,51,46,0.07)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-[#087f6e]">
                  {group.number}
                </p>
                <h2 className="display-font mt-3 text-2xl text-[#18332e]">
                  {group.title}
                </h2>
              </div>
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d9ef9f]" />
            </div>
            <p className="mt-3 text-sm leading-6 text-[#66746e]">
              {group.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-[#eef3ec] px-3 py-1.5 text-xs font-medium text-[#50615a]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Skills;
