import React from "react";

const services = [
  {
    title: "Analisis de Trafico",
    description:
      "Mide el comportamientos de tus usuarios y optimiza tu estrategia digital para maximizar resultados.",
    icon: "📊",
  },
  {
    title: "Optimización",
    description:
      "Optimice su presencia digital para lograr el máximo impacto y conversión.",
    icon: "⚡",
  },
  {
    title: "Desarrollo",
    description:
      "Cree aplicaciones web escalables y modernas que generen resultados.",
    icon: "⚙️",
  },
  {
    title: "Marketing",
    description:
      "Campañas de marketing estratégicas que llegan e involucran a su mercado objetivo.",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#1A1438] via-[#0F172A] to-[#312760]  "
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-b from-[#312760] to-[#1A1438] hover:from-[#FCAE60]/10 hover:to-[#FF8FB1]/10 transition-all duration-300 backdrop-blur-sm border border-[#FCAE60]/10 hover:border-[#FF8FB1]/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
