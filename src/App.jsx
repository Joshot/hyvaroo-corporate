import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-navy transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
