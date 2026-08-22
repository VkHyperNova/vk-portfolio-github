import Link from "next/link";

export default function AboutButton() {
  return (
    <Link
      href="/about"
      className="px-6 py-3 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-600 hover:text-white transition"
    >
      About Me
    </Link>
  );
}