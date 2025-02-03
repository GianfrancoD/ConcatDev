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
      <div className="bg-gradient-to-r from-[#312760] to-[#1a1438] rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex md:text-sm max-md:text-[13px] items-center justify-center text-sm bg-[#ff8fb1] text-[#312760]/70 mb-2 px-3 py-1 rounded-full max-[425px]:w-[50vw] sm:w-[22vw] md:w-[22vw] lg:w-[16vw] xl:w-[12vw]">
            <b>{project.category}</b>
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] text-[#312760] font-medium hover:from-[#ffaa54] hover:to-[#ff6b97] transition-all transform hover:scale-105"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
