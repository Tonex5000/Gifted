import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const activeHref = "#home"; // matches your screenshot

  return (
    <header className="sticky top-0 z-50">
      {/* Glass strip */}
      <div className="border-t border-white/10 bg-slate-950/35 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-[86px] flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            {/* Gift icon (blue-ish like your image) */}
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-b from-cyan-400/25 to-blue-500/10 ring-1 ring-white/15 flex items-center justify-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-90"
              >
                <path
                  d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
                  stroke="rgba(56,189,248,0.95)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12h16"
                  stroke="rgba(56,189,248,0.85)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M12 22V7"
                  stroke="rgba(56,189,248,0.85)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M12 7H8.2c-1.3 0-2.2-.9-2.2-2.1C6 3.7 6.9 3 8.1 3c1.7 0 2.7 1.1 3.9 4Z"
                  stroke="rgba(56,189,248,0.85)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7h3.8c1.3 0 2.2-.9 2.2-2.1C18 3.7 17.1 3 15.9 3c-1.7 0-2.7 1.1-3.9 4Z"
                  stroke="rgba(56,189,248,0.85)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-2xl font-bold tracking-tight text-white/90">
              Gifted
            </span>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] text-slate-200/75">
            {navItems.map((item) => {
              const active = item.href === activeHref;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition ${
                    active ? "text-slate-100/90" : "hover:text-slate-100/85"
                  }`}
                >
                  {item.label}

                  {/* Small blue glow underline (like your image) */}
                  {active && (
                    <>
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] h-[2px] w-10 rounded-full bg-cyan-300/90" />
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 h-8 w-24 rounded-full bg-cyan-400/15 blur-xl" />
                    </>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Login (outlined glass) */}
            <button className="hidden sm:inline-flex items-center justify-center rounded-2xl px-6 py-2.5 text-sm font-semibold text-slate-200/80 bg-white/5 ring-1 ring-white/15 hover:bg-white/8 hover:text-white/85 transition">
              Login
            </button>

            {/* Get Started (dark fill + neon border glow) */}
            <button className="relative inline-flex items-center justify-center rounded-2xl px-7 py-3 text-sm font-semibold text-white/95">
              {/* neon outer glow */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/35 via-emerald-400/25 to-orange-400/25 blur-xl opacity-80" />
              {/* border */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/60 via-emerald-400/45 to-orange-400/45 opacity-80" />
              {/* inner dark fill */}
              <span className="absolute inset-[2px] rounded-[14px] bg-slate-950/70" />
              {/* subtle border line */}
              <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />

              <span className="relative">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
