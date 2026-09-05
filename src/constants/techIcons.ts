/**
 * Logo art for the technology marquee.
 *
 * Icons come from the Devicon CDN, which serves every mark as a small SVG —
 * no assets to check in and nothing to keep in sync. The value is the icon's
 * folder name; the marquee tries `<name>-original.svg` and falls back to
 * `-plain.svg`, then to a lettered tile, so a missing variant never breaks
 * the row.
 */
export const TECH_ICONS: Record<string, string> = {
  'HTML 5': 'html5',
  CSS3: 'css3',
  Bootstrap: 'bootstrap',
  Javascript: 'javascript',
  jQuery: 'jquery',
  Angular: 'angularjs',
  ReactJS: 'react',
  VueJS: 'vuejs',
  'Next.js': 'nextjs',
  NuxtJS: 'nuxtjs',
  Laravel: 'laravel',
  CodeIgniter: 'codeigniter',
  NestJS: 'nestjs',
  ExpressJS: 'express',
  PHP: 'php',
  Node: 'nodejs',
  Python: 'python',
  WordPress: 'wordpress',
  Shopify: 'shopify',
  WooCommerce: 'woocommerce',
  'React Native': 'react',
  Flutter: 'flutter',
  Swift: 'swift',
  Kotlin: 'kotlin',
  Android: 'android',
  iOS: 'apple',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  MariaDB: 'mariadb',
  PostgreSQL: 'postgresql',
  GitHub: 'github',
  BitBucket: 'bitbucket',
  GitLab: 'gitlab',
  Figma: 'figma',
  XD: 'xd',
  Illustrator: 'illustrator',
  'After Effects': 'aftereffects',
  // AWS ships only wordmark variants, so it is given as an explicit path.
  AWS: 'amazonwebservices/amazonwebservices-original-wordmark',
  'Google Cloud': 'googlecloud',
  Docker: 'docker',
  Blockchain: 'solidity',
  PWA: 'chrome',
  AMP: 'google',
  // ChatGPT and Chatbot have no Devicon mark — they fall back to a letter tile.
};

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const techIconSrc = (tech: string, variant: 'original' | 'plain') => {
  const slug = TECH_ICONS[tech];
  if (!slug) return null;
  // A value containing a slash is already a full `folder/file` path.
  if (slug.includes('/')) return `${CDN}/${slug}.svg`;
  return `${CDN}/${slug}/${slug}-${variant}.svg`;
};
