"use client";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy dark:bg-black/40 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg">Hyvaroo <span className="gradient-text">Labs</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A technology-focused software house dedicated to building scalable and high-performance digital products for modern businesses worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Github, href: "https://github.com/hyvaroolabs", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com/hyvaroolabs", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/company/hyvaroolabs", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@hyvaroolabs.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-accent hover:text-white hover:border-transparent transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Web Development", "Frontend Engineering", "UI/UX Design", "Performance Optimization"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
                { label: "hello@hyvaroolabs.com", href: "mailto:hello@hyvaroolabs.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© {currentYear} Hyvaroo Labs. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built with Next.js & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
