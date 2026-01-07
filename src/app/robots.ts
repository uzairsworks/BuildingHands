import type { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt (served at /robots.txt)
 *
 * Set your production URL via an env var:
 *   NEXT_PUBLIC_SITE_URL=https://your-domain.com
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://example.com')
  .replace(/\/+$/, '');

const HOSTNAME = (() => {
  try {
    return new URL(SITE_URL).host;
  } catch {
    return SITE_URL;
  }
})();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // If you ever want to block sensitive areas, add disallow rules here.
        // disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: HOSTNAME,
  };
}
