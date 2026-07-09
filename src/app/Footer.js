"use client"; // Only needed if you use state (optional)

import Link from "next/link";
import { contacts } from "./contact/contacts";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright / Branding */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Veikko Kiis. All rights reserved.</p>

        {/* Social links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
