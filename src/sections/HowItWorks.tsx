import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

export default function HowItWorks() {
  return (
    <section id="features" className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle
          title="How Gifted Works"
          subtitle="Empower your trading with real-time, machine learning-based signals for smart, data-driven decisions."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card
            accent="cyan"
            icon="🧠"
            title="AI-Driven Signals"
            desc="Our models analyze market trends and patterns to generate high-probability BUY & SELL signals."
          />
          <Card
            accent="emerald"
            icon="🔄"
            title="Real-Time Updates"
            desc="Receive up-to-the-minute alerts so you're always working with the latest market context."
          />
          <Card
            accent="orange"
            icon="📈"
            title="Performance Metrics"
            desc="Track probabilities, confidence levels, and position sizing for each signal to refine your strategy."
          />
        </div>
      </div>
    </section>
  );
}
