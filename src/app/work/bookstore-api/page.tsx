import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookstore API",
  description:
    "Case study of a backend API with authentication, user management, validation, and transactional email workflows.",
};

export default function BookstoreApi() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="px-6 py-8 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.2em] uppercase"
          >
            Alejandro Torres
          </Link>

          <Link
            href="/#work"
            className="text-sm text-zinc-500 transition-colors hover:text-black"
          >
            ← Back to work
          </Link>
        </div>
      </header>

      <section className="px-6 pb-24 pt-20 sm:px-10 md:px-16 lg:px-24 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Backend · 2025
            </p>

            <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
              Bookstore
              <br />
              API
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
              A backend service designed around authentication, user
              management, validation, database persistence, and transactional
              email workflows.
            </p>
          </div>

          <div className="mt-20 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Role
              </p>
              <p className="mt-3 text-sm">Backend Development</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Type
              </p>
              <p className="mt-3 text-sm">REST API</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Stack
              </p>
              <p className="mt-3 text-sm">Node.js · Express · MongoDB</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Focus
              </p>
              <p className="mt-3 text-sm">Auth & User Flows</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                01 — The Challenge
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
                More than storing users.
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
                The backend needs to handle the full user lifecycle securely,
                from account creation and validation to authentication and
                protected access.
              </p>

              <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
                Each request must be validated before it reaches the core
                business logic, while credentials and user data must be handled
                consistently across the application.
              </p>
            </div>
          </div>

          <div className="my-24 border-t border-zinc-200" />

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                02 — Backend Flow
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
                A predictable request pipeline.
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
                The API is structured around a clear sequence of validation,
                authentication, request handling, persistence, and external
                services.
              </p>

              <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">
                {[
                  ["01", "Request"],
                  ["02", "Validation"],
                  ["03", "Authentication"],
                  ["04", "Controller"],
                  ["05", "Database"],
                  ["06", "Transactional Email"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="grid gap-4 py-6 sm:grid-cols-[60px_1fr]"
                  >
                    <span className="text-sm text-zinc-400">{number}</span>
                    <p className="text-lg font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          03 — Authentication & Security
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Trust starts
          <br />
          at the API.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
          Authentication is handled as a complete workflow rather than a
          single login endpoint. User input is validated, credentials are
          protected, and authenticated access is controlled before protected
          resources are exposed.
        </p>
      </div>
    </div>

    <div className="mt-20 grid gap-4 md:grid-cols-2">

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          01 — Validation
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Validate before processing
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Incoming data is checked before reaching application logic, reducing
          invalid requests and keeping endpoint behavior predictable.
        </p>
      </div>

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          02 — Passwords
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Protected credentials
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Passwords are hashed with bcrypt before persistence, keeping raw
          credentials out of the database.
        </p>
      </div>

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          03 — Authentication
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Token-based access
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Authentication tokens provide controlled access to protected
          endpoints after successful user verification.
        </p>
      </div>

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          04 — Email
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Transactional communication
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Nodemailer connects account workflows with transactional email,
          including user verification processes.
        </p>
      </div>

    </div>

    <div className="mt-20 border-t border-zinc-800 pt-8">
      <p className="max-w-3xl leading-7 text-zinc-400">
        Separating validation, credential handling, authentication, and
        communication responsibilities keeps the API easier to reason about
        and maintain.
      </p>
    </div>

  </div>
</section>
<section className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          04 — Project Focus
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Understanding what
          <br />
          happens behind the UI.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
          This project strengthened my understanding of how a backend handles
          data throughout the complete request lifecycle, from validation and
          authentication to persistence and external services.
        </p>

        <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
          Building and debugging the authentication and account verification
          flows also reinforced the importance of clear responsibilities,
          predictable error handling, and tracing data across multiple layers
          of an application.
        </p>

        <div className="mt-14 flex flex-wrap gap-3">
          {[
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "bcrypt",
            "JWT",
            "Nodemailer",
            "express-validator",
          ].map((technology) => (
            <span
              key={technology}
              className="border border-zinc-200 px-4 py-2 text-sm text-zinc-600"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
      Next Project
    </p>

    <div className="mt-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
      <div>
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          From backend logic
          <br />
          back to visual thinking.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-zinc-400">
          Explore selected work in graphic design, visual identity, editorial
          design, and digital communication.
        </p>
      </div>

      <Link
        href="/#work"
        className="group flex items-center gap-4 text-lg"
      >
        Back to selected work
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}