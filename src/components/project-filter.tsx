"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, type Category, type Project } from "@/data/portfolio";

const ALL = "All";
type Filter = typeof ALL | Category;

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>(ALL);

  // Only show tabs for categories that have projects
  const tabs = useMemo<Filter[]>(() => {
    const used = new Set(projects.map((p) => p.category));
    return [ALL, ...CATEGORIES.filter((c) => used.has(c))];
  }, [projects]);

  const countFor = (tab: Filter) =>
    tab === ALL
      ? projects.length
      : projects.filter((p) => p.category === tab).length;

  const visible =
    active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                isActive
                  ? "border-[#5f8c6d] bg-[#5f8c6d] text-[#f7f4ea]"
                  : "border-[#5f8c6d]/50 text-[#244b3a] hover:border-[#5f8c6d] hover:text-[#5f8c6d] dark:text-[#dfe8d9]"
              }`}
            >
              {tab}
              <span className="ml-2 opacity-70">{countFor(tab)}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {visible.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`} className="group block">
              <div className="aspect-video overflow-hidden rounded border border-[#244b3a]/30 bg-[#244b3a]/20">
                {project.screenshots[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.screenshots[0]}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#5f8c6d]">
                {project.category}
              </p>
              <h2 className="mt-1 inline-flex items-center text-lg font-semibold text-[#101d18] group-hover:text-[#5f8c6d] dark:text-[#f7f4ea]">
                {project.title}
                <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#244b3a] dark:text-[#dfe8d9]/80">
                {project.shortDesc}
              </p>
              <p className="mt-2 text-xs font-semibold text-[#5f8c6d]">
                {project.screenshots.length} screenshots →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}