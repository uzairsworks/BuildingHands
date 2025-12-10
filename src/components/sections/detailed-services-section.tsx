import { CheckCircle } from 'lucide-react';
import { detailedServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function ServiceBlock({ id, title, description, items, cta, imageId }) {
  const serviceImage = PlaceHolderImages.find(img => img.id === imageId);
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
        <div className="lg:order-1 relative min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden shadow-lg">
          {serviceImage && (
            <Image
              src={serviceImage.imageUrl}
              alt={serviceImage.description}
              fill
              className="object-cover"
              data-ai-hint={serviceImage.imageHint}
            />
          )}
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
          imageId="service-plumbing"
        />
        <ServiceBlock 
          id="services-electrical"
          title={detailedServices.electrical.title}
          description={detailedServices.electrical.description}
          items={detailedServices.electrical.items}
          cta={detailedServices.electrical.cta}
          imageId="service-electrical"
        />
        <ServiceBlock 
          id="services-security"
          title={detailedServices.security.title}
          description={detailedServices.security.description}
          items={detailedServices.security.items}
          cta={detailedServices.security.cta}
          imageId="service-security"
        />
      </div>
    </section>
  );
}
