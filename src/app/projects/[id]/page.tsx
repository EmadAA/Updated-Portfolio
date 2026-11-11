import Link from "next/link";
export const instant = false;
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Lock,
  Monitor,
} from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import ScreenshotGallery from "@/components/screenshot-gallery";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.shortDesc,
    openGraph: project.screenshots[0]
      ? { images: [project.screenshots[0]] }
      : undefined,
  };
}

const tagClass =
  "rounded-full bg-[#5f8c6d]/15 px-3 py-1 text-xs font-medium text-[#5f8c6d]";
const buttonPrimary =
  "inline-flex items-center gap-2 rounded-md bg-[#5f8c6d] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f7f4ea] transition hover:bg-[#244b3a]";
const buttonOutline =
  "inline-flex items-center gap-2 rounded-md border border-[#244b3a]/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101d18] transition hover:bg-[#dfe8d9] dark:border-[#244b3a] dark:text-[#f7f4ea] dark:hover:bg-[#244b3a]";
const badgeClass =
  "inline-flex items-center gap-2 rounded-md border border-[#244b3a]/40 bg-[#244b3a]/10 px-4 py-2 text-xs font-medium text-[#244b3a] dark:text-[#dfe8d9]";

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) notFound();

  const hasLive = Boolean(project.liveUrl);
  const hasPublicRepo = Boolean(project.githubUrl) && !project.githubPrivate;
  const hasPrivateRepo = Boolean(project.githubUrl) && project.githubPrivate;
  const hasNoLinks = !hasLive && !hasPublicRepo && !hasPrivateRepo;

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#101d18] dark:bg-[#101d18] dark:text-[#dfe8d9]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#244b3a] transition hover:text-[#5f8c6d] dark:text-[#dfe8d9]/70 dark:hover:text-[#5f8c6d]"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-[#5f8c6d]">
          {project.type}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#101d18] dark:text-[#f7f4ea] sm:text-4xl">
          {project.title}
        </h1>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className={tagClass}>
              {tag}
            </li>
          ))}
        </ul>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#244b3a] dark:text-[#dfe8d9]/70">
            Overview & system design
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#101d18] dark:text-[#f7f4ea]">
            {project.fullDesc}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#244b3a] dark:text-[#dfe8d9]/70">
            Engineering deliverables
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#244b3a] dark:text-[#dfe8d9]/80">
            {project.features.map((feat) => (
              <li key={feat}>{feat}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#244b3a] dark:text-[#dfe8d9]/70">
            Screenshots ({project.screenshots.length})
          </h2>
          <p className="mt-2 text-xs text-[#244b3a]/70 dark:text-[#dfe8d9]/50">
            Click any image to view it full size.
          </p>
          <ScreenshotGallery images={project.screenshots} title={project.title} />
        </section>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#244b3a]/20 pt-6 dark:border-[#244b3a]">
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonPrimary}
            >
              <ExternalLink className="h-4 w-4" />
              View live website
            </a>
          )}

          {hasPublicRepo && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonOutline}
            >
              <GitBranch className="h-4 w-4" />
              Source code
            </a>
          )}

          {hasPrivateRepo && (
            <span className={badgeClass}>
              <Lock className="h-4 w-4 text-[#5f8c6d]" />
              Private repository
            </span>
          )}

          {hasNoLinks && (
            <span className={badgeClass}>
              <Monitor className="h-4 w-4 text-[#5f8c6d]" />
              Internal project. Screenshots only.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}