import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-50/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">
          Experience
        </h2>
      </div>

      <ol className="group/list space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {exp.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={exp.companyUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {exp.role} · <span className="inline-block">{exp.company}</span>
                      </span>
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {exp.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}