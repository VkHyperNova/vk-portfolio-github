// src/app/projects/page.js
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <Link
              href={project.live}
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
