import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Management App",
  description:
    "Case study of a role-based healthcare management application for patients, professionals, and administrators.",
};

export default function HealthcareManagementApp() {
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
              Web Application · 2025
            </p>

            <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
              Healthcare
              <br />
              Management
              <br />
              App
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
              A role-based healthcare application designed to connect patients,
              medical professionals, and administrators through a clear and
              structured appointment workflow.
            </p>
          </div>

          <div className="mt-20 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Role
              </p>
              <p className="mt-3 text-sm">Frontend Development</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Type
              </p>
              <p className="mt-3 text-sm">Web Application</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Stack
              </p>
              <p className="mt-3 text-sm">React · Tailwind · Zod</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Focus
              </p>
              <p className="mt-3 text-sm">Role-based UX</p>
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
                One application.
                <br />
                Three distinct roles.
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
                Patients, healthcare professionals, and administrators need
                access to the same system, but each role requires different
                information, permissions, and workflows.
              </p>

              <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
                The challenge was to keep those experiences clearly separated
                while maintaining a consistent interface and predictable
                navigation across the application.
              </p>
            </div>
          </div>

          <div className="my-24 border-t border-zinc-200" />

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                02 — The Solution
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
                A different experience for every role.
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
                The application uses role-aware navigation and protected routes
                to provide each user with the tools and information relevant to
                their responsibilities.
              </p>

              <div className="mt-14 grid gap-px bg-zinc-200 md:grid-cols-3">
                <div className="bg-white p-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Patient
                  </span>

                  <h3 className="mt-6 text-xl font-medium">
                    Appointments
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-500">
                    Find professionals, schedule appointments, and manage
                    personal bookings.
                  </p>
                </div>

                <div className="bg-white p-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Professional
                  </span>

                  <h3 className="mt-6 text-xl font-medium">
                    Schedule
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-500">
                    Access professional workflows and manage appointment
                    information through a dedicated interface.
                  </p>
                </div>

                <div className="bg-white p-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Administrator
                  </span>

                  <h3 className="mt-6 text-xl font-medium">
                    Management
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-500">
                    Manage users, roles, and application-level operations from
                    a protected administrative area.
                  </p>
                </div>
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
          03 — Role-Based Experience
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Access follows
          <br />
          responsibility.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
          Authentication alone is not enough. The application also needs to
          understand who the user is and which areas of the product they are
          allowed to access.
        </p>
      </div>
    </div>

    <div className="mt-20 grid gap-4 lg:grid-cols-3">

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Patient
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Personal experience
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Patients are directed to their own area, where they can access
          appointment-related functionality without entering professional or
          administrative routes.
        </p>

        <p className="mt-8 font-mono text-sm text-zinc-500">
          /paciente
        </p>
      </div>

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Professional
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Professional workflow
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Healthcare professionals work within a dedicated area designed
          around their appointment and patient-facing responsibilities.
        </p>

        <p className="mt-8 font-mono text-sm text-zinc-500">
          /prof
        </p>
      </div>

      <div className="border border-zinc-800 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Administrator
        </span>

        <h3 className="mt-6 text-2xl font-medium">
          Protected management
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Administrative functionality is isolated behind additional
          authorization checks to protect privileged operations.
        </p>

        <p className="mt-8 font-mono text-sm text-zinc-500">
          /admin
        </p>
      </div>

    </div>

    <div className="flex justify-center py-8">
      <span className="text-2xl text-zinc-600">↓</span>
    </div>

    <div className="grid gap-4 md:grid-cols-2">

      <div className="border border-zinc-700 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Routing
        </span>

        <h3 className="mt-6 text-xl font-medium">
          Protected Routes
        </h3>

        <p className="mt-4 max-w-xl leading-7 text-zinc-400">
          Route guards prevent users from navigating into areas that do not
          belong to their authenticated role.
        </p>
      </div>

      <div className="border border-zinc-700 p-8 sm:p-10">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Forms
        </span>

        <h3 className="mt-6 text-xl font-medium">
          Structured Validation
        </h3>

        <p className="mt-4 max-w-xl leading-7 text-zinc-400">
          React Hook Form and Zod provide predictable form state and validation
          rules across user-facing workflows.
        </p>
      </div>

    </div>

    <div className="mt-20 border-t border-zinc-800 pt-8">
      <p className="max-w-3xl leading-7 text-zinc-400">
        Separating navigation by role keeps the interface focused while making
        authorization rules explicit within the application structure.
      </p>
    </div>

  </div>
</section>
<section className="px-6 py-24 sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          04 — Key Features
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Clear workflows for
          <br />
          different users.
        </h2>

        <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">01</span>
            <div>
              <h3 className="text-lg font-medium">
                Appointment Management
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Patients can browse available professionals and manage their
                appointments through a dedicated experience.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">02</span>
            <div>
              <h3 className="text-lg font-medium">
                Professional Filtering
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Appointment information can be filtered according to the
                professional associated with each booking.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">03</span>
            <div>
              <h3 className="text-lg font-medium">
                Role-Based Navigation
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Users are directed to the appropriate interface according to
                their role and permissions.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">04</span>
            <div>
              <h3 className="text-lg font-medium">
                Form Validation
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Forms use structured validation and clear feedback to prevent
                invalid or incomplete submissions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
<section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">

    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
      Project Focus
    </p>

    <div className="mt-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
      <div>
        <h2 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          Different roles.
          <br />
          One consistent experience.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-zinc-400">
          This project explores how authentication, authorization, routing,
          validation, and interface design can work together to create a
          structured multi-role application.
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