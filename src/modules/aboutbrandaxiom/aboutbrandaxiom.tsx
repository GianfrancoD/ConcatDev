import { Lightbulb, Target, Zap, Layers } from "lucide-react";
import React from "react";

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6 text-orange-400" />,
    title: "Innovación Creativa",
    description:
      "Fusionamos ideas vanguardistas con estrategias probadas para crear marcas que destacan.",
  },
  {
    icon: <Target className="w-6 h-6 text-orange-400" />,
    title: "Precisión Estratégica",
    description:
      "Cada decisión está respaldada por datos y alineada con los objetivos de tu negocio.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    title: "Agilidad Digital",
    description:
      "Adaptamos rápidamente las estrategias para aprovechar las últimas tendencias del mercado.",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-400" />,
    title: "Experiencia Integral",
    description:
      "Ofrecemos soluciones completas que abarcan todos los aspectos del branding moderno.",
  },
];

export default function AboutBrandAxion() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-[#312760] to-[#1A1438]"
      id="BrandAxiom"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent">
            ¿Qué es BrandAxion?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-normal">
            BrandAxion es una filosofía innovadora que redefine la Programación
            Web y el Marketing Digital en la era contemporánea. Nos
            especializamos en combinar la analítica avanzada con soluciones de
            desarrollo web para ofrecer a las empresas herramientas efectivas
            que no solo destacan, sino que también impulsan su crecimiento en el
            entorno digital.
            {/* BrandAxion es una filosofía revolucionaria que redefine el branding
            para la era digital. Combinamos la innovación creativa con la
            precisión estratégica para crear marcas que no solo destacan, sino
            que lideran en sus industrias. */}
          </p>
          <p className="text-lg text-gray-400 leading-normal">
            Nuestra metodología única integra principios de diseño funcional,
            tecnologías de vanguardia y un análisis profundo de datos para
            establecer conexiones significativas entre las empresas y sus
            audiencias. En BrandAxion, creemos que el éxito en el mundo digital
            se basa en decisiones informadas, estrategias adaptativas y un
            enfoque centrado en el usuario.
            {/* Nuestra metodología única fusiona principios de diseño
            vanguardistas, tecnología de punta y análisis de datos profundos
            para forjar conexiones significativas entre las marcas y sus
            audiencias. */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {pillar.icon}
                <h3 className="text-xl font-semibold ml-4 text-white">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-gray-300">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8">
            Con BrandAxion, no solo construimos marcas; creamos experiencias que
            transforman la percepción, impulsan el crecimiento y definen el
            futuro de tu negocio en el panorama digital.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] text-gray-700 hover:text-gray-900  font-medium hover:from-[#ffa64d] hover:to-[#f7739a] transition-all transform hover:scale-105"
          >
            Descubre el poder de BrandAxiom
          </a>
        </div>
      </div>
    </section>
  );
}
