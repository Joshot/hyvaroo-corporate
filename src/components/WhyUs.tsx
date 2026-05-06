"use client";
import { useEffect, useRef } from "react";
import { TrendingUp, Layers, Sparkles, Timer } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "High-Performance Solutions",
    description: "We engineer for speed. Every product is optimized for sub-second load times, perfect Lighthouse scores, and scalability at any traffic level.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Our code is built to grow with your business. Clean, maintainable architecture that can scale from MVP to enterprise without rewrites.",
  },
  {
    icon: Sparkles,
    title: "Clean UI/UX",
    description: "Design that converts. We craft interfaces that are not only beautiful but also strategically designed to guide users toward action.",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    description: "We ship fast without sacrificing quality. Agile sprints, clear milestones, and daily updates keep your project on track and on time.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".animate-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).classList.remove("opacity-0", "translate-y-6");
            }, i * 120);
          });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-white dark:bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-item opacity-0 translate-y-6 transition-all duration-700">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Hyvaroo</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight">
            The <span className="gradient-text">Difference</span> We Make
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="animate-item opacity-0 translate-y-6 transition-all duration-700 group flex gap-5 p-7 rounded-2xl border border-gray-100 dark:border-white/10 bg-softgray dark:bg-white/[0.03] card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                <reason.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-navy dark:text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
