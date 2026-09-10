import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Reservation Platform",
  description:
    "Case study of a multi-branch restaurant reservation and management platform.",
};

export default function RestaurantReservationPlatform() {
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
              Full Stack · 2026 · Work in progress
            </p>

            <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
              Restaurant
              <br />
              Reservation
              <br />
              Platform
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
              A multi-branch reservation and operations platform designed to
              connect the customer booking experience with the restaurant&apos;s
              internal management workflow.
            </p>
          </div>

          <div className="mt-20 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Role
              </p>
              <p className="mt-3 text-sm">Full Stack Development</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Type
              </p>
              <p className="mt-3 text-sm">Digital Product</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Stack
              </p>
              <p className="mt-3 text-sm">
                React · TypeScript · NestJS
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Status
              </p>
              <p className="mt-3 text-sm">In development</p>
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
          One reservation system.
          <br />
          Multiple branches.
          <br />
          Two different experiences.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
          The platform needs to coordinate customer reservations across five
          restaurant branches while providing the internal team with a clear
          operational view of availability, bookings and reservation status.
        </p>

        <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
          Customers need a simple booking experience, while restaurant staff
          need centralized control, branch filtering and reliable information
          for daily operations.
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
          A connected product for customers and restaurant operations.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
          The system is being designed as a shared platform with separate
          experiences for customers and restaurant staff, supported by a
          centralized API and a common business domain.
        </p>

        <div className="mt-14 grid gap-px bg-zinc-200 sm:grid-cols-2">
          <div className="bg-white p-8">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Customer
            </span>

            <h3 className="mt-6 text-xl font-medium">
              Reservation experience
            </h3>

            <p className="mt-4 leading-7 text-zinc-500">
              Branch selection, date, time and party size, reservation notes,
              active bookings and controlled cancellation.
            </p>
          </div>

          <div className="bg-white p-8">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Restaurant
            </span>

            <h3 className="mt-6 text-xl font-medium">
              Operations dashboard
            </h3>

            <p className="mt-4 leading-7 text-zinc-500">
              Centralized reservation management with branch filters,
              confirmation and cancellation workflows, and event tracking.
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
          03 — Architecture
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          One ecosystem.
          <br />
          Shared business logic.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
          The project uses a monorepo architecture to keep the customer
          experience, restaurant operations and backend services independent
          while sharing types, validation and configuration.
        </p>
      </div>
    </div>

    <div className="mt-20">

      <div className="grid gap-4 lg:grid-cols-2">

        <div className="border border-zinc-800 p-8 sm:p-10">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Customer
          </span>

          <h3 className="mt-6 text-2xl font-medium">
            Customer Mobile
          </h3>

          <p className="mt-4 max-w-md leading-7 text-zinc-400">
            Public reservation experience for discovering availability,
            creating bookings and managing active reservations.
          </p>

          <p className="mt-8 text-sm text-zinc-500">
            Expo · React Native
          </p>
        </div>

        <div className="border border-zinc-800 p-8 sm:p-10">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Operations
          </span>

          <h3 className="mt-6 text-2xl font-medium">
            Restaurant Mobile
          </h3>

          <p className="mt-4 max-w-md leading-7 text-zinc-400">
            Private operational interface for restaurant teams to manage
            reservations across branches.
          </p>

          <p className="mt-8 text-sm text-zinc-500">
            Expo · React Native
          </p>
        </div>

      </div>

      <div className="flex justify-center py-5">
        <span className="text-2xl text-zinc-600">↓</span>
      </div>

      <div className="border border-zinc-700 p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Backend
            </span>

            <h3 className="mt-6 text-2xl font-medium">
              NestJS REST API
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Centralized business logic for authentication, availability,
              reservations, branches, users and operational workflows.
            </p>
          </div>

          <p className="self-end text-sm text-zinc-500">
            TypeScript · NestJS · REST
          </p>
        </div>
      </div>

      <div className="flex justify-center py-5">
        <span className="text-2xl text-zinc-600">↓</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">

        <div className="border border-zinc-800 p-6">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Shared
          </span>
          <p className="mt-4">Types</p>
        </div>

        <div className="border border-zinc-800 p-6">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Shared
          </span>
          <p className="mt-4">Validation</p>
        </div>

        <div className="border border-zinc-800 p-6">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Shared
          </span>
          <p className="mt-4">Configuration</p>
        </div>

      </div>

    </div>

    <div className="mt-20 border-t border-zinc-800 pt-8">
      <p className="max-w-3xl leading-7 text-zinc-400">
        A TurboRepo workspace keeps applications and shared packages in a
        single codebase, reducing duplication and keeping contracts consistent
        across the product.
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
          Built around the real reservation workflow.
        </h2>

        <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">01</span>
            <div>
              <h3 className="text-lg font-medium">
                Multi-branch availability
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Availability is calculated according to branch, date, time
                and party size.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">02</span>
            <div>
              <h3 className="text-lg font-medium">
                Reservation management
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Customers can create and review reservations while restaurant
                teams manage their operational status.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">03</span>
            <div>
              <h3 className="text-lg font-medium">
                Controlled cancellation
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Customer cancellation follows business rules, including the
                defined cancellation window before a reservation.
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">
            <span className="text-sm text-zinc-400">04</span>
            <div>
              <h3 className="text-lg font-medium">
                Operational traceability
              </h3>
              <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                Reservation events provide a record of important actions and
                status changes throughout the workflow.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div className="my-24 border-t border-zinc-200" />


    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          05 — Technical Decisions
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Structure before complexity.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
          The architecture separates product experiences while keeping
          business contracts and validation shared across the codebase.
          The goal is to make the system easier to evolve without duplicating
          core rules between applications.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">

          <div className="border border-zinc-200 p-7">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Monorepo
            </span>
            <p className="mt-5 leading-7 text-zinc-600">
              TurboRepo organizes applications and shared packages in a
              single workspace.
            </p>
          </div>

          <div className="border border-zinc-200 p-7">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Validation
            </span>
            <p className="mt-5 leading-7 text-zinc-600">
              Shared schemas help keep validation rules consistent between
              different parts of the product.
            </p>
          </div>

          <div className="border border-zinc-200 p-7">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Domain
            </span>
            <p className="mt-5 leading-7 text-zinc-600">
              Reservations, branches, schedules and users are modeled as
              explicit business concepts.
            </p>
          </div>

          <div className="border border-zinc-200 p-7">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              API
            </span>
            <p className="mt-5 leading-7 text-zinc-600">
              A centralized REST API keeps operational rules away from the
              client applications.
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
<section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 md:px-16 lg:px-24 lg:py-32">
  <div className="mx-auto max-w-7xl">

    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
      Project Status
    </p>

    <div className="mt-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
      <div>
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          Work in progress.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-zinc-400">
          The platform is currently under development. This case study will
          evolve as implementation, testing and product validation progress.
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