"use client";

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Plumbing', 'Electrical', 'Cameras'];

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="py-16 lg:py-24 bg-card">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary">Recent Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into our commitment to quality and precision.
          </p>
        </div>
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              className={cn(filter === category ? 'bg-accent text-accent-foreground' : '')}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <Card key={project.id} className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-56 w-full">
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={projectImage.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent">{project.category}</p>
                    <h3 className="mt-2 text-xl font-bold font-headline">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
