"use client";
import { useEffect, useRef } from "react";
import { Globe, Cpu, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks like Next.js and React, optimized for performance and scalability.",
  },
  {
    icon: Cpu,
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, responsive interfaces with clean code architecture, smooth animations, and exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Strategic design systems and user interfaces crafted to increase engagement, conversion, and brand trust.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Deep audits and optimization to achieve sub-second load times, perfect Core Web Vitals, and superior SEO rankings.",
  },
];

export default function Services() {
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
    <section id="services" className="py-28 bg-softgray dark:bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-item opacity-0 translate-y-6 transition-all duration-700">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            End-to-end digital solutions crafted for performance, growth, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="animate-item opacity-0 translate-y-6 transition-all duration-700 group p-8 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 card-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-navy dark:text-white mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
