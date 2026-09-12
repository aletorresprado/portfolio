import type { Metadata } from "next";
import Image from "next/image";
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

          <h1 className="text-[17vw] font-medium uppercase leading-[0.72] tracking-[-0.075em] sm:text-[15vw] lg:text-[12rem] text-yellow-500">
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

{/* Selected Work */}
      <section className="bg-white px-6 py-24 text-black sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            01 — Selected Work
          </p>

    <div className="group mt-16 overflow-hidden border border-zinc-200 bg-zinc-100">
  <Image
    src="/design/portada.webp"
    alt="Graphic Design Archive cover"
    width={2400}
    height={1350}
    priority
    sizes="(max-width: 768px) 100vw, 1280px"
    className="h-auto w-full transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
  />
</div>
        </div>
      </section>
      <div className="mt-16 space-y-24 lg:space-y-32">

  {/* HERO — Microscopía Forense */}
<div className="group w-full overflow-hidden bg-zinc-100">
  <Image
    src="/design/forensic-microscopy.webp"
    alt="Microscopy and Forensic Science visual communication"
    width={2400}
    height={1680}
    priority
    sizes="(max-width: 768px) 100vw, 1280px"
    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
  />
</div>

  {/* CAFÉ CIENTÍFICO — Sistema */}
  <div>
    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Visual System
        </p>

        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl text-yellow-300">
          Café Científico
        </h2>
      </div>

      <p className="max-w-sm text-right text-sm leading-6 text-zinc-500">
        A recurring visual identity built through repetition, hierarchy and
        controlled variation.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
  {[
    "/design/cafe-cientifico-01.webp",
    "/design/cafe-cientifico-02.webp",
    "/design/cafe-cientifico-03.webp",
  ].map((src, index) => (
    <div key={src} className="group overflow-hidden bg-zinc-100">
      <Image
        src={src}
        alt={`Café Científico visual identity ${index + 1}`}
        width={1200}
        height={1500}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    </div>
  ))}
</div>
  </div>

  {/* PIANO — Dirección de arte */}
<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
  <div className="group overflow-hidden bg-zinc-100">
    <Image
      src="/design/recital-piano.webp"
      alt="Piano and chamber music recital poster"
      width={1600}
      height={2000}
      sizes="(max-width: 1024px) 100vw, 55vw"
      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
    />
  </div>

  <div className="flex min-h-[420px] items-end bg-zinc-950 p-8 text-white sm:p-10">
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
        Art Direction
      </p>

      <p className="mt-6 max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl text-yellow-300">
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
    <div className="group relative aspect-[3/4] overflow-hidden border border-zinc-200 bg-zinc-100">
      <Image
        src="/design/recital-flautas.webp"
        alt="Flute recital visual communication"
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:p-6"
      />
    </div>

    <p className="mt-6 text-sm text-zinc-500">
      Cultural communication · Typography · Composition
    </p>
  </div>
</div>
  

  {/* EDITORIAL — Folleto territorial */}
{/* EDITORIAL — Folleto territorial */}
<div className="py-12 lg:py-20">
  <div className="mx-auto max-w-5xl">

    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        Editorial Design
      </p>

      <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl text-yellow-300">
        Information as visual structure
      </h2>
    </div>

    {/* Pieza editorial completa */}
    <div className="group mx-auto max-w-4xl overflow-hidden bg-zinc-100">
      <Image
        src="/design/editorial-territorio-main-00.webp"
        alt="Territorial editorial design"
        width={2400}
        height={1050}
        sizes="(max-width: 768px) 100vw, 900px"
        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
    </div>

    {/* Detalles editoriales */}
    <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2 lg:gap-10">
      {[
        "/design/editorial-territorio-main-01.webp",
        "/design/editorial-territorio-main-02.webp",
        "/design/editorial-territorio-main-03.webp",
        "/design/editorial-territorio-main-04.webp",
      ].map((src, index) => (
        <div
          key={src}
          className="group relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src={src}
            alt={`Territorial editorial design detail ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>

  </div>
</div>

  {/* WORKSHOP — Campaña */}
<div>
  <div className="mb-8">
    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
      Campaign System
    </p>

    <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl text-yellow-300">
      One identity. Multiple applications.
    </h2>
  </div>

  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

    {/* Pieza principal */}
    <div className="group overflow-hidden bg-zinc-100">
      <Image
        src="/design/workshop-main.webp"
        alt="Electron microscopy workshop main visual"
        width={1800}
        height={1350}
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
    </div>

    {/* Aplicaciones */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {[
        "/design/workshop-01.webp",
        "/design/workshop-02.webp",
      ].map((src, index) => (
        <div
          key={src}
          className="group relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src={src}
            alt={`Electron microscopy workshop application ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 40vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>
  </div>
</div>

</div>
<section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
      02 — Selected Identities
    </p>

    <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl text-yellow-300">
      Marks built to
      <br />
      hold an identity.
    </h2>

   <div className="mt-20 grid gap-8 md:grid-cols-2 lg:gap-10">
  {[
    "/design/identity-01.svg",
    "/design/identity-02.svg",
    "/design/identity-03.svg",
    "/design/identity-04.svg",
    "/design/identity-05.svg",
    "/design/identity-06.svg",
    "/design/identity-07.svg",
  ].map((src, index) => (
    <div
      key={src}
      className={`group flex min-h-[38vh] items-center justify-center bg-white p-12 sm:p-16 lg:p-20 ${
        index === 6 ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full transition-transform duration-500 group-hover:scale-[1.03] ${
          index === 6
            ? "h-44 max-w-lg sm:h-52"
            : "h-36 max-w-sm sm:h-44"
        }`}
      >
        <Image
          src={src}
          alt={`Selected visual identity ${index + 1}`}
          fill
          sizes={
            index === 6
              ? "(max-width: 768px) 75vw, 500px"
              : "(max-width: 768px) 70vw, 360px"
          }
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  ))}
</div>
  </div>
</section>
<section className="bg-white px-6 py-24 text-black sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <p className="max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl text-yellow-500">
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