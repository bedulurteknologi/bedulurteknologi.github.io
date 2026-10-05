const fs = require('fs');
const path = require('path');

const projects = [
  {
    folder: 'larisgo',
    title: 'LarisGo POS & Retail Management',
    tag: 'RETAIL ENGINE',
    primary: '#00f2fe',
    accent: '#4facfe',
    screens: [
      { name: 'cover.svg', type: 'pos', title: 'LarisGo Retail Point of Sale' },
      { name: 'pos-terminal.svg', type: 'terminal', title: 'POS Checkout Terminal' },
      { name: 'inventory-matrix.svg', type: 'table', title: 'Multi-Warehouse Inventory Matrix' },
      { name: 'reports-dashboard.svg', type: 'analytics', title: 'Sales Analytics & Cashflow Reconciliation' }
    ]
  },
  {
    folder: 'poultry',
    title: 'Poultry Farm Management System',
    tag: 'AGRI TECH',
    primary: '#10b981',
    accent: '#059669',
    screens: [
      { name: 'cover.svg', type: 'agri', title: 'Flock Monitoring & Barn Operations' },
      { name: 'farm-overview.svg', type: 'analytics', title: 'Barn Telemetry & Environmental Overview' },
      { name: 'flock-lifecycle.svg', type: 'table', title: 'Flock Lifecycle, Mortality & FCR Records' },
      { name: 'daily-entry.svg', type: 'mobile', title: 'Field Feed & Egg Logging App' }
    ]
  },
  {
    folder: 'coretrack',
    title: 'CoreTrack Laboratory Management',
    tag: 'LAB INVENTORY',
    primary: '#8b5cf6',
    accent: '#6366f1',
    screens: [
      { name: 'cover.svg', type: 'lab', title: 'Laboratory Chemical & Reagent Control' },
      { name: 'inventory-view.svg', type: 'table', title: 'Reagent Catalog & Lot Tracking' },
      { name: 'expiry-alerts.svg', type: 'alerts', title: 'Automated Expiration Warnings' },
      { name: 'batch-tracking.svg', type: 'workflow', title: 'Dispensing & Chain of Custody Audit' }
    ]
  },
  {
    folder: 'document-control',
    title: 'Document Control System',
    tag: 'ENTERPRISE CMS',
    primary: '#38bdf8',
    accent: '#0284c7',
    screens: [
      { name: 'cover.svg', type: 'docs', title: 'Controlled Engineering SOP & Document Vault' },
      { name: 'document-vault.svg', type: 'table', title: 'Document Register & Lifecycle State' },
      { name: 'approval-workflow.svg', type: 'workflow', title: 'Multi-Stage Sign-off Pipeline' },
      { name: 'version-history.svg', type: 'timeline', title: 'Immutable Version Audit Trail' }
    ]
  },
  {
    folder: 'payment-tracker',
    title: 'Payment Tracker',
    tag: 'AUTOMATION FLOW',
    primary: '#f59e0b',
    accent: '#d97706',
    screens: [
      { name: 'cover.svg', type: 'payment', title: 'Enterprise Payment Requisition & Approvals' },
      { name: 'request-form.svg', type: 'form', title: 'Invoice & Expense Requisition Form' },
      { name: 'approval-timeline.svg', type: 'workflow', title: 'Threshold Manager Routing Engine' },
      { name: 'finance-board.svg', type: 'table', title: 'Finance Disbursement Board' }
    ]
  },
  {
    folder: 'shield-papua',
    title: 'SHIELD Papua Health Tech',
    tag: 'HEALTH PLATFORM',
    primary: '#ec4899',
    accent: '#be185d',
    screens: [
      { name: 'cover.svg', type: 'health', title: 'Public Health Platform & Diagnostic Simulation' },
      { name: 'simulation-module.svg', type: 'simulation', title: 'Interactive Malaria Clinical Diagnostic Engine' },
      { name: 'knowledge-base.svg', type: 'docs', title: 'Clinical Protocols & Guidelines Library' },
      { name: 'cms-admin.svg', type: 'table', title: 'Content Management Portal' }
    ]
  },
  {
    folder: 'patrol-guard',
    title: 'Patrol Guard Mobile App',
    tag: 'MOBILE PATROL',
    primary: '#06b6d4',
    accent: '#0891b2',
    screens: [
      { name: 'cover.svg', type: 'patrol', title: 'Security Patrol & Checkpoint Verification' },
      { name: 'checkpoint-scan.svg', type: 'mobile', title: 'NFC / QR Checkpoint Scanner Terminal' },
      { name: 'incident-report.svg', type: 'form', title: 'Real-Time Incident Reporting & Evidence' },
      { name: 'patrol-route.svg', type: 'map', title: 'Patrol Route En Route Telemetry' }
    ]
  },
  {
    folder: 'industrial-iot',
    title: 'Industrial IoT Monitoring',
    tag: 'HARDWARE TELEMETRY',
    primary: '#14b8a6',
    accent: '#0d9488',
    screens: [
      { name: 'cover.svg', type: 'iot', title: 'Industrial Sensor Telemetry Hub' },
      { name: 'dashboard-gauges.svg', type: 'gauges', title: 'Real-time Temperature & Pressure Metrics' },
      { name: 'sensor-schematic.svg', type: 'schematic', title: 'Microcontroller Node Network Topology' },
      { name: 'alert-panel.svg', type: 'alerts', title: 'Operational Threshold Breach Alerting' }
    ]
  },
  {
    folder: 'corporate-web',
    title: 'Corporate Web Platform',
    tag: 'WEB ARCHITECTURE',
    primary: '#6366f1',
    accent: '#4f46e5',
    screens: [
      { name: 'cover.svg', type: 'web', title: 'Modern Corporate Capability & Digital Presence' },
      { name: 'desktop-hero.svg', type: 'webpage', title: 'Editorial High-Impact Web Interface' },
      { name: 'services-matrix.svg', type: 'grid', title: 'Interactive Capabilities Grid' },
      { name: 'contact-flow.svg', type: 'form', title: 'Client Inquiries & Consultation Intake' }
    ]
  }
];

function generateSVG(p, s) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0c10" />
      <stop offset="50%" stop-color="#0e1117" />
      <stop offset="100%" stop-color="#07080b" />
    </linearGradient>
    <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.primary}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${p.accent}" stop-opacity="0.3"/>
    </linearGradient>
    <pattern id="grid-pat" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#bg-grad)"/>
  <rect width="1200" height="750" fill="url(#grid-pat)"/>
  <circle cx="950" cy="180" r="300" fill="${p.primary}" opacity="0.06" filter="blur(60px)"/>
  <circle cx="200" cy="550" r="250" fill="${p.accent}" opacity="0.04" filter="blur(50px)"/>

  <!-- Window Frame -->
  <g transform="translate(60, 50)">
    <rect width="1080" height="650" rx="16" fill="#0d1017" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
    
    <!-- Title bar -->
    <path d="M 0 16 C 0 7.16 7.16 0 16 0 L 1064 0 C 1072.84 0 1080 7.16 1080 16 L 1080 52 L 0 52 Z" fill="#131722"/>
    <line x1="0" y1="52" x2="1080" y2="52" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    
    <!-- Window controls -->
    <circle cx="30" cy="26" r="6" fill="#ef4444" opacity="0.8"/>
    <circle cx="50" cy="26" r="6" fill="#f59e0b" opacity="0.8"/>
    <circle cx="70" cy="26" r="6" fill="#10b981" opacity="0.8"/>
    
    <!-- Tab pill -->
    <rect x="120" y="12" width="340" height="28" rx="6" fill="#0a0c10" stroke="rgba(255,255,255,0.05)"/>
    <text x="140" y="31" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500">bti://${p.folder}/${s.name.replace('.svg', '')}</text>

    <!-- Header area inside app -->
    <g transform="translate(40, 80)">
      <rect x="0" y="0" width="1000" height="60" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)"/>
      <rect x="20" y="16" width="100" height="28" rx="6" fill="rgba(0,242,254,0.1)"/>
      <text x="32" y="35" fill="${p.primary}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">${p.tag}</text>
      <text x="140" y="36" fill="#f8fafc" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="600">${s.title}</text>
      <circle cx="960" cy="30" r="5" fill="#10b981"/>
      <text x="900" y="35" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="500">SYSTEM LIVE</text>
    </g>

    <!-- Body content mock -->
    <g transform="translate(40, 160)">
      <!-- Left sidebar -->
      <rect x="0" y="0" width="220" height="420" rx="10" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.04)"/>
      <rect x="20" y="24" width="180" height="14" rx="4" fill="rgba(255,255,255,0.1)"/>
      <rect x="20" y="60" width="140" height="10" rx="3" fill="rgba(255,255,255,0.05)"/>
      <rect x="20" y="85" width="160" height="10" rx="3" fill="rgba(255,255,255,0.05)"/>
      <rect x="20" y="110" width="130" height="10" rx="3" fill="rgba(255,255,255,0.05)"/>
      <rect x="20" y="135" width="150" height="10" rx="3" fill="rgba(255,255,255,0.05)"/>
      
      <line x1="20" y1="170" x2="200" y2="170" stroke="rgba(255,255,255,0.06)"/>
      
      <rect x="20" y="195" width="120" height="10" rx="3" fill="rgba(255,255,255,0.04)"/>
      <rect x="20" y="220" width="140" height="10" rx="3" fill="rgba(255,255,255,0.04)"/>
      <rect x="20" y="245" width="110" height="10" rx="3" fill="rgba(255,255,255,0.04)"/>
      <rect x="20" y="270" width="150" height="10" rx="3" fill="rgba(255,255,255,0.04)"/>

      <!-- Right stats & main panels -->
      <g transform="translate(240, 0)">
        <!-- 3 Metric Cards -->
        <rect x="0" y="0" width="235" height="110" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)"/>
        <text x="20" y="32" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">OPERATIONAL STATUS</text>
        <text x="20" y="68" fill="#f8fafc" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="700">OPTIMAL</text>
        <rect x="20" y="85" width="195" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="20" y="85" width="160" height="4" rx="2" fill="${p.primary}"/>

        <rect x="260" y="0" width="235" height="110" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)"/>
        <text x="280" y="32" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">ACTIVE RECORDS</text>
        <text x="280" y="68" fill="#f8fafc" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="700">SYNCED</text>
        <rect x="280" y="85" width="195" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="280" y="85" width="180" height="4" rx="2" fill="${p.accent}"/>

        <rect x="520" y="0" width="240" height="110" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)"/>
        <text x="540" y="32" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">VERIFIED WORKFLOW</text>
        <text x="540" y="68" fill="#f8fafc" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="700">AUDITED</text>
        <rect x="540" y="85" width="200" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
        <rect x="540" y="85" width="190" height="4" rx="2" fill="#10b981"/>

        <!-- Main Visual Panel -->
        <g transform="translate(0, 130)">
          <rect x="0" y="0" width="760" height="290" rx="10" fill="rgba(10,12,16,0.9)" stroke="rgba(255,255,255,0.06)"/>
          
          <!-- Waveform / chart / data rows -->
          <path d="M 30 180 Q 150 90 270 140 T 510 110 T 730 60" fill="none" stroke="${p.primary}" stroke-width="3" opacity="0.8"/>
          <path d="M 30 180 Q 150 90 270 140 T 510 110 T 730 60 L 730 250 L 30 250 Z" fill="url(#glow-grad)" opacity="0.1"/>

          <!-- Grid ticks -->
          <line x1="30" y1="210" x2="730" y2="210" stroke="rgba(255,255,255,0.04)"/>
          <line x1="30" y1="150" x2="730" y2="150" stroke="rgba(255,255,255,0.04)"/>
          <line x1="30" y1="90" x2="730" y2="90" stroke="rgba(255,255,255,0.04)"/>

          <!-- Discrete data nodes -->
          <circle cx="270" cy="140" r="5" fill="#f8fafc" stroke="${p.primary}" stroke-width="2"/>
          <circle cx="510" cy="110" r="5" fill="#f8fafc" stroke="${p.primary}" stroke-width="2"/>
          <circle cx="730" cy="60" r="5" fill="#f8fafc" stroke="${p.primary}" stroke-width="2"/>

          <!-- Label bottom -->
          <text x="30" y="270" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11">ENGINEERING DATA PIPELINE // VALIDATED RELATIONAL MODEL</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;
}

projects.forEach(p => {
  const dir = path.join(__dirname, '..', 'public', 'images', 'projects', p.folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  p.screens.forEach(s => {
    const filePath = path.join(dir, s.name);
    fs.writeFileSync(filePath, generateSVG(p, s), 'utf8');
  });
});

console.log('Successfully generated all project mockups!');
