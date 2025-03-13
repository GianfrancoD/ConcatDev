"use client";

import { useState } from "react";
import React from "react";
import ServiceModal from "../modals/servicesModal/servicesModal.tsx";
// import { services } from "./data/planData.tsx";
import { useLanguageContext } from "../../provider.tsx";
import {
  Code,
  Layout,
  Building2,
  FileText,
  ShoppingCart,
  Calendar,
  Laptop,
  ShieldIcon,
} from "lucide-react";

//

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useLanguageContext();

  const services = [
    // {
    //   icon: <Share2 className="w-12 h-12 text-blue-400" />,
    //   title: "Auditoría Web",
    //   description:
    //     "💎 Potenciamos tu presencia en redes sociales con estrategias personalizadas y contenido que enganche a tu cliente potencial. ¿EMPEZAMOS?",

    //   plans: [
    //     {
    //       name: "Impulso",
    //       price: "$200/mes",
    //       description:
    //         "Plan ideal para pequeñas empresas que buscan establecer su presencia en redes sociales.",
    //       features: [
    //         "1 Campaña con 2 Anuncios - Duracion 7 Dias (ADS)",
    //         "Informe mensual básico",
    //         "8 Publicaciones mensuales en Redes Sociales",
    //         "20 Historias mensuales",
    //         "Creacion de Hashtag y Analisis de Hashtag",
    //         "Estrategia de SEO",
    //         "Copywriting",
    //       ],
    //       icon: <Users className="w-8 h-8 text-blue-400" />,
    //     },
    //     {
    //       name: "Dinamico",
    //       price: "$500/mes",
    //       description:
    //         "Perfecto para empresas que esperan un resultando mejor y diferente.",
    //       features: [
    //         "3 Campaña con 6 Anuncios - Duracion 30 Dias (ADS)",
    //         "12 Publicaciones mensuales en Redes Sociales",
    //         "40 Historias mensuales",
    //         "2 Reels mensual para aumentar el engagement",
    //         "Estrategia integral: Segmentacion avanzada y remarketing",
    //         "Informe Exhautivo con recomendaciones",
    //         "Estrategia de SEO",
    //         "Copywriting",
    //       ],
    //       icon: <Gem className="w-8 h-8 text-blue-400" />,
    //     },
    //     {
    //       name: "Crecimiento",
    //       price: "$300/mes ",
    //       description:
    //         "Solución completa para grandes empresas con necesidades específicas.",
    //       features: [
    //         "2 Campaña con 4 Anuncios - Duracion 14 Dias (ADS)",
    //         "10 Publicaciones mensuales en Redes Sociales",
    //         "30 Historias mensuales",
    //         "1 Reels mensual para aumentar el engagement",
    //         "Optimizacion avanzada: Pruebas A/B y ajustes continuos",
    //         "Estrategia de SEO",
    //         "Copywriting",
    //       ],
    //       icon: <Rocket className="w-8 h-8 text-blue-400" />,
    //     },
    //     {
    //       name: "Enterprise",
    //       price: "Personalizado",
    //       description:
    //         "Solución completa para grandes empresas con necesidades específicas.",
    //       features: [
    //         "Gestión completa de redes",
    //         "Estrategia omnicanal",
    //         "Campañas publicitarias",
    //         "Reporting en tiempo real",
    //       ],
    //       icon: <Building2 className="w-8 h-8 text-blue-400" />,
    //     },
    //   ],
    //   note: [
    //     {
    //       frase: "Muchas Gracias por preferirnos 👏👏 ",
    //     },
    //   ],
    // },
    {
      icon: <Code className="w-12 h-12 text-[#FCAE60]" />,
      title: t("services.servicesData.webDev.title", "Web Dev"),
      description: t(
        "services.servicesData.webDev.description",
        "⚡️ Creamos Paginas web a medidas, Optimizados para conversión, Diseño personalizado, Optimizado para un alto Rendimiento y Adaptados a dispotivos moviles."
      ),
      advertencia: t(
        "services.servicesData.webDev.warning",
        "No se usan Plataformas como Wordpress, Prestashop, Shopify."
      ),
      plans: [
        {
          name: t(
            "services.servicesData.webDev.plans.landingPage.name",
            "Landing Page"
          ),
          price: "$430",
          description: t(
            "services.servicesData.webDev.plans.landingPage.description",
            "Diseño de una página única optimizada para conversiones, ideal para campañas específicas o promociones."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.landingPage.features.0",
              "Hasta 1 - 4 página"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.1",
              "Copywriting"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.2",
              "Diseño adaptado a moviles"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.3",
              "Diseño personalizado (UX/UI)"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.4",
              "Optimización SEO"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.5",
              "Botones de WhatsApp"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.6",
              "Entrega de informes mensuales"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.7",
              "Formulario de contacto"
            ),
            t(
              "services.servicesData.webDev.plans.landingPage.features.8",
              "Hosting y dominio (.com) por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.landingPage.time",
            "Tiempo estimado de entrega: 1-3 meses"
          ),
          icon: <Layout className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: "Página Corporativa",
          price: "$470",
          description:
            "Desarrollo de un sitio web completo que represente la identidad de la empresa y sus servicios.",
          features: [
            "Hasta 4 - 6 páginas",
            "Copywriting",
            "Diseño adaptado a moviles",
            "Diseño personalizado (UX/UI)",
            "Optimización SEO",
            "Integración con redes sociales",
            "Boton de WhatssApp",
            "Hosting y dominio (.com) por 1 año",
          ],
          time: "Tiempo estimado de entrega: 1-4 meses",
          icon: <Building2 className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: "Página Informativa",
          price: "$850",
          description:
            "Creación de un sitio informativo que incluya un formulario para contacto o consultas, como suficiente informacion y estrategia para llegar a tu cliente Objetivo.",
          features: [
            "Hasta 4 - 8 páginas",
            "Copywriting",
            "Diseño adaptados a moviles",
            "Diseño personalizado (UX/UI)",
            "Optimización SEO",
            "Análisis mensual del rendimiento",
            "Análisis de tráfico",
            "Publicidad Paga (ADS)",
            "Reporte mensual de análisis de tráfico",
            "Entrega de informes mensuales",
            "Boton de WhatssApp",
            "Hosting y dominio (.com) por 1 año",
          ],
          time: "Tiempo estimado de entrega: 1-3 meses",
          icon: <FileText className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: "E-commerce",
          price: "$4.675",
          description:
            "Desarrollo de una tienda online con todas las funcionalidades necesarias para gestionar productos y pagos en línea.",
          features: [
            "Hasta 5 - 8 páginas",
            "Copywriting",
            "Diseño adaptado a moviles",
            "Diseño personalizado (UX/UI)",
            "Carrito de compras",
            "Integración con pasarela de pago (ej. Stripe, Paypal, etc)",
            "Gestión básica de inventarios",
            "Capacitación sobre gestión de productos",
            "Análisis mensual del rendimiento",
            "Optimización SEO",
            "Optimización SEM",
            "Publicidad Paga (ADS)",
            "Análisis de tráfico",
            "Entrega de informes mensuales",
            "Reporte mensual de análisis de tráfico",
            "Boton de WhatssApp",
            "Hosting y dominio (.com) por 1 año",
          ],
          time: "Tiempo estimado de entrega: 2-5 meses",
          icon: <ShoppingCart className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: "Agendamiento",
          price: "$1.035",
          description:
            "Creación de un sistema para agendar citas o reservas con integración a pasarelas de pago.",
          features: [
            "Hasta 3 - 5 páginas",
            "Copywriting",
            "Diseño adaptado a moviles",
            "Diseño personalizado (UX/UI)",
            "Sistema de agendamiento",
            "Integración con calendario y pasarela de pago",
            "Notificaciones automáticas por email o SMS",
            "Análisis mensual del uso del sistema",
            "Optimización SEO",
            "Analisis de trafico",
            "Publicidad Paga (ADS)",
            "Entrega de informes mensuales",
            "Boton de WhatssApp",
            "Hosting y dominio (.com) por 1 año",
          ],
          time: "Tiempo estimado de entrega: 2-6 meses",
          icon: <Calendar className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: "Software (APP Web)",
          price: "$1,935",
          description:
            "Desarrollo personalizado de una aplicación web que cumpla con necesidades específicas del cliente.",
          features: [
            "Hasta 5 - 7 páginas",
            "Copywriting",
            "Diseño personalizado (UX/UI)",
            "Diseño adaptado a moviles",
            "Actualizaciones regulares según las necesidades del cliente",
            "Publicidad Paga (ADS)",
            "Soporte técnico",
            "ChatBox con integraciòn a Whatsapp",
            "Hosting y dominio (.com) por 1 año",
          ],
          time: "Tiempo estimado de entrega: 4-12 meses",
          icon: <Laptop className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: "Desarrollo Personalizado",
          price: "Consultar",
          description:
            "Ofrecemos un desarrollo completamente personalizado que se adapta a las necesidades específicas de cada cliente. El precio se determinará en función de la complejidad y alcance del proyecto.",
          features: [
            "Diseño a medida que refleja la identidad de tu marca",
            "Interfaz responsiva optimizada para dispositivos móviles",
            "Actualizaciones periódicas según las necesidades cambiantes del cliente",
            "Integración de base de datos para gestión eficiente de información",
            "Optimización SEO para mejorar la visibilidad en buscadores",
            "Gestión de publicidad paga (ADS) para maximizar el alcance",
            "Soporte técnico continuo para resolver cualquier inconveniente",
            "Hosting y dominio (.com) incluido por 1 año",
          ],
          time: "El tiempo estimado de entrega varía según la complejidad del proyecto.",
          icon: <ShieldIcon className="w-8 h-8 text-[#FF8FB1]" />,
        },
      ],
      note: [
        {
          id: 1,
          frase: "Los Precios varias segun la necesidad del tiempo, ",
        },
        {
          id: 2,
          frase:
            "requerimientos específicos, complejidad del diseño y funcionalidades ",
        },
        {
          id: 3,
          frase:
            "adicionales, ofrecemos opciones de pago flexibles y paquetes de ",
        },
        {
          id: 4,
          frase:
            "mantenimiento. Contáctanos para una cotización personalizada.. ",
        },
      ],
    },
    // {
    //   icon: <Globe className="w-12 h-12 text-blue-400" />,
    //   title: "Digital PR",
    //   description:
    //     "Gestionamos tu reputación online y amplificamos tu mensaje a través de medios digitales estratégicos.",
    //   plans: [
    //     {
    //       name: "Starter",
    //       price: "$799/mes",
    //       description:
    //         "Plan básico de gestión de reputación online para pequeñas empresas.",
    //       features: [
    //         "Monitoreo de marca",
    //         "2 comunicados de prensa",
    //         "Gestión de 1 crisis",
    //       ],
    //       icon: <MonitorSmartphone className="w-8 h-8 text-blue-400" />,
    //     },
    //     {
    //       name: "Growth",
    //       price: "$1,599/mes",
    //       description:
    //         "Solución completa de PR digital para empresas en crecimiento.",
    //       features: [
    //         "Estrategia de PR digital",
    //         "4 comunicados de prensa",
    //         "Gestión de reputación",
    //         "Outreach a influencers",
    //       ],
    //       icon: <FileCode2 className="w-8 h-8 text-blue-400" />,
    //     },
    //     {
    //       name: "Leader",
    //       price: "$2,999/mes",
    //       description:
    //         "Gestión integral de relaciones públicas digitales para grandes empresas.",
    //       features: [
    //         "Estrategia integral de PR",
    //         "Contenido exclusivo",
    //         "Gestión de crisis 24/7",
    //         "Partnerships estratégicos",
    //       ],
    //       icon: <Database className="w-8 h-8 text-blue-400" />,
    //     },
    //   ],
    //   note: [
    //     {
    //       frase:
    //         "Los precios indicados son estimaciones base. El costo final puede ",
    //     },
    //   ],
    // },
  ];

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
