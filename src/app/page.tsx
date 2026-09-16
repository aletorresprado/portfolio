import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section
        id="home"
        className="flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 md:px-16 lg:px-24"
      >
        <header className="flex items-center justify-between">
        <a
        href="#top"
        className="
          cursor-pointer text-sm font-medium uppercase tracking-[0.2em]
          transition-all duration-200
          hover:font-semibold
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-yellow-700
          focus-visible:ring-offset-4
        "
      >
        Alejandro Torres
      </a>

  <nav className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
    <a className=" cursor-pointer transition-all duration-200 hover:text-black hover:font-semibold
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-4"
  href="#work">
      Work
    </a>

    <a className=" cursor-pointer transition-all duration-200 hover:text-black hover:font-semibold
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-4"
   href="#capabilities">
      Capabilities
    </a>

     <a className=" cursor-pointer transition-all duration-200 hover:text-black hover:font-semibold
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-4"
   href="#about">
      About
    </a>

    <a className=" cursor-pointer transition-all duration-200 hover:text-black hover:font-semibold
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-4"
   href="#contact">
      Contact
    </a>
  </nav>

  <div className="flex items-center">
  <div className="hidden items-center gap-2 text-sm md:flex">
    <span aria-hidden="true" className="relative flex size-2">
      <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
    </span>

    <span>Available</span>
  </div>

  <MobileMenu />
</div>
</header>

        <div className="max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Remote · Argentina
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
           text-yellow-700">
            I design.
            <br />
            I develop.
            <br />
            I solve.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
            I design visual experiences and build digital solutions
            for agencies, studios and product teams.
          </p>
        </div>

        <footer className="flex flex-col gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Graphic Design · Frontend · Full Stack · UI · AI</p>

          <p>Available for remote work</p>
        </footer>
      </section>
      <section
  id="work"
  className="border-t border-zinc-200 px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    <Reveal>
    <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          01 — Selected Work
        </p>

        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl  text-yellow-700">
          Work that solves
          <br />
          real problems.
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
        Selected projects across development, digital products and visual
        communication.
      </p>
    </div>

    {/* Restaurant */}
    </Reveal> 
    <div className="grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2">
   <Reveal delay={0}>
  <Link
    href="/work/restaurant-reservation-platform"
    className=" group block bg-white p-8 sm:p-10 focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-500">
  <div className="mb-20 flex items-start justify-between">
    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
      Full Stack
    </span>

    <span className="text-xs text-zinc-400">
      2026
    </span>
  </div>

  <div>
    <h3 className="text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
      Restaurant
      <br />
      Reservation Platform
    </h3>

    <p className="mt-5 max-w-md leading-relaxed text-zinc-500">
      Reservation and management platform designed for a restaurant
      operation with multiple branches.
    </p>

    <div className="mt-8 flex items-end justify-between gap-6">
      <p className="text-sm text-zinc-400">
        React · TypeScript · NestJS · REST API
      </p>

      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </div>
  </div>
      </Link>
    </Reveal>

{/* Web Development */}
<Reveal delay={0.08}>
  <Link
    href="/work/web-development"
    className="
      group block bg-white p-8 sm:p-10
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-inset
      focus-visible:ring-yellow-500
    "
  >
    <div className="mb-20 flex items-start justify-between">
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        Web Development
      </span>

      <span className="text-xs text-zinc-500">
        2026
      </span>
    </div>

    <div>
      <h3
        className="
          text-3xl font-medium tracking-tight
          transition-transform duration-300
          group-hover:translate-x-2
          group-focus-visible:translate-x-2
        "
      >
        Digital
        <br />
        Experiences
      </h3>

      <p className="mt-5 max-w-md leading-relaxed text-zinc-500">
        Design and development of modern web experiences from concept to
        production.
      </p>

      <div className="mt-8 flex items-end justify-between gap-6">
        <p className="text-sm text-zinc-500">
          Next.js · React · TypeScript · Tailwind
        </p>

        <span
          aria-hidden="true"
          className="
            text-xl transition-transform duration-300
            group-hover:translate-x-1
            group-focus-visible:translate-x-1
          "
        >
          ↗
        </span>
      </div>
    </div>
  </Link>
</Reveal>

{/* Bookstore */}
    <Reveal delay={0.16}>
  <Link
    href="/work/bookstore-api"
    className=" group block bg-white p-8 sm:p-10 focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-500">
        <div className="mb-20 flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Backend
          </span>

          <span className="text-xs text-zinc-400">
            2025
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
            Bookstore
            <br />
            API
          </h3>

          <p className="mt-5 max-w-md leading-relaxed text-zinc-500">
            Backend architecture with authentication, user management and
            transactional email workflows.
          </p>

         <div className="mt-8 flex items-end justify-between gap-6">
  <p className="text-sm text-zinc-400">
    Node.js · Express · MongoDB · JWT
  </p>

  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
    ↗
  </span>
</div>
        </div>
      </Link>
    </Reveal>

{/* Graphic Design */}
<Reveal delay={0.24}>
  <Link
  href="/work/graphic-design-archive"
  className="
    group block h-full bg-zinc-950 p-8 text-white sm:p-10 focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-500">
        <div className="mb-20 flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.2em]  text-zinc-400">
            Graphic Design
          </span>

          <span className="text-xs text-zinc-500">
            Archive
          </span>
        </div>

        <div>
          <h3 className=" text-yellow-500 text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
  Graphic Design
  <br />
  Archive
</h3>

         <div className="mt-8 flex items-end justify-between gap-6">
  <p className="text-sm text-zinc-500">
    Branding · Editorial · Digital · Visual Communication
  </p>

  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
    ↗
  </span>
</div>
        </div>
      </Link>
  </Reveal>
    </div>
  </div>
</section>
<section
  id="capabilities"
  className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    <Reveal>
    <div className="mb-20">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        02 — Capabilities
      </p>

      <h2 className="max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl  text-yellow-500">
        Design thinking.
        <br />
        Development skills.
        <br />
        Technical mindset.
      </h2>
    </div>
    </Reveal>
    <div className="border-t border-zinc-800">

      <div className="grid gap-8 border-b border-zinc-800 py-10 md:grid-cols-[1fr_2fr]">
        <div>
          <span className="text-sm text-zinc-500">01</span>

          <h3 className="mt-3 text-xl font-medium">
            Frontend
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xl text-zinc-300 sm:text-2xl md:text-3xl">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Tailwind CSS</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>


      <div className="grid gap-8 border-b border-zinc-800 py-10 md:grid-cols-[1fr_2fr]">
        <div>
          <span className="text-sm text-zinc-500">02</span>

          <h3 className="mt-3 text-xl font-medium">
            Backend
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xl text-zinc-300 sm:text-2xl md:text-3xl">
          <span>Node.js</span>
          <span>Express</span>
          <span>NestJS</span>
          <span>REST APIs</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
        </div>
      </div>


      <div className="grid gap-8 border-b border-zinc-800 py-10 md:grid-cols-[1fr_2fr]">
        <div>
          <span className="text-sm text-zinc-500">03</span>

          <h3 className="mt-3 text-xl font-medium">
            Design
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xl text-zinc-300 sm:text-2xl md:text-3xl">
          <span>Graphic Design</span>
          <span>Brand Identity</span>
          <span>UI Design</span>
          <span>Editorial</span>
          <span>Visual Communication</span>
        </div>
      </div>


      <div className="grid gap-8 border-b border-zinc-800 py-10 md:grid-cols-[1fr_2fr]">
        <div>
          <span className="text-sm text-zinc-500">04</span>

          <h3 className="mt-3 text-xl font-medium">
            Tools & Technology
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xl text-zinc-300 sm:text-2xl md:text-3xl">
          <span>Git</span>
          <span>GitHub</span>
          <span>Docker</span>
          <span>WSL / Linux</span>
          <span>AI Integration</span>
          <span>Automation</span>
        </div>
      </div>

    </div>
  </div>
</section>

{/* About */}
<section
  id="about"
  className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32"
>
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
    <Reveal y={18}>
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          03 — About
        </p>

        <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
          Designer by training.
          <br />
          Developer by evolution.
          <br />
          Technical by nature.
        </p>

        <div className="mt-8 flex flex-col items-start gap-5">
          <Link
            href="/about"
            className="
              group inline-flex items-center gap-3
              border-b border-yellow-700 pb-1
              text-sm font-medium
              transition-colors duration-300
              hover:text-yellow-700
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-yellow-700
              focus-visible:ring-offset-4
            "
          >
            More about me

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

          <a
            href="/cv/alejandro-torres-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center gap-3
              text-sm text-zinc-500
              transition-colors duration-300
              hover:text-black
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-yellow-700
              focus-visible:ring-offset-4
            "
          >
            View Resume

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-focus-visible:-translate-y-0.5
                group-focus-visible:translate-x-0.5
              "
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </Reveal>

    <Reveal y={18} delay={0.08}>
      <div>
        <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Different disciplines.
          <br />
          <span className="text-yellow-700">
            One way of thinking.
          </span>
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-600">
          A multidisciplinary background shaped by design, technology,
          science and code — bringing visual thinking and technical
          problem-solving into the same creative process.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-200 pt-8 text-sm text-zinc-500">
          <span>Design</span>
          <span>Development</span>
          <span>Technology</span>
          <span>Scientific background</span>
        </div>
      </div>
    </Reveal>
  </div>
</section>


{/* contact */}
<section
  id="contact"
  className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
      <Reveal y={18}>
  <div>
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
      04 — Contact
    </p>

    <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight text-yellow-500 sm:text-6xl md:text-7xl lg:text-8xl">
      Let&apos;s build
      <br />
      something useful.
    </h2>

    <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
      Available for remote opportunities and collaboration with agencies,
      design studios and development teams.
    </p>
  </div>
</Reveal>

      <div className="flex flex-col justify-end">
        <div className="border-t border-zinc-800">

          <a
            href="mailto:positivoweb@gmail.com"
            className="group flex items-center justify-between border-b border-zinc-800 py-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>
              <p className="mt-2 text-lg">
                positivoweb@gmail.com
              </p>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/alejandro-torres-prado/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-zinc-800 py-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                LinkedIn
              </p>
              <p className="mt-2 text-lg">
                Alejandro Torres
              </p>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/aletorresprado"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-zinc-800 py-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                GitHub
              </p>
              <p className="mt-2 text-lg">
                Code & Projects
              </p>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-zinc-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>

          <span>Available for remote work</span>
        </div>
      </div>
    </div>

   <footer className="mt-24 border-t border-zinc-800 pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">
            <a
              href="#home"
              aria-label="Back to top"
              className="
                shrink-0 cursor-pointer rounded-xl
                transition-transform duration-300
                hover:scale-105
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-yellow-500
                focus-visible:ring-offset-4
                focus-visible:ring-offset-zinc-950
              "
            >
              <Image
                src="/icon.svg"
                alt=""
                width={44}
                height={44}
                aria-hidden="true"
                className="size-11"
              />
            </a>

            <p className="text-sm text-zinc-400">
              Desarrollo:{" "}
              <span className="font-medium text-white">
                Alejandro Torres
              </span>
            </p>
          </div>

          <p className="text-sm text-zinc-400">
            © 2026
          </p>

        </div>
      </footer>
  </div>
</section>
    </main>
  );
}
