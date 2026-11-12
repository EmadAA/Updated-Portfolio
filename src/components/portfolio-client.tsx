/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  ArrowUpRight,
  Briefcase,
  FileText,
  GraduationCap,
  Headphones,
  Moon,
  Palette,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  Sun,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, type ElementType, type ReactNode } from "react";
import ContactForm from "@/components/contact-form";
import { NAV_ITEMS, PROJECTS } from "@/data/portfolio";

/* ---------- Static content ---------- */

const EXPERIENCES = [
  {
    period: "11/2026 — Present",
    role: "Web Designer & Developer",
    company: "Appsus.io",
    location: "Sylhet, Bangladesh",
    status: "Current",
    highlight: true,
    bullets: [
      "Elevated from intern to core developer, architecting and deploying responsive web portals and custom UI systems.",
      "Implement client frontends using WordPress, Webflow, GoHighLevel, and custom JavaScript to maximize conversion rates.",
    ],
  },
  {
    period: "04/2026 — 10/2026",
    role: "Web Designer & Developer Intern",
    company: "Appsus.io",
    location: "Sylhet, Bangladesh",
    status: "Completed",
    bullets: [
      "Designed and maintained responsive landing pages and cross-platform UI components across client solution portfolios.",
    ],
  },
  {
    period: "01/2024 — 06/2024",
    role: "Freelance Software & Web Developer",
    company: "Wow Solution & Client Projects",
    location: "Freelance",
    status: "Completed",
    bullets: [
      "Developed production desktop and mobile systems with local and cloud database synchronization and hardware printing pipelines.",
      "Delivered customized WordPress and WooCommerce platforms with speed optimization, malware removal, and hardening protocols.",
    ],
  },
];

const EDUCATION = [
  {
    period: "2021 — 2025",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Leading University, Sylhet",
    status: "Completed",
    highlight: true,
    description:
      "Study focused on database schema design, algorithms, object-oriented software engineering, and network security protocols.",
  },
  {
    period: "2018 — 2019",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sylhet MC College",
    status: "Completed",
    description:
      "Passed the HSC examination in 2020 from Sylhet MC College, Sylhet.",
  },
  {
    period: "2016 — 2017",
    degree: "Secondary School Certificate (SSC)",
    institution: "Sylhet Govt. Pilot High School, Sylhet",
    status: "Completed",
    description:
      "Passed the SSC examination in 2018 from Sylhet Govt. Pilot High School, Sylhet.",
  },
];

const EXPERTISE = [
  {
    icon: <Palette className="h-5 w-5 text-[#5f8c6d]" />,
    title: "Web Design",
    desc: "Custom WordPress websites built with Elementor Page Builder matching exact brand and UI requirements.",
    skills: ["WordPress", "Elementor Pro", "Responsive UI", "Figma to Web"],
  },
  {
    icon: <ShoppingCart className="h-5 w-5 text-[#5f8c6d]" />,
    title: "E-Commerce Website",
    desc: "Scalable stores powered by WooCommerce with optimized checkouts and payment gateway integrations.",
    skills: ["WooCommerce", "Cart Flows", "Payment Gateways", "Inventory Sync"],
  },
  {
    icon: <Zap className="h-5 w-5 text-[#5f8c6d]" />,
    title: "Speed Optimization",
    desc: "Full Core Web Vitals optimization, asset minification, and caching for sub-second page loads.",
    skills: ["Core Web Vitals", "WP Rocket", "Image WebP", "CDN Caching"],
  },
  {
    icon: <Workflow className="h-5 w-5 text-[#5f8c6d]" />,
    title: "GHL & Automations",
    desc: "Automated sales pipelines, multi-step lead funnels, and webhook integrations in GoHighLevel.",
    skills: ["GoHighLevel", "Lead Funnels", "Webhooks", "Email Sequences"],
  },
  {
    icon: <ShieldAlert className="h-5 w-5 text-[#5f8c6d]" />,
    title: "Malware Removal",
    desc: "Deep scans, script disinfection, backdoor elimination, and complete website security hardening.",
    skills: ["Malware Cleanup", "Security Auditing", "Database Sanitization"],
  },
  {
    icon: <Smartphone className="h-5 w-5 text-[#5f8c6d]" />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications for Android and iOS using Flutter and React Native.",
    skills: ["Flutter", "React Native", "Android SDK", "Offline SQLite"],
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/EmadAA",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emad-uddin-adil/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/emaduddinadil",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.047 0-6.002-2.73-6.002-6.223 0-3.666 2.37-6.241 5.864-6.241 3.738 0 5.498 2.656 5.234 6.704h-8.082c.112 1.637 1.206 2.871 3.09 2.871 1.542 0 2.456-.693 2.91-1.611l2.087 1.5zm-5.06-4.996c-.035-1.282-.779-2.316-2.227-2.316-1.396 0-2.203 1.018-2.342 2.316h4.569zm-13.666-6.004h6.059c2.518 0 4.148 1.157 4.148 3.238 0 1.235-.633 2.147-1.684 2.646 1.401.442 2.212 1.617 2.212 3.284 0 2.377-1.921 3.832-4.676 3.832h-6.059v-13zm3.176 4.966h2.247c1.066 0 1.764-.471 1.764-1.332 0-.897-.698-1.363-1.764-1.363h-2.247v2.695zm0 5.568h2.463c1.236 0 2.051-.555 2.051-1.574 0-1.047-.815-1.594-2.051-1.594h-2.463v3.168z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/EmadUddin_Adil",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5.5 w-5.5" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/emad.adil.509",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.015 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.976h-1.513c-1.49 0-1.956.93-1.956 1.884v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.088 24 18.092 24 12.073Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adilemaduddin/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

const sectionHeadingClass =
  "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#f7f4ea]/85 px-6 py-5 backdrop-blur dark:bg-[#101d18]/85 md:-mx-12 md:px-12 lg:sr-only";
const sectionClass = "mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24";
const headingTextClass =
  "text-sm font-bold uppercase tracking-widest text-[#101d18] dark:text-[#f7f4ea]";
const tagClass =
  "rounded-full bg-[#5f8c6d]/15 px-3 py-1 text-xs font-medium text-[#5f8c6d]";
const cardClass =
  "group rounded-lg border border-[#244b3a]/20 bg-[#dfe8d9]/30 p-5 backdrop-blur transition duration-300 hover:border-[#5f8c6d]/50 dark:border-[#244b3a] dark:bg-[#244b3a]/30 dark:hover:border-[#5f8c6d]/60";
const borderOnlyClass =
  "rounded-lg border border-[#244b3a]/30 p-5 dark:border-[#244b3a]";

const statusClass = (status: string) =>
  status === "Current" || status === "Ongoing"
    ? "rounded-full bg-[#5f8c6d] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#f7f4ea]"
    : "rounded-full bg-[#244b3a]/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#244b3a] dark:bg-[#dfe8d9]/15 dark:text-[#dfe8d9]";

/* ---------- Timeline item (Experience and Education) ---------- */

function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  status,
  highlight,
  children,
}: {
  icon: ElementType;
  title: string;
  subtitle: string;
  period: string;
  status: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <li className={highlight ? cardClass : borderOnlyClass}>
      <div className="flex items-start gap-3">
        {highlight && (
          <div className="shrink-0 rounded-md bg-[#5f8c6d]/15 p-2 text-[#5f8c6d]">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-[#101d18] dark:text-[#f7f4ea]">
              {title}
            </h3>
            <span className={statusClass(status)}>{status}</span>
          </div>
          <p className="mt-1 text-xs text-[#5f8c6d]">{subtitle}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#244b3a]/80 dark:text-[#dfe8d9]/60">
            {period}
          </p>
          <div className="mt-3 text-xs leading-relaxed text-[#244b3a] dark:text-[#dfe8d9]/80">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}

/* ---------- Component ---------- */

export default function PortfolioClient() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mouse spotlight
  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f7f4ea] text-[#101d18] transition-colors duration-300 dark:bg-[#101d18] dark:text-[#dfe8d9] selection:bg-[#5f8c6d] selection:text-[#f7f4ea]">
      {/* Sage spotlight glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(95, 140, 109, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* LEFT COLUMN */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-10">
            <div>
              {/* Profile photo */}
              <div className="group relative mx-auto mb-8 block w-fit lg:mx-0">
                <div className="relative h-44 w-44 overflow-hidden border-2 border-[#5f8c6d] bg-[#244b3a]/20 p-1 shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(95,140,109,0.35)] sm:h-52 sm:w-52 lg:h-56 lg:w-56">
                  <img
                    src="/Emad_Uddin_Adil.png"
                    alt="Emad Uddin Adil"
                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center border-2 border-[#f7f4ea] bg-[#5f8c6d] dark:border-[#101d18]"
                  title="Available for projects & hire"
                >
                  <span className="h-2 w-2 animate-pulse bg-[#f7f4ea]" />
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-[#101d18] dark:text-[#f7f4ea] sm:text-5xl">
                Emad Uddin Adil
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-[#5f8c6d] sm:text-xl">
                WordPress & React.js Developer
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-[#244b3a] dark:text-[#dfe8d9]/80">
  Designing and building high-performance WordPress and GoHighLevel websites,
  custom-coded web applications in React and Next.js, and offline-first mobile
  systems for real-world business operations.
</p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#5f8c6d] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#f7f4ea] shadow-md transition-all hover:bg-[#244b3a] hover:shadow-lg dark:hover:bg-[#5f8c6d]/80"
                >
                  <FileText className="h-4 w-4" />
                  Hire Me / View CV
                </a>
              </div>

              {/* Desktop navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-6 w-max space-y-1.5">
                  {NAV_ITEMS.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          aria-current={isActive ? "true" : undefined}
                          className={`group flex items-center py-1 transition-all ${
                            isActive
                              ? "text-[#101d18] dark:text-[#f7f4ea]"
                              : "text-[#244b3a]/70 hover:text-[#101d18] dark:text-[#dfe8d9]/60 dark:hover:text-[#f7f4ea]"
                          }`}
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 ${
                              isActive
                                ? "w-16 bg-[#5f8c6d]"
                                : "w-8 bg-[#244b3a]/30 group-hover:w-16 group-hover:bg-[#5f8c6d] dark:bg-[#244b3a]"
                            }`}
                          />
                          <span className="text-xs font-bold uppercase tracking-widest">
                            {label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Bottom row: theme toggle and socials */}
            <div className="mt-8 flex items-center gap-6 lg:mt-auto lg:pt-6">
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="rounded-full border border-[#244b3a]/30 p-2.5 text-[#101d18] transition hover:border-[#5f8c6d] hover:text-[#5f8c6d] dark:border-[#244b3a] dark:text-[#dfe8d9] dark:hover:border-[#5f8c6d] dark:hover:text-[#5f8c6d]"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              <div className="flex flex-wrap items-center gap-5 text-[#244b3a] dark:text-[#dfe8d9]">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="transition hover:text-[#5f8c6d]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </header>

          {/* RIGHT COLUMN */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* ABOUT */}
            <section id="about" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>About</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#244b3a] dark:text-[#dfe8d9]/80">
                <p>
                  I am a passionate{" "}
                  <strong className="font-semibold text-[#101d18] dark:text-[#f7f4ea]">
                    WordPress Designer
                  </strong>{" "}
                  and{" "}
                  <strong className="font-semibold text-[#101d18] dark:text-[#f7f4ea]">
                    React.js Developer
                  </strong>{" "}
                  with a solid background in Computer Science. Over the past{" "}
                  <strong className="font-medium text-[#5f8c6d]">2+ years</strong>, I
                  have specialized in building custom digital storefronts and
                  marketing platforms using Elementor Page Builder and WooCommerce.
                </p>
                <p>
                  My engineering bridges aesthetic design with clean performance. I
                  actively resolve speed bottlenecks, configure caching and Core Web
                  Vitals, and remediate malicious vulnerabilities so client platforms
                  remain secure and fast.
                </p>
                <p>
                  Beyond standalone websites, I architect end-to-end sales pipelines
                  and CRM automations in{" "}
                  <strong className="font-semibold text-[#101d18] dark:text-[#f7f4ea]">
                    GoHighLevel (GHL)
                  </strong>
                  , along with cross-platform desktop and mobile systems running on
                  React, Next.js, and Flutter.
                </p>
              </div>
            </section>

            {/* EXPERTISE */}
            <section id="expertise" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Expertise</h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {EXPERTISE.map((item) => (
                  <div key={item.title} className={cardClass}>
                    <div className="mb-2.5 flex items-center gap-2.5">
                      <div className="rounded-md bg-[#5f8c6d]/15 p-2 text-[#5f8c6d]">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-[#101d18] dark:text-[#f7f4ea]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mb-3 text-xs leading-relaxed text-[#244b3a] dark:text-[#dfe8d9]/80">
                      {item.desc}
                    </p>
                    <ul className="flex flex-wrap gap-1">
                      {item.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-[#5f8c6d]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#101d18] dark:bg-[#101d18] dark:text-[#dfe8d9]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-lg border border-[#5f8c6d]/30 bg-[#5f8c6d]/10 p-4">
                <Headphones className="h-5 w-5 shrink-0 text-[#5f8c6d]" />
                <p className="text-xs leading-relaxed text-[#101d18] dark:text-[#f7f4ea]">
                  <strong className="font-semibold text-[#5f8c6d]">
                    Dedicated Support:
                  </strong>{" "}
                  24/7 post-launch maintenance, automated backups, and
                  troubleshooting for all deployed websites.
                </p>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Experience</h2>
              </div>
              <ol className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <TimelineItem
                    key={`${exp.company}-${exp.role}`}
                    icon={Briefcase}
                    title={exp.role}
                    subtitle={`${exp.company} · ${exp.location}`}
                    period={exp.period}
                    status={exp.status}
                    highlight={exp.highlight}
                  >
                    <ul className="list-disc space-y-1.5 pl-4 marker:text-[#5f8c6d]">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </TimelineItem>
                ))}
              </ol>
            </section>

            {/* PROJECTS: first three here, full list on /projects */}
            <section id="projects" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Projects</h2>
              </div>

              <ul className="space-y-6">
                {PROJECTS.slice(0, 3).map((project) => (
                  <li key={project.id}>
                    <Link href={`/projects/${project.id}`} className="group block">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#5f8c6d]">
                        {project.type}
                      </span>
                      <span className="mt-1 inline-flex items-baseline text-base font-medium text-[#101d18] group-hover:text-[#5f8c6d] dark:text-[#f7f4ea] dark:group-hover:text-[#5f8c6d]">
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                      <span className="mt-2 block text-sm leading-normal text-[#244b3a] dark:text-[#dfe8d9]/80">
                        {project.shortDesc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#5f8c6d] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#5f8c6d] transition hover:bg-[#5f8c6d] hover:text-[#f7f4ea]"
              >
                View all projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </section>

            {/* EDUCATION */}
            <section id="education" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Education</h2>
              </div>
              <ol className="space-y-4">
                {EDUCATION.map((edu) => (
                  <TimelineItem
                    key={edu.degree}
                    icon={GraduationCap}
                    title={edu.degree}
                    subtitle={edu.institution}
                    period={edu.period}
                    status={edu.status}
                    highlight={edu.highlight}
                  >
                    <p>{edu.description}</p>
                  </TimelineItem>
                ))}
              </ol>
            </section>

            {/* CONTACT */}
            <section id="contact" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Contact</h2>
              </div>
              <ContactForm />
            </section>

            <footer className="max-w-md pb-16 text-xs text-[#244b3a] dark:text-[#dfe8d9]/70">
              <p>
                Copymark:{" "}
                <span className="text-[#101d18] dark:text-[#f7f4ea]">
                  Emad Uddin Adil
                </span>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}