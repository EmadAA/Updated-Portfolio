import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import ProjectFilter from "@/components/project-filter";

export const metadata = {
  title: "Projects",
  description:
    "Selected WordPress, GoHighLevel, custom-coded, and performance projects by Emad Uddin Adil.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#101d18] dark:bg-[#101d18] dark:text-[#dfe8d9]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#244b3a] transition hover:text-[#5f8c6d] dark:text-[#dfe8d9]/70 dark:hover:text-[#5f8c6d]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#101d18] dark:text-[#f7f4ea] sm:text-4xl">
          Projects
        </h1>

        <ProjectFilter projects={PROJECTS} />
      </div>
    </div>
  );
}