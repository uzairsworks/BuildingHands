import { pricing } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary">Service Packages</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Transparent pricing for every need. Choose the plan that's right for you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.map((plan, index) => (
            <Card 
              key={plan.title} 
              className={`flex flex-col ${index === 1 ? 'border-accent shadow-lg' : ''}`}
            >
              <CardHeader className={index === 1 ? 'bg-accent/10' : ''}>
                <CardTitle className="font-headline text-2xl">{plan.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary pt-2">{plan.price}</CardDescription>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${index === 1 ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`} variant={index === 1 ? 'default' : 'outline'}>
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
