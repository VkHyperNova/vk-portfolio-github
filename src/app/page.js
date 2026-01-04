// src/app/page.js
import Link from "next/link";
// import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I am Your Name</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Frontend Developer | Portfolio Website
        </p>
        <Link
          href="/projects"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Projects
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <Link href={project.live} className="text-blue-600 mt-2 inline-block">
                Live Demo
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
