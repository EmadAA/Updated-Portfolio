/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Headphones,
  Monitor,
  Moon,
  Palette,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  Sun,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ContactForm from "@/components/contact-form";
import {
  NAV_ITEMS,
  EXPERIENCES,
  PROJECTS,
  type Project,
} from "@/data/portfolio";

/* ---------- Static content used only by this page ---------- */

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

const BLOG_POSTS = [
  {
    title: "Achieving Sub-1s Load Speeds on Elementor & WooCommerce",
    date: "Oct 2026",
    readTime: "4 min read",
    summary:
      "How to strip unneeded scripts, configure object caching, and handle WebP delivery for perfect Core Web Vitals scores.",
  },
  {
    title: "Automating WooCommerce Customer Journeys with GoHighLevel",
    date: "Sep 2026",
    readTime: "5 min read",
    summary:
      "A practical guide on webhook payloads, customer pipeline automation, and transactional follow-ups.",
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/EmadAA",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emad-uddin-adil/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/emaduddinadil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.047 0-6.002-2.73-6.002-6.223 0-3.666 2.37-6.241 5.864-6.241 3.738 0 5.498 2.656 5.234 6.704h-8.082c.112 1.637 1.206 2.871 3.09 2.871 1.542 0 2.456-.693 2.91-1.611l2.087 1.5zm-5.06-4.996c-.035-1.282-.779-2.316-2.227-2.316-1.396 0-2.203 1.018-2.342 2.316h4.569zm-13.666-6.004h6.059c2.518 0 4.148 1.157 4.148 3.238 0 1.235-.633 2.147-1.684 2.646 1.401.442 2.212 1.617 2.212 3.284 0 2.377-1.921 3.832-4.676 3.832h-6.059v-13zm3.176 4.966h2.247c1.066 0 1.764-.471 1.764-1.332 0-.897-.698-1.363-1.764-1.363h-2.247v2.695zm0 5.568h2.463c1.236 0 2.051-.555 2.051-1.574 0-1.047-.815-1.594-2.051-1.594h-2.463v3.168z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/EmadUddin_Adil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[22px] w-[22px]"
        aria-hidden="true"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/emad.adil.509",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
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

/* ---------- Page ---------- */

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  // Escape closes the modal
  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  // Lock body scroll while the modal is open, restore the previous value on close
  useEffect(() => {
    if (!selectedProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProject]);

  const sectionHeadingClass =
    "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#f7f4ea]/85 px-6 py-5 backdrop-blur dark:bg-[#101d18]/85 md:-mx-12 md:px-12 lg:sr-only";
  const sectionClass = "mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24";
  const headingTextClass =
    "text-sm font-bold uppercase tracking-widest text-[#101d18] dark:text-[#f7f4ea]";
  const tagClass =
    "rounded-full bg-[#5f8c6d]/15 px-3 py-1 text-xs font-medium text-[#5f8c6d]";

  return (
    <div className="relative min-h-screen bg-[#f7f4ea] text-[#101d18] transition-colors duration-300 dark:bg-[#101d18] dark:text-[#dfe8d9] selection:bg-[#5f8c6d] selection:text-[#f7f4ea]">
      {/* Sage spotlight glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(95, 140, 109, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* =========================================
              LEFT COLUMN: Header, avatar, nav, socials
             ========================================= */}
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
              <p className="mt-4 max-w-xs leading-normal text-[#244b3a] dark:text-[#dfe8d9]/80">
                Building high-performance WordPress platforms, GHL automations,
                and offline-first mobile applications.
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
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
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

            {/* Bottom row: theme toggle and socials, pinned to the bottom on desktop */}
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

          {/* =========================================
              RIGHT COLUMN: Content sections
             ========================================= */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* 1. ABOUT */}
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
                  <strong className="font-medium text-[#5f8c6d]">
                    2+ years
                  </strong>
                  , I have specialized in building custom digital storefronts
                  and marketing platforms using Elementor Page Builder and
                  WooCommerce.
                </p>
                <p>
                  My engineering bridges aesthetic design with clean
                  performance. I actively resolve speed bottlenecks, configure
                  caching and Core Web Vitals, and remediate malicious
                  vulnerabilities so client platforms remain secure and fast.
                </p>
                <p>
                  Beyond standalone websites, I architect end-to-end sales
                  pipelines and CRM automations in{" "}
                  <strong className="font-semibold text-[#101d18] dark:text-[#f7f4ea]">
                    GoHighLevel (GHL)
                  </strong>
                  , along with cross-platform desktop and mobile systems running
                  on React, Next.js, and Flutter.
                </p>
              </div>
            </section>

            {/* 2. EXPERTISE */}
            <section id="expertise" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Expertise</h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {EXPERTISE.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-lg border border-[#244b3a]/20 bg-[#dfe8d9]/30 p-5 backdrop-blur transition duration-300 hover:border-[#5f8c6d]/50 dark:border-[#244b3a] dark:bg-[#244b3a]/30 dark:hover:border-[#5f8c6d]/60"
                  >
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

            {/* 3. EXPERIENCE */}
            <section id="experience" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Experience</h2>
              </div>
              <ol className="group/list space-y-12">
                {EXPERIENCES.map((exp) => (
                  <li key={exp.role}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-[#244b3a]/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(95,140,109,0.2)] dark:lg:group-hover:bg-[#244b3a]/40" />
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[#244b3a] sm:col-span-2 dark:text-[#dfe8d9]/70">
                        {exp.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-[#101d18] dark:text-[#f7f4ea]">
                          <a
                            href={exp.url ?? "#"}
                            target={exp.url ? "_blank" : undefined}
                            rel="noreferrer"
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-[#101d18] hover:text-[#5f8c6d] dark:text-[#f7f4ea] dark:hover:text-[#5f8c6d]"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {exp.role} · {exp.company}
                            </span>
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-[#244b3a] dark:text-[#dfe8d9]/80">
                          {exp.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <li key={tag} className={tagClass}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* 4. PROJECTS */}
            <section id="projects" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Projects</h2>
              </div>
              <ul className="group/list space-y-12">
                {PROJECTS.map((project) => (
                  <li key={project.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-haspopup="dialog"
                      className="group relative grid w-full cursor-pointer gap-4 pb-1 text-left transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                    >
                      <span className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-[#244b3a]/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(95,140,109,0.2)] dark:lg:group-hover:bg-[#244b3a]/40" />

                      <span className="z-10 block sm:order-2 sm:col-span-6">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#5f8c6d]">
                          {project.type}
                        </span>
                        <span className="mt-0.5 block">
                          <span className="inline-flex items-baseline text-base font-medium leading-tight text-[#101d18] group-hover:text-[#5f8c6d] dark:text-[#f7f4ea] dark:group-hover:text-[#5f8c6d]">
                            <span>{project.title}</span>
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                          </span>
                        </span>
                        <span className="mt-2 block text-sm leading-normal text-[#244b3a] dark:text-[#dfe8d9]/80">
                          {project.shortDesc}
                        </span>
                        <span className="mt-2 block text-xs font-semibold text-[#5f8c6d]">
                          View {project.screenshots.length} screenshots &
                          architecture details →
                        </span>
                        <span className="mt-2 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className={tagClass}>
                              {tag}
                            </span>
                          ))}
                        </span>
                      </span>

                      <span className="z-10 mt-1 block sm:order-1 sm:col-span-2">
                        <span className="block aspect-video w-full overflow-hidden rounded border border-[#244b3a]/30 bg-[#244b3a]/20">
                          <img
                            src={project.screenshots[0]}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. EDUCATION */}
            <section id="education" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Education</h2>
              </div>
              <div className="rounded-lg border border-[#244b3a]/30 bg-[#dfe8d9]/30 p-5 dark:border-[#244b3a] dark:bg-[#244b3a]/30">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#5f8c6d]">
                  <GraduationCap className="h-4 w-4" />
                  <span>Academic Degree</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-[#101d18] dark:text-[#f7f4ea]">
                  B.Sc. in Computer Science & Engineering
                </h3>
                <p className="mt-1 text-xs text-[#244b3a] dark:text-[#dfe8d9]/70">
                  Core Foundations & Continuous Engineering Curriculum
                </p>
                <p className="mt-2 text-sm text-[#244b3a] dark:text-[#dfe8d9]/80">
                  Study focused on database schema design, algorithms,
                  object-oriented software engineering, and network security
                  protocols.
                </p>
              </div>
            </section>

            {/* 6. BLOG */}
            <section id="blog" className={sectionClass}>
              <div className={sectionHeadingClass}>
                <h2 className={headingTextClass}>Blog</h2>
              </div>
              <div className="space-y-6">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.title}
                    className="group relative rounded-lg border border-[#244b3a]/20 bg-[#dfe8d9]/30 p-5 transition duration-300 hover:border-[#5f8c6d]/50 dark:border-[#244b3a] dark:bg-[#244b3a]/30 dark:hover:border-[#5f8c6d]/60"
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-[#244b3a] dark:text-[#dfe8d9]/70">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-[#101d18] group-hover:text-[#5f8c6d] dark:text-[#f7f4ea]">
                      <a href="#" className="inline-flex items-center">
                        {post.title}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-[#244b3a] dark:text-[#dfe8d9]/80">
                      {post.summary}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* 7. CONTACT */}
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

      {/* =========================================
          PROJECT MODAL
         ========================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
            className="fixed inset-0 bg-[#101d18]/80 backdrop-blur-sm transition-opacity"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-[#244b3a] bg-[#f7f4ea] p-6 shadow-2xl dark:bg-[#101d18] sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 rounded-full p-2 text-[#244b3a] hover:bg-[#dfe8d9] hover:text-[#101d18] dark:text-[#dfe8d9] dark:hover:bg-[#244b3a] dark:hover:text-[#f7f4ea]"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#5f8c6d]">
              {selectedProject.type}
            </span>
            <h2
              id="project-modal-title"
              className="mt-1 pr-10 text-2xl font-bold tracking-tight text-[#101d18] dark:text-[#f7f4ea]"
            >
              {selectedProject.title}
            </h2>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {selectedProject.tags.map((tag) => (
                <li key={tag} className={tagClass}>
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#244b3a] dark:text-[#dfe8d9]/70">
                Project screenshots ({selectedProject.screenshots.length}{" "}
                images)
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectedProject.screenshots.map((shot, sIdx) => (
                  <div
                    key={shot}
                    className="group relative aspect-video overflow-hidden rounded-lg border border-[#244b3a]/30 bg-[#244b3a]/10"
                  >
                    <img
                      src={shot}
                      alt={`${selectedProject.title}, screenshot ${sIdx + 1}`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#244b3a] dark:text-[#dfe8d9]/70">
                Overview & system design
              </h3>
              <p className="text-sm leading-relaxed text-[#101d18] dark:text-[#f7f4ea]">
                {selectedProject.fullDesc}
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#244b3a] dark:text-[#dfe8d9]/70">
                Engineering deliverables
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-[#244b3a] dark:text-[#dfe8d9]/80">
                {selectedProject.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#244b3a]/20 pt-4 dark:border-[#244b3a]">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#5f8c6d] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f7f4ea] transition hover:bg-[#244b3a]"
                >
                  <ExternalLink className="h-4 w-4" />
                  View live website
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-md border border-[#244b3a]/40 bg-[#244b3a]/10 px-4 py-2 text-xs font-medium text-[#244b3a] dark:text-[#dfe8d9]">
                  <Monitor className="h-4 w-4 text-[#5f8c6d]" />
                  Internal desktop application (no public URL)
                </div>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#244b3a]/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101d18] transition hover:bg-[#dfe8d9] dark:border-[#244b3a] dark:text-[#f7f4ea] dark:hover:bg-[#244b3a]"
                >
                  <GitBranch className="h-4 w-4" />
                  Source code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
