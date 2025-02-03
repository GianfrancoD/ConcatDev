import { Zap, Target, TrendingUp, Users } from "lucide-react";
import React from "react";

const reasons = [
  {
    icon: <Zap className="w-8 h-8 text-[#fcae60]" />,
    title: "Innovación Constante",
    description:
      "En un mundo digital en constante evolución, nuestros servicios te mantienen a la vanguardia de las últimas tendencias y tecnologías.",
  },
  {
    icon: <Target className="w-8 h-8 text-[#fcae60]" />,
    title: "Estrategias Personalizadas",
    description:
      "Desarrollamos soluciones a medida que se alinean perfectamente con tus objetivos de negocio y las necesidades de tu audiencia.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#fcae60]" />,
    title: "Resultados Medibles",
    description:
      "Nuestro enfoque basado en datos garantiza que cada acción se traduzca en resultados tangibles y un ROI significativo.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#fcae60]" />,
    title: "Experiencia Comprobada",
    description:
      "Con años de experiencia y un historial de éxitos, somos el socio ideal para impulsar tu presencia digital.",
  },
];

export default function WhyOurServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1438] to-[#312760]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent">
          ¿Por qué necesitas nuestros servicios?
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          En la era digital, destacar es esencial. Nuestros servicios no solo te
          ayudan a sobresalir, sino que transforman tu presencia online en un
          motor de crecimiento para tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="text-xl font-semibold ml-4 text-white">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] text-[#312760] font-medium hover:from-[#ffa143] hover:to-[#fc6e99] transition-all transform hover:scale-105"
          >
            Potencia tu negocio ahora
          </a>
        </div>
      </div>
    </section>
  );
}
