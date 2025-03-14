"use client";

import { Globe, ShoppingBag, BarChart, Rocket } from "lucide-react";
import React from "react";
import { useLanguageContext } from "../../provider"; // Asegúrate de que la ruta sea correcta

export const WhyWebPresence = () => {
  const { t } = useLanguageContext();

  const reasons = [
    {
      icon: <Globe className="w-8 h-8 text-[#fcae60]" />,
      title: t("whyWebPresence.reasons.visibility.title", "Visibilidad 24/7"),
      description: t(
        "whyWebPresence.reasons.visibility.description",
        "Tu sitio web es tu vendedor más dedicado, trabajando incansablemente las 24 horas del día, los 7 días de la semana."
      ),
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyWebPresence.reasons.marketExpansion.title",
        "Expansión de Mercado"
      ),
      description: t(
        "whyWebPresence.reasons.marketExpansion.description",
        "Un e-commerce te permite llegar a clientes en todo el mundo, expandiendo drásticamente tu base de clientes potenciales."
      ),
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyWebPresence.reasons.actionableData.title",
        "Datos Accionables"
      ),
      description: t(
        "whyWebPresence.reasons.actionableData.description",
        "Las landing pages proporcionan insights valiosos sobre tus clientes, permitiéndote optimizar continuamente tus estrategias."
      ),
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#fcae60]" />,
      title: t(
        "whyWebPresence.reasons.acceleratedGrowth.title",
        "Crecimiento Acelerado"
      ),
      description: t(
        "whyWebPresence.reasons.acceleratedGrowth.description",
        "Una presencia web sólida es el catalizador para un crecimiento exponencial en la era digital."
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#312760] to-[#1a1438]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent">
          {t("whyWebPresence.title", "La importancia de tu presencia digital")}
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {t(
            "whyWebPresence.subtitle",
            "En el competitivo panorama actual, tu sitio web no es solo una opción, es una necesidad. Es tu escaparate digital, tu primera impresión y tu herramienta más poderosa para convertir visitantes en clientes leales."
          )}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
        <div className="bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#312760] mb-4 ">
            {t(
              "whyWebPresence.callout.title",
              "¿Listo para dominar el mundo digital?"
            )}
          </h3>
          <p className="text-[#312760] mb-6 ">
            {t(
              "whyWebPresence.callout.description",
              "No dejes pasar la oportunidad de transformar tu negocio. Cada segundo cuenta en el mundo online."
            )}
          </p>
          <a
            href="https://wa.me/+584124122809"
            className="inline-block px-8 py-3 bg-[#312760] text-[#fcae60] font-medium rounded-full hover:bg-[#1A1438] transition-all transform hover:scale-105"
          >
            {t("whyWebPresence.callout.cta", "Comienza tu viaje digital")}
          </a>
        </div>
      </div>
    </section>
  );
};
