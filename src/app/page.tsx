import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Quiz } from '@/components/landing/quiz';
import { Testimonials } from '@/components/landing/testimonials';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background/90 backdrop-blur-sm">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Quiz />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
