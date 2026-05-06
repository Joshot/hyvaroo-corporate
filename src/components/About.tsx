"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".animate-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).classList.remove("opacity-0", "translate-y-6");
            }, i * 150);
          });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 bg-softgray dark:bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="animate-item opacity-0 translate-y-6 transition-all duration-700">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight leading-tight">
                We Build Products
                <br />
                <span className="gradient-text">Worth Building</span>
              </h2>
            </div>
            <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed text-lg animate-item opacity-0 translate-y-6 transition-all duration-700">
              Hyvaroo Labs is a technology-focused software house dedicated to building scalable and high-performance
              digital products for modern businesses. We combine deep technical expertise with strategic thinking to
              deliver solutions that create lasting value.
            </p>
            <div className="mt-8 space-y-3 animate-item opacity-0 translate-y-6 transition-all duration-700">
              {[
                "Global-ready, production-grade code",
                "Deep expertise in React & Next.js ecosystem",
                "Transparent process & on-time delivery",
                "Long-term partnership & ongoing support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="animate-item opacity-0 translate-y-6 transition-all duration-700">
            <div className="relative rounded-2xl bg-gradient-to-br from-accent/10 to-purple/10 border border-accent/20 p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "50+", label: "Projects Done" },
                  { number: "30+", label: "Happy Clients" },
                  { number: "99%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white dark:bg-navy/60 rounded-xl p-5 text-center">
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-navy/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div>
                  <div className="font-semibold text-navy dark:text-white text-sm">Hyvaroo Labs</div>
                  <div className="text-xs text-gray-400">Software Development Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
