import React from "react";
import { useLanguageContext } from "../../provider";
export default function Hero() {
  const { t } = useLanguageContext();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="/"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bg-black/50 w-[100vw] h-[100rem] z-50"></div>
        <img
          src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
          alt="Marketing Digital"
          className="w-[100vw] h-full"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20  to-cyan-600/20 mix-blend-multiply" /> */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCAE60]/20 via-[#1A1438]/0 to-[#FF8FB1]/20 mix-blend-multiply" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-32 max-[1024px]:px-0 max-[1024px]:py-0 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight ">
            {/* {"<"} Tu Éxisto,{" "} */}
            {"<"} {t("hero.title", "Tu Éxito")}{" "}
            <span className="bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent text-[60px]">
              {/* Nuestro Código {"/>"} */}
              {t("hero.subtitle", "Nuestro Código")} {"/>"}
            </span>
          </h1>
          <h2 className="relative mb-8">
            <p className="text-xl sm:text-2xl text-orange-300 font-semibold mb-2 ">
              {t("hero.tagline1", "Tu Marca, Nuestra Pasión")}
            </p>
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent">
              {t("hero.tagline2", "Innovación y Eficiencia Garantizadas")}
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400"></div>
          </h2>
          <div className="relative mb-4">
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-[50vw] max-[768px]:max-w-[600vw] mx-auto">
              {t(
                "hero.description",
                "Potenciamos tu Presencia con Programación Web y Marketing Analítico, transformando datos en estrategias efectivas que optimizan tu rendimiento online."
              )}
              <br />
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              t("hero.services.webDev", "Programación Web"),
              t("hero.services.customSoftware", "Software a Medida"),
              t("hero.services.ecommerce", "E-commerce"),
              t("hero.services.seo", "SEO"),
              t("hero.services.sem", "SEM"),
              t("hero.services.socialAds", "Social Ads"),
              t("hero.services.webApps", "Aplicaciones Web"),
              t("hero.services.trafficAnalysis", "Análisis de Tráfico"),
            ].map((service, index) => (
              <span
                key={index}
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium max-md:hidden"
              >
                {service}
              </span>
            ))}
          </div>
          <a
            href="#BrandAxiom"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1]  text-[#312760] text-lg font-medium hover:from-[#ffa54b] hover:to-[#fa7da3]  hover:text-black transition-all transform hover:scale-105 inline-block"
          >
            {t("hero.heroBt.btHero", "Empieza tu viaje")}
          </a>
        </div>
      </div>
    </section>
  );
}
