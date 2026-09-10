export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section
        id="home"
        className="flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 md:px-16 lg:px-24"
      >
        <header className="flex items-center justify-between">
  <a
    href="#home"
    className="text-sm font-medium tracking-[0.2em] uppercase"
  >
    Alejandro Torres
  </a>

  <nav className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
    <a className="transition-colors hover:text-black" href="#work">
      Work
    </a>

    <a className="transition-colors hover:text-black" href="#about">
      About
    </a>

    <a className="transition-colors hover:text-black" href="#capabilities">
      Capabilities
    </a>

    <a className="transition-colors hover:text-black" href="#contact">
      Contact
    </a>
  </nav>

  <div className="flex items-center gap-2 text-sm">
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
    </span>

    <span className="hidden sm:inline">
      Available
    </span>
  </div>
</header>

        <div className="max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Remote · Argentina
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            I design.
            <br />
            I develop.
            <br />
            I solve.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Diseño experiencias visuales y construyo soluciones digitales
            para agencias, estudios y equipos de producto.
          </p>
        </div>

        <footer className="flex flex-col gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Graphic Design · Frontend · Full Stack · UI · AI</p>

          <p>Available for remote work</p>
        </footer>
      </section>
    </main>
  );
}
