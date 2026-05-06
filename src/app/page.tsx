import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-navy transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
