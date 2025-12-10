"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { siteConfig, navLinks } from '@/lib/data';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map(link => link.href.substring(1)), { offset: 100 });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="#home" className="text-xl font-bold font-headline text-primary">
          {siteConfig.companyName}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-accent",
                (link.href === `#${activeId}` || (activeId === null && link.href === '#home')) ? "text-accent" : "text-foreground/60"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost">
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
             <Link href="#contact">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <div className="mb-8">
                  <Link href="#home" className="text-2xl font-bold font-headline text-primary" onClick={() => setIsMenuOpen(false)}>
                    {siteConfig.companyName}
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-accent",
                           (link.href === `#${activeId}` || (activeId === null && link.href === '#home')) ? "text-accent" : "text-foreground"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 pt-8 border-t">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Get a Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
