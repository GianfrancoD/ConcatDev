// ServiceModal.tsx (modificado)
import {
  Check,
  ChevronRight,
  Library,
  Plus,
  Wallet,
  X,
  CircleMinus,
} from "lucide-react";
import React, { useState } from "react";
import { useLanguageContext } from "../../../provider.tsx";
import { useCostData } from "./data/costData.tsx";

export const ServiceModal = ({ service, onClose }) => {
  const [hasQuote, setHasQuote] = useState(false);
  const [quoteItems, setQuoteItems] = useState([]);
  const cost = useCostData();
  const { t } = useLanguageContext();

  // const calculateTotal = () => {
  //   return quoteItems.reduce((sum, item) => sum + item.price, null);
  // };
  const whatsappNumber = "+5804124122809";
  const whatsappMessage = encodeURIComponent(
    `¡Hola!👋🏻 ConcatDev, Estoy interesado en obtener más información sobre esta cotización:\n ${
      quoteItems.map((item) => `${item.label}`)
      // .join("\n")} \nTotal: $${calculateTotal()}`
    }`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleAddCost = (costItem) => {
    setQuoteItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.label === costItem.label
      );
      if (!itemExists) {
        return [...prevItems, costItem];
      }
      return prevItems;
    });
  };

  const handleRemoveCost = (itemToRemove) => {
    setQuoteItems((prevItems) =>
      prevItems.filter((item) => item.label !== itemToRemove.label)
    );
  };

  const handleCreateQuote = () => {
    setHasQuote(true);
  };

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
          {/* card modal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#1A1438] rounded-lg overflow-hidden `}
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
                {/* Cards Modals */}
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
            {/* Nueva cotizacion */}
            {hasQuote && (
              <div className="bg-[#1A1438] rounded-lg overflow-hidden p-6">
                <h4 className="flex justify-end text-2xl font-bold bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent mb-4">
                  Cotización
                </h4>
                <div className="p-6 border-b border-gray-700">
                  <span className="text-gray-300 text-sm ">
                    Relativamente una cotizacion a la necesidad del cliente, en
                    la cual podra tener una idea de su necesidad antes de una
                    reunion para terminar acuerdos y terminos de su Aplicacion
                  </span>
                </div>
                <br />
                {quoteItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-white mb-2"
                  >
                    <span>{item.label}</span>
                    <button
                      onClick={() => handleRemoveCost(item)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <CircleMinus />
                    </button>
                  </div>
                ))}
                <br />
                <a
                  className="w-full flex items-center justify-evenly px-4 py-3 rounded-lg bg-gradient-to-b to-[#FCAE60] from-[#FF8FB1] text-[#312760] font-medium hover:to-[#ffa348] hover:from-[#ff78a0] transition-all transform hover:scale-105"
                  href={whatsappLink}
                >
                  {t(
                    "services.servicesData.webDev.plans.landingPage.btService",
                    "Solicitar Cotización"
                  )}
                  <ChevronRight className="w-7 h-7 text-orange-600 mr-4" />
                </a>
              </div>
            )}
          </div>
          {/* Costo Adicionales */}
          {service.title === "Web Dev" && (
            <div className="mt-8 p-6 bg-gradient-to-br from-[#312760] to-[#1A1438] rounded-lg border border-blue-500/20 shadow-lg">
              <div className="flex items-center mb-6">
                <Library className="w-8 h-8 text-[#ff78a0] mr-4" />
                <h4 className="text-2xl font-semibold text-[#ffa348]">
                  {t(
                    "services.servicesData.webDev.note4",
                    // "Costos Adicionales"
                    "Cotización Personalizada"
                  )}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* costo adicionales */}
                {cost.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-5 bg-[#1A1438] border border-[#FCAE60]/20 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    <span className="text-gray-300">{item.label}</span>
                    <button
                      onClick={() => handleAddCost(item)}
                      // className=" rounded-3xl bg-blue-500 z-50"
                      className="flex w-7 h-7 justify-center items-center rounded-full bg-gradient-to-r from-[#FF8FB1] to-[#FCAE60] text-white shadow hover:scale-110 transition-transform"
                    >
                      <Plus />
                    </button>
                  </div>
                ))}
              </div>
              {!hasQuote && (
                <button
                  onClick={handleCreateQuote}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] text-gray-700 font-medium hover:from-[#f7a34e] hover:to-[#fb6894] transition-all transform hover:scale-105 mt-4"
                >
                  Cotizar
                </button>
              )}
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
