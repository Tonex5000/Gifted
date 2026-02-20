import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import WhyChoose from "./sections/WhyChoose";
import Performance from "./sections/Performance";
import CTA from "./sections/CTA";

function GlowBG() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-orange-500/15 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_45%)]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <GlowBG />
      <div className="relative">
        <Header />
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <Performance />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
