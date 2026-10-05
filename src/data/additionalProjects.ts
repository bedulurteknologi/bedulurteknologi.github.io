import type { Project } from '../types';

const archive: Project[] = [
  {
    "id": "warehouse-operations",
    "slug": "warehouse-operations",
    "name": "Warehouse Operations",
    "category": "Warehouse & Logistics",
    "filterCategory": "business",
    "headline": "From buyer contracts to pallet allocation and shipment readiness.",
    "description": "A warehouse application connecting buyer requirements, finished-product checks, stock locations and shipment reports.",
    "challenge": "Warehouse teams need to track pallet types and quantities across storage, movement and dispatch while keeping buyer requirements visible.",
    "solution": "The system brings contract-led pallet preparation, QC checks, stock mapping and shipment reporting into a shared workflow.",
    "features": [
      "Buyer contract and pallet allocation",
      "Finished-product QC and checker records",
      "Warehouse storage and stock mapping",
      "Stock movement and reject tracking",
      "Shipment reports"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/warehouse-operations/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 10,
    "imageSummary": "A warehouse map and shipment checklist illustrate how pallet allocation, storage locations and dispatch preparation connect.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "factory-clinic",
    "slug": "factory-clinic",
    "name": "Factory Clinic Operations",
    "category": "Healthcare Operations",
    "filterCategory": "web",
    "headline": "Patient records and medicine inventory in one factory clinic workflow.",
    "description": "An internal clinic application for patient registration, consultation records, medicine stock and medical reporting.",
    "challenge": "Clinic staff need a consistent way to maintain patient histories and medicine records alongside daily consultations.",
    "solution": "Patient cards, medical records and inventory reports support the clinic team throughout the care administration process.",
    "features": [
      "Patient card registration",
      "Consultation and medical records",
      "Medicine stock management",
      "Clinic reporting"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/factory-clinic/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 11,
    "imageSummary": "A clinic dashboard pairs a consultation queue with medicine inventory, using fictional sample information.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "general-affairs",
    "slug": "general-affairs",
    "name": "General Affairs Management",
    "category": "Fleet & Business Operations",
    "filterCategory": "business",
    "headline": "Vehicle inspections, driver records and everyday office supplies.",
    "description": "An operations application covering vehicle inspections, driver incidents, fuel history and stationery inventory.",
    "challenge": "General affairs teams coordinate fleet condition, driver activity and office supplies across several recurring tasks.",
    "solution": "The application organizes inspections, incident records and stock information for routine monitoring and reporting.",
    "features": [
      "Vehicle inspection records",
      "Driver incidents and breakage records",
      "Driver performance records",
      "Fuel history",
      "Stationery stock management"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/general-affairs/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 12,
    "imageSummary": "Vehicle cards, an inspection checklist and a fuel log present the fleet monitoring side of the application.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "factory-maintenance",
    "slug": "factory-maintenance",
    "name": "Factory Maintenance & ChangeRoll",
    "category": "Industrial Maintenance",
    "filterCategory": "enterprise",
    "headline": "Repair planning, spare parts and machine roll replacement schedules.",
    "description": "A maintenance system for repair schedules, spare-part changes and worker assignments, presented alongside the related ChangeRoll dryer scheduling application.",
    "challenge": "Factory teams need to coordinate machine repairs, assigned workers and recurring roll replacements without losing maintenance history.",
    "solution": "Maintenance records connect machines, responsible staff and repair work; ChangeRoll tracks dryer running hours to support replacement planning.",
    "features": [
      "Machine repair scheduling",
      "Spare-part change records",
      "Worker assignment and repair history",
      "Machine and person-in-charge records",
      "Related ChangeRoll replacement scheduling"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/factory-maintenance/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 13,
    "imageSummary": "A maintenance calendar and work-order panels illustrate repair coordination and machine replacement planning.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "production-control",
    "slug": "production-control",
    "name": "Production Lot & Packaging Control",
    "category": "Production Quality",
    "filterCategory": "enterprise",
    "headline": "Traceable lot changes and buyer-specific packaging checks.",
    "description": "Two related production applications: Changelot Monitoring records lot transitions, while Packaging Check verifies pallet and packing details before shipment.",
    "challenge": "Production teams need to document lot changes and confirm that labels, pallet composition and packing requirements match each buyer.",
    "solution": "Location-based lot histories and photo evidence support process checks; packaging records capture pallet labels, bale-bag types and packing lines.",
    "features": [
      "Lot-change history by location",
      "Event remarks and photo evidence",
      "Buyer-specific pallet verification",
      "Label and bale-bag type checks",
      "Packing-line documentation"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/production-control/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 14,
    "imageSummary": "A lot timeline and packaging checklist visualize the connection between production traceability and final packing verification.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "operations-scheduler",
    "slug": "operations-scheduler",
    "name": "Factory Operations Scheduler",
    "category": "Workflow Automation",
    "filterCategory": "automation",
    "headline": "Deadlines, reminders and evidence-based approvals.",
    "description": "A factory activity scheduler for license renewals, audits and operational checks, with email reminders and evidence review.",
    "challenge": "Recurring activities involve different owners and deadlines, with completion evidence that managers need to review.",
    "solution": "A shared schedule assigns responsibility, sends due-date reminders and captures uploaded evidence for manager checks and approval.",
    "features": [
      "Factory activity calendar",
      "License renewal and audit deadlines",
      "Automatic due-date emails",
      "Person-in-charge assignment",
      "Evidence uploads and manager approval"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/operations-scheduler/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 15,
    "imageSummary": "A calendar, upcoming deadlines and approval queue illustrate the path from scheduled activity to documented completion.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "knowledge-center",
    "slug": "knowledge-center",
    "name": "e-Learning Knowledge Center",
    "category": "Internal Learning",
    "filterCategory": "web",
    "headline": "A shared library for practical tutorials and process knowledge.",
    "description": "An internal video and documentation library where staff can share tutorials and operational guidance.",
    "challenge": "Useful process knowledge needs a consistent place where staff can find and share it beyond individual conversations.",
    "solution": "A categorized learning library organizes internal videos and documentation for discovery and knowledge sharing.",
    "features": [
      "Internal tutorial video library",
      "Process documentation",
      "Resource categories",
      "Staff knowledge sharing"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/knowledge-center/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 16,
    "imageSummary": "Tutorial thumbnails and resource categories show a concept view of the internal learning library.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  },
  {
    "id": "automotive-sales",
    "slug": "automotive-sales",
    "name": "Automotive Sales Management",
    "category": "Sales & Billing",
    "filterCategory": "business",
    "headline": "Motorcycle inventory, customer records and invoice follow-up.",
    "description": "A motorcycle sales application covering product records, customers, sales transactions, billing and reports.",
    "challenge": "Sales teams need to connect customer and product information with invoices and payment due dates.",
    "solution": "The system organizes sales records, billing and invoice reminders alongside a reporting workflow.",
    "features": [
      "Motorcycle product catalog",
      "Customer and sales records",
      "Billing and invoices",
      "Payment due-date reminders",
      "Sales reporting"
    ],
    "technologies": [
      "Web Application",
      "Operational Reporting"
    ],
    "coverImage": "images/projects/automotive-sales/presentation-generated.png",
    "gallery": [],
    "year": "2023",
    "featured": false,
    "order": 17,
    "imageSummary": "A motorcycle inventory view, invoice list and sales overview illustrate the application’s core commercial workflow.",
    "provenance": "Selected professional work by BTI co-founder Dwi Hardianto, documented in his 2024 resume; developed before BTI.",
    "visualNote": "AI-generated concept presentation of documented project functions. This is not an original application screenshot."
  }
];

export const additionalProjects = archive.map(project => ({
  ...project,
  coverImage: import.meta.env.BASE_URL + project.coverImage,
  gallery: [import.meta.env.BASE_URL + project.coverImage],
}));

