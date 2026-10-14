import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyecto Clima",
  description:
    "An in-development React Native weather-awareness application exploring location-based forecasts and environmental alerts.",
};

const technologies = ["React Native", "Expo", "TypeScript", "Open-Meteo"];

export default function ProyectoClimaPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="px-6 py-8 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.2em]">
            Alejandro Torres
          </Link>
          <Link href="/#work" className="text-sm text-zinc-500 transition-colors hover:text-black">
            ← Back to work
          </Link>
        </div>
      </header>

      <section className="px-6 pb-24 pt-20 sm:px-10 md:px-16 lg:px-24 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Mobile Development · 2026 · In Development
          </p>
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-yellow-700 sm:text-6xl md:text-7xl lg:text-8xl">
            Weather<br />App
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            A mobile application designed to make weather conditions easier to understand,
            combining local forecasts with an evolving approach to environmental awareness.
          </p>
          <div className="mt-20 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Role", "Mobile App Development"],
              ["Platform", "Android / Expo"],
              ["Stack", "React Native · TypeScript"],
              ["Status", "Work in Progress"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{label}</p>
                <p className="mt-3 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">01 — The Challenge</p>
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-yellow-700 sm:text-5xl">
                Beyond the temperature.
              </h2>
              <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
                Most weather apps focus on basic conditions. Proyecto Clima explores
                how forecasts and environmental signals can be presented in a clearer,
                more actionable mobile experience.
              </p>
            </div>
          </div>
          <div className="grid gap-12 border-t border-zinc-200 pt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">02 — Current Development</p>
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-yellow-700 sm:text-5xl">
                Building the foundation.
              </h2>
              <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200">
                {[
                  ["01", "Current weather and 24-hour forecast"],
                  ["02", "Location permission and location search"],
                  ["03", "Experimental wind alert threshold"],
                  ["04", "Testing with simulated weather scenarios"],
                ].map(([number, title]) => (
                  <div key={number} className="grid gap-4 py-6 sm:grid-cols-[60px_1fr]">
                    <span className="text-sm text-zinc-400">{number}</span>
                    <p className="text-lg font-medium">{title}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-7 text-zinc-500">
                The alert logic is experimental. This is an active development project,
                not a production-grade severe-weather warning service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">03 — Technical Approach</p>
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-yellow-500 sm:text-5xl">
              Mobile UI. External weather data. Clear responsibilities.
            </h2>
            <p className="mt-10 max-w-2xl leading-8 text-zinc-400">
              React Native and Expo provide the mobile application foundation.
              TypeScript supports typed application code, while weather data is
              obtained through an external meteorological API. The interface and
              experimental alert rules are developed incrementally.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span key={technology} className="border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">04 — Next Steps</p>
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-yellow-700 sm:text-5xl">
              An evolving product.
            </h2>
            <p className="mt-10 max-w-2xl leading-8 text-zinc-600">
              Planned exploration includes richer environmental indicators,
              personalized preferences, user accounts and notifications.
              These are roadmap ideas, not completed features.
            </p>
            <a
              href="https://github.com/aletorresprado/proyecto-clima"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex border-b border-yellow-700 pb-2 font-medium transition-colors hover:text-yellow-700"
            >
              Explore the GitHub repository ↗
            </a>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Selected Work</p>
          <h2 className="mt-10 text-4xl font-medium tracking-tight text-yellow-500 sm:text-6xl">
            Explore more projects.
          </h2>
          <Link href="/#work" className="mt-10 inline-flex items-center gap-4 text-lg">
            Back to selected work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
