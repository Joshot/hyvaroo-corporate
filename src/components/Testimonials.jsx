import { Star } from 'lucide-react'
import useFadeUp from '../hooks/useFadeUp'

const testimonials = [
  { name: 'Marcus Chen', role: 'CTO at FinanceFlow', avatar: 'MC', color: 'from-blue-400 to-indigo-500', quote: 'Hyvaroo Labs delivered beyond our expectations. The dashboard they built is blazing fast, beautifully designed, and our clients love it. Code quality is exceptional — clean, well-documented, and easy to maintain.' },
  { name: 'Sarah Mitchell', role: 'Founder at EduSpark', avatar: 'SM', color: 'from-purple-400 to-pink-500', quote: 'Working with Hyvaroo Labs was a game-changer. They took our rough idea and transformed it into a world-class LMS platform in record time. The attention to detail in UI/UX is truly remarkable.' },
  { name: 'David Okafor', role: 'PM at MediCore', avatar: 'DO', color: 'from-emerald-400 to-teal-500', quote: 'Professional, fast, and incredibly talented. Hyvaroo Labs understood our vision immediately and executed perfectly. Performance optimization alone improved our Lighthouse score from 60 to 98.' },
]

function Card({ name, role, avatar, color, quote, delay }) {
  const ref = useFadeUp(delay)
  return (
    <div ref={ref} className="fade-up p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 card-hover">
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>{avatar}</div>
        <div>
          <div className="font-semibold text-navy dark:text-white text-sm">{name}</div>
          <div className="text-xs text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const titleRef = useFadeUp(0)
  return (
    <section className="py-28 bg-softgray dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white">Trusted by <span className="gradient-text">Clients</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => <Card key={t.name} {...t} delay={i * 150} />)}
        </div>
      </div>
    </section>
  )
}
