import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Work } from '@/app/components/Work';
import { Testimonials } from '@/app/components/Testimonials';
import { Contact } from '@/app/components/Contact';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
