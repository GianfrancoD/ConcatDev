import { XIcon } from "lucide-react";
import React from "react";

interface ModalProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
  };
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#0F172A] rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="text-sm text-blue-400 mb-2">{project.category}</div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
