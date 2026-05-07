import { Globe, Cpu, Palette, Zap } from 'lucide-react'
import useFadeUp from '../hooks/useFadeUp'

const services = [
  { Icon: Globe, title: 'Web Development', desc: 'Full-stack web applications built with modern frameworks like React and Next.js, optimized for performance and scalability.' },
  { Icon: Cpu, title: 'Frontend Engineering', desc: 'Pixel-perfect, responsive interfaces with clean code architecture, smooth animations, and exceptional user experiences.' },
  { Icon: Palette, title: 'UI/UX Design', desc: 'Strategic design systems and user interfaces crafted to increase engagement, conversion, and brand trust.' },
  { Icon: Zap, title: 'Performance Optimization', desc: 'Deep audits and optimization to achieve sub-second load times, perfect Core Web Vitals, and superior SEO rankings.' },
]

function Card({ Icon, title, desc, delay }) {
  const ref = useFadeUp(delay)
  return (
    <div ref={ref} className="fade-up group p-8 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 card-hover cursor-default">
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-shadow">
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="font-bold text-lg text-navy dark:text-white mb-3">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Services() {
  const titleRef = useFadeUp(0)
  return (
    <section id="services" className="py-28 bg-softgray dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white">Our <span className="gradient-text">Services</span></h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">End-to-end digital solutions crafted for performance, growth, and scalability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => <Card key={s.title} {...s} delay={i * 120} />)}
        </div>
      </div>
    </section>
  )
}
