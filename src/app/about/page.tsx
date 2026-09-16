import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="min-h-screen px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="
                group inline-flex items-center gap-2 text-sm text-zinc-500
                transition-colors duration-200 hover:text-black
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-yellow-700
                focus-visible:ring-offset-4
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
              Back home
            </Link>

            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              About
            </span>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Designer × Developer × Technical mindset
                </p>

                <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                  Hard to put
                  <br />
                  <span className="text-yellow-700">in one box.</span>
                </h1>

                <div className="mt-10 text-lg leading-relaxed text-zinc-700 sm:text-xl">
                  <p>Designer by training.</p>
                  <p>Developer by evolution.</p>
                  <p>Technical by nature.</p>
                </div>
              </div>

              {/* Creative portrait */}
<div>
  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-zinc-950">
    <Image
      src="/about/alejandro-creative.webp"
      alt="Alejandro Torres in a creative workspace combining design, development and science"
      width={1200}
      height={1500}
      priority
      className="
        h-full w-full object-cover
        transition-transform duration-700
        motion-safe:hover:scale-[1.015]
      "
    />
  </div>

  <div className="mt-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-zinc-500">
    <span>Design · Code · Science · Ideas</span>
    <span className="hidden sm:inline">2026</span>
  </div>
</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Argentina · Working worldwide</p>
            <p>Scroll to know a little more ↓</p>
          </div>
        </div>
      </section>

      {/* A bit of everything */}
      <section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            01 — A bit of everything
          </p>

          <div className="mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <h2 className="text-5xl font-medium leading-[0.95] tracking-tight text-yellow-500 sm:text-6xl lg:text-7xl">
                One path
                <br />
                was never
                <br />
                enough.
              </h2>
            </div>

            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p>
                I started with design, where I learned to communicate ideas
                through form, structure and visual language.
              </p>

              <p>
                My professional path also took me deep into science and
                technology, working in highly technical environments where
                precision, observation and problem-solving are part of everyday
                work.
              </p>

              <p>
                Then came programming. Not as a replacement for everything
                before it, but as another way to create.
              </p>

              <p>
                Today, those worlds naturally overlap in the way I approach
                projects.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px bg-zinc-800 sm:grid-cols-3">
            <div className="bg-zinc-950 py-8 sm:pr-8">
              <p className="text-sm text-zinc-400">Design taught me</p>
              <p className="mt-2 text-xl">how to communicate.</p>
            </div>

            <div className="bg-zinc-950 py-8 sm:px-8">
              <p className="text-sm text-zinc-400">Science taught me</p>
              <p className="mt-2 text-xl">how to observe.</p>
            </div>

            <div className="bg-zinc-950 py-8 sm:pl-8">
              <p className="text-sm text-zinc-400">Technology taught me</p>
              <p className="mt-2 text-xl">how to build.</p>
            </div>
          </div>

          <p className="mt-14 max-w-2xl text-lg text-zinc-300">
            Apparently, choosing just one thing was never really my thing.
          </p>
        </div>
      </section>

      {/* What I bring */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            02 — What I bring
          </p>

          <h2 className="mt-8 max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Different disciplines.
            <br />
            <span className="text-yellow-700">One way of thinking.</span>
          </h2>

          <div className="mt-20 grid border-y border-zinc-200 md:grid-cols-3">
            <div className="border-b border-zinc-200 py-10 md:border-b-0 md:border-r md:pr-10">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Design
              </p>

              <div className="mt-8 space-y-3 text-xl">
                <p>Visual Identity</p>
                <p>Graphic Design</p>
                <p>Editorial Design</p>
                <p>Digital Design</p>
                <p>UI &amp; Visual Systems</p>
              </div>
            </div>

            <div className="border-b border-zinc-200 py-10 md:border-b-0 md:px-10">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Code
              </p>

              <div className="mt-8 space-y-3 text-xl">
                <p>React</p>
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>APIs &amp; Backend Development</p>
              </div>
            </div>

            <div className="py-10 md:border-l md:border-zinc-200 md:pl-10">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Technical
              </p>

              <div className="mt-8 space-y-3 text-xl">
                <p>Scientific Imaging</p>
                <p>Electron Microscopy</p>
                <p>Technical Processes</p>
                <p>Research Environments</p>
                <p>Technology &amp; Problem Solving</p>
              </div>
            </div>
          </div>

          <p className="mt-12 max-w-2xl leading-relaxed text-zinc-600">
            The tools change. The objective doesn&apos;t: understand the
            problem, find the right approach and build something useful.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-zinc-100 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            03 — How I work
          </p>

          <h2 className="mt-8 max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Curiosity is usually
            <br />
            <span className="text-yellow-700">where it starts.</span>
          </h2>

          <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
            <article className="border-t border-zinc-300 pt-6">
              <span className="text-sm text-zinc-500">01</span>

              <h3 className="mt-8 text-2xl font-medium">Curiosity first.</h3>

              <p className="mt-5 leading-relaxed text-zinc-600">
                I like understanding how things work before deciding how to
                build them.
              </p>

              <p className="mt-4 leading-relaxed text-zinc-600">
                Questions are part of the process. So is taking things apart —
                sometimes literally, usually conceptually.
              </p>
            </article>

            <article className="border-t border-zinc-300 pt-6">
              <span className="text-sm text-zinc-500">02</span>

              <h3 className="mt-8 text-2xl font-medium">
                Simple is difficult.
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-600">
                I like simple solutions. Getting to them is usually the
                complicated part.
              </p>

              <p className="mt-4 leading-relaxed text-zinc-600">
                Good design and good development have something in common:
                when they work well, most of the complexity stays behind the
                scenes.
              </p>
            </article>

            <article className="border-t border-zinc-300 pt-6">
              <span className="text-sm text-zinc-500">03</span>

              <h3 className="mt-8 text-2xl font-medium">Keep learning.</h3>

              <p className="mt-5 leading-relaxed text-zinc-600">
                Technology changes too quickly to get comfortable.
              </p>

              <p className="mt-4 leading-relaxed text-zinc-600">
                I enjoy learning new tools, exploring unfamiliar territory and
                figuring things out along the way. Doing the same thing forever
                probably wouldn&apos;t work for me anyway.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Beyond the labels */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            04 — Beyond the labels
          </p>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            <h2 className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Designer.
              <br />
              Developer.
              <br />
              <span className="text-yellow-700">Technical mind.</span>
              <br />
              Still curious.
            </h2>

            <div className="max-w-xl space-y-6 self-end text-base leading-relaxed text-zinc-600 sm:text-lg">
              <p>
                I don&apos;t see my background as separate careers competing
                with each other.
              </p>

              <p>
                Design gives me visual judgment. Technical work gives me
                precision. Programming gives me the ability to turn ideas into
                functional products.
              </p>

              <p>Together, they shape how I think.</p>

              <p>
                I&apos;m comfortable moving between a visual problem and a
                technical one, between an idea and its implementation, and
                between what something should communicate and how it should
                actually work.
              </p>

              <p className="font-medium text-black">
                That intersection is where I do my best work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            05 — What&apos;s next
          </p>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div>
              <h2 className="text-5xl font-medium leading-[0.95] tracking-tight text-yellow-500 sm:text-6xl lg:text-7xl">
                Currently somewhere
                <br />
                between an idea
                <br />
                and the next project.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                I&apos;m interested in working with agencies, studios, product
                teams and people building thoughtful digital products —
                especially where design and development need to speak the same
                language.
              </p>

              <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
                <Link
                  href="/#work"
                  className="
                    group inline-flex min-h-11 items-center gap-2
                    border-b border-yellow-500 text-sm font-medium
                    transition-colors duration-200 hover:text-yellow-500
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-yellow-500
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-zinc-950
                  "
                >
                  View selected work
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
                    group inline-flex min-h-11 items-center gap-2
                    text-sm text-zinc-400
                    transition-colors duration-200 hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-yellow-500
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-zinc-950
                  "
                >
                  Download resume
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

              <div className="mt-14 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
                <p>Available for remote collaboration.</p>
                <p className="mt-1">Argentina · Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}