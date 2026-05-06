"use client";
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "CTO at FinanceFlow",
    avatar: "MC",
    color: "from-blue-400 to-indigo-500",
    rating: 5,
    quote:
      "Hyvaroo Labs delivered beyond our expectations. The dashboard they built is blazing fast, beautifully designed, and our clients love it. Their code quality is exceptional — clean, well-documented, and easy to maintain.",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder at EduSpark",
    avatar: "SM",
    color: "from-purple-400 to-pink-500",
    rating: 5,
    quote:
      "Working with Hyvaroo Labs was a game-changer. They took our rough idea and transformed it into a world-class LMS platform in record time. The attention to detail in the UI/UX is remarkable. Highly recommend.",
  },
  {
    name: "David Okafor",
    role: "Product Manager at MediCore",
    avatar: "DO",
    color: "from-emerald-400 to-teal-500",
    rating: 5,
    quote:
      "Professional, fast, and incredibly talented. Hyvaroo Labs understood our vision immediately and executed it perfectly. The performance optimization alone improved our Core Web Vitals score from 60 to 98.",
  },
];

export default function Testimonials() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-softgray dark:bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-item opacity-0 translate-y-6 transition-all duration-700">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight">
            Trusted by <span className="gradient-text">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="animate-item opacity-0 translate-y-6 transition-all duration-700 p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 card-hover"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
