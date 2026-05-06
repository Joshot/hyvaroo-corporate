"use client";
import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-28 bg-softgray dark:bg-white/[0.02]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-item opacity-0 translate-y-6 transition-all duration-700">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white tracking-tight">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="animate-item opacity-0 translate-y-6 transition-all duration-700 bg-white dark:bg-white/[0.04] rounded-2xl border border-gray-100 dark:border-white/10 p-8 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm resize-none"
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm">
              <CheckCircle2 size={16} />
              <span>Message sent! We&apos;ll get back to you within 24 hours.</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-accent text-white font-semibold glow-btn disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
