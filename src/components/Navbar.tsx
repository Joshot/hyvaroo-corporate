"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-navy/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-lg text-navy dark:text-white tracking-tight">
              Hyvaroo <span className="gradient-text">Labs</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-accent text-white text-sm font-medium glow-btn"
            >
              Start a Project
            </a>
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 dark:border-white/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex px-4 py-2 rounded-lg bg-gradient-accent text-white text-sm font-medium"
            >
              Start a Project
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
