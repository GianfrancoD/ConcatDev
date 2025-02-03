import {
  Building2,
  Calendar,
  Code,
  FileText,
  // Gem,
  Laptop,
  Layout,
  // Rocket,
  // Share2,
  ShieldIcon,
  ShoppingCart,
  // Users,
} from "lucide-react";
import React from "react";
export const services = [
  // {
  //   icon: <Share2 className="w-12 h-12 text-blue-400" />,
  //   title: "Social Media",
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
    title: "Web Dev",
    description:
      "⚡️ Creamos Paginas web a medidas, Optimizados para conversión, Diseño personalizado, Optimizado para un alto Rendimiento y Adaptados a dispotivos moviles.",
    advertencia: "No se usan Plataformas como Wordpress, Prestashop, Shopify.",
    plans: [
      {
        name: "Landing Page",
        price: "$300 - $900",
        description:
          "Diseño de una página única optimizada para conversiones, ideal para campañas específicas o promociones.",
        features: [
          "Hasta 1 - 4 página",
          "Diseño responsivo a moviles",
          "Diseño personalizado",
          "Análisis de tráfico",
          "Optimización SEO",
          "Reporte mensual de análisis de tráfico",
          "Botones de contacto directo a WhatsApp",
          "Entrega de informes mensuales",
          "Chat desplegable o Boton de WhatssApp",
          "Hosting y dominio (.com) por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-3 meses",
        icon: <Layout className="w-8 h-8 text-[#FF8FB1]" />,
      },
      {
        name: "Página Corporativa",
        price: "$400 - $1,200",
        description:
          "Desarrollo de un sitio web completo que represente la identidad de la empresa y sus servicios.",
        features: [
          "Hasta 5 - 8 páginas",
          "Diseño responsivo a moviles",
          "Diseño personalizado",
          "Optimización SEO",
          "Integración con redes sociales",
          "Análisis de tráfico",
          "Reporte mensual de análisis de tráfico",
          "Entrega de informes mensuales",
          "Chat desplegable o Boton de WhatssApp",
          "Hosting y dominio (.com) por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-4 meses",
        icon: <Building2 className="w-8 h-8 text-[#FF8FB1]" />,
      },
      {
        name: "Página Informativa",
        price: "$350 - $700",
        description:
          "Creación de un sitio informativo que incluya un formulario para contacto o consultas.",
        features: [
          "Hasta 5 - 8 páginas",
          "Diseño responsivo a moviles",
          "Diseño Personalizado",
          "Optimización SEO",
          "Análisis mensual del rendimiento",
          "Análisis de tráfico",
          "Reporte mensual de análisis de tráfico",
          "Entrega de informes mensuales",
          "Chat desplegable o Boton de WhatssApp",
          "Hosting y dominio (.com) por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-3 meses",
        icon: <FileText className="w-8 h-8 text-[#FF8FB1]" />,
      },
      {
        name: "E-commerce",
        price: "$420 - $1,500",
        description:
          "Desarrollo de una tienda online con todas las funcionalidades necesarias para gestionar productos y pagos en línea.",
        features: [
          "Hasta +10 páginas",
          "Diseño responsivo a moviles",
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
          "Chat desplegable o Boton de WhatssApp",
          "Hosting y dominio (.com) por 1 año",
        ],
        time: "Tiempo estimado de entrega: 2-5 meses",
        icon: <ShoppingCart className="w-8 h-8 text-[#FF8FB1]" />,
      },
      {
        name: "Agendamiento",
        price: "$500 - $2,100",
        description:
          "Creación de un sistema para agendar citas o reservas con integración a pasarelas de pago.",
        features: [
          "Hasta 5 - 8 páginas",
          "Diseño responsivo a moviles",
          "Sistema de agendamiento",
          "Integración con calendario y pasarela de pago",
          "Notificaciones automáticas por email o SMS",
          "Análisis mensual del uso del sistema",
          "Optimización SEO Avanzado",
          "Entrega de informes mensuales",
          "Chat desplegable o Boton de WhatssApp",
          "Hosting y dominio (.com) por 1 año",
        ],
        time: "Tiempo estimado de entrega: 2-6 meses",
        icon: <Calendar className="w-8 h-8 text-[#FF8FB1]" />,
      },
      {
        name: "Software (APP Web)",
        price: "$1,200 - $5,000",
        description:
          "Desarrollo personalizado de una aplicación web que cumpla con necesidades específicas del cliente.",
        features: [
          "Hasta +10 páginas",
          "Diseño personalizado",
          "Diseño responsivo a moviles",
          "Actualizaciones regulares según las necesidades del cliente",
          "Base de datos",
          "Optimización SEO",
          "Optimización SEM",
          "Publicidad Paga (ADS)",
          "Soporte técnico",
          "Chat desplegable o Boton de WhatssApp",
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
