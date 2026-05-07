import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg">Hyvaroo <span className="gradient-text">Labs</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A technology-focused software house dedicated to building scalable and high-performance digital products for modern businesses worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Github, href: 'https://github.com/hyvaroolabs', label: 'GitHub' },
                { Icon: Twitter, href: 'https://twitter.com/hyvaroolabs', label: 'Twitter' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/hyvaroolabs', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:hello@hyvaroolabs.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Web Development','Frontend Engineering','UI/UX Design','Performance Optimization'].map(s => (
                <li key={s}><a href="#services" className="text-gray-400 text-sm hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact', href: '#contact' },
                { label: 'hello@hyvaroolabs.com', href: 'mailto:hello@hyvaroolabs.com' },
              ].map(({ label, href }) => (
                <li key={label}><a href={href} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Hyvaroo Labs. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built with React + Vite + TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}
