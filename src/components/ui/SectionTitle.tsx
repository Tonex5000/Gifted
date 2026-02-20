export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-300 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
