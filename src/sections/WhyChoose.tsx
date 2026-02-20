import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

export default function WhyChoose() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle
          title="Why Choose Gifted?"
          subtitle="Unlock the power of ML-driven crypto trading — built with risk-aware decisioning and clarity."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card
            accent="cyan"
            icon="🏆"
            title="Proven Accuracy"
            desc="Signals backed by advanced ML models and continuously monitored for consistency."
          />
          <Card
            accent="emerald"
            icon="🛡️"
            title="Risk Management"
            desc="Built-in risk filters assess confidence and volatility before any signal goes live."
          />
          <Card
            accent="orange"
            icon="🚀"
            title="Easy to Use"
            desc="A clean interface designed for both new and experienced traders — no clutter, just clarity."
          />
        </div>
      </div>
    </section>
  );
}
