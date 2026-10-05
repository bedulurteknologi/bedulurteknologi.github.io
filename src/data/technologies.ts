import type { TechnologyItem } from '../types';


export const technologiesData: TechnologyItem[] = [
  // Backend & Core
  { name: 'Laravel', category: 'framework', description: 'Robust MVC backend framework for secure business platforms and enterprise APIs' },
  { name: 'PHP', category: 'core', description: 'Modern typed PHP 8+ powering performant server-side architectures' },
  { name: 'TypeScript', category: 'core', description: 'Type-safe scalable JavaScript for reliable frontend and backend tooling' },
  { name: 'JavaScript', category: 'core', description: 'Interactive browser interfaces and asynchronous event-driven flows' },
  { name: 'React', category: 'framework', description: 'Component-driven reactive web interfaces and rich dashboard systems' },
  
  // Mobile & Cross-Platform
  { name: 'Flutter', category: 'framework', description: 'High-performance multi-platform UI framework for Android and iOS' },
  { name: 'Dart', category: 'core', description: 'Ahead-of-time compiled language powering fluid mobile applications' },
  
  // Data & Integrations
  { name: 'MySQL', category: 'cloud-data', description: 'Relational database architecture, relational integrity, indexing, and complex queries' },
  { name: 'REST API', category: 'core', description: 'Standardized, stateless, authenticated API design and integration layers' },
  
  // Microsoft Enterprise & Automation
  { name: 'Microsoft 365', category: 'cloud-data', description: 'Enterprise workspace identity, compliance, and document infrastructure' },
  { name: 'SharePoint', category: 'cloud-data', description: 'Centralized enterprise document hierarchies and structured business lists' },
  { name: 'Power Apps', category: 'framework', description: 'Rapid custom business applications connected to Microsoft tenant data' },
  { name: 'Power Automate', category: 'framework', description: 'Complex automated workflow orchestration, triggers, and notification pipelines' },
  
  // Hardware & Infrastructure
  { name: 'Arduino', category: 'hardware-iot', description: 'Microcontroller programming for sensor reading, serial communications, and telemetry' },
  { name: 'IoT Sensors', category: 'hardware-iot', description: 'Industrial environmental and electrical telemetry capture' },
  { name: 'Linux', category: 'cloud-data', description: 'Debian/Ubuntu server environments, systemd management, and security hardening' },
  { name: 'Cloud Infrastructure', category: 'cloud-data', description: 'Scalable VPS, reverse proxies (Nginx/Caddy), SSL, and automated off-site backups' },
];

export const technologyCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'framework', label: 'Frameworks & Mobile' },
  { id: 'core', label: 'Languages & APIs' },
  { id: 'cloud-data', label: 'Data & Enterprise' },
  { id: 'hardware-iot', label: 'Hardware & IoT' },
];
