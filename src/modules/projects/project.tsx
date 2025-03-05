import { useState } from "react";
import React from "react";
import Modal from "../modals/projectModal/modal.tsx";
import dentixa from "../../assets/dentixa.png";
import inmobiliaria from "../../assets/inmobiliaria.png";
import zoom from "../../assets/zoom.png";
import envioshd from "../../assets/envioshd.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Software Odontologico",
      category: "Software Developer",
      // image:
      //   "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
      image: dentixa,
      description:
        "Dentixa es un software para odontologos creado para la facilidad de los clientes, dentistas y ahorrar tiempo. En la tecnologia se utilizo en el Frontend: ReactJS con Typescript, MaterialUI como tambien el consumo de APIS para hacer peticiones HTTP, en el Backend: se utilizo Python, Flask y como Base de datos PostgreSQL con ORM SQLAlchemy y Arquitectura de Software MVC",
      link: "https://dentixa-gestion.vercel.app/",
    },
    {
      title: "Leading Page Inmobiliaria",
      category: "Website Developer",
      image: inmobiliaria,
      description:
        "Se creo la leading page inmobiliaria especialmente pensado para personas que estan en el ramo de la inmobiliaria con la cual se le puede facilitar su trabajo con lo que se utilizo las Tecnologias ReactJS con Typescript con TailwindCSS, consumos de APIS y Screaming Architecture",
      link: "https://inmobiliaria-web-nine.vercel.app/",
    },
    {
      title: "Leading Page Envios ZOOM",
      category: "Website Developer",
      image: zoom,
      description:
        "En esta pagina es especialmente para ZOOM con la cual se puede hacer envios de paquetes y se puede hacer seguimiento de los mismos, con lo que se utilizo las Tecnologias ReactJS con Typescript y TailwindCSS para diseños personalizados, consumos de APIS y Patrones de diseño como Screaming Architecture para un mayor orden como tambien Escabilidad, Manenibilidad, y Reusabilidad, tambien se utilizo como base de datos PostgreSQL, y en el backend Flask y con ORM SQLAlchemy para un codigo mas limpio.",
      link: "https://enviointernacionales.com/",
    },
    {
      title: "Leading Page Envios HD",
      category: "Website Developer",
      image: envioshd,
      description:
        "Es una Leading Page especialmente para la Envioshd con una estructura identica a la de ZOOM pero con un diseño mas llamativo y diferente. Uso de ReactJS con Typescript, TailwindCSS, Consumos de APIS y Patrones de diseño como Screaming Architecture para un mayor orden como tambien Escabilidad, Manenibilidad y Reusabilidad",
      link: "https://envioshd.com/",
    },
    // {
    //   title: "Digital Campaign",
    //   category: "Marketing",
    //   image:
    //     "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
    //   description:
    //     "Multi-channel digital marketing campaign that increased client's customer acquisition by 150% within three months.",
    //   link: "https://example.com/digital-campaign",
    // },
    // {
    //   title: "UI/UX Design",
    //   category: "Design",
    //   image:
    //     "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
    //   description:
    //     "Complete redesign of a SaaS platform's user interface, resulting in a 40% improvement in user engagement and retention.",
    //   link: "https://example.com/ui-ux-design",
    // },
    // {
    //   title: "SEO Optimization",
    //   category: "Marketing",
    //   image: "/placeholder.svg?height=400&width=600",
    //   description:
    //     "Comprehensive SEO strategy that boosted organic traffic by 200% and improved search engine rankings for key industry terms.",
    //   link: "https://example.com/seo-optimization",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#1a1438] to-[#312760]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent">
          Nuestras Proyectos
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Soluciones innovadoras de las que estamos orgullosos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-sm bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <div className="border border-red-500 p-1.5 w-[12rem] bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] rounded-full">
                  <p className="text-[#312760] font-semibold text-sm text-center">
                    Visualizar el proyecto
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
