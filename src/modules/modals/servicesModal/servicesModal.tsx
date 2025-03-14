import { Check, ChevronRight, Library, Wallet, X } from "lucide-react";
import React from "react";
// import { cost } from "./data/costData.tsx";
import { useLanguageContext } from "../../../provider.tsx";
import { CostAditional } from "./interfaces/costAdicional.tsx";

export const ServiceModal = ({ service, onClose }) => {
  const { t } = useLanguageContext();

  const cost: CostAditional[] = [
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.0.label",
        "Diseño Moderno"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.1.label",
        "Hosting"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.2.label",
        "Dominio"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.3.label",
        "Publicidad Paga (ADS)"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.4.label",
        "Carrito de compras"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.5.label",
        "Formulario de Registro y Login de usuarios"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.6.label",
        "Pasarela de Pago"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.7.label",
        "Formularios de Contacto"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.8.label",
        "SEO (Posicionamiento Orgánico)"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.9.label",
        "SEM (Posicionamiento Pago)"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.10.label",
        "Reservas y Agendamientos"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.11.label",
        "Comentarios y Reseñas"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.12.label",
        "Encuestas y Feedback"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.13.label",
        "Notificaciones automáticas por email o SMS"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.14.label",
        "Integración con redes sociales"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.15.label",
        "Integración para Google Maps"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.16.label",
        "ChatBox"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.17.label",
        "Botón de Whatsapp"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.18.label",
        "Reporte mensual de análisis de tráfico"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.19.label",
        "Entregas de informes Mensual"
      ),
      included: true,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.20.label",
        "ChatBox con Integración a Whatsapp"
      ),
      included: false,
    },
    {
      label: t(
        "services.servicesData.webDev.CostAddicional.21.label",
        "Dashboard"
      ),
      included: false,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[#312760] rounded-2xl w-full max-w-6xl overflow-hidden shadow-2xl">
        <div className="p-6 flex justify-between items-center border-b border-[#FCAE60]/20">
          <h3 className="text-2xl font-bold bg-gradient-to-b to-[#FCAE60] from-[#FF8FB1] bg-clip-text text-transparent flex items-center">
            {service.icon}
            <span className="ml-3">{service.title}</span>
          </h3>
          <button
            onClick={onClose}
            className="text-orange-400 hover:text-orange-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[80vh] bg-gradient-to-b to-[#1A1438] from-[#312760]">
          <p className="text-[#FCAE60] mb-8 text-lg">{service.description}</p>

          {service.advertencia && (
            <div className="bg-gradient-to-b to-[#FCAE60]/0 from-[#FF8FB1]/20 border border-red-500/20 rounded-lg py-5 -mt-3 mb-8 px-5">
              <p className="bg-gradient-to-b to-[#FCAE60] from-[#FF8FB1] bg-clip-text text-transparent font-semibold flex items-center">
                <X className="w-5 h-5 mr-2 text-pink-500" />
                {service.advertencia}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#1A1438] rounded-lg overflow-hidden ${
                  index === 1 &&
                  "border-[#FCAE60] border-x-[#FF8FB1] border backdrop-blur-sm"
                }`}
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-4 ">
                    {plan.icon}
                    <span className="text-2xl font-bold bg-gradient-to-b to-[#FCAE60] from-[#FF8FB1] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white mb-0">
                      {plan.name}
                    </h4>
                    {index === 1 && (
                      <span className="bg-[#FF8FB1] text-[#312760]/70 text-xs font-bold px-2 py-1.5 rounded-full">
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
                        <Check className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.time && (
                    <div className="bg-[#FCAE60]/20 px-3 py-3 mb-4">
                      <p className="text-sm text-[#FCAE60]">{plan.time}</p>
                    </div>
                  )}
                  <button className="w-full flex items-center justify-evenly px-4 py-3 rounded-lg bg-gradient-to-b to-[#FCAE60] from-[#FF8FB1] text-[#312760] font-medium hover:to-[#ffa348] hover:from-[#ff78a0] transition-all transform hover:scale-105">
                    {t(
                      "services.servicesData.webDev.plans.landingPage.btService",
                      "Solicitar Cotización"
                    )}
                    <ChevronRight className="w-7 h-7 text-orange-600 mr-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {service.title === "Web Dev" && (
            <div className="mt-8 p-6 bg-gradient-to-br from-[#312760] to-[#1A1438] rounded-lg border border-blue-500/20 shadow-lg">
              <div className="flex items-center mb-6">
                <Library className="w-8 h-8 text-[#ff78a0] mr-4" />
                <h4 className="text-2xl font-semibold text-[#ffa348]">
                  {t(
                    "services.servicesData.webDev.note4",
                    "Costos Adicionales"
                  )}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cost.map((items, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check
                      className={`w-5 h-5 ${
                        items.included ? "text-green-500" : "text-gray-500"
                      }`}
                    />
                    <span className="text-gray-300">{items.label}</span>
                    {items.included && (
                      <span className="bg-[#FCAE60]/20 text-[#FCAE60] text-xs py-1 px-2 rounded-full">
                        {t(
                          "services.servicesData.webDev.incluidos",
                          "Incluido"
                        )}
                      </span>
                    )}
                    {items.required && (
                      <span className="bg-[#FF8FB1]/20 text-[#FF8FB1] text-xs py-1 px-2 rounded-full">
                        {items.required}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-400 italic">
                {t("services.servicesData.webDev.note2.1", "Nota")}:{" "}
                {t(
                  "services.servicesData.webDev.note2.0",
                  "Los precios pueden variar según la complejidad del proyecto y los requerimientos específicos."
                )}
              </p>
            </div>
          )}
          <div className="mt-8 p-6 bg-gradient-to-br from-[#312760]/20 to-[#1A1438]/20 rounded-lg border border-blue-500/20 shadow-lg">
            <div className="flex items-center mb-4">
              <Wallet className="w-6 h-6 text-[#ff78a0] mr-3" />
              <h4 className="text-lg font-semibold text-[#FCAE60]">
                {t("services.servicesData.webDev.note3", "Nota Importante")}
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
