export type Project = {
  id: string;
  title: string;
  type: string;
  category: Category;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubPrivate?: boolean;
  internal?: boolean;
  screenshots: string[];
  features: string[];
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
export const CATEGORIES = [
  "WordPress",
  "GHL Website",
  "Funnel",
  "Custom Coded",
  "Speed Optimization",
  "Desktop Application",
  "Mobile Application",
] as const;

export type Category = (typeof CATEGORIES)[number];
// Link options per project:
//  - Live website:      liveUrl: "https://..."
//  - Public repo:       githubUrl: "https://github.com/..."
//  - Private repo:      githubUrl: "https://github.com/..." + githubPrivate: true
//  - Internal / no link: internal: true (or leave all link fields out)
// The first three entries appear on the homepage. Detail pages are /projects/<id>.
export const PROJECTS: Project[] = [
  {
    id: "bashir-complex-management-software",
    title: "Bashir Complex Management Software",
    type: "Desktop Application (Electron / React)",
    category: "Desktop Application",
    shortDesc:
      "Income and expense tracker for a commercial complex with a desktop app, a read-only director PWA, and monthly Google Drive Excel backups.",
    fullDesc:
      "Built to replace manual ledgers for the Alhaj Bashir Uddin Complex. The Electron desktop app tracks about 21 income and expense modules, including rent, parking, electricity, land rent, staff salaries, and loans, with monthly and yearly summaries. Supabase is the primary database, and a silent local SQLite backup runs alongside it. Directors get a read-only mobile PWA with English and Bangla support and print-to-PDF. A scheduled job exports module reports to Google Drive as Excel files at the end of each month.",
    tags: [
      "Electron.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "SQLite",
    ],
    internal: true, // change to githubUrl / liveUrl if you have one to share
    screenshots: [
      "/projects/BashirComplex/BashirComplex.png",
      "/projects/BashirComplex/BashirComplex02.png",
      "/projects/BashirComplex/BashirComplex03.png",
      "/projects/BashirComplex/BashirComplex04.png",
      "/projects/BashirComplex/BashirComplex05.png",
      "/projects/BashirComplex/BashirComplex06.png",
      "/projects/BashirComplex/BashirComplex08.png",
      "/projects/BashirComplex/BashirComplex09.png",
    ],
    features: [
      "Offline-first architecture with conflict-free background Supabase synchronization",
      "Multi-tenant bookkeeping with automated rental history and utility calculation",
      "One-click automated Excel export pipeline with silent local backups",
      "High-contrast desktop dashboard engineered for daily accounting operations",
    ],
  },
  {
    id: "household-service-marketplace",
    title: "Household Service Marketplace",
    type: "Web Application (Next.js / React)",
    category: "Custom Coded",
    shortDesc:
      " A react.js web app for booking household services, with a dashboard for service providers and a Supabase backend.",
    fullDesc:
      " A full-stack web application built with Next.js and React.js, designed to connect users with local household service providers. The platform features a user-friendly interface for booking services such as cleaning, plumbing, and electrical work. Service providers can manage their bookings and availability through a dedicated dashboard. The application leverages Supabase for authentication, database management, and real-time updates.",
    tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/EmadAA/Household-Services-Superbase-",
    githubPrivate: true, // private repo: shows a badge, not a link
    screenshots: [
      "/projects/Household Services/HouseholdService HomePage.png",
      "/projects/Household Services/HouseholdService AboutPage.png",
      "/projects/Household Services/HouseholdService ProfilePage.png",
      "/projects/Household Services/HouseholdService ContactPage.png",
      "/projects/Household Services/HouseholdService ServicePage.png",
    ],
    features: [
      "User-friendly booking interface for household services",
      "Dedicated dashboard for service providers to manage bookings and availability",
      "Real-time updates and notifications for both users and service providers",
      "Secure authentication and data management using Supabase",
    ],
  },
  {
    id: "btbs-website",
    title: "BTBS Website",
    type: "GoHighLevel Website",
    category: "GHL Website",
    shortDesc:
      "Business website built on GoHighLevel with a lead capture form connected to the CRM pipeline.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Visitor enquiries are captured through GHL forms and routed into the CRM for follow-up, so no leads are lost between the site and the sales team.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://btbs.com.au/",
    screenshots: [
      "/projects/GHL Websites/BTBS Website/BTBS_HomePage.png",
      "/projects/GHL Websites/BTBS Website/BTBS_AboutPage.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Lead capture forms connected to the GHL contact pipeline",
      "Automated follow-up on new enquiries",
    ],
  },
  {
    id: "ch-building",
    title: "CH Building",
    type: "GoHighLevel Website",
    category: "GHL Website",
    shortDesc:
      "Building services website built on GoHighLevel with enquiry forms feeding the CRM.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Enquiries submitted on the site are added straight to the CRM, where they can be tracked and followed up.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://chbuilding.com.au/",
    screenshots: [
      "/projects/GHL Websites/CH Building/Home Page.png",
      "/projects/GHL Websites/CH Building/About Page.png",
      "/projects/GHL Websites/CH Building/Project Page.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Enquiry forms connected to the GHL contact pipeline",
      "Mobile-friendly pages for on-site and phone visitors",
    ],
  },
  {
    id: "funnel",
    title: "Funnel",
    type: "GoHighLevel Website",
    category: "Funnel",
    shortDesc:
      "Multi-step lead funnel built on GoHighLevel to capture and qualify enquiries.",
    fullDesc:
      "Multi-step funnel built with the GoHighLevel page builder and forms. Each step captures information and moves the lead through the pipeline automatically.",
    tags: ["GoHighLevel (GHL)", "Funnels", "GHL Forms", "Lead Automation"],
    liveUrl: "REPLACE-WITH-LIVE-URL",
    screenshots: [
      "/projects/GHL Websites/Funnel/Everflow Website.png",
      "/projects/GHL Websites/Funnel/Plumb Lifesaver Website.png",
    ],
    features: [
      "Multi-step funnel with a clear path from landing page to booking",
      "Form data stored against each contact in GoHighLevel",
      "Pipeline stage updates as leads move through the funnel",
    ],
  },
  {
    id: "highlevel-launchpad-australia",
    title: "HighLevel Launchpad Australia",
    type: "GoHighLevel Website",
    category: "GHL Website",
    shortDesc:
      "Australian landing site built on GoHighLevel for launchpad enquiries and sign-ups.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms, designed to capture sign-ups and enquiries and send them into the CRM.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "REPLACE-WITH-LIVE-URL",
    screenshots: [
      "/projects/GHL Websites/HighLevel Launchopad Australia Website/Home.png",
      "/projects/GHL Websites/HighLevel Launchopad Australia Website/About.png",
      "/projects/GHL Websites/HighLevel Launchopad Australia Website/Contact.png",
      "/projects/GHL Websites/HighLevel Launchopad Australia Website/Service.png",
    ],
    features: [
      "Landing pages built with the GoHighLevel page builder",
      "Sign-up forms connected to the GHL contact pipeline",
      "Automated confirmation after each submission",
    ],
  },
  {
    id: "oz-electrical",
    title: "OZ Electrical",
    type: "GoHighLevel Website",
    category: "GHL Website",
    shortDesc:
      "Electrical services website built on GoHighLevel with quote request forms feeding the CRM.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Quote requests are captured on the site and added to the CRM for follow-up.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://ozhomeenergy.com.au/",
    screenshots: [
      "/projects/GHL Websites/OZ Electrical/OZ Electrical About Us Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Battery Storage Installation Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Commercial Electrical Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical EV Charging Installation Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Location Page template.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Residential Electrical Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Solar and Battery Upgrades Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Solar Installation Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Solar Panel Bird Proofing & Mesh Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Solar Panel Cleaning Page.png",
      "/projects/GHL Websites/OZ Electrical/OZ Electrical Switchboard Upgrades Page.png",
      "/projects/GHL Websites/OZ Electrical/Electrical Hub Battery Storage Page.png",
      "/projects/GHL Websites/OZ Electrical/Electrical Hub Electrical Page.png",
      "/projects/GHL Websites/OZ Electrical/Electrical Hub EV Charging Page.png",
      "/projects/GHL Websites/OZ Electrical/Electrical Hub Solar Page.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Quote request forms connected to the GHL contact pipeline",
      "Clear call-to-action on every page",
    ],
  },
  {
    id: "renew-painting-website",
    title: "Renew Painting Website",
    type: "GoHighLevel Website",
    category: "GHL Website",
    shortDesc:
      "Painting services website built on GoHighLevel with quote forms and automated follow-up.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Quote requests are captured through GHL forms and routed into the CRM for follow-up.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://renewpainting.com.au/",
    screenshots: [
      "/projects/GHL Websites/Renew Painting Website/Home Page.png",
      "/projects/GHL Websites/Renew Painting Website/Melbourne Page.png",
      "/projects/GHL Websites/Renew Painting Website/Contact Page.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Quote forms connected to the GHL contact pipeline",
      "Automated follow-up on new quote requests",
    ],
  },
  {
    id: "simplify-work",
    title: "Simplify Work",
    type: "GoHighLevel Website",
    category:"GHL Website",
    shortDesc:
      "Business website built on GoHighLevel with enquiry forms and CRM pipeline integration.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Enquiries are captured on the site and routed into the CRM pipeline.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://simplifywork.com.au/",
    screenshots: [
      "/projects/GHL Websites/Simplify Work/Home Page.png",
      "/projects/GHL Websites/Simplify Work/About Us.png",
      "/projects/GHL Websites/Simplify Work/Operational Opportunity Scan Page.png",
      "/projects/GHL Websites/Simplify Work/Contact Page.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Enquiry forms connected to the GHL contact pipeline",
      "Pipeline tracking for every enquiry",
    ],
  },
  {
    id: "telkies",
    title: "Telkies",
    type: "GoHighLevel Website",
    category:"GHL Website",
    shortDesc:
      "Service website built on GoHighLevel with lead capture forms and CRM integration.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Leads submitted on the site are stored in the CRM and can be followed up from there.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://telkies.com.au/",
    screenshots: [
      "/projects/GHL Websites/Telkies/Location Page.png",
      "/projects/GHL Websites/Telkies/Sub-Services Page.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Lead capture forms connected to the GHL contact pipeline",
      "Mobile-friendly pages for phone visitors",
    ],
  },
  {
    id: "victoria-windscreen-website",
    title: "Victoria Windscreen Website",
    type: "GoHighLevel Website",
    category:"GHL Website",
    shortDesc:
      "Windscreen services website built on GoHighLevel with booking and quote forms feeding the CRM.",
    fullDesc:
      "Website built with the GoHighLevel page builder and forms. Booking and quote requests are captured on the site and added to the CRM for follow-up.",
    tags: [
      "GoHighLevel (GHL)",
      "Landing Pages",
      "GHL Forms",
      "CRM Integration",
    ],
    liveUrl: "https://victoriawindscreens.com.au/",
    screenshots: [
      "/projects/GHL Websites/Victoria/home.png",
      "/projects/GHL Websites/Victoria/about.png",
      "/projects/GHL Websites/Victoria/location.png",
      "/projects/GHL Websites/Victoria/services.png",
      "/projects/GHL Websites/Victoria/sub-services.png",
      "/projects/GHL Websites/Victoria/contact.png",
    ],
    features: [
      "Responsive layout built with the GoHighLevel page builder",
      "Booking and quote forms connected to the GHL contact pipeline",
      "Clear call-to-action on every page",
    ],
  },
  {
    id: "blockdrain-website",
    title: "Blockdrain Website",
    type: "WordPress Website",
    category:"WordPress",
    shortDesc:
      "Business website built on WordPress with a responsive layout and clear service pages.",
    fullDesc:
      "Custom WordPress website designed and built to present the Blockdrain services clearly, with responsive layouts that work across desktop and mobile devices.",
    tags: ["WordPress", "Elementor", "Responsive Design"],
    liveUrl: "https://blockeddrainnewcastle.com.au/",
    screenshots: [
      "/projects/WordPress Websites/Blockdrain Website/Home Page.png",
      "/projects/WordPress Websites/Blockdrain Website/About Page.png",
      "/projects/WordPress Websites/Blockdrain Website/Sub-Services Page.png",
      "/projects/WordPress Websites/Blockdrain Website/Services Page.png",
      "/projects/WordPress Websites/Blockdrain Website/Contact Us Page.png",
      "/projects/WordPress Websites/Blockdrain Website/Location Page.png",
    ],
    features: [
      "Responsive layout built with Elementor Page Builder",
      "Clear service pages with consistent branding",
      "Optimized images and page speed for faster loading",
    ],
  },
  {
    id: "chiropractor-website",
    title: "Chiropractor Website",
    type: "WordPress Website",
    category:"WordPress",
    shortDesc:
      "Healthcare practice website built on WordPress with appointment-focused pages and clear calls to action.",
    fullDesc:
      "Custom WordPress website for a chiropractic practice, designed to explain services clearly and make it easy for visitors to get in touch or book an appointment.",
    tags: ["WordPress", "Elementor", "Responsive Design"],
    liveUrl: "https://ahmadchiro.com",
    screenshots: [
      "/projects/WordPress Websites/Chiropractor Website/About.png",
      "/projects/WordPress Websites/Chiropractor Website/Service.png",
      "/projects/WordPress Websites/Chiropractor Website/Contact.png",
    ],
    features: [
      "Responsive layout built with Elementor Page Builder",
      "Service and contact pages with clear calls to action",
      "Mobile-friendly design for visitors booking on their phones",
    ],
  },
  {
    id: "rapidedx-e-learning-website",
    title: "E-Learning Website",
    type: "WordPress Website",
    category:"WordPress",
    shortDesc:
      "E-learning website built on WordPress for presenting courses and learning content.",
    fullDesc:
      "Custom WordPress e-learning website designed to present courses clearly and guide visitors through enrolment and learning content.",
    tags: ["WordPress", "Elementor", "E-Learning"],
    liveUrl: "https://rapidedx.com",
    screenshots: [
      "/projects/WordPress Websites/E-Learning/rapidedx-front.png",
      "/projects/WordPress Websites/E-Learning/rapidedx-allcourse.png",
    ],
    features: [
      "Course listing and detail pages built with Elementor",
      "Clear enrolment path for visitors",
      "Responsive layout for desktop and mobile learners",
    ],
  },

  {
    id: "ukemploymenttraining-e-learning-website",
    title: "E-Learning Website",
    type: "WordPress Website",
    category:"WordPress",
    shortDesc:
      "E-learning website built on WordPress for presenting courses and learning content.",
    fullDesc:
      "Custom WordPress e-learning website designed to present courses clearly and guide visitors through enrolment and learning content.",
    tags: ["WordPress", "Elementor", "E-Learning"],
    liveUrl: "https://ukemploymenttraining.co.uk",
    screenshots: [
      "/projects/WordPress Websites/E-Learning/ukemployment-front.png",
      "/projects/WordPress Websites/E-Learning/ukemployment-allcourse.png",
    ],
    features: [
      "Course listing and detail pages built with Elementor",
      "Clear enrolment path for visitors",
      "Responsive layout for desktop and mobile learners",
    ],
  },
  {
    id: "kevaleri-website",
    title: "Kevaleri Website",
    type: "WordPress Website",
    category:"WordPress",
    shortDesc:
      "Business website built on WordPress with a clean layout and clear service information.",
    fullDesc:
      "Custom WordPress website designed to present the business and its services clearly, with a responsive layout that works across devices.",
    tags: ["WordPress", "Elementor", "Responsive Design"],
    liveUrl: "#",
    screenshots: [
      "/projects/WordPress Websites/Kevaleri/home.png",
      "/projects/WordPress Websites/Kevaleri/faq.png",
      "/projects/WordPress Websites/Kevaleri/service.png",
      "/projects/WordPress Websites/Kevaleri/contact.png",
    ],
    features: [
      "Responsive layout built with Elementor Page Builder",
      "Clear service and contact pages",
      "Optimized images and page speed for faster loading",
    ],
  },
  {
    id: "target-solar-website",
    title: "Target Solar Website",
    type: "WordPress Website",
    category:"WordPress",
    shortDesc:
      "Solar services website built on WordPress with service pages and enquiry forms.",
    fullDesc:
      "Custom WordPress website for a solar services business, presenting products and services clearly and making it easy for visitors to request a quote.",
    tags: ["WordPress", "Elementor", "Lead Generation"],
    liveUrl: "https://targetsolar.com.au/",
    screenshots: [
      "/projects/WordPress Websites/Target Solar Website/About Us Page.png",
      "/projects/WordPress Websites/Target Solar Website/Contact Us Page.png",
      "/projects/WordPress Websites/Target Solar Website/Home Page.png",
      "/projects/WordPress Websites/Target Solar Website/Sub Services Page.png",
      "/projects/WordPress Websites/Target Solar Website/Location Page.png",
    ],
    features: [
      "Service pages built with Elementor Page Builder",
      "Enquiry and quote forms for lead generation",
      "Responsive layout for desktop and mobile visitors",
    ],
  },
  {
    id: "speed-optimization",
    title: "Speed Optimization Case Studies",
    type: "Performance Optimization",
    category:"Speed Optimization",
    shortDesc:
      "Website speed improvements for client sites, with before and after results from Core Web Vitals and performance testing.",
    fullDesc:
      "A collection of performance work on WordPress and GoHighLevel websites. Work includes asset minification, caching, image optimization, and removing unused scripts to improve Core Web Vitals and page load times.",
    tags: [
      "Core Web Vitals",
      "WP Rocket",
      "Image WebP",
      "CDN Caching",
      "PageSpeed",
    ],
    internal: true,
    screenshots: [
      "/projects/SpeedOptimization/speed.png",
      "/projects/SpeedOptimization/speed2.png",
    ],
    features: [
      "Core Web Vitals improvements measured before and after optimization",
      "Caching and asset minification configured for faster page loads",
      "Image conversion to WebP and lazy loading for below-the-fold content",
    ],
  },
];
