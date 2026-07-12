import Link from "next/link";
import { projects } from "./projects";
import { getLastUpdated, formatRelativeDate } from "@/lib/github";
import FeaturedProjects from "./FeaturedProjects";
import CliTools from "./CliTools";
import OlderProjects from "./OlderProjects";


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

  const featured = projectsWithDates.filter((p) => p.category === "featured");
  const cliTools = projectsWithDates.filter((p) => p.category === "cli-tool");
  const other = projectsWithDates.filter((p) => p.category === "other");

  return (
    <section className="container mx-auto px-4 py-20 max-w-6xl">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of projects I’ve built to learn, experiment, and improve
          my understanding of programming.
        </p>
      </header>

      {/* Featured — full detail cards */}
      <FeaturedProjects projects={featured} />

      {/* Personal CLI tools — compact grid */}
      <CliTools projects={cliTools} />
      
      {/* Older / unmaintained — compact grid */}
      <OlderProjects projects={other} />

    </section>
  );
}