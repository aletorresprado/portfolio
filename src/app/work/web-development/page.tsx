import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between">
            <Link
              href="/#work"
              className="
                group inline-flex items-center gap-2 text-sm text-zinc-400
                transition-colors duration-200 hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-yellow-500
                focus-visible:ring-offset-4
                focus-visible:ring-offset-zinc-950
              "
            >
              <span
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:-translate-x-1
                  group-focus-visible:-translate-x-1
                "
              >
                ←
              </span>
              Back to work
            </Link>

            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              2026
            </span>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-5xl">
              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-400">
                02 — Web Development
              </p>

              <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight text-yellow-500 sm:text-7xl md:text-8xl lg:text-9xl">
                Web
                <br />
                Development.
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Digital experiences designed and developed from concept to
                production.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Design · Frontend · Development</p>
            <p>Selected Web Work</p>
          </div>
        </div>
      </section>

      {/* Intelligent Business */}
<section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          01 — Selected Project
        </p>

        <h2 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl text-yellow-700">
          Intelligent
          <br />
          Business
        </h2>

        <p className="mt-8 max-w-lg leading-relaxed text-zinc-600">
          A strategic business website combining visual communication,
          technology and a modern digital experience.
        </p>

        <p className="mt-8 text-sm text-zinc-500">
          Next.js · TypeScript · Tailwind · Responsive Design
        </p>
      </div>
        {/* Screenshot will go here */}
      <a
  href="https://intelligentbusiness.ar"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Intelligent Business live site"
  className="
    group block overflow-hidden rounded-xl bg-zinc-950
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-yellow-500
    focus-visible:ring-offset-4
  "
>
  <Image
    src="/web-development/intelligent-business.webp"
    alt="Intelligent Business responsive website presented across desktop, laptop, tablet and mobile screens"
    width={1600}
    height={1000}
    className="
      h-auto w-full cursor-pointer
      transition-transform duration-700
      motion-safe:group-hover:scale-[1.015]
      motion-safe:group-focus-visible:scale-[1.015]
    "
  />
</a>
    </div>
  </div>
</section>       

{/* Closing */}
<section className="bg-zinc-950 px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
      
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">
          From concept to production
        </p>

        <h2 className="
          mt-6
          text-5xl font-medium leading-[0.92] tracking-tight
          text-yellow-500
          sm:text-6xl
          lg:text-7xl
        ">
          Design.
          <br />
          Build.
          <br />
          Deploy.
        </h2>
      </div>

      <div className="flex flex-col justify-end">
        <p className="
          max-w-xl
          text-base leading-relaxed text-zinc-300
          sm:text-lg
        ">
          From visual direction and interface architecture to development,
          responsive implementation and production deployment.
        </p>

        <div className="
          mt-10
          flex flex-col items-start gap-6
          sm:flex-row sm:items-center sm:gap-8
        ">
          <a
            href="https://intelligentbusiness.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex min-h-11 items-center gap-2
              border-b border-yellow-500
              text-sm font-medium
              transition-colors duration-200
              hover:text-yellow-500
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-yellow-500
              focus-visible:ring-offset-4
              focus-visible:ring-offset-zinc-950
            "
          >
            Visit live site

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                group-focus-visible:translate-x-1
              "
            >
              ↗
            </span>
          </a>

          <Link
            href="/#work"
            className="
              group inline-flex min-h-11 items-center gap-2
              text-sm text-zinc-400
              transition-colors duration-200
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-yellow-500
              focus-visible:ring-offset-4
              focus-visible:ring-offset-zinc-950
            "
          >
            Back to selected work

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                group-focus-visible:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
          
    </main>
  );
}