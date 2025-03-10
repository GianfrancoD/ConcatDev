"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// Importación de imágenes
import dentixa from "../../assets/dentixa.png";
import inmobiliaria from "../../assets/inmobiliaria.png";
import zoom from "../../assets/zoom.png";
import envioshd from "../../assets/envioshd.png";

// Definición de la interfaz para los proyectos
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  year: string;
  technologies: string[];
  color: string;
}

export default function ProjectsSlider() {
  const [activeProject, setActiveProject] = useState<string>("1");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useMediaQuery("(max-width: 768px)");
  useMediaQuery("(max-width: 1024px)");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => {
        setMatches(media.matches);
      };

      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
  }

  // Referencia para el scroll horizontal
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  // Valores para animaciones basadas en cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Array de proyectos
  const projects: Project[] = [
    {
      id: "1",
      title: "Software Odontológico",
      category: "Software Development",
      image: dentixa,
      description:
        "Dentixa es un software para odontólogos creado para la facilidad de los clientes, dentistas y ahorrar tiempo. En la tecnología se utilizó en el Frontend: ReactJS con Typescript, MaterialUI como también el consumo de APIS para hacer peticiones HTTP, en el Backend: se utilizó Python, Flask y como Base de datos PostgreSQL con ORM SQLAlchemy y Arquitectura de Software MVC",
      link: "https://dentixa-gestion.vercel.app/",
      year: "2023",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Python",
        "Flask",
        "PostgreSQL",
        "SQLAlchemy",
        "MVC",
      ],
      color: "#6366f1",
    },
    {
      id: "2",
      title: "Leading Page Inmobiliaria",
      category: "Web Development",
      image: inmobiliaria,
      description:
        "Se creó la leading page inmobiliaria especialmente pensado para personas que están en el ramo de la inmobiliaria con la cual se le puede facilitar su trabajo con lo que se utilizó las Tecnologías ReactJS con Typescript con TailwindCSS, consumos de APIS y Screaming Architecture",
      link: "https://inmobiliaria-web-nine.vercel.app/",
      year: "2023",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "REST API",
        "Screaming Architecture",
      ],
      color: "#f59e0b",
    },
    {
      id: "3",
      title: "Leading Page Envíos ZOOM",
      category: "Web Development",
      image: zoom,
      description:
        "En esta página es especialmente para ZOOM con la cual se puede hacer envíos de paquetes y se puede hacer seguimiento de los mismos, con lo que se utilizó las Tecnologías ReactJS con Typescript y TailwindCSS para diseños personalizados, consumos de APIS y Patrones de diseño como Screaming Architecture para un mayor orden como también Escalabilidad, Mantenibilidad, y Reusabilidad, también se utilizó como base de datos PostgreSQL, y en el backend Flask y con ORM SQLAlchemy para un código más limpio.",
      link: "https://enviointernacionales.com/",
      year: "2022",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "REST API",
        "PostgreSQL",
        "Flask",
        "SQLAlchemy",
      ],
      color: "#ec4899",
    },
    {
      id: "4",
      title: "Leading Page Envíos HD",
      category: "Web Development",
      image: envioshd,
      description:
        "Es una Leading Page especialmente para la Envioshd con una estructura idéntica a la de ZOOM pero con un diseño más llamativo y diferente. Uso de ReactJS con Typescript, TailwindCSS, Consumos de APIS y Patrones de diseño como Screaming Architecture para un mayor orden como también Escalabilidad, Mantenibilidad y Reusabilidad",
      link: "https://envioshd.com/",
      year: "2022",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "REST API",
        "Screaming Architecture",
      ],
      color: "#0ea5e9",
    },
  ];

  // Función para manejar el movimiento del mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
    };
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Función para navegar a un proyecto específico
  const navigateToProject = (id: string) => {
    setActiveProject(id);
    const projectElement = document.getElementById(`project-${id}`);
    if (projectElement && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: projectElement.offsetLeft - 100,
        behavior: "smooth",
      });
    }
  };

  // Función para navegar al siguiente proyecto
  const navigateToNextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeProject);
    const nextIndex = (currentIndex + 1) % projects.length;
    navigateToProject(projects[nextIndex].id);
  };

  // Función para navegar al proyecto anterior
  const navigateToPrevProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    navigateToProject(projects[prevIndex].id);
  };

  // Función para abrir el modal con los detalles del proyecto
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Efecto para actualizar el proyecto activo basado en el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const { scrollLeft } = scrollRef.current;
      const projectElements = Array.from(
        document.querySelectorAll('[id^="project-"]')
      );

      for (const element of projectElements) {
        const HTMLElement = element as HTMLElement;
        const { offsetLeft, offsetWidth } = HTMLElement;
        const projectId = element.id.replace("project-", "");

        // Si el elemento está en el centro aproximado de la vista
        if (
          scrollLeft >= offsetLeft - 200 &&
          scrollLeft < offsetLeft + offsetWidth - 200
        ) {
          setActiveProject(projectId);
          break;
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1a1438] to-[#312760]"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Fondo con efecto de partículas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-xl">
            <motion.span
              className="inline-block text-sm font-medium text-[#f0f0f0]/70 uppercase tracking-wider mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portafolio
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nuestros{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcae60] to-[#ff8fb1]">
                Proyectos
              </span>
            </motion.h2>
            <motion.p
              className="text-[#f0f0f0]/70 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Soluciones digitales innovadoras diseñadas con precisión y enfoque
              en la experiencia del usuario.
            </motion.p>
          </div>

          {/* <motion.div
            className="mt-6 md:mt-0 flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              // href="/portfolio"
              className="group flex items-center space-x-2 text-white hover:text-[#fcae60] transition-colors duration-300"
            >
              <span>Ver todos los proyectos</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div> */}
        </div>

        {/* Navegación de proyectos para escritorio */}
        <div className="hidden md:flex mb-8 space-x-1">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => navigateToProject(project.id)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProject === project.id
                  ? "bg-white text-[#0f0f13]"
                  : "text-white/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.title}
            </motion.button>
          ))}
        </div>

        {/* Controles de navegación para móvil */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <button
            onClick={navigateToPrevProject}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="text-center">
            <span className="text-sm text-white/70">
              {projects.findIndex((p) => p.id === activeProject) + 1} /{" "}
              {projects.length}
            </span>
          </div>

          <button
            onClick={navigateToNextProject}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Contenedor principal de proyectos con scroll horizontal */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex space-x-8 md:space-x-16 px-4 md:px-8 min-w-max">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProject === project.id}
                isHovered={hoveredProject === project.id}
                setHovered={setHoveredProject}
                onClick={() => openProjectDetails(project)}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </div>
        </div>

        {/* Barra de progreso de scroll */}
        <div className="hidden md:block h-1 bg-white/10 rounded-full mt-4 mx-auto max-w-5xl">
          <motion.div
            className="h-full bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] rounded-full"
            style={{ scaleX, transformOrigin: "0%" }}
          />
        </div>

        {/* Controles de navegación para escritorio */}
        <div className="hidden md:flex justify-center mt-8 space-x-4">
          <motion.button
            onClick={navigateToPrevProject}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={navigateToNextProject}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      {/* Modal de detalles del proyecto */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>

      {/* Estilo para la animación de partículas */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(10px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// Componente de tarjeta de proyecto
interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  isHovered: boolean;
  setHovered: (id: string | null) => void;
  onClick: () => void;
  mouseX: any;
  mouseY: any;
}

function ProjectCard({
  project,
  isActive,
  isHovered,
  setHovered,
  onClick,
  mouseX,
  mouseY,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  // Transformaciones basadas en la posición del mouse
  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 300], [-5, 5]);

  // Efecto de iluminación basado en la posición del mouse
  const lightX = useTransform(mouseX, [0, 300], [0, 100]);
  const lightY = useTransform(mouseY, [0, 300], [0, 100]);

  return (
    <motion.div
      id={`project-${project.id}`}
      ref={cardRef}
      className={`relative flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive ? "scale-100 z-10" : "scale-95 opacity-70"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: Number(project.id) * 0.1 }}
      onHoverStart={() => setHovered(project.id)}
      onHoverEnd={() => setHovered(null)}
      onClick={onClick}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Efecto de iluminación */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-30 z-10"
          style={{
            background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.8), transparent 50%)`,
          }}
        />
      )}

      {/* Contenedor 3D */}
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Imagen del proyecto */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent opacity-100" />

          {/* Categoría */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Año */}
          <div className="absolute top-4 right-4 z-10">
            <span className="text-xs font-medium text-white/70">
              {project.year}
            </span>
          </div>
        </div>

        {/* Contenido del proyecto */}
        <div className="p-6 bg-[#161620] border-t border-white/5">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Botones de acción */}
          <div className="flex items-center justify-between mt-4">
            <motion.button
              className="text-sm font-medium text-white flex items-center gap-1 group"
              whileHover={{ x: 3 }}
            >
              Ver detalles
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Borde con color del proyecto */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive || isHovered ? 1 : 0 }}
          style={{
            boxShadow: `0 0 0 2px ${project.color}40, 0 10px 30px -10px ${project.color}30`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Componente de modal para detalles del proyecto
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Referencia para detectar clics fuera del modal
  const modalContentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={modalContentRef}
        className="bg-[#161620] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera con imagen */}
        <div className="relative h-64 md:h-80">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161620] to-transparent" />

          {/* Botón de cierre */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Información superpuesta */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-2 mb-2">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                }}
              >
                {project.category}
              </span>
              <span className="text-xs font-medium text-white/70">
                {project.year}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Contenido del modal */}
        <div className="p-6 md:p-8">
          {/* Tecnologías */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Descripción */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">
              Descripción
            </h3>
            <p className="text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Botón de visita */}
          <div className="flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] text-[#0f0f13] font-medium hover:shadow-lg transition-all duration-300 group"
            >
              Visitar proyecto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
