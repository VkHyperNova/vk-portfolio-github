import Link from "next/link";

export default function ProjectsButton() {
  return (
    <Link
      href="/projects"
      className="group px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition flex items-center gap-2"
    >
      View Projects
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}