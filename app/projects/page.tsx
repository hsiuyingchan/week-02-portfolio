"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Machine Learning Fundamentals: 911 Emergency Calls Analysis",
    description: "Built a machine learning model to classify emergency types (EMS, Traffic, Fire) from 99,492 real emergency calls in Montgomery County, PA. Performed comprehensive data analysis, feature engineering, and trained models for resource allocation and emergency response planning.",
    tags: ["Machine Learning", "Data Analysis", "Python", "Classification"],
  },
  {
    id: 2,
    title: "Deep Learning with TensorFlow: Urban Traffic Speed Prediction",
    description: "Comprehensive deep learning project training ANN → CNN → LSTM → Transformer architectures on the METR-LA benchmark dataset. Conducted rigorous ablation study to quantify how each architectural advance improves traffic speed predictions in production-style systems.",
    tags: ["TensorFlow", "Deep Learning", "LSTM", "Transformers"],
  },
  {
    id: 3,
    title: "Computer Vision & Multimodal: Real-Time Fashion Item Classifier",
    description: "Trained a CNN achieving 90%+ accuracy on Fashion-MNIST dataset for image classification. Built an interactive web interface with Gradio for real-time image classification and user interaction.",
    tags: ["Computer Vision", "CNN", "Gradio", "Multi-modal AI"],
  },
  {
    id: 4,
    title: "Physics-Guided ML: Mass-Spring-Damper System",
    description: "Developed a physics-guided ML system combining classical physics constraints with neural networks. Trained a NN to predict nonlinear residuals and integrated predictions into physics-based simulations for hybrid modeling.",
    tags: ["Python", "Machine Learning", "Neural Networks", "Simulation"],
  },
  {
    id: 5,
    title: "Agentic AI: Intelligent Grid World Agent",
    description: "Built an autonomous agent system that navigates a grid world toward dynamic goals. Implemented intelligent path planning with adaptive replanning when obstacles appear. Agent successfully completes multi-step tasks with reasoning.",
    tags: ["AI Agents & Tool Use", "Autonomous Systems", "Problem Solving", "Python"],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get all unique tags
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-gray-600 mb-8">
        Explore my work and filter by technology or topic.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeFilter === tag
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No projects found for this filter.
          </p>
        </div>
      )}
    </main>
  );
}
