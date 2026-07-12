import Link from "next/link";
import { formatRelativeDate } from "@/lib/github";

export default function FeaturedProjects({ projects }) {
  if (!projects?.length) return null;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.slug}
          id={project.slug}
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition scroll-mt-24"
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            {project.lastUpdated && (
              <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                {formatRelativeDate(project.lastUpdated)}
              </span>
            )}
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.os && (
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(project.os).map(([platform, status]) => (
                <span
                  key={platform}
                  className={`text-xs px-2 py-1 rounded ${
                    status === "tested"
                      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}: {status}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            {project.github && (
              <Link href={project.github} target="_blank" className="text-blue-600 hover:underline">
                GitHub
              </Link>
            )}
            {project.live && (
              <Link href={project.live} target="_blank" className="text-blue-600 hover:underline">
                View Live Site
              </Link>
            )}
            {project.screenshot && (
              <Link href={project.screenshot} target="_blank" className="text-blue-600 hover:underline">
                Screenshot
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}