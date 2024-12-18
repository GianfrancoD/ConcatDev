import { Check, Wallet, X } from "lucide-react";
import React from "react";
export const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[#1E293B] rounded-2xl w-full max-w-6xl overflow-hidden shadow-2xl">
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <h3 className="text-2xl font-bold text-white flex items-center">
            {service.icon}
            <span className="ml-3">{service.title}</span>
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          <p className="text-gray-300 mb-8 text-lg">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#0F172A] rounded-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    {plan.icon}
                    <span className="text-2xl font-bold text-blue-400">
                      {plan.price}
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white mb-0">
                      {plan.name}
                    </h4>
                    {index === 1 && (
                      <span className=" bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="text-gray-300 flex items-start"
                      >
                        <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#0F172A]/50 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Wallet className="w-6 h-6 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">
                Nota Importante
              </h4>
            </div>
            <p className="text-gray-300">
              Es posible elegir los Template/Plantilla Desarrollado por la
              empresa BrandAxiom para una implementación más rápida y
              personalizada. El costo final dependerá de la complejidad del
              proyecto y las funcionalidades adicionales requeridas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
