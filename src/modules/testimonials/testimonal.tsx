import React from "react";

const testimonials = [
  {
    quote:
      "BrandAxiom transformó por completo nuestra presencia en línea. Sus estrategias de SEO aumentaron nuestro tráfico orgánico en un 150 % en solo 6 meses y su rediseño de nuestra plataforma de comercio electrónico aumentó nuestras tasas de conversión en un 40 %. No son solo proveedores de servicios; son socios de crecimiento.",
    author: "Elena Rodriguez",
    position: "CMO, GreenLeaf Organics",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    quote:
      "Como empresa emergente, necesitábamos una marca que pudiera competir con las empresas establecidas. BrandAxiom superó nuestras expectativas. Su enfoque holístico de la marca (desde el diseño del logotipo hasta la estrategia de redes sociales) nos ayudó a asegurar nuestra financiación de Serie A y a establecer una sólida presencia en el mercado.",
    author: "Alex Ngyuen",
    position: "Co-founder, TechNova Solutions",
    image:
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote:
      "Éramos escépticos sobre el marketing de influencia, pero el enfoque basado en datos de BrandAxiom nos hizo cambiar de opinión. Seleccionaron una combinación perfecta de micro y macroinfluenciadores que se alineaban con los valores de nuestra marca. La campaña tuvo como resultado un retorno de la inversión del 100 % y mejoró significativamente el sentimiento de marca entre los millennials.",
    author: "Sarah Goldstein",
    position: "Brand Manager, LuxeBeauty Co.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    quote:
      "La estrategia de contenido de BrandAxiom revitalizó nuestra generación de oportunidades de negocio B2B. Su equipo creó documentos técnicos detallados y estudios de casos que nos posicionaron como líderes de opinión en nuestra industria. En un año, nuestras oportunidades de negocio entrantes aumentaron en un 180 % y nuestro ciclo de ventas se acortó en un 40 %.",
    author: "Marcus Thompson",
    position: "VP of Sales, IndustrialTech Solutions",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote:
      "Cuando tuvimos que cambiar nuestro modelo de negocio durante la pandemia, BrandAxiom fue fundamental para que nuestra transición fuera exitosa. Desarrollaron rápidamente una estrategia digital que nos ayudó a retener el 85 % de nuestros clientes e incluso a expandirnos a nuevos mercados. Su agilidad y experiencia fueron realmente impresionantes.",
    author: "Olivia Chen",
    position: "CEO, FitLife Gyms",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    quote:
      "Como organización sin fines de lucro, necesitábamos maximizar nuestro limitado presupuesto de marketing. Las campañas de PPC dirigidas de BrandAxiom y el apoyo para la redacción de solicitudes de subvenciones aumentaron nuestras donaciones en un 250 % año tras año. Su pasión por nuestra causa y su experiencia en marketing los hicieron sentir como una extensión de nuestro equipo.",
    author: "David Okafor",
    position: "Executive Director, EduForAll Foundation",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Testimonios de Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-300 mb-6 italic text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 object-cover rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-blue-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
