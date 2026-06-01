import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Navigation Bar */}
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Hsiu Ying Chan
            </Link>
            <div className="space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-16 py-8">
          <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
            <p>&copy; 2026. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
