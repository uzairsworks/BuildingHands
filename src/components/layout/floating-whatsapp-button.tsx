import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/data';

export function FloatingWhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20Building%20Hands,%20I%20have%20an%20inquiry.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild size="icon" className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </Button>
    </div>
  );
}
