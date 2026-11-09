export type Project = {
  id: string;
  title: string;
  type: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots: string[];
  features: string[];
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  url?: string;
  description: string;
  tags: string[];
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2024 — PRESENT",
    role: "WordPress Designer & Frontend Developer",
    company: "Independent & Agency Projects",
    description:
      "Designed and deployed 20+ WordPress and WooCommerce platforms. Implemented Core Web Vitals speed optimization achieving sub-second LCP, automated customer funnels in GoHighLevel, and engineered responsive React modules.",
    tags: ["WordPress", "Elementor", "WooCommerce", "React.js", "GHL", "Speed Optimization"],
  },
  {
    period: "2025 — PRESENT",
    role: "Full-Stack & Mobile Developer",
    company: "Commercial Software Solutions",
    description:
      "Architected offline-first desktop and Android applications with local SQLite databases, cloud backup sync to Supabase, and sub-10s ESC/POS thermal receipt generation over Bluetooth.",
    tags: ["Flutter", "Electron.js", "Supabase", "SQLite", "ESC/POS Thermal"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bashir-complex-desktop",
    title: "Alhaj Bashir Uddin Complex Management Suite",
    type: "Desktop Application (Electron / React)",
    shortDesc:
      "Offline-first desktop bookkeeping and tenant ledger software with automated silent SQLite backups and scheduled cloud exports.",
    fullDesc:
      "Engineered specifically for commercial complex directors to replace manual ledgers. Runs entirely offline with a local SQLite database that seamlessly syncs to Supabase upon detecting an internet connection. Features automated tenant billing calculations, payment auditing, and Google Drive Excel reporting.",
    tags: ["Electron.js", "React.js", "TypeScript", "Tailwind CSS", "Supabase", "SQLite"],
    githubUrl: "https://github.com",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Offline-first architecture with conflict-free background Supabase synchronization",
      "Multi-tenant bookkeeping with automated rental history and utility calculation",
      "One-click automated Excel export pipeline with silent local backups",
      "High-contrast desktop dashboard engineered for daily accounting operations",
    ],
  },
  {
    id: "bashir-parking-app",
    title: "Bashir Complex Parking App",
    type: "Android Application (Flutter)",
    shortDesc:
      "Offline-first mobile parking token solution issuing physical thermal receipts under 10 seconds via Bluetooth ESC/POS printers.",
    fullDesc:
      "Designed for commercial parking facilities to eliminate bottleneck paper ticketing. The app manages vehicle check-ins and check-outs with zero latency by executing writes straight to local SQLite storage, printing tickets via Bluetooth thermal printers, and batch-syncing data to Supabase.",
    tags: ["Flutter", "SQLite", "Supabase", "Bluetooth ESC/POS", "Android SDK"],
    screenshots: [
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Sub-10 second thermal receipt generation over direct Bluetooth serial streams",
      "Strict zero-latency offline operation with automated background sync",
      "Daily vehicle intake analytics and shift-based cash collection summaries",
    ],
  },
  {
    id: "ghl-woo-platform",
    title: "WooCommerce & GHL Sales Automation",
    type: "E-Commerce & Marketing System",
    shortDesc:
      "High-converting WooCommerce store integrated with GoHighLevel CRM funnels, automated recovery sequences, and <1s load times.",
    fullDesc:
      "Comprehensive digital commerce platform built with Elementor Pro and WooCommerce. Employs webhook integrations routing orders directly to GoHighLevel pipelines for automated customer re-engagement, achieving 95+ Core Web Vitals speed scores.",
    tags: ["WordPress", "Elementor", "WooCommerce", "GoHighLevel (GHL)", "Speed Optimization"],
    liveUrl: "https://example.com",
    screenshots: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Custom responsive Elementor design optimized for fast checkout conversion",
      "Automated two-way GoHighLevel CRM pipeline and abandoned cart recovery",
      "Critical CSS extraction and WebP asset pipelines producing sub-second page loads",
    ],
  },
];