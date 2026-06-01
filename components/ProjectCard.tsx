interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold mb-3 text-gray-900">
        {title}
      </h2>
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
