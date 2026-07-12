import Link from "next/link";
import { projects } from "./projects";
import { getLastUpdated, formatRelativeDate } from "@/lib/github";

export const metadata = {
  title: "Projects",
  description: "Selected software projects and experiments",
};

export default async function ProjectsPage() {
  const projectsWithDates = await Promise.all(
    projects.map(async (project) => {
      const { pushedAt } = project.github
        ? await getLastUpdated(project.github)
        : { pushedAt: null };
      return { ...project, lastUpdated: pushedAt };
    })
  );

  return (
    <section className="container mx-auto px-4 py-20 max-w-6xl">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of projects I’ve built to learn, experiment, and improve
          my understanding of programming.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsWithDates.map((project) => (
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
    </section>
  );
}