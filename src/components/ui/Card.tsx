type Accent = "cyan" | "emerald" | "orange";

export default function Card({
  accent = "cyan",
  title,
  desc,
  icon,
}: {
  accent?: Accent;
  title: string;
  desc: string;
  icon: string;
}) {
  const ring =
    accent === "cyan"
      ? "ring-cyan-400/25"
      : accent === "emerald"
      ? "ring-emerald-400/25"
      : "ring-orange-400/25";

  const glow =
    accent === "cyan"
      ? "shadow-[0_0_40px_rgba(34,211,238,0.12)]"
      : accent === "emerald"
      ? "shadow-[0_0_40px_rgba(52,211,153,0.10)]"
      : "shadow-[0_0_40px_rgba(251,146,60,0.10)]";

  return (
    <div className={`rounded-3xl bg-white/5 p-6 ring-1 ${ring} ${glow}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/8 ring-1 ring-white/12 flex items-center justify-center">
          <span className="text-lg">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}
