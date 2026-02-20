 import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 pb-10 border-t border-white/10 pt-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/20 ring-1 ring-white/15 flex items-center justify-center">
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
              <div className="text-xl font-bold text-white">Gifted</div>
            </div>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Elevate your crypto trading with ML-powered signals and clear performance tracking.
            </p>
          </div>

          <div className="text-sm">
            <div className="text-white font-semibold mb-3">Links</div>
            <ul className="space-y-2 text-slate-300">
              <li><a className="hover:text-white" href="#home">About</a></li>
              <li><a className="hover:text-white" href="#pricing">Terms</a></li>
              <li><a className="hover:text-white" href="#performance">Risk Disclaimer</a></li>
              <li><a className="hover:text-white" href="#home">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#home">API Docs</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="text-white font-semibold mb-3">Contact</div>
            <div className="text-slate-300">support@giftedtrading.com</div>

            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/12">𝕏</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/12">in</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/12">⌁</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Gifted. Trading involves significant risk. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}
