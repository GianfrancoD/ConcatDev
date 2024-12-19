"use client";

import { useState, React } from "react";
import ServiceModal from "../modals/servicesModal/servicesModal.tsx";

import {
  Globe,
  Share2,
  Code,
  Layout,
  Building2,
  FileText,
  ShoppingCart,
  Calendar,
  Laptop,
  MonitorSmartphone,
  FileCode2,
  Database,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: <Share2 className="w-12 h-12 text-blue-400" />,
    title: "Social Media",
    description:
      "Potenciamos tu presencia en redes sociales con estrategias personalizadas y contenido engaging.",
    plans: [
      {
        name: "Básico",
        price: "$499/mes",
        description:
          "Plan ideal para pequeñas empresas que buscan establecer su presencia en redes sociales.",
        features: [
          "Gestión de 2 redes sociales",
          "4 posts por semana",
          "Informe mensual",
        ],
        icon: <Users className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Pro",
        price: "$999/mes",
        description:
          "Perfecto para empresas en crecimiento que necesitan una presencia más sólida.",
        features: [
          "Gestión de 4 redes sociales",
          "Daily posts",
          "Estrategia de contenido",
          "Análisis semanal",
        ],
        icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        description:
          "Solución completa para grandes empresas con necesidades específicas.",
        features: [
          "Gestión completa de redes",
          "Estrategia omnicanal",
          "Campañas publicitarias",
          "Reporting en tiempo real",
        ],
        icon: <Rocket className="w-8 h-8 text-blue-400" />,
      },
    ],
    note: [
      {
        frase:
          "Los precios indicados son estimaciones base. El costo final puede ",
      },
    ],
  },
  {
    icon: <Code className="w-12 h-12 text-blue-400" />,
    title: "Web Dev",
    description:
      "⚡️ Creamos sitios web a medida, optimizados para conversión y con diseño responsive de última generación.",
    plans: [
      {
        name: "Landing Page",
        price: "$300 - $500",
        description:
          "Diseño de una página única optimizada para conversiones, ideal para campañas específicas o promociones.",
        features: [
          "Diseño responsivo",
          "Formulario de contacto",
          "Análisis de tráfico",
          "Optimización SEO básica",
          "Análisis de rendimiento mensual",
          "Botones de contacto directo a WhatsApp",
          "Hosting y dominio por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-4 semanas",
        icon: <Layout className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Página Corporativa",
        price: "$400 - $750",
        description:
          "Desarrollo de un sitio web completo que represente la identidad de la empresa y sus servicios.",
        features: [
          "Hasta 5 páginas",
          "Diseño responsivo",
          "Optimización SEO",
          "Capacitación en gestión del contenido",
          "Integración con redes sociales",
          "Reporte de clientes Mensual Basico",
          "Hosting y dominio por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-4 meses",
        icon: <Building2 className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Página Informativa",
        price: "$350 - $500",
        description:
          "Creación de un sitio informativo que incluya un formulario para contacto o consultas.",
        features: [
          "Hasta 5 páginas",
          "Formulario de contacto",
          "Optimización SEO",
          "Soporte Básico",
          "Respuesta automática a formularios",
          "Análisis de tráfico",
          "Diseño responsivo",
          "Hosting y dominio por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-3 meses",
        icon: <FileText className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "E-commerce",
        price: "$420 - $1,500",
        description:
          "Desarrollo de una tienda online con todas las funcionalidades necesarias para gestionar productos y pagos en línea.",
        features: [
          "Diseño responsivo",
          "Carrito de compras",
          "Integración con pasarela de pago (ej. Stripe, Paypal, etc)",
          "Gestión básica de inventarios",
          "Diseño responsivo",
          "Capacitación sobre gestión de productos",
          "Análisis mensual del rendimiento",
          "Optimización SEO Avanzado",
          "Entrega de informes mensuales",
          "Hosting y dominio por 1 año",
        ],
        time: "Tiempo estimado de entrega: 2-5 meses",
        icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Agendamiento",
        price: "$500 - $2,100",
        description:
          "Creación de un sistema para agendar citas o reservas con integración a pasarelas de pago.",
        features: [
          "Diseño responsivo",
          "Sistema de agendamiento",
          "Integración con calendario y pasarela de pago",
          "Notificaciones automáticas por email/SMS",
          "Análisis mensual del uso del sistema",
          "Optimización SEO Avanzado",
          "Entrega de informes mensuales",
          "Hosting y dominio por 1 año",
        ],
        time: "Tiempo estimado de entrega: 1-6 meses",
        icon: <Calendar className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Software (APP Web)",
        price: "$1,000 - $5,000",
        description:
          "Desarrollo personalizado de una aplicación web que cumpla con necesidades específicas del cliente.",
        features: [
          "Desarrollo completo",
          "Soporte técnico inicial",
          "Capacitación en el uso del software",
          "Actualizaciones regulares según las necesidades del cliente",
          "Base de datos",
          "Optimización SEO",
          "Soporte técnico",
          "Hosting y dominio por 1 año",
        ],
        time: "Tiempo estimado de entrega: 4-12 meses",
        icon: <Laptop className="w-8 h-8 text-blue-400" />,
      },
    ],
    note: [
      {
        id: 1,
        frase:
          "Los precios indicados son estimaciones base. El costo final puede ",
      },
      {
        id: 2,
        frase:
          "variar según requerimientos específicos, complejidad del diseño, ",
      },
      {
        id: 3,
        frase:
          "funcionalidades adicionales y volumen de contenido. Además,  puedes ",
      },
      {
        id: 4,
        frase: "elegir entre diversas plantillas desarrolladas por la empresa ",
      },
      {
        id: 5,
        frase:
          "Brandaxiom para personalizar tu proyecto. Ofrecemos opciones de ",
      },
      {
        id: 6,
        frase:
          "pago flexibles y paquetes de mantenimiento continuo. Contáctanos ",
      },
      {
        id: 7,
        frase:
          "para una cotización personalizada que se ajuste a tus necesidades ",
      },
      {
        id: 8,
        frase:
          "exactas. Esta versión mantiene la información original mientras ",
      },
      {
        id: 9,
        frase: "incorpora la opción de elegir plantillas, lo que puede ser ",
      },
      {
        id: 10,
        frase: "atractivo para los clientes.",
      },
    ],
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400" />,
    title: "Digital PR",
    description:
      "Gestionamos tu reputación online y amplificamos tu mensaje a través de medios digitales estratégicos.",
    plans: [
      {
        name: "Starter",
        price: "$799/mes",
        description:
          "Plan básico de gestión de reputación online para pequeñas empresas.",
        features: [
          "Monitoreo de marca",
          "2 comunicados de prensa",
          "Gestión de 1 crisis",
        ],
        icon: <MonitorSmartphone className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Growth",
        price: "$1,599/mes",
        description:
          "Solución completa de PR digital para empresas en crecimiento.",
        features: [
          "Estrategia de PR digital",
          "4 comunicados de prensa",
          "Gestión de reputación",
          "Outreach a influencers",
        ],
        icon: <FileCode2 className="w-8 h-8 text-blue-400" />,
      },
      {
        name: "Leader",
        price: "$2,999/mes",
        description:
          "Gestión integral de relaciones públicas digitales para grandes empresas.",
        features: [
          "Estrategia integral de PR",
          "Contenido exclusivo",
          "Gestión de crisis 24/7",
          "Partnerships estratégicos",
        ],
        icon: <Database className="w-8 h-8 text-blue-400" />,
      },
    ],
    note: [
      {
        frase:
          "Los precios indicados son estimaciones base. El costo final puede ",
      },
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A] to-transparent"></div>
      <div className="container mx-auto px-4 flex flex-col justify-center min-h-screen relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                  Ver Planes
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
