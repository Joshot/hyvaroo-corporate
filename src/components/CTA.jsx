import { ArrowRight } from 'lucide-react'
import useFadeUp from '../hooks/useFadeUp'

export default function CTA() {
  const ref = useFadeUp(0)
  return (
    <section className="py-28 bg-white dark:bg-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="fade-up rounded-3xl p-px" style={{background:'linear-gradient(135deg,#4F8CFF,#8A5CFF)'}}>
          <div className="rounded-3xl bg-white dark:bg-navy px-8 py-16 md:py-20 text-center">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Ready to Start?</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy dark:text-white">
              Let's build something <span className="gradient-text">great together</span>
            </h2>
            <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold glow-btn">
              Start a Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
