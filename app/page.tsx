"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Dark Mode Toggle Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDark
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h1 className="text-5xl font-bold mb-4">Hsiu Ying Chan</h1>
        <p className={`text-xl mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Crafting elegant solutions to complex problems
        </p>

        <p className={`text-lg mb-12 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          I love solving problems with code and building things that people can use.
        </p>

        <div className="flex gap-6">
          <Link
            href="/projects"
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isDark
                ? "bg-blue-600 text-white hover:bg-blue-500"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
              isDark
                ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-gray-900"
                : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            About Me
          </Link>
        </div>
      </main>
    </div>
  );
}
