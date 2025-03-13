import { Lightbulb, Target, Zap, Layers } from "lucide-react";
import React from "react";
import { useLanguageContext } from "../../provider";
export default function AboutBrandAxion() {
  const { t } = useLanguageContext();

  const pillars = [
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-400" />,
      title: t(
        "aboutBrandAxiom.pillars.creativeInnovation.title",
        "Innovación Creativa"
      ),
      description: t(
        "aboutBrandAxiom.pillars.creativeInnovation.description",
        "Combinamos ideas vanguardistas con estrategias efectivas para desarrollar marcas que realmente destacan en el mercado."
      ),
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: t(
        "aboutBrandAxiom.pillars.strategicPrecision.title",
        "Precisión Estratégica"
      ),
      description: t(
        "aboutBrandAxiom.pillars.strategicPrecision.description",
        "Cada decisión que tomamos está respaldada por datos sólidos y alineada con los objetivos específicos de tu negocio, asegurando un enfoque claro y efectivo."
      ),
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: t(
        "aboutBrandAxiom.pillars.digitalAgility.title",
        "Agilidad Digital"
      ),
      description: t(
        "aboutBrandAxiom.pillars.digitalAgility.description",
        "Nos adaptamos rápidamente a las últimas tendencias del mercado, ajustando nuestras estrategias para maximizar tu impacto digital."
      ),
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-400" />,
      title: t(
        "aboutBrandAxiom.pillars.comprehensiveExperience.title",
        "Experiencia Integral"
      ),
      description: t(
        "aboutBrandAxiom.pillars.comprehensiveExperience.description",
        "Ofrecemos soluciones completas que abarcan todos los aspectos del branding moderno, desde la conceptualización hasta la ejecución."
      ),
    },
  ];
  return (
    <section
      className="py-20 bg-gradient-to-b from-[#312760] to-[#1A1438]"
      id="BrandAxiom"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent">
            {t("aboutBrandAxiom.title", "¿Qué es ConcatDev?")}
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-normal">
            {t(
              "aboutBrandAxiom.description1",
              "ConcatDev es la integración estratégica de Programación Web y Marketing Digital para impulsar el crecimiento de tu negocio en la era digital. Combinamos analítica avanzada con desarrollo web de vanguardia para ofrecerte herramientas efectivas que te permitan destacar y conectar con tu audiencia."
            )}
          </p>
          <p className="text-lg text-gray-400 leading-normal">
            {t(
              "aboutBrandAxiom.description2",
              "Nuestra metodología única se basa en un diseño funcional, tecnología de punta y un profundo análisis de datos. En ConcatDev, creamos conexiones significativas entre tu empresa y tus clientes, transformando datos en decisiones informadas y estrategias adaptativas centradas en el usuario."
            )}
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
            {t(
              "aboutBrandAxiom.finalDescription",
              "Con concatDev creamos experiencias digitales innovadoras que transforman tu marca, impulsan tu crecimiento. Nos adaptamos a las últimas tecnologías para ofrecerte soluciones a medida que generan resultados reales."
            )}
          </p>
          <a
            href="https://wa.me/+584124122809"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] text-gray-700 hover:text-gray-900  font-medium hover:from-[#ffa64d] hover:to-[#f7739a] transition-all transform hover:scale-105"
          >
            {t("aboutBrandAxiom.cta", "Impulsa tu éxito con ConcatDev")}
          </a>
        </div>
      </div>
    </section>
  );
}
