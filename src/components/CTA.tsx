"use client";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-white dark:bg-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative rounded-3xl bg-gradient-to-br from-accent to-purple p-px">
          <div className="rounded-3xl bg-white dark:bg-navy px-8 py-16 md:py-20">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 to-purple/10 -z-10 blur-xl" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Ready to Start?</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight">
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-accent text-white font-semibold text-base glow-btn"
            >
              Start a Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
