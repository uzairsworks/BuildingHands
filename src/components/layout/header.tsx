"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { siteConfig, navLinks } from '@/lib/data';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle
} from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeId = useScrollSpy(navLinks.map(link => link.href.substring(1)), { offset: 100 });

  const getLinkClass = (href: string) => {
    if (!isMounted) return "text-foreground/70";
    const isActive = href === `#${activeId}` || (activeId === null && href === '#home');
    return isActive;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Premium Company Name */}
        <Link 
          href="#home" 
          className="group relative flex items-center"
        >
          <span className="text-2xl md:text-3xl font-headline font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
            {siteConfig.companyName}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        {/* Premium Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = getLinkClass(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300",
                  "before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-accent before:to-primary before:transition-all before:duration-300 before:-translate-x-1/2",
                  "hover:before:w-3/4 hover:text-accent",
                  isActive 
                    ? "text-accent before:w-3/4" 
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                <span className="relative z-10">{link.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Premium CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            asChild 
            variant="ghost"
            className="font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-all duration-300"
          >
            <a href={`tel:${siteConfig.phoneNumber}`}>Call Us</a>
          </Button>
          <Button 
            asChild 
            className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            <Link href="#contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Premium Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent/10 transition-colors duration-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Premium Mobile Company Name */}
                <div className="mb-10 pb-6 border-b border-border/40">
                  <Link 
                    href="#home" 
                    className="inline-block group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-3xl font-headline font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                      {siteConfig.companyName}
                    </span>
                  </Link>
                </div>
                
                {/* Premium Mobile Navigation */}
                <nav className="flex flex-col space-y-2 flex-1">
                  {navLinks.map((link) => {
                    const isActive = getLinkClass(link.href);
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "relative px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300",
                            "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-primary before:opacity-0 before:transition-opacity before:duration-300",
                            isActive
                              ? "text-accent bg-accent/10 before:opacity-100"
                              : "text-foreground/80 hover:text-accent hover:bg-accent/5 before:opacity-0 hover:before:opacity-100"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="relative z-10 pl-2">{link.title}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                
                {/* Premium Mobile CTA Buttons */}
                <div className="mt-auto pt-6 space-y-3 border-t border-border/40">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                      Get a Free Quote
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full font-medium hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <a href={`tel:${siteConfig.phoneNumber}`} onClick={() => setIsMenuOpen(false)}>
                      Call {siteConfig.phone}
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full font-medium hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <a href={`tel:${siteConfig.phoneNumber2}`} onClick={() => setIsMenuOpen(false)}>
                      Call {siteConfig.phone2}
                    </a>
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
