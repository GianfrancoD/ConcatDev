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
  Rocket,
  Gem,
  Users,
  Siren,
} from "lucide-react";

//

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useLanguageContext();

  const services = [
    {
      icon: <Siren className="w-12 h-12 text-blue-400" />,
      title: "Auditoría Web",
      description:
        "🔍 Evaluamos el rendimiento de tu sitio web y te proporcionamos recomendaciones para optimizar la conversión. ¡Comencemos a mejorar tu presencia en línea!",

      plans: [
        {
          name: "Auditoría Básica",
          price: "$250",
          description: "Incluye análisis de rendimiento y SEO básico.",
          features: [
            "Evaluación de la velocidad de carga de la página.",
            "Optimización de imágenes y recursos.",
            "Análisis de palabras clave básico.",
            "Optimización on-page y off-page",
            "Evaluación de la navegación y estructura del menú.",
            "Verificación de certificados SSL",
            "Evaluación de la calidad y relevancia del contenido.",
          ],
          icon: <Users className="w-8 h-8 text-blue-400" />,
        },
        {
          name: "Auditoría Completa",
          price: "$500",
          description:
            "Incluye todos los componentes mencionados (rendimiento, SEO, usabilidad, seguridad, contenido, tráfico, conversiones).",
          features: [
            "Análisis de la velocidad de carga de la página.",
            "Optimización de imágenes y recursos.",
            "Análisis de palabras clave y optimización on-page y off-page.",
            "Estructura de URL y enlaces internos.",
            "Evaluación de la navegación y estructura del menú.",
            "Diseño responsivo y compatibilidad móvil.",
            "Verificación de certificados SSL y vulnerabilidades de seguridad.",
            "Evaluación de la calidad y relevancia del contenido.",
            "Análisis de fuentes de tráfico y comportamiento del usuario.",
            "Análisis de la tasa de conversión y efectividad de las llamadas a la acción.",
          ],
          icon: <Gem className="w-8 h-8 text-blue-400" />,
        },
        {
          name: "Auditoría Personalizada",
          price: "A partir de $750",
          description:
            "Para sitios más grandes o complejos, se puede ofrecer un precio personalizado basado en las necesidades específicas del cliente.",
          features: [
            "Auditoría completa adaptada a las necesidades del cliente.",
            "Análisis detallado de todos los componentes mencionados.",
            "Recomendaciones personalizadas para optimización.",
            "Informe detallado con hallazgos y recomendaciones.",
            "Reunión de presentación para discutir resultados y próximos pasos.",
          ],
          icon: <Rocket className="w-8 h-8 text-blue-400" />,
        },
      ],
      process: [
        {
          step: "Reunión Inicial",
          description:
            "Reunión con el cliente para entender sus objetivos y expectativas.",
        },
        {
          step: "Recopilación de Datos",
          description: "Uso de herramientas de análisis para recopilar datos.",
        },
        {
          step: "Análisis",
          description:
            "Evaluación de cada componente mencionado anteriormente utilizando herramientas.",
        },
        {
          step: "Informe",
          description:
            "Creación de un informe detallado con hallazgos y recomendaciones.",
        },
        {
          step: "Reunión de Presentación",
          description:
            "Presentación de los resultados al cliente y discusión de los próximos pasos.",
        },
      ],
      note: [
        {
          frase: "¡Muchas gracias por preferirnos! 👏👏",
        },
      ],
    },
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
          name: t(
            "services.servicesData.webDev.plans.corporate.name",
            "Página Corporativa"
          ),
          price: "$470",
          description: t(
            "services.servicesData.webDev.plans..corporate.description",
            "Desarrollo de un sitio web completo que represente la identidad de la empresa y sus servicios."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.corporate.features.0",
              "Hasta 4 - 6 páginas"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.1",
              "Copywriting"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.2",
              "Diseño adaptado a moviles"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.3",
              "Diseño personalizado (UX/UI)"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.4",
              "Optimización SEO"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.5",
              "Integración con redes sociales"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.6",
              "Boton de WhatssApp"
            ),
            t(
              "services.servicesData.webDev.plans.corporate.features.7",
              "Hosting y dominio (.com) por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.corporate.time",
            "Tiempo estimado de entrega: 1-4 meses"
          ),
          icon: <Building2 className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: t(
            "services.servicesData.webDev.plans.informative.name",
            "Página Informativa"
          ),
          price: "$850",
          description: t(
            "services.servicesData.webDev.plans.informative.description",
            "Creación de un sitio informativo que incluya un formulario para contacto o consultas, como suficiente informacion y estrategia para llegar a tu cliente Objetivo."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.informative.features.0",
              "Hasta 4 - 8 páginas"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.1",
              "Copywriting"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.2",
              "Diseño adaptados a moviles"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.3",
              "Diseño personalizado (UX/UI)"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.4",
              "Optimización SEO"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.5",
              "Análisis mensual del rendimiento"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.6",
              "Análisis de tráfico"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.7",
              "Publicidad Paga (ADS)"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.8",
              "Reporte mensual de análisis de tráfico"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.9",
              "Entrega de informes mensuales"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.10",
              "Boton de WhatssApp"
            ),
            t(
              "services.servicesData.webDev.plans.informative.features.11",
              "Hosting y dominio (.com) por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.informative.time",
            "Tiempo estimado de entrega: 1-3 meses"
          ),
          icon: <FileText className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: t(
            "services.servicesData.webDev.plans.ecommerce.name",
            "E-commerce"
          ),
          price: "$4.675",
          description: t(
            "services.servicesData.webDev.plans.ecommerce.description",
            "Desarrollo de una tienda online con todas las funcionalidades necesarias para gestionar productos y pagos en línea."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.ecommerce.features.0",
              "Hasta 5 - 8 páginas"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.1",
              "Copywriting"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.2",
              "Diseño adaptado a moviles"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.3",
              "Diseño personalizado (UX/UI)"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.4",
              "Carrito de compras"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.5",
              "Integración con pasarela de pago (ej. Stripe, Paypal, etc)"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.6",
              "Gestión básica de inventarios"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.7",
              "Capacitación sobre gestión de productos"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.8",
              "Análisis mensual del rendimiento"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.9",
              "Optimización SEO"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.10",
              "Optimización SEM"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.11",
              "Publicidad Paga (ADS)"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.12",
              "Análisis de tráfico"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.13",
              "Entrega de informes mensuales"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.14",
              "Reporte mensual de análisis de tráfico"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.15",
              "Boton de WhatssApp"
            ),
            t(
              "services.servicesData.webDev.plans.ecommerce.features.16",
              "Hosting y dominio (.com) por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.ecommerce.time",
            "Tiempo estimado de entrega: 2-5 meses"
          ),
          icon: <ShoppingCart className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: t(
            "services.servicesData.webDev.plans.scheduling.name",
            "Agendamiento"
          ),
          price: "$1.035",
          description: t(
            "services.servicesData.webDev.plans.scheduling.description",
            "Creación de un sistema para agendar citas o reservas con integración a pasarelas de pago."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.scheduling.features.0",
              "Hasta 3 - 5 páginas"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.1",
              "Copywriting"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.2",
              "Diseño adaptado a moviles"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.3",
              "Diseño personalizado (UX/UI)"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.4",
              "Sistema de agendamiento"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.5",
              "Integración con calendario y pasarela de pago"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.6",
              "Notificaciones automáticas por email o SMS"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.7",
              "Análisis mensual del uso del sistema"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.8",
              "Optimización SEO"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.9",
              "Analisis de trafico"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.10",
              "Publicidad Paga (ADS)"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.11",
              "Entrega de informes mensuales"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.12",
              "Boton de WhatssApp"
            ),
            t(
              "services.servicesData.webDev.plans.scheduling.features.13",
              "Hosting y dominio (.com) por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.scheduling.time",
            "Tiempo estimado de entrega: 2-6 meses"
          ),
          icon: <Calendar className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: t(
            "services.servicesData.webDev.plans.software.name",
            "Software (APP Web)"
          ),
          price: "$1,935",
          description: t(
            "services.servicesData.webDev.plans.software.description",
            "Desarrollo personalizado de una aplicación web que cumpla con necesidades específicas del cliente."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.software.features.0",
              "Hasta 5 - 7 páginas"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.1",
              "Copywriting"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.2",
              "Diseño personalizado (UX/UI)"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.3",
              "Diseño adaptado a moviles"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.4",
              "Actualizaciones regulares según las necesidades del cliente"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.5",
              "Publicidad Paga (ADS)"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.6",
              "Soporte técnico"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.7",
              "ChatBox con integraciòn a Whatsapp"
            ),
            t(
              "services.servicesData.webDev.plans.software.features.8",
              "Hosting y dominio (.com) por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.software.time",
            "Tiempo estimado de entrega: 4-12 meses"
          ),
          icon: <Laptop className="w-8 h-8 text-[#FF8FB1]" />,
        },
        {
          name: t(
            "services.servicesData.webDev.plans.custom.name",
            "Desarrollo Personalizado"
          ),
          price: t(
            "services.servicesData.webDev.plans.custom.price",
            "Consultar"
          ),
          description: t(
            "services.servicesData.webDev.plans.custom.description",
            "Ofrecemos un desarrollo completamente personalizado que se adapta a las necesidades específicas de cada cliente. El precio se determinará en función de la complejidad y alcance del proyecto."
          ),
          features: [
            t(
              "services.servicesData.webDev.plans.custom.features.0",
              "Diseño a medida que refleja la identidad de tu marca"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.1",
              "Interfaz responsiva optimizada para dispositivos móviles"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.2",
              "Actualizaciones periódicas según las necesidades cambiantes del cliente"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.3",
              "Integración de base de datos para gestión eficiente de información"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.4",
              "Optimización SEO para mejorar la visibilidad en buscadores"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.5",
              "Gestión de publicidad paga (ADS) para maximizar el alcance"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.6",
              "Soporte técnico continuo para resolver cualquier inconveniente"
            ),
            t(
              "services.servicesData.webDev.plans.custom.features.7",
              "Hosting y dominio (.com) incluido por 1 año"
            ),
          ],
          time: t(
            "services.servicesData.webDev.plans.custom.time",
            "El tiempo estimado de entrega varía según la complejidad del proyecto."
          ),
          icon: <ShieldIcon className="w-8 h-8 text-[#FF8FB1]" />,
        },
      ],
      note: [
        {
          id: 1,
          frase: t(
            "services.servicesData.webDev.note.0",
            "Los Precios varias segun la necesidad del tiempo, "
          ),
        },
        {
          id: 2,
          frase: t(
            "services.servicesData.webDev.note.1",
            "requerimientos específicos, complejidad del diseño y funcionalidades "
          ),
        },
        {
          id: 3,
          frase: t(
            "services.servicesData.webDev.note.2",
            "adicionales, ofrecemos opciones de pago flexibles y paquetes de "
          ),
        },
        {
          id: 4,
          frase: t(
            "services.servicesData.webDev.note.3",
            "mantenimiento. Contáctanos para una cotización personalizada.. "
          ),
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
