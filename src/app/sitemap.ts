import type { MetadataRoute } from 'next';

/**
 * Dynamic sitemap (served at /sitemap.xml)
 *
 * Set your production URL via an env var:
 *   NEXT_PUBLIC_SITE_URL=https://your-domain.com
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://example.com')
  .replace(/\/+$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Add more routes here as you create more pages.
  const routes: string[] = ['/',];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
