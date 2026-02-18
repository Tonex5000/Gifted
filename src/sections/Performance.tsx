import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Pill from "../components/ui/Pill";

function MetricCard({
  label,
  value,
  note,
  ringClass,
}: {
  label: string;
  value: string;
  note: string;
  ringClass: string;
}) {
  return (
    <div className={`rounded-3xl bg-white/5 p-6 ring-1 ${ringClass}`}>
      <div className="text-sm font-semibold text-slate-200">{label}</div>
      <div className="mt-3 text-4xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-400">{note}</div>
    </div>
  );
}

export default function Performance() {
  return (
    <section id="performance" className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle
          title="Performance & Transparency"
          subtitle="See the results for yourself and trade with confidence backed by data-driven insights."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <MetricCard label="Win Rate" value="72%" note="Last 30 days" ringClass="ring-cyan-400/25" />
          <MetricCard label="Avg. Risk/Reward" value="1:2.8" note="Reward-to-risk ratio" ringClass="ring-emerald-400/25" />
          <MetricCard label="Max Drawdown" value="-6.2%" note="Peak loss (last 30 days)" ringClass="ring-orange-400/25" />
          <MetricCard label="Strategy Type" value="Trend + ML" note="Hybrid signal engine" ringClass="ring-white/10" />
        </div>

        <div className="mt-6 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-white">Last 30 Days Performance</div>
              <div className="text-sm text-slate-400">Equity curve & daily gains (demo view)</div>
            </div>
            <Pill>+18.5%</Pill>
          </div>

          <div className="mt-6 relative h-48 rounded-2xl bg-slate-950/40 ring-1 ring-white/10 overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.20),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.18),transparent_55%)]" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end gap-2 px-6 pb-6">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t bg-white/15 ring-1 ring-white/10"
                  style={{ height: `${18 + (i % 6) * 14 + (i > 10 ? 20 : 0)}px` }}
                />
              ))}
            </div>

            <svg className="absolute inset-0" viewBox="0 0 800 200" preserveAspectRatio="none">
              <path
                d="M0,150 C80,140 120,160 200,140 C280,120 320,140 400,115 C480,90 540,110 620,80 C700,55 740,70 800,35"
                fill="none"
                stroke="rgba(52,211,153,0.9)"
                strokeWidth="3"
              />
            </svg>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Past performance is not indicative of future results. Trading involves risk; only invest what you can afford to lose.
          </p>
        </div>
      </div>
    </section>
  );
}
