function ProjectCard({
  title,
  tech,
  description,
  github,
  backend,
  demo,
  number,
  tone,
  featured,
}) {
  return (
    <article
      className={`group rounded-[1.4rem] border border-[#dfe6dd] bg-white p-4 shadow-[0_8px_30px_rgba(24,51,46,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(24,51,46,0.10)] ${
        featured ? "md:col-span-2 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-6" : ""
      }`}
    >
      <div
        className={`project-art soft-grid ${
          tone === "lime"
            ? "bg-[#d9ef9f]"
            : tone === "blue"
              ? "bg-[#b8d6d0]"
              : "bg-[#d8e9dc]"
        }`}
      >
        <div className="project-window">
          <div className="mb-4 flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#ef8d72]" />
            <span className="h-2 w-2 rounded-full bg-[#e4c768]" />
            <span className="h-2 w-2 rounded-full bg-[#76ad87]" />
            <span className="ml-auto text-[10px] font-medium tracking-wide text-[#83918a]">
              PROJECT / {number}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087f6e]">
            Selected work
          </p>
          <p className="display-font mt-1 text-2xl leading-tight text-[#18332e]">
            {title}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tech.split(",").slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#eef3ec] px-2.5 py-1 text-[10px] font-medium text-[#50615a]"
              >
                {item.trim()}
              </span>
            ))}
          </div>
        </div>
        <span className="absolute bottom-4 right-5 text-5xl font-semibold tracking-tighter text-[#18332e]/20">
          {number}
        </span>
      </div>

      <div className="flex flex-col px-2 pb-2 pt-5 md:px-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087f6e]">
            {featured ? "Featured project" : `Project ${number}`}
          </span>
          <span aria-hidden="true" className="text-lg text-[#8b9891] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#087f6e]">
            ↗
          </span>
        </div>
        <h2 className="display-font text-3xl leading-tight text-[#18332e]">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#66746e]">{description}</p>
        <p className="mt-4 text-xs font-semibold leading-6 text-[#50615a]">
          {tech}
        </p>
        <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-semibold">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-[#18332e] underline decoration-[#b9c9bd] underline-offset-4 hover:text-[#087f6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f6e]"
          >
            {backend ? "Frontend" : "View source"}
          </a>
          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-[#18332e] underline decoration-[#b9c9bd] underline-offset-4 hover:text-[#087f6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f6e]"
            >
              Backend API
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-[#087f6e] underline decoration-[#a9d2be] underline-offset-4 hover:text-[#066758] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f6e]"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
