import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main>
      {/* Navbar updated */}
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
