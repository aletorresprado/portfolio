import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Graphic Design Archive",
  description:
    "Selected work across visual identity, editorial design, cultural communication and scientific communication.",
};

export default function GraphicDesignArchive() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="px-6 py-8 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-[0.2em]"
          >
            Alejandro Torres
          </Link>

          <Link
            href="/#work"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            ← Back to work
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-96px)] items-end px-6 pb-12 sm:px-10 sm:pb-16 md:px-16 lg:px-24 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Visual Work
          </p>

          <h1 className="text-[17vw] font-medium uppercase leading-[0.72] tracking-[-0.075em] sm:text-[15vw] lg:text-[12rem]">
            Graphic
            <br />
            Design
            <br />
            Archive
          </h1>

          <div className="mt-14 grid gap-8 border-t border-zinc-800 pt-8 md:grid-cols-2">
            <p className="max-w-md text-lg leading-8 text-zinc-400">
              Selected work across visual identity, editorial design,
              cultural communication and scientific communication.
            </p>

            <div className="md:text-right">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
                Direction
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Art Direction · Typography · Composition · Identity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-black sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            01 — Selected Work
          </p>

          <div className="mt-16 grid min-h-[60vh] place-items-center border border-zinc-200">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Visual archive begins here
            </p>
          </div>
        </div>
      </section>
      <div className="mt-16 space-y-24 lg:space-y-32">

  {/* HERO — Microscopía Forense */}
  <div className="grid min-h-[70vh] place-items-center border border-zinc-200 bg-zinc-100">
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        Hero Image
      </p>

      <p className="mt-4 text-sm text-zinc-500">
        Microscopy / Forensic Science
      </p>
    </div>
  </div>

  {/* CAFÉ CIENTÍFICO — Sistema */}
  <div>
    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Visual System
        </p>

        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          Café Científico
        </h2>
      </div>

      <p className="max-w-sm text-right text-sm leading-6 text-zinc-500">
        A recurring visual identity built through repetition, hierarchy and
        controlled variation.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="aspect-[4/5] border border-zinc-200 bg-zinc-100"
        />
      ))}
    </div>
  </div>

  {/* PIANO — Dirección de arte */}
  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
    <div className="aspect-[4/5] border border-zinc-200 bg-zinc-100" />

    <div className="flex min-h-[420px] items-end bg-zinc-950 p-8 text-white sm:p-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
          Art Direction
        </p>

        <p className="mt-6 max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Image,
          <br />
          typography
          <br />
          and tension.
        </p>
      </div>
    </div>
  </div>

  {/* FLAUTAS — Pausa visual */}
  <div className="py-16 lg:py-24">
    <div className="mx-auto max-w-3xl">
      <div className="aspect-[3/4] border border-zinc-200 bg-zinc-100" />

      <p className="mt-6 text-sm text-zinc-500">
        Cultural communication · Typography · Composition
      </p>
    </div>
  </div>

  {/* EDITORIAL — Folleto territorial */}
  <div>
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        Editorial Design
      </p>

      <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        Information as visual structure
      </h2>
    </div>

    <div className="aspect-[16/7] border border-zinc-200 bg-zinc-100" />

    <div className="mt-4 grid gap-4 md:grid-cols-3">
      <div className="aspect-square border border-zinc-200 bg-zinc-100" />
      <div className="aspect-square border border-zinc-200 bg-zinc-100" />
      <div className="aspect-square border border-zinc-200 bg-zinc-100" />
    </div>
  </div>

  {/* WORKSHOP — Campaña */}
  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
    <div className="aspect-[4/3] border border-zinc-200 bg-zinc-100" />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      <div className="aspect-[4/3] border border-zinc-200 bg-zinc-100" />
      <div className="aspect-[4/3] border border-zinc-200 bg-zinc-100" />
    </div>
  </div>

</div>
<section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
      02 — Selected Identities
    </p>

    <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
      Marks built to
      <br />
      hold an identity.
    </h2>

    <div className="mt-20 space-y-6">
      {[
        "Identity 01",
        "Identity 02",
        "Identity 03",
        "Identity 04",
      ].map((identity) => (
        <div
          key={identity}
          className="grid min-h-[45vh] place-items-center border border-zinc-800"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            {identity}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-white px-6 py-24 text-black sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <p className="max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
      Design taught me how to see.
      <br />
      Development taught me how to build.
    </p>

    <Link
      href="/#work"
      className="group mt-16 inline-flex items-center gap-4 text-lg"
    >
      Back to selected work
      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </Link>
  </div>
</section>
    </main>
  );
}