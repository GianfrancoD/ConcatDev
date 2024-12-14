import { X } from "lucide-react";
import React from "react";

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface ServiceModalProps {
  service: {
    title: string;
    plans: Plan[];
  };
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[#1E293B] rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {service.title} - Planes
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#0F172A] rounded-lg p-6 flex flex-col"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h4>
                <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">
                  {plan.price}
                </p>
                <ul className="flex-grow mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="text-gray-300 mb-2 flex items-start text-sm sm:text-base"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                  Seleccionar Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
