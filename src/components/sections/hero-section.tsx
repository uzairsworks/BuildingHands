import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroContent, siteConfig } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`;

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70 bg-gradient-to-tr from-primary via-primary/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
          {heroContent.headline}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/90 drop-shadow-md">
          {heroContent.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            <Link href="#contact">{heroContent.cta1}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary shadow-lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{heroContent.cta2}</a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {heroContent.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="bg-white/20 text-white border-none">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
