import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SecuritySection } from "@/components/SecuritySection";
import { TargetAudience } from "@/components/TargetAudience";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page metadata
    document.title = "MindCheck - 3 minuty dla Twojego spokoju | Głosowy AI-coach dobrostanu";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Nagraj 3-minutową wiadomość głosową i otrzymaj spersonalizowany plan 3 kroków na dziś. Bezpieczne narzędzie AI wspierające dobrostan psychiczny.'
    );
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <SecuritySection />
        <TargetAudience />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Index;
