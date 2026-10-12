const contactLinks = [
  {
    label: "Email",
    value: "emmanuelifedi0@gmail.com",
    href: "mailto:emmanuelifedi0@gmail.com",
    mark: "@",
  },
  {
    label: "LinkedIn",
    value: "Chike Ifedi",
    href: "https://www.linkedin.com/in/chike-ifedi-691a88265",
    mark: "in",
  },
  {
    label: "GitHub",
    value: "github.com/chike005",
    href: "https://github.com/chike005",
    mark: "gh",
  },
];

function Contact() {
  return (
    <main className="page-shell flex min-h-[calc(100svh-76px)] flex-col justify-center py-14 sm:py-20">
      <p className="eyebrow">Contact</p>
      <div className="mt-5 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h1 className="display-font max-w-3xl text-5xl leading-[1.04] tracking-tight text-[#18332e] sm:text-7xl">
            Have a good project in mind?
            <span className="text-[#087f6e]"> Let’s talk.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#66746e]">
            I’m open to new opportunities, collaborations, and conversations
            about building useful things. Reach out through any of the links.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-[#dfe6dd] bg-white p-3 shadow-[0_14px_50px_rgba(24,51,46,0.06)]">
          {contactLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={item.label === "Email" ? undefined : "noopener noreferrer"}
              className={`group flex items-center gap-4 rounded-xl p-4 transition hover:bg-[#f2f6ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e] ${
                index < contactLinks.length - 1
                  ? "border-b border-[#edf0e9]"
                  : ""
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e5eee2] text-sm font-bold text-[#087f6e] transition group-hover:bg-[#d9ef9f]">
                {item.mark}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#829087]">
                  {item.label}
                </span>
                <span className="mt-1 block truncate text-sm font-semibold text-[#18332e]">
                  {item.value}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-lg text-[#8b9891] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087f6e]"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-14 border-t border-[#dfe6dd] pt-5 text-xs font-medium uppercase tracking-[0.14em] text-[#829087]">
        Building thoughtful experiences for the web
      </div>
    </main>
  );
}

export default Contact;
