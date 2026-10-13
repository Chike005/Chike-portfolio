import { useEffect, useRef } from "react";

const workflow = [
  {
    number: "01",
    title: "Donate",
    description:
      "A donor adds food details and chooses a staffed collection point.",
  },
  {
    number: "02",
    title: "Confirm arrival",
    description:
      "A staff member confirms the donation has reached the collection point.",
  },
  {
    number: "03",
    title: "Reserve",
    description:
      "A receiver can reserve food only after it has been received.",
  },
];

const engineeringDecisions = [
  {
    title: "Make workflow state explicit",
    description:
      "Track collection-point receipt separately from donation status, reservation, and delivery so each step has a clear meaning.",
  },
  {
    title: "Enforce permissions at the API",
    description:
      "Protect staff actions on the server and limit receiver browsing to eligible donations rather than relying on hidden frontend controls.",
  },
  {
    title: "Return only what receivers need",
    description:
      "Use a dedicated available-donation response that omits private donor contact details and internal reservation or proof fields.",
  },
];

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
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#10221e]/70 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sharebite-case-study-title"
        tabIndex={-1}
        className="my-auto max-h-[min(92vh,980px)] w-full max-w-4xl overflow-y-auto rounded-[1.5rem] border border-[#dfe6dd] bg-[#f7f7f1] shadow-2xl outline-none"
      >
        <header className="relative overflow-hidden border-b border-[#dfe6dd] bg-[#e5eee2] px-6 pb-7 pt-7 sm:px-10 sm:pb-9 sm:pt-9">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-24 h-64 w-64 rounded-full border-[32px] border-[#d9ef9f]/70"
          />
          <div className="relative flex items-start justify-between gap-5">
            <div>
              <p className="eyebrow">Project case study · Full-stack web</p>
              <h2
                id="sharebite-case-study-title"
                className="display-font mt-3 text-4xl leading-tight text-[#18332e] sm:text-5xl"
              >
                ShareBite
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#50615a] sm:text-base">
                A clearer, safer journey from food donation to collection.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close ShareBite case study"
              className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#cbd9cc] bg-white text-xl text-[#50615a] transition hover:bg-[#f7f7f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e]"
            >
              ×
            </button>
          </div>
          <p className="relative mt-5 max-w-3xl text-sm leading-7 text-[#53645c] sm:text-base">
            ShareBite connects food donors with receivers through staffed
            collection points. I built the full-stack experience around one
            important rule: food must be confirmed at its collection point
            before a receiver can reserve it.
          </p>
          <div className="relative mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Django REST Framework",
              "Relational data",
              "API testing",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#cbd9cc] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#50615a]"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-8 px-6 py-7 sm:space-y-9 sm:px-10 sm:py-9">
          <section aria-labelledby="sharebite-workflow">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow">The product flow</p>
                <h3
                  id="sharebite-workflow"
                  className="display-font mt-1 text-2xl text-[#18332e] sm:text-3xl"
                >
                  Every handoff has a clear next step.
                </h3>
              </div>
              <span className="text-xs font-medium text-[#829087]">
                Donor → staff → receiver
              </span>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3">
              {workflow.map(({ number, title, description }, index) => (
                <li
                  key={number}
                  className="relative rounded-2xl border border-[#dfe6dd] bg-white p-4 sm:p-5"
                >
                  <span className="text-xs font-bold tracking-[0.14em] text-[#087f6e]">
                    STEP {number}
                  </span>
                  <h4 className="mt-2 font-semibold text-[#18332e]">{title}</h4>
                  <p className="mt-1 text-xs leading-5 text-[#66746e]">
                    {description}
                  </p>
                  {index < workflow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 place-items-center rounded-full border border-[#dfe6dd] bg-[#f7f7f1] text-xs text-[#087f6e] sm:grid"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-6 border-t border-[#dfe6dd] pt-7 sm:grid-cols-2 sm:gap-9 sm:pt-8">
            <div>
              <p className="eyebrow">The challenge</p>
              <h3 className="mt-2 text-lg font-semibold text-[#18332e]">
                Make donation status trustworthy.
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#66746e]">
                A donation marked as submitted is not necessarily at the
                collection point yet. Treating submission and receipt as the
                same state could let someone reserve food before it is
                physically available.
              </p>
            </div>
            <div>
              <p className="eyebrow">The approach</p>
              <h3 className="mt-2 text-lg font-semibold text-[#18332e]">
                Keep eligibility enforced end to end.
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#66746e]">
                Donors choose a collection point when creating a donation.
                Staff confirm the drop-off through a protected API action. The
                receiver feed and reservation endpoint both require the
                donation to be received, available, and not delivered.
              </p>
            </div>
          </section>

          <section aria-labelledby="sharebite-decisions">
            <p className="eyebrow">Engineering decisions</p>
            <h3
              id="sharebite-decisions"
              className="display-font mt-1 text-2xl text-[#18332e] sm:text-3xl"
            >
              Safety belongs in the backend too.
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {engineeringDecisions.map(({ title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#dfe6dd] bg-white p-4"
                >
                  <h4 className="text-sm font-semibold text-[#18332e]">
                    {title}
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-[#66746e]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 border-t border-[#dfe6dd] pt-7 sm:grid-cols-2 sm:gap-9 sm:pt-8">
            <div>
              <p className="eyebrow">My contribution</p>
              <h3 className="mt-2 text-lg font-semibold text-[#18332e]">
                Frontend experience and API workflow.
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#66746e]">
                <li>
                  Built React and TypeScript screens for donation, staff review,
                  and receiver journeys.
                </li>
                <li>
                  Implemented Django REST endpoints, serializers, data
                  validation, and role-aware access.
                </li>
                <li>
                  Connected collection-point data and donation lifecycle
                  feedback across the frontend and API.
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">How I tested it</p>
              <h3 className="mt-2 text-lg font-semibold text-[#18332e]">
                Exercise the rules, not just the happy path.
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#66746e]">
                <li>
                  API tests check staff approval and reject confirmation by
                  non-staff users.
                </li>
                <li>
                  Reservation tests cover early, valid, repeated, own-donation,
                  and delivered-donation attempts.
                </li>
                <li>
                  Receiver-feed tests verify eligibility and exclude private
                  donor and internal workflow fields.
                </li>
              </ul>
            </div>
          </section>

          <aside className="rounded-2xl border border-[#dfe6dd] bg-[#e5eee2] p-5 sm:p-6">
            <p className="eyebrow">What I learned</p>
            <p className="mt-2 text-sm leading-7 text-[#50615a]">
              Workflow rules are most reliable when the interface makes them
              understandable and the API independently enforces them. Keeping
              those responsibilities aligned across roles was a useful
              full-stack design challenge.
            </p>
          </aside>

          <footer className="flex flex-wrap gap-3 border-t border-[#dfe6dd] pt-6">
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
              className="inline-flex items-center rounded-full border border-[#bfcfc4] bg-white px-5 py-3 text-sm font-semibold text-[#18332e] transition hover:bg-[#e5eee2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f6e]"
            >
              Backend API source{" "}
              <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default CaseStudyDialog;
