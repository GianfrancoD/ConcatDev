import { X } from "lucide-react";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
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
    <div className="fixed inset-0 bg-gradient-to-br from-[#020617]/80 via-white/15 to-[#020617]/80 bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[#1E293B] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="relative h-auto">
          <img
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
          <p className="text-blue-400 text-lg mb-4">{member.role}</p>
          <p className="text-gray-300">
            {member.bio ||
              `${member.name} es un miembro clave de nuestro equipo, que aporta experiencia y pasión a su función como ${member.role}. Sus contribuciones son vitales para nuestro éxito y el valor que ofrecemos a nuestros clientes.`}
          </p>
        </div>
      </div>
    </div>
  );
}
