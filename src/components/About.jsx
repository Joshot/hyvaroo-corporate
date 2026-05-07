import { CheckCircle2 } from 'lucide-react'
import useFadeUp from '../hooks/useFadeUp'

export default function About() {
  const r1 = useFadeUp(0), r2 = useFadeUp(150), r3 = useFadeUp(250), r4 = useFadeUp(350)
  return (
    <section id="about" className="py-28 bg-softgray dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div ref={r1} className="fade-up">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white leading-tight">
                We Build Products<br /><span className="gradient-text">Worth Building</span>
              </h2>
            </div>
            <p ref={r2} className="fade-up mt-6 text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              Hyvaroo Labs is a technology-focused software house dedicated to building scalable and high-performance digital products for modern businesses. We combine deep technical expertise with strategic thinking to deliver solutions that create lasting value.
            </p>
            <div ref={r3} className="fade-up mt-8 space-y-3">
              {['Global-ready, production-grade code','Deep expertise in React & Next.js ecosystem','Transparent process & on-time delivery','Long-term partnership & ongoing support'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div ref={r4} className="fade-up">
            <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-violet/10 border border-accent/20 p-8">
              <div className="grid grid-cols-2 gap-4">
                {[['3+','Years Experience'],['50+','Projects Done'],['30+','Happy Clients'],['99%','Satisfaction Rate']].map(([n,l]) => (
                  <div key={l} className="bg-white dark:bg-navy/60 rounded-xl p-5 text-center">
                    <div className="text-3xl font-bold gradient-text">{n}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-xl bg-white dark:bg-navy/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
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
  )
}
