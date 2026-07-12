import Link from "next/link";
import { skills } from "./about/skills"

export const metadata = {
  title: "Home | Developer Portfolio",
  description:
    "Junior software developer building clean, maintainable full-stack applications using Go, JavaScript, and modern web technologies.",
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="space-y-24">
        {/* ================= HERO ================= */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I’m <span className="text-blue-600">Veikko Kiis</span>.
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              <b className="text-black dark:text-blue-100">
                Programmer & Linux user
              </b>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                About Me
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">What I work with</h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= FEATURED PROJECTS ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">vk-youtube-downloader</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Downloads YouTube videos directly from terminal and extracts clean MP3 audio.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Tech: Go, CLI, ffmpeg
              </p>
              <Link
                href="/projects#vk-youtube-downloader"
                className="text-blue-600 hover:underline"
              >
                View project →
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">
                VK-BOOKS
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A CLI tool for tracking your personal reading history.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Tech: Go, CLI, File I/O
              </p>
              <Link
                href="/projects#vk-books"
                className="text-blue-600 hover:underline"
              >
                View project →
              </Link>
            </div>
          </div>
        </section>

        {/* ================= MINDSET ================= */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">
            How I approach development
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I focus on understanding problems before writing code. I prefer
            simple, readable solutions over clever but fragile ones. I use AI as
            a learning and productivity tool, but I don’t rely on generated code
            without understanding how it works.
          </p>
        </section>

        {/* ================= BACKGROUND ================= */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a mostly self-taught developer with 5–10 years of on-and-off
            coding experience. I’ve studied at Vocational School and completed
            internships at two software companies, gaining experience with
            real-world codebases and team workflows.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
