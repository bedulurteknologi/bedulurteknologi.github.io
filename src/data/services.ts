import type { Service, ProcessStep } from '../types';


export const servicesData: Service[] = [
  {
    id: 'business-applications',
    number: '01',
    title: 'Custom Business Applications',
    subtitle: 'Operational Systems Tailored to Real Workflows',
    description:
      'Purpose-built platforms designed around actual daily business processes — eliminating spreadsheet chaos, operational friction, and fragmented tooling.',
    items: [
      'Point of Sale & Retail Engines',
      'Inventory & Stock Tracking Systems',
      'Operational ERP & Resource Workflows',
      'Custom CRM & Client Pipelines',
      'Field Operations & Logging Tools',
      'Multi-Role Authorization & Audit Trails',
    ],
    iconName: 'Layers',
  },
  {
    id: 'web-platforms',
    number: '02',
    title: 'Web Platforms & Portals',
    subtitle: 'High-Performance Web Systems',
    description:
      'Responsive, resilient, and enterprise-grade web architectures designed for internal management, corporate visibility, and secure stakeholder collaboration.',
    items: [
      'Corporate & Institutional Platforms',
      'Stakeholder & Client Portals',
      'Real-time Operational Dashboards',
      'Custom Content Architecture & CMS',
      'Interactive Diagnostic & Simulation Tools',
      'High-Load Web Applications',
    ],
    iconName: 'Globe',
  },
  {
    id: 'mobile-applications',
    number: '03',
    title: 'Mobile Applications',
    subtitle: 'Native-Grade Field & Consumer Apps',
    description:
      'Robust mobile applications designed for demanding operational environments, offline-first field work, and smooth end-user experiences across Android and iOS.',
    items: [
      'Flutter Cross-Platform Architecture',
      'Android Operational & Field Apps',
      'Offline-First Data Storage & Sync',
      'GPS, NFC & Hardware Sensor Integration',
      'Security Patrol & Inspection Systems',
      'Role-Restricted Staff Terminals',
    ],
    iconName: 'Smartphone',
  },
  {
    id: 'api-integration',
    number: '04',
    title: 'API & System Integration',
    subtitle: 'Unified Data & Connected Systems',
    description:
      'Bridging legacy software, modern cloud platforms, third-party services, and hardware feeds into a synchronized, secure, and performant ecosystem.',
    items: [
      'Resilient RESTful API Architecture',
      'Third-Party Payment & ERP Connectors',
      'Automated Bi-Directional Data Sync',
      'Secure Webhook & Event Handlers',
      'Authentication & Token Infrastructure',
      'Microservice & Service Decoupling',
    ],
    iconName: 'Network',
  },
  {
    id: 'automation',
    number: '05',
    title: 'Automation & Power Platform',
    subtitle: 'Eliminating Repetitive Overhead',
    description:
      'Streamlining enterprise approval flows, automated document tracking, and business notifications using custom scripting and modern low-code ecosystems.',
    items: [
      'End-to-End Business Process Automation',
      'Microsoft Power Apps & Power Automate',
      'SharePoint Structured Information Hubs',
      'Automated Approval & Alert Escalations',
      'Scheduled Data Extraction & Pipeline Jobs',
      'AI-Assisted Workflow Parsing',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'iot-infrastructure',
    number: '06',
    title: 'IoT & IT Infrastructure',
    subtitle: 'Hardware Telemetry & Cloud Backbones',
    description:
      'Connecting physical sensors, industrial telemetry, microcontrollers, and cloud servers to provide actionable operational monitoring in real time.',
    items: [
      'Industrial Sensor Telemetry & Logging',
      'Microcontroller (Arduino/ESP32) Firmware',
      'Linux Server Hardening & Deployment',
      'Cloud Architecture & Backup Automation',
      'Network Topology & Boundary Security',
      'Continuous Uptime & Metric Telemetry',
    ],
    iconName: 'Server',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    headline: 'Deconstruct the Actual Operational Problem',
    description:
      'We do not write code before we thoroughly understand the business context. We map workflows, uncover bottlenecks, and identify practical constraints.',
    deliverables: ['Workflow mapping', 'Constraint identification', 'Technical feasibility assessment'],
  },
  {
    number: '02',
    title: 'Design',
    headline: 'Architect Practical Systems & Interactions',
    description:
      'We translate functional business requirements into clean architectural blueprints, data schemas, API contracts, and intuitive user experiences.',
    deliverables: ['System architecture diagram', 'Data schema modeling', 'Interactive UX wireframes'],
  },
  {
    number: '03',
    title: 'Build',
    headline: 'Iterative, Maintainable Software Engineering',
    description:
      'We engineer solutions cleanly with modern stacks, version control, strict type safety, modular structures, and maintainable documentation.',
    deliverables: ['Clean modular codebase', 'Continuous integration', 'Sprint validation checkpoints'],
  },
  {
    number: '04',
    title: 'Validate',
    headline: 'Rigorous Real-World Testing & Edge Cases',
    description:
      'We test against edge cases, network dropouts, concurrent operations, and role-based security boundaries before touching production.',
    deliverables: ['Integration test validation', 'Role security verification', 'User acceptance testing'],
  },
  {
    number: '05',
    title: 'Deliver & Improve',
    headline: 'Smooth Deployment & Ongoing Evolution',
    description:
      'We execute zero-downtime deployment, provide straightforward operational documentation, and support iterative enhancements as operations scale.',
    deliverables: ['Production deployment', 'Technical & user documentation', 'Ongoing evolution support'],
  },
];
