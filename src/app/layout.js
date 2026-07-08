// src/app/layout.js
import "./globals.css"; // Tailwind / global styles
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Veikko Kiis | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-slate-900 text-black dark:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
