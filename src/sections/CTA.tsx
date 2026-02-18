import React from "react";
import Button from "../components/ui/Button";

export default function CTA() {
  return (
    <section className="relative pt-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="rounded-[2.5rem] bg-white/5 ring-1 ring-white/12 p-8 md:p-10 text-center shadow-[0_0_80px_rgba(255,255,255,0.06)]">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Trade Smarter?</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Get started in minutes. Connect your exchange and start trading with ML-powered signals.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button>Connect Exchange</Button>
            <Button variant="secondary">Join Waitlist</Button>
            <Button variant="secondary">Start Free Trial</Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button className="rounded-2xl bg-white/8 ring-1 ring-white/12 px-5 py-3 text-sm font-semibold hover:bg-white/12 transition">
               Download on the App Store
            </button>
            <button className="rounded-2xl bg-white/8 ring-1 ring-white/12 px-5 py-3 text-sm font-semibold hover:bg-white/12 transition">
              ▶ Get it on Google Play
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Quick, secure, and risk-aware. Gifted never holds your funds.
          </p>
        </div>
      </div>
    </section>
  );
}
