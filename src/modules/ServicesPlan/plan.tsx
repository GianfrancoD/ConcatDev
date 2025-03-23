"use client";

import { useState } from "react";
import React from "react";
import ServiceModal from "../modals/servicesModal/servicesModal.tsx";
import { useLanguageContext } from "../../provider.tsx";
import { PlanData } from "./data/planData.tsx";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useLanguageContext();
  const services = PlanData();

  return (
    <section
      className="relative py-20 bg-gradient-to-b to-[#1A1438] from-[#312760] "
      id="servicios"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A] to-transparent"></div>
      <div className="container mx-auto px-4 flex flex-col justify-center min-h-screen relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent">
          {t("servicesPlans.title", "Nuestros Servicios")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border-[#FCAE60] border-x-[#FF8FB1] border backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent  mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {service.description}
              </p>

              <div className="text-center">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] text-gray-700 font-medium hover:from-[#f7a34e] hover:to-[#fb6894] transition-all transform hover:scale-105">
                  {t("servicesPlans.viewPlans", "Ver Planes")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
