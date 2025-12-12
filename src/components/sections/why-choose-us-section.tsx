import Image from 'next/image';
import { whyChooseUs } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function WhyChooseUsSection() {
  const whyUsImage = PlaceHolderImages.find(img => img.id === 'why-us-image');

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4" suppressHydrationWarning>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary">{whyChooseUs.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our dedication to excellence makes us the preferred choice for maintenance services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">{whyChooseUs.description}</p>
            <div className="space-y-6">
              {whyChooseUs.points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-foreground">{point.title}</h4>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
            {whyUsImage && (
              <Image
                src={whyUsImage.imageUrl}
                alt={whyUsImage.description}
                fill
                className="object-cover"
                data-ai-hint={whyUsImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
