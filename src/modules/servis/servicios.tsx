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
      className="py-20 bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#0F172A]"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-b from-[#1E293B] to-white/5 hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-blue-500/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
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
