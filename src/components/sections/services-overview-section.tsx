import { servicesOverview } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesOverviewSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4" suppressHydrationWarning>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a wide range of professional maintenance services for homes and businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesOverview.map((service) => (
            <Card key={service.title} className="group flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Link href={service.href} className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-4">
                    <service.icon className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                    <span className="text-sm font-semibold text-accent group-hover:underline">
                      Learn More <ArrowRight className="inline-block h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
