import { useState, React } from "react";
import { Globe, Share2, Code } from "lucide-react";
import ServiceModal from "../modals/servicesModal/servicesModal.tsx";

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
        features: [
          "Gestión de 2 redes sociales",
          "4 posts por semana",
          "Informe mensual",
        ],
      },
      {
        name: "Pro",
        price: "$999/mes",
        features: [
          "Gestión de 4 redes sociales",
          "Daily posts",
          "Estrategia de contenido",
          "Análisis semanal",
        ],
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        features: [
          "Gestión completa de redes",
          "Estrategia omnicanal",
          "Campañas publicitarias",
          "Reporting en tiempo real",
        ],
      },
    ],
  },
  {
    icon: <Code className="w-12 h-12 text-blue-400" />,
    title: "Web Dev",
    description:
      "Creamos sitios web a medida, optimizados para conversión y con diseño responsive de última generación.",
    plans: [
      {
        name: "Landing Page",
        price: "$1,499",
        features: [
          "Diseño personalizado",
          "Optimización SEO",
          "Formulario de contacto",
        ],
      },
      {
        name: "Corporativo",
        price: "$3,999",
        features: [
          "Hasta 5 páginas",
          "CMS integrado",
          "Diseño responsive",
          "Optimización SEO",
        ],
      },
      {
        name: "E-commerce",
        price: "Desde $5,999",
        features: [
          "Tienda online completa",
          "Pasarela de pagos",
          "Panel de administración",
          "Soporte técnico",
        ],
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
        features: [
          "Monitoreo de marca",
          "2 comunicados de prensa",
          "Gestión de 1 crisis",
        ],
      },
      {
        name: "Growth",
        price: "$1,599/mes",
        features: [
          "Estrategia de PR digital",
          "4 comunicados de prensa",
          "Gestión de reputación",
          "Outreach a influencers",
        ],
      },
      {
        name: "Leader",
        price: "$2,999/mes",
        features: [
          "Estrategia integral de PR",
          "Contenido exclusivo",
          "Gestión de crisis 24/7",
          "Partnerships estratégicos",
        ],
      },
    ],
  },
];

export default function ServicesPlan() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0F172A]"></div>
      <div className="container mx-auto px-4 flex flex-col justify-center min-h-screen relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-300 ease-in-out transform hover:scale-105">
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
