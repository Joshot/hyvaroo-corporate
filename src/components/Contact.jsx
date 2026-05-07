import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import useFadeUp from '../hooks/useFadeUp'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const titleRef = useFadeUp(0)
  const formRef = useFadeUp(150)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4500)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 text-navy dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"

  return (
    <section id="contact" className="py-28 bg-softgray dark:bg-white/[0.02]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy dark:text-white">Start a <span className="gradient-text">Conversation</span></h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}
          className="fade-up bg-white dark:bg-white/[0.04] rounded-2xl border border-gray-100 dark:border-white/10 p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" required placeholder="John Smith" value={form.name}
                onChange={e => setForm({...form, name: e.target.value})} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" required placeholder="john@company.com" value={form.email}
                onChange={e => setForm({...form, email: e.target.value})} className={inputCls} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea required rows={5} placeholder="Tell us about your project..." value={form.message}
              onChange={e => setForm({...form, message: e.target.value})} className={`${inputCls} resize-none`} />
          </div>

          {sent && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm">
              <CheckCircle2 size={16} /> Message sent! We'll get back to you within 24 hours.
            </div>
          )}

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-bg text-white font-semibold glow-btn">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
