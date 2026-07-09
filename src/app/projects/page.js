import Link from "next/link";
import { projects } from "./projects";

export const metadata = {
  title: "Projects",
  description: "Selected software projects and experiments",
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-6xl">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of projects I’ve built to learn, experiment, and improve
          my understanding of programming.
        </p>
      </header>

      {/* Projects grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition"
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">
              {project.title}
            </h2>

            {/* Short description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Long description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.longDescription}
            </p>

            {/* Tech stack */}
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

            {/* OS support */}
            {project.os && (
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(project.os).map(([platform, status]) => (
                  <span
                    key={platform}
                    className={`text-xs px-2 py-1 rounded ${status === "tested"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                      }`}
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}: {status}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </Link>
              )}

              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </Link>
              )}

              {project.screenshot && (
                <Link
                  href={project.screenshot}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
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
