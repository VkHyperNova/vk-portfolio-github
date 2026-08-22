import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="px-6 py-3 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-600 hover:text-white transition"
    >
      Contact Me
    </Link>
  );
}