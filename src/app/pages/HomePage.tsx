import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Work } from '@/app/components/Work';
import { Testimonials } from '@/app/components/Testimonials';
import { Footer } from '@/app/components/Footer';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
