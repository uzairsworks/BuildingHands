import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-card">
      <div className="container max-w-7xl mx-auto px-4" suppressHydrationWarning>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary">Book a Service</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ready to get started? Fill out the form below or contact us directly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="space-y-6" suppressHydrationWarning>
            <h3 className="text-2xl font-bold font-headline">Direct Contact</h3>
            <p className="text-muted-foreground">
              For urgent issues or immediate assistance, please don't hesitate to call or message us.
            </p>
            <div className="space-y-4" suppressHydrationWarning>
              <div className="flex items-center" suppressHydrationWarning>
                <Phone className="h-6 w-6 mr-4 text-accent" />
                <div suppressHydrationWarning>
                  <h4 className="font-semibold">Phone & WhatsApp</h4>
                  <div className="space-y-1" suppressHydrationWarning>
                    <a href={`tel:${siteConfig.phone}`} className="block text-muted-foreground hover:text-accent">{siteConfig.phone}</a>
                    <a href={`tel:${siteConfig.phone2}`} className="block text-muted-foreground hover:text-accent">{siteConfig.phone2}</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center" suppressHydrationWarning>
                <Mail className="h-6 w-6 mr-4 text-accent" />
                <div suppressHydrationWarning>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-accent">{siteConfig.email}</a>
                </div>
              </div>
              <div className="flex items-center" suppressHydrationWarning>
                <MapPin className="h-6 w-6 mr-4 text-accent" />
                <div suppressHydrationWarning>
                  <h4 className="font-semibold">Service Area</h4>
                  <p className="text-muted-foreground">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
