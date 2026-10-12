import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#dfe6dd]/80 bg-[#f7f7f1]/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="page-shell flex min-h-[76px] items-center justify-between gap-4"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f6e]"
          aria-label="Chike Ifedi, home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#18332e] text-sm font-bold text-white transition group-hover:bg-[#087f6e]">
            CI
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-[#18332e] sm:block">
            Chike Ifedi
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition sm:px-4 ${
                  isActive
                    ? "bg-[#e5eee2] text-[#087f6e]"
                    : "text-[#66746e] hover:bg-[#edf0e9] hover:text-[#18332e]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:emmanuelifedi0@gmail.com"
            className="ml-1 hidden rounded-full bg-[#087f6e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#066758] sm:inline-flex"
          >
            Let’s talk <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
