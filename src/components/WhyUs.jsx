import { TrendingUp, Layers, Sparkles, Timer } from 'lucide-react'
import useFadeUp from '../hooks/useFadeUp'

const reasons = [
  { Icon: TrendingUp, title: 'High-Performance Solutions', desc: 'We engineer for speed. Every product is optimized for sub-second load times, perfect Lighthouse scores, and scalability at any traffic level.' },
  { Icon: Layers, title: 'Scalable Architecture', desc: 'Our code is built to grow with your business. Clean, maintainable architecture that scales from MVP to enterprise without costly rewrites.' },
  { Icon: Sparkles, title: 'Clean UI/UX', desc: 'Design that converts. We craft interfaces that are not only beautiful but strategically designed to guide users toward action.' },
  { Icon: Timer, title: 'Fast Delivery', desc: 'We ship fast without sacrificing quality. Agile sprints, clear milestones, and daily updates keep your project on track and on time.' },
]

function Card({ Icon, title, desc, delay }) {
  const ref = useFadeUp(delay)
  return (
    <div ref={ref} className="fade-up group flex gap-5 p-7 rounded-2xl border border-gray-100 dark:border-white/10 bg-softgray dark:bg-white/[0.03] card-hover">
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-shadow">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h3 className="font-bold text-navy dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useFadeUp(0)
  return (
    <section className="py-28 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Hyvaroo</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white">The <span className="gradient-text">Difference</span> We Make</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => <Card key={r.title} {...r} delay={i * 120} />)}
        </div>
      </div>
    </section>
  )
}
