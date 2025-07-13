import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { ContentPreview } from '@/components/landing/content-preview';
import { Testimonials } from '@/components/landing/testimonials';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <ContentPreview />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
