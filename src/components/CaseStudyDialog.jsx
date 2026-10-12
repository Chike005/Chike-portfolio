import { useEffect, useRef } from "react";

function CaseStudyDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;

    const firstFocusable = dialog?.querySelector(
      'a[href], button:not([disabled]), [tabindex="0"]',
    );
    (firstFocusable || dialog)?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusable = dialog.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex="0"]',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#10221e]/65 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sharebite-case-study-title"
        tabIndex={-1}
        className="my-auto max-h-[min(90vh,900px)] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] border border-[#dfe6dd] bg-[#f7f7f1] p-6 shadow-2xl outline-none sm:p-9"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow">Featured case study · Full-stack</p>
            <h2
              id="sharebite-case-study-title"
              className="display-font mt-4 text-4xl leading-tight text-[#18332e] sm:text-5xl"
            >
              ShareBite
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close ShareBite case study"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#dfe6dd] bg-white text-xl text-[#50615a] transition hover:bg-[#e5eee2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e]"
          >
            ×
          </button>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#66746e] sm:text-base">
          A food-sharing platform designed to make donation handoffs clear:
          donors choose a staffed collection point, staff confirm arrival, and
          receivers can reserve donations only after they have been received.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            ["01", "Donate", "Choose a collection point and submit food details."],
            ["02", "Confirm", "Staff review donations and confirm drop-off."],
            ["03", "Reserve", "Receivers browse eligible food and reserve it."],
          ].map(([number, title, description]) => (
            <article
              key={number}
              className="rounded-2xl border border-[#dfe6dd] bg-white p-4"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-[#087f6e]">
                {number}
              </span>
              <h3 className="mt-2 font-semibold text-[#18332e]">{title}</h3>
              <p className="mt-1 text-xs leading-5 text-[#66746e]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-6 border-t border-[#dfe6dd] pt-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-[#18332e]">My focus</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#66746e]">
              <li>Built the React and TypeScript user experience.</li>
              <li>Implemented Django REST API workflows and access rules.</li>
              <li>Connected donor, staff, and receiver journeys.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#18332e]">Engineering details</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#66746e]">
              <li>Role-based API access with a reduced receiver browse feed.</li>
              <li>Reservation eligibility enforced by donation workflow state.</li>
              <li>Responsive interface with clear loading and status feedback.</li>
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
          {["React", "TypeScript", "Django REST Framework", "Google Maps API"].map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full bg-[#e5eee2] px-3 py-1.5 text-xs font-semibold text-[#50615a]"
              >
                {technology}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-[#dfe6dd] pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#18332e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#087f6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e]"
          >
            Frontend source <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <a
            href={project.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[#bfcfc4] px-5 py-3 text-sm font-semibold text-[#18332e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e]"
          >
            Backend source <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#bfcfc4] px-5 py-3 text-sm font-semibold text-[#18332e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e]"
            >
              Live demo <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default CaseStudyDialog;
