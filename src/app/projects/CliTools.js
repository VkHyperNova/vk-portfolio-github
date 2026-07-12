"use client";

import { useState } from "react";
import { formatRelativeDate } from "@/lib/github";

export default function CliTools({ projects }) {
  const [selected, setSelected] = useState(null);

  if (!projects?.length) return null;

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold mb-2">Personal CLI Tools</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
        Small Go command-line utilities I built to practice clean file I/O,
        error handling, and offline-first data persistence.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.slug}
            id={project.slug}
            onClick={() => setSelected(project)}
            className="text-left rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-sm hover:border-gray-300 dark:hover:border-gray-600 transition scroll-mt-24"
          >
            {project.screenshot && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-28 object-cover bg-gray-100 dark:bg-gray-800"
              />
            )}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-medium">{project.title}</span>
                {project.lastUpdated && (
                  <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                    {formatRelativeDate(project.lastUpdated)}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.screenshot && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selected.screenshot}
                alt={`${selected.title} screenshot`}
                className="w-full h-48 object-cover bg-gray-100 dark:bg-gray-800"
              />
            )}

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-semibold">{selected.title}</h3>
                {selected.lastUpdated && (
                  <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                    {formatRelativeDate(selected.lastUpdated)}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {selected.longDescription || selected.description}
              </p>

              {selected.tech && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selected.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}