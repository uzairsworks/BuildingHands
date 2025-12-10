import { CheckCircle } from 'lucide-react';
import { detailedServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ServiceBlock({ id, title, description, items, cta }) {
  return (
    <div id={id} className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="lg:order-2">
          <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary">{title}</h3>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          <ul className="mt-6 space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">{cta}</Link>
          </Button>
        </div>
        <div className="lg:order-1 bg-primary/5 rounded-lg p-8 h-full">
          {/* Placeholder for image or illustration */}
          <div className="bg-primary/10 rounded-md w-full h-64 lg:h-full flex items-center justify-center">
            <p className="text-muted-foreground">Illustration Area</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DetailedServicesSection() {
  return (
    <section className="bg-card">
      <div className="container max-w-7xl mx-auto px-4 divide-y divide-border">
        <ServiceBlock 
          id="services-plumbing"
          title={detailedServices.plumbing.title}
          description={detailedServices.plumbing.description}
          items={detailedServices.plumbing.items}
          cta={detailedServices.plumbing.cta}
        />
        <ServiceBlock 
          id="services-electrical"
          title={detailedServices.electrical.title}
          description={detailedServices.electrical.description}
          items={detailedServices.electrical.items}
          cta={detailedServices.electrical.cta}
        />
        <ServiceBlock 
          id="services-security"
          title={detailedServices.security.title}
          description={detailedServices.security.description}
          items={detailedServices.security.items}
          cta={detailedServices.security.cta}
        />
      </div>
    </section>
  );
}
