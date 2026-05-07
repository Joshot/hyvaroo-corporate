import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add('visible'), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-navy pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-40" style={{background:'radial-gradient(ellipse,rgba(79,140,255,0.18) 0%,rgba(138,92,255,0.12) 60%,transparent 100%)',filter:'blur(40px)'}} />
        <div className="absolute top-1/3 w-64 h-64 rounded-full left-1/4" style={{background:'rgba(79,140,255,0.06)',filter:'blur(32px)'}} />
        <div className="absolute top-1/3 w-56 h-56 rounded-full right-1/4" style={{background:'rgba(138,92,255,0.06)',filter:'blur(32px)'}} />
      </div>
      <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(79,140,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(79,140,255,0.05) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

      <div ref={ref} className="fade-up relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/25 bg-accent/5 text-accent text-sm font-medium mb-8">
          <Sparkles size={14} /> Premium Software Development Studio
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-navy dark:text-white leading-[1.08] tracking-tight mb-6">
          Building <span className="gradient-text">High-Value</span><br />Digital Solutions
        </h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help startups and businesses create scalable, high-performance web applications that drive real growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-base glow-btn">
            Start a Project <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-200 dark:border-white/15 text-navy dark:text-white font-semibold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            Contact Us
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {[['50+','Projects Delivered'],['30+','Happy Clients'],['5★','Average Rating']].map(([v,l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-bold gradient-text">{v}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
