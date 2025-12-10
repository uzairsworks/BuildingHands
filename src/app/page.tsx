import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesOverviewSection } from "@/components/sections/services-overview-section";
import { DetailedServicesSection } from "@/components/sections/detailed-services-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesOverviewSection />
        <DetailedServicesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}
