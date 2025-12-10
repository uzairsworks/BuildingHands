"use client";

import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], options?: { offset?: number }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const listener = () => {
      const scrollY = window.scrollY;
      const offset = options?.offset ?? 150;

      const active = ids
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return null;
          return { id, top: element.offsetTop };
        })
        .filter((item): item is { id: string; top: number } => item !== null)
        .reverse()
        .find(item => scrollY >= item.top - offset);

      if (active) {
        setActiveId(active.id);
      } else {
        // If no section is active (i.e., at the very top), set to the first id if available
        setActiveId(ids[0] || null);
      }
    };

    listener();
    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, options?.offset, isMounted]);

  return activeId;
}
