export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  filterCategory: 'all' | 'web' | 'mobile' | 'business' | 'automation' | 'iot' | 'enterprise';
  headline: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  coverImage: string;
  gallery: string[];
  year: string;
  featured: boolean;
  order: number;
  impact?: string[];
  clientType?: string;
  liveUrl?: string;
  demoUrl?: string;
  visualNote?: string;
  imageSummary?: string;
  provenance?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface TechnologyItem {
  name: string;
  category: 'core' | 'framework' | 'cloud-data' | 'hardware-iot';
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  founders: {
    name: string;
    role: string;
    bio: string;
  }[];
}

export interface ContactConfig {
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  upworkUrl: string;
  location: string;
  statusText: string;
}
