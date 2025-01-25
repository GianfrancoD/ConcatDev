import { X } from "lucide-react";
import React from "react";

// interface Info {
//   frases: [key: string];
// }

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  info: { frases: string[] }[];
  skill: string[];
}

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

export default function TeamMemberModal({
  member,
  onClose,
}: TeamMemberModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[#1E293B] rounded-2xl w-full max-w-[90vw] sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="relative h-48 sm:h-56 md:h-64 flex-shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className="py-0 px-0 h-[35vh] w-full max-md:h-[24vh] sm:h-[17.5rem]"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-1.5 sm:p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6 overflow-y-auto flex-grow">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
              {member.name}
            </h3>
            <p className="text-blue-400 text-base sm:text-lg md:text-xl font-semibold">
              {member.role}
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {member.bio && (
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {member.bio}
              </p>
            )}
            {
              <ul className="list-disc pl-5">
                {member.info.map((frase, fraseIndex) => (
                  <li
                    className="text-gray-300 text-sm sm:text-base leading-relaxed"
                    key={fraseIndex}
                  >
                    {member.name} {frase.frases}
                  </li>
                ))}
              </ul>
            }
          </div>
          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
              Áreas de Expertise:
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.skill.map((allSkill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs sm:text-sm"
                >
                  {allSkill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
