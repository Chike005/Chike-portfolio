import { Link } from "react-router-dom";

const specialties = ["React", "TypeScript", "Django", "REST APIs"];

function Home() {
  return (
    <main>
      <section className="page-shell grid min-h-[calc(100svh-76px)] items-center gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20">
        <div className="relative z-10">
          <p className="eyebrow">Software engineer · Full-stack web</p>
          <h1 className="display-font mt-6 max-w-3xl text-[clamp(3.25rem,8vw,6.4rem)] leading-[0.99] tracking-[-0.045em] text-[#18332e]">
            Thoughtful software,{" "}
            <span className="text-[#087f6e]">built for people.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#66746e] sm:text-lg">
            I’m Chike, a software engineer who enjoys turning real-world
            problems into clear, useful web experiences—from polished
            interfaces to dependable backend systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-[#dfe6dd] bg-white/70 px-3.5 py-2 text-xs font-semibold text-[#50615a]"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full bg-[#087f6e] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(8,127,110,0.18)] transition hover:-translate-y-0.5 hover:bg-[#066758] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f6e]"
            >
              Explore my work <span aria-hidden="true" className="ml-3">↗</span>
            </Link>
            <a
              href="/chike_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#bfcfc4] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#18332e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f6e]"
            >
              View résumé
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#dfe6dd] pt-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6ba67d] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4d9365]" />
            </span>
            <p className="text-sm text-[#66746e]">
              Open to conversations and opportunities
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] md:justify-self-end">
          <div className="absolute -right-3 top-6 h-24 w-24 rounded-full bg-[#d9ef9f] sm:-right-6 sm:top-10 sm:h-32 sm:w-32" />
          <div className="absolute -bottom-5 -left-4 h-28 w-28 rounded-full border border-[#087f6e]/25 sm:-left-8 sm:h-36 sm:w-36" />
          <div className="soft-grid relative overflow-hidden rounded-[2rem] border border-[#dfe6dd] bg-[#e5eee2] p-3 shadow-[0_24px_70px_rgba(24,51,46,0.12)]">
            <div className="relative overflow-hidden rounded-[1.45rem] bg-[#c7d8ca]">
              <img
                src="/chike-portrait.jpg"
                alt="Portrait of Chike Ifedi"
                className="aspect-[4/5] w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10221e]/80 via-[#10221e]/25 to-transparent p-6 pt-20 text-white sm:p-8 sm:pt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9ef9f]">
                  A little about me
                </p>
                <p className="display-font mt-2 text-3xl sm:text-4xl">
                  Curious by nature.
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Building with care, one thoughtful detail at a time.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -left-4 top-12 rounded-2xl border border-[#dfe6dd] bg-white px-4 py-3 shadow-lg sm:-left-12 sm:top-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#829087]">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-[#18332e]">
              Full-stack web
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe6dd] bg-white/55">
        <div className="page-shell grid gap-8 py-12 md:grid-cols-[0.75fr_1.25fr] md:items-center md:py-16">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="display-font mt-4 text-3xl leading-tight text-[#18332e] sm:text-4xl">
              From first sketch to finished feature.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-[#66746e] sm:text-base">
            I care about the whole experience: understanding the problem,
            shaping a usable interface, and making sure the systems behind it
            are secure and reliable. I like learning by building and making
            each iteration a little better.
          </p>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">A few things I’ve built</p>
            <h2 className="display-font mt-4 text-4xl text-[#18332e] sm:text-5xl">
              Selected work
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-semibold text-[#087f6e] underline decoration-[#a9d2be] underline-offset-4 hover:text-[#066758]"
          >
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.5rem] bg-[#18332e] p-7 text-white sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9ef9f]">
              Featured · ShareBite
            </p>
            <h3 className="display-font mt-4 text-3xl sm:text-4xl">
              Good food, shared locally.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
              A food donation platform with collection-point drop-offs, staff
              approvals, and a reservation flow connecting donors and receivers.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                to="/projects"
                className="text-sm font-semibold text-[#d9ef9f] underline underline-offset-4 hover:text-white"
              >
                Read the project story <span aria-hidden="true">↗</span>
              </Link>
              <span className="text-xs text-white/50">React · Django · TypeScript</span>
            </div>
          </article>
          <article className="rounded-[1.5rem] border border-[#dfe6dd] bg-[#e9f0e6] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087f6e]">
              Also exploring
            </p>
            <h3 className="display-font mt-4 text-3xl text-[#18332e] sm:text-4xl">
              Sustainable commerce.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#66746e]">
              EcoNuclearHub is a collaborative e-commerce project for
              eco-focused products and environmental monitoring equipment.
            </p>
            <Link
              to="/projects"
              className="mt-7 inline-flex text-sm font-semibold text-[#087f6e] underline decoration-[#a9d2be] underline-offset-4 hover:text-[#066758]"
            >
              See all projects <span aria-hidden="true" className="ml-1">↗</span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
