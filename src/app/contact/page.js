import Link from "next/link";

export const metadata = {
  title: "Contact | Developer Portfolio",
  description:
    "Get in touch with a junior software developer for opportunities, questions, or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-5xl">
      <div className="space-y-20">
        {/* ================= HEADER ================= */}
        <section className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            If you’d like to discuss a project, opportunity, or just have a
            technical question, feel free to reach out. I’m open to internships,
            junior roles, and learning-focused collaborations.
          </p>
        </section>

        {/* ================= CONTACT OPTIONS ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">
            Ways to reach me
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {/* Email */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Best for professional inquiries and detailed discussions.
              </p>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:underline"
              >
                your.email@example.com
              </a>
            </div>

            {/* GitHub */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                View my code, projects, and development style.
              </p>
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/yourusername
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Professional profile and work history.
              </p>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/yourusername
              </Link>
            </div>

            {/* Location / Availability */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Open to remote opportunities and on-site roles depending on
                location. Actively looking for junior developer positions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="max-w-3xl">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            If you’re reviewing my portfolio for a role or internship, feel free
            to reach out with any questions. I’m always happy to talk about my
            projects, learning process, and how I approach software development.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              About Me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
