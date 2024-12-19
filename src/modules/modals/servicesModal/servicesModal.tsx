import { Check, Library, Wallet, X } from "lucide-react";
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
                  {plan.time && (
                    <div className="bg-blue-500/20 px-3 py-3 mb-4">
                      <p className="text-sm text-blue-300">{plan.time}</p>
                    </div>
                  )}
                  <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>

          {service.title === "Web Dev" && (
            <div className="mt-8 p-6 bg-[#0F172A]/50 rounded-lg border border-blue-500/20">
              <div className="flex flex-row items-center mb-4">
                <Library className="mr-3 w-6 h-6 -mt-4 text-blue-400" />

                <h4 className="text-lg font-semibold text-white mb-4">
                  Costos Adicionales
                </h4>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold">Diseño</span>
                </li>
                <li>
                  <span className="font-semibold">Hosting</span>{" "}
                  <span className="bg-blue-500/90 text-white text-[60%] py-1 px-2 ml-5 rounded-3xl">
                    Ya viene incluido
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Dominio</span>{" "}
                  <span className="bg-blue-500/90 text-white text-[60%] py-1 px-2 ml-4 rounded-3xl">
                    Ya viene incluido
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Gestión de Publicidad</span>{" "}
                </li>
                <li>
                  <span className="font-semibold">Bases de Datos</span>
                </li>
                <li>
                  <span className="font-semibold">Pasarela de Pago</span>
                </li>
                <li>
                  <span className="font-semibold">Formularios Avanzados</span>{" "}
                </li>
                <li className="font-semibold">SEM</li>
                <li className="font-semibold">SEO</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Nota: Los precios pueden variar según la complejidad del
                proyecto y los requerimientos específicos.
              </p>
            </div>
          )}

          <div className="mt-8 p-6 bg-[#0F172A]/50 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Wallet className="w-6 h-6 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">
                Nota Importante
              </h4>
            </div>
            <p className="text-gray-300">
              {service.note.map((notes) => (
                <span key={notes.id}>{notes.frase}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
