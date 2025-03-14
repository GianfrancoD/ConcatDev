import {
  Lightbulb,
  Puzzle,
  Activity,
  BadgeCheck,
  GitBranch,
  RotateCcw,
  BarChart,
  Eye,
} from "lucide-react";
import React from "react";
import { useLanguageContext } from "../../provider";

export default function WhyOurServices() {
  const { t } = useLanguageContext();

  const reasons = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.constantInnovation.title",
        "Innovación Constante"
      ),
      description: t(
        "whyOurServices.reasons.constantInnovation.description",
        "En un mundo digital en constante evolución, nuestros servicios te mantienen a la vanguardia de las últimas tendencias y tecnologías."
      ),
    },
    {
      icon: <Puzzle className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.customStrategies.title",
        "Estrategias Personalizadas"
      ),
      description: t(
        "whyOurServices.reasons.customStrategies.description",
        "Desarrollamos soluciones a medida que se alinean perfectamente con tus objetivos de negocio y las necesidades de tu audiencia."
      ),
    },
    {
      icon: <Activity className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.measurableResults.title",
        "Resultados Medibles"
      ),
      description: t(
        "whyOurServices.reasons.measurableResults.description",
        "Nuestro enfoque basado en datos garantiza que cada acción se traduzca en resultados tangibles y un ROI significativo."
      ),
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.provenExperience.title",
        "Experiencia Comprobada"
      ),
      description: t(
        "whyOurServices.reasons.provenExperience.description",
        "Con años de experiencia y un historial de éxitos, somos el socio ideal para impulsar tu presencia digital."
      ),
    },
    {
      icon: <GitBranch className="w-8 h-8 text-[#fcae60]" />,
      title: t("whyOurServices.reasons.adaptability.title", "Adaptabilidad"),
      description: t(
        "whyOurServices.reasons.adaptability.description",
        "El entorno digital cambia rápidamente, y nuestra capacidad para adaptarnos a nuevas tendencias y tecnologías asegura que tu negocio se mantenga relevante. Implementamos soluciones flexibles que pueden evolucionar junto con tus necesidades y las demandas del mercado."
      ),
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.measurableImpact.title",
        "Impacto Mediables"
      ),
      description: t(
        "whyOurServices.reasons.measurableImpact.description",
        "Con nuestras soluciones basadas en datos, puedes obtener análisis en tiempo real sobre el rendimiento de tu sitio web o aplicación. Esto te permite tomar decisiones informadas y optimizar tus estrategias para maximizar el impacto en tus clientes."
      ),
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.continuousImprovement.title",
        "Mejora Continua"
      ),
      description: t(
        "whyOurServices.reasons.continuousImprovement.description",
        "Nuestro equipo está actualizado y en constante aprendizaje con las innovaciones tecnológicas. Esto garantiza que cada proyecto que emprendemos esté respaldado por el conocimiento más reciente y las mejores prácticas de la industria."
      ),
    },
    {
      icon: <Eye className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyOurServices.reasons.continuousSupport.title",
        "Soporte Continuo y Mantenimiento"
      ),
      description: t(
        "whyOurServices.reasons.continuousSupport.description",
        "Nuestro compromiso no termina con la entrega del proyecto. Ofrecemos soporte continuo y mantenimiento para asegurarnos de que tu página funcione sin problemas y se mantenga actualizada con las últimas tecnologías. Monitoreamos tu sistema de forma constante para detectar y resolver cualquier error antes de que afecte a tus usuarios."
      ),
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1438] to-[#312760]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent">
          {t("whyOurServices.title", "¿Por qué necesitas nuestros servicios?")}
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {t(
            "whyOurServices.subtitle",
            "En la era digital, destacar es esencial. Nuestros servicios no solo te ayudan a sobresalir, sino que transforman tu presencia online en un motor de crecimiento para tu negocio."
          )}
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
            {t("whyOurServices.cta", "Potencia tu negocio ahora")}
          </a>
        </div>
      </div>
    </section>
  );
}
