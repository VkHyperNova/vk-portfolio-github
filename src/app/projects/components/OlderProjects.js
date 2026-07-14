"use client";

import { formatRelativeDate } from "@/lib/github";

export default function OlderProjects({ projects }) {
  if (!projects?.length) return null;

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold mb-2">Other Projects</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
        Earlier experiments, mostly unmaintained. Kept for reference.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            id={project.slug}
            className="flex flex-col gap-1.5 rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 hover:shadow-sm hover:border-gray-300 dark:hover:border-gray-600 transition scroll-mt-24"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-wide font-medium text-gray-400 dark:text-gray-500">
                {project.name}
              </span>
              {project.lastUpdated && (
                <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                  {formatRelativeDate(project.lastUpdated)}
                </span>
              )}
            </div>

            <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
              {project.title}
            </span>

            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
              {project.description}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 hover:underline mt-1"
              >
                GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}