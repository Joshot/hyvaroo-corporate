"use client";
import { useEffect, useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinanceFlow SaaS",
    category: "Web Application",
    description: "A modern financial management platform with real-time analytics, multi-currency support, and automated reporting.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    color: "from-blue-500 to-indigo-600",
    emoji: "📊",
  },
  {
    title: "MediCore Platform",
    category: "Healthcare Tech",
    description: "Comprehensive clinic management system featuring appointment scheduling, patient records, and telemedicine integration.",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "from-emerald-400 to-teal-600",
    emoji: "🏥",
  },
  {
    title: "EduSpark LMS",
    category: "E-Learning",
    description: "Feature-rich learning management system with course creation, live sessions, certificates, and progress tracking.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    color: "from-purple-500 to-pink-600",
    emoji: "🎓",
  },
  {
    title: "ShopVault E-Commerce",
    category: "E-Commerce",
    description: "High-performance online store with advanced filtering, real-time inventory, and seamless checkout experience.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    color: "from-orange-400 to-rose-500",
    emoji: "🛍️",
  },
];

export default function Portfolio() {
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
    <section id="portfolio" className="py-28 bg-white dark:bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-item opacity-0 translate-y-6 transition-all duration-700">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Work</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A selection of impactful products we've built for clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="animate-item opacity-0 translate-y-6 transition-all duration-700 group relative rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden card-hover cursor-default"
            >
              {/* Gradient Banner */}
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl`}>
                {project.emoji}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{project.category}</span>
                    <h3 className="mt-1 text-xl font-bold text-navy dark:text-white">{project.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-gradient-accent group-hover:text-white group-hover:border-transparent transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-softgray dark:bg-white/10 text-xs font-medium text-gray-600 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
