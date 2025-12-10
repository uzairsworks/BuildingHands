"use client";

import { useEffect, useState } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {isClient ? <Header /> : <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"><div className="container flex h-16 max-w-7xl items-center justify-between"><Skeleton className="h-8 w-32" /><div className="flex gap-4"><Skeleton className="h-8 w-24" /><Skeleton className="h-8 w-24" /></div></div></header>}
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
