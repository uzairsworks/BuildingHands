import Link from 'next/link';
import { siteConfig, footerLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="#home" className="text-2xl font-bold font-headline text-primary">
              {siteConfig.companyName}
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">{siteConfig.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="md:justify-self-center">
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:justify-self-center">
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href={`tel:${siteConfig.phoneNumber}`} className="hover:text-accent">{siteConfig.phone}</a></li>
                <li><a href={`tel:${siteConfig.phoneNumber2}`} className="hover:text-accent">{siteConfig.phone2}</a></li>
                <li><a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a></li>
                <li>{siteConfig.address}</li>
                <li className="flex space-x-2 pt-2">
                  {footerLinks.socials.map((social) => (
                    <Button key={social.href} variant="ghost" size="icon" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
