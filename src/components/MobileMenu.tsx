"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex size-11 items-center justify-center rounded-lg bg-yellow-500 md:hidden"
      >
        <div className="flex w-5 flex-col gap-[5px]">
          <span className="h-px w-full bg-black" />
          <span className="h-px w-full bg-black" />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-zinc-950 text-white transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-dvh flex-col px-6 py-8 sm:px-10">

          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.2em]">
              Alejandro Torres
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex size-11 items-center justify-center rounded-lg bg-yellow-500 text-black"
            >
              <span className="text-2xl font-bold leading-none">×</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="my-auto">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={item.href}
                  className="border-b border-zinc-800"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-6"
                  >
                    <span className="text-4xl font-medium tracking-tight transition-colors group-hover:text-yellow-500 sm:text-5xl">
                      {item.label}
                    </span>

                    <span className="text-sm text-zinc-600">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="flex items-end justify-between border-t border-zinc-800 pt-6">
            <p className="text-sm text-zinc-500">
              Designer × Developer
            </p>

            <div className="size-3 rounded-full bg-yellow-500" />
          </div>
        </div>
      </div>
    </>
  );
}