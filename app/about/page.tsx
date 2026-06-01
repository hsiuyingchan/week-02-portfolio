import Image from "next/image";

const skills = [
  "LLM Prompt Engineering",
  "LLM Integration in Applications",
  "AI Agents & Tool Use",
  "Multi-modal AI (Vision + Language)",
  "UI/UX Design",
  "Full-Stack Development",
];

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex gap-12 mb-16 items-start">
        {/* Left: Image (2/3 size) */}
        <div className="flex-shrink-0">
          <Image
            src="/hyc.jpeg"
            alt="Hsiu Ying Chan"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content (equal space) */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">About Me</h1>
          <p className="text-3xl font-semibold text-blue-600 mb-8">Hsiu Ying Chan</p>

          <div className="leading-relaxed space-y-6">
            <p className="text-lg text-gray-700 leading-8">
              I solve problems by building things. Whether it&apos;s frontend interfaces, backend systems, or AI-powered features, I enjoy the full spectrum of development. Right now, I&apos;m focused on understanding how AI can enhance user experiences while maintaining ethical standards.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-700">
          📧 Email:{" "}
          <a
            href="mailto:hsiuying.chan@cstu.edu"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            hsiuying.chan@cstu.edu
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Skills & Interests</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg font-semibold text-blue-900">✨ {skill}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
