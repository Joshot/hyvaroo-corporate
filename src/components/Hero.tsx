"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-8");
      el.classList.add("opacity-100", "translate-y-0");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-navy pt-16">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-accent/10 to-purple/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-purple/5 blur-2xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(79,140,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,140,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-8">
          <Sparkles size={14} />
          <span>Premium Software Development Studio</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-navy dark:text-white leading-[1.1] tracking-tight mb-6 text-balance">
          Building{" "}
          <span className="gradient-text">High-Value</span>
          <br />
          Digital Solutions
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help startups and businesses create scalable, high-performance web applications that drive real growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-accent text-white font-semibold text-base glow-btn"
          >
            Start a Project <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-200 dark:border-white/15 text-navy dark:text-white font-semibold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "5★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
