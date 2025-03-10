import { useEffect, useRef, useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Link,
  Tag,
} from "lucide-react";
import BlogPostModal from "../modals/blogModal.tsx/blogsModal.tsx";
import { BlogPost } from "./interface/blogInteface.tsx";

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "El Futuro del Marketing Digital en 2024",
    excerpt:
      "Descubre las tendencias emergentes que darán forma al panorama del marketing digital en el próximo año.",
    content: `El marketing digital está en constante evolución, y 2024 promete ser un año de cambios significativos. En este artículo, exploraremos las principales tendencias que se espera que dominen el panorama del marketing digital en el próximo año.

1. Inteligencia Artificial y Personalización
La IA continuará revolucionando la forma en que las marcas interactúan con sus clientes. Esperamos ver un aumento en el uso de chatbots impulsados por IA y sistemas de recomendación altamente personalizados.

2. Marketing de Voz
Con el crecimiento continuo de los asistentes de voz, el marketing de voz se convertirá en una estrategia crucial. Las empresas necesitarán optimizar su contenido para búsquedas por voz y considerar crear aplicaciones para dispositivos inteligentes.

3. Realidad Aumentada en Marketing
La AR ofrecerá nuevas formas de involucrar a los clientes, permitiéndoles visualizar productos en su entorno real antes de comprar.

4. Contenido Interactivo
El contenido interactivo, como cuestionarios, encuestas y videos interactivos, ganará más prominencia como una forma de aumentar el engagement del usuario.

5. Privacidad y Transparencia
Con el aumento de las preocupaciones sobre la privacidad de los datos, las marcas que sean transparentes y éticas en sus prácticas de marketing tendrán una ventaja competitiva.

Para mantenerse a la vanguardia, las empresas deberán estar atentas a estas tendencias y adaptarse rápidamente. El futuro del marketing digital es emocionante y lleno de oportunidades para aquellos que estén dispuestos a innovar y evolucionar.`,
    author: "CEO",
    date: "2023-12-15",
    // readTime: "5 min",
    tags: ["Marketing Digital", "Tendencias", "IA", "AR"],
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
  },
  {
    id: "2",
    title: "Diseño Web Responsivo: Más Allá del Mobile-First",
    excerpt:
      "Explora cómo el diseño web está evolucionando para adaptarse a una variedad cada vez mayor de dispositivos y contextos de usuario.",
    content: `El diseño web responsivo ha sido un estándar en la industria durante años, pero a medida que la tecnología evoluciona, también lo hacen nuestros enfoques de diseño. En este artículo, exploraremos cómo el diseño web está yendo más allá del enfoque "mobile-first" para crear experiencias verdaderamente adaptativas.

1. Diseño Fluido
En lugar de diseñar para puntos de interrupción específicos, el diseño fluido permite que los layouts se adapten suavemente a cualquier tamaño de pantalla. Esto se logra utilizando unidades relativas y cálculos CSS avanzados.

2. Componentes Adaptables
Los componentes adaptables pueden cambiar no solo su tamaño, sino también su funcionalidad y disposición según el contexto del dispositivo. Por ejemplo, un menú de navegación podría transformarse en un menú desplegable en dispositivos móviles, pero expandirse en una barra lateral en tablets.

3. Diseño Contextual
El diseño contextual va más allá del tamaño de la pantalla y considera factores como la ubicación del usuario, la hora del día, o incluso la velocidad de conexión para ofrecer la experiencia más relevante.

4. Optimización para Dispositivos Plegables
Con la llegada de los smartphones plegables, los diseñadores deben considerar cómo sus layouts se adaptarán a pantallas que pueden cambiar de tamaño sobre la marcha.

5. Accesibilidad Universal
Un diseño verdaderamente responsivo debe ser accesible para todos. Esto incluye consideraciones para usuarios con discapacidades visuales, auditivas o motoras, así como para aquellos que utilizan tecnologías de asistencia.

El futuro del diseño web responsivo es emocionante y desafiante. Al adoptar estos enfoques avanzados, podemos crear experiencias web que no solo se vean bien en cualquier dispositivo, sino que también se adapten perfectamente a las necesidades y contextos únicos de cada usuario.`,
    author: "CEO",
    date: "2023-12-10",
    // readTime: "6 min",
    tags: ["Diseño Web", "Responsivo", "UX"],
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
  },
  {
    id: "3",
    title: "SEO en 2024: Estrategias para Dominar los Motores de Búsqueda",
    excerpt:
      "Aprende las últimas técnicas y mejores prácticas para optimizar tu sitio web y mejorar tu ranking en los resultados de búsqueda.",
    content: `El panorama del SEO está en constante cambio, y mantenerse al día con las últimas estrategias es crucial para el éxito en línea. En este artículo, exploraremos las tácticas de SEO más efectivas para 2024 que te ayudarán a mejorar tu visibilidad en los motores de búsqueda.

1. Optimización para Búsqueda por Voz
Con el aumento de los asistentes virtuales, optimizar para búsquedas por voz es más importante que nunca. Enfócate en frases conversacionales y preguntas largas en tu contenido.

2. Contenido E-A-T (Experiencia, Autoridad, Confiabilidad)
Google sigue poniendo énfasis en el contenido de alta calidad. Asegúrate de que tu contenido demuestre experiencia, autoridad y confiabilidad en tu nicho.

3. Optimización de Core Web Vitals
Las métricas de rendimiento del sitio, como la velocidad de carga y la interactividad, juegan un papel crucial en el SEO. Optimiza tus Core Web Vitals para mejorar tanto la experiencia del usuario como tu ranking.

4. SEO para Video
Con el crecimiento del contenido de video, optimizar tus videos para SEO se vuelve crucial. Utiliza transcripciones, descripciones detalladas y esquemas de marcado para videos.

5. Intención de Búsqueda
Entender y alinear tu contenido con la intención de búsqueda del usuario es más importante que nunca. Crea contenido que responda directamente a lo que los usuarios están buscando.

6. SEO Local
Para negocios locales, el SEO local sigue siendo crucial. Optimiza tu presencia en Google My Business y asegúrate de que tu información NAP (Nombre, Dirección, Teléfono) sea consistente en toda la web.

7. Indexación Móvil Primero
Con la indexación móvil primero de Google, asegúrate de que tu sitio esté completamente optimizado para dispositivos móviles.

8. Contenido Largo y Detallado
El contenido largo y detallado tiende a funcionar bien en los resultados de búsqueda. Enfócate en crear guías exhaustivas y artículos en profundidad sobre temas relevantes para tu audiencia.

Implementar estas estrategias de SEO te ayudará a mejorar tu visibilidad en los motores de búsqueda y atraer más tráfico orgánico a tu sitio web en 2024 y más allá.`,
    author: "CEO",
    date: "2023-12-05",
    // readTime: "7 min",
    tags: ["SEO", "Marketing Digital", "Contenido"],
    // imageUrl: "/placeholder.svg?height=400&width=600",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/12/21/04/01/laptop-7669027_1280.jpg",
  },
  {
    id: "4",
    title: "Diseñador Web vs Programador Web",
    excerpt:
      "Explora las diferencias clave entre diseñadores web y programadores web, sus roles y habilidades en el desarrollo digital.",
    content: `
      En el mundo del desarrollo digital, es común confundir los roles de un diseñador web y un programador web. Aunque ambos trabajan en la creación de sitios y aplicaciones en línea, sus enfoques y habilidades son bastante diferentes. A continuación, exploraremos las principales diferencias entre estos dos roles esenciales en el desarrollo web.

      1. Enfoque del Trabajo

      - Diseñador Web: El diseñador web se centra en la estética y la experiencia del usuario. Su objetivo es crear interfaces visualmente atractivas y funcionales que sean intuitivas para los usuarios. Esto incluye la elección de colores, tipografías, imágenes y la disposición de los elementos en la página.

      - Programador Web: Por otro lado, el programador web se ocupa del funcionamiento interno del sitio o aplicación. Su trabajo implica escribir código para implementar funcionalidades, gestionar bases de datos y asegurar que el sitio funcione correctamente en diferentes navegadores y dispositivos.

      2. Habilidades Técnicas

      - Diseñador Web:
        - Dominio de herramientas de diseño como Adobe Photoshop, Illustrator o Figma.
        - Conocimientos en diseño UX/UI.
        - Capacidad para crear prototipos y wireframes.
        - Familiaridad con HTML y CSS para implementar diseños básicos.

      - Programador Web:
        - Conocimiento profundo de lenguajes de programación como JavaScript, PHP, Python o Ruby.
        - Experiencia en frameworks y bibliotecas como React, Angular o Django.
        - Habilidades en gestión de bases de datos (SQL, NoSQL).
        - Capacidad para resolver problemas técnicos y optimizar el rendimiento del sitio.

      3. Colaboración

      - Diseñador Web: A menudo trabaja en colaboración con otros diseñadores y con el equipo de marketing para asegurarse de que el diseño esté alineado con la identidad de la marca y las necesidades del usuario.

      - Programador Web: Colabora estrechamente con diseñadores para implementar sus visiones técnicas y asegurar que las funcionalidades estén integradas correctamente sin comprometer la estética.

      4. Objetivos Finales

      - Diseñador Web: Su objetivo es crear una experiencia visual que atraiga a los usuarios y los mantenga comprometidos con el contenido.

      - Programador Web: Busca garantizar que el sitio sea funcional, rápido y seguro, proporcionando una base sólida sobre la cual se puede construir la experiencia del usuario.

      Conclusión

      Tanto los diseñadores web como los programadores web son cruciales para el éxito de un proyecto digital. Mientras que los diseñadores se centran en cómo se ve y se siente un sitio, los programadores aseguran que funcione correctamente. La colaboración entre ambos roles es esencial para crear productos digitales efectivos que no solo sean atractivos, sino también funcionales.
    `,
    author: "CEO",
    date: "2025-01-24",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg",
    tags: ["Diseño Web", "Programación", "Desarrollo Web"],
  },
  {
    id: "5",
    title: "¿Por que no usar WordPress?",
    excerpt:
      "Analiza las desventajas de utilizar WordPress como plataforma para tu sitio web.",
    content: `
      WordPress es una de las plataformas más populares para la creación de sitios web, pero no está exenta de desventajas. Aunque WordPress ofrece una amplia gama de funcionalidades y flexibilidad, hay situaciones en las que puede no ser la mejor opción para tu proyecto digital. En este artículo, exploraremos algunas de las desventajas de utilizar WordPress como plataforma de desarrollo web. 

       1. Limitaciones en la Personalización Avanzada

      A pesar de su flexibilidad, WordPress puede tener limitaciones en términos de personalización avanzada. Para proyectos altamente personalizados o con requisitos específicos, puede ser necesario recurrir a soluciones más especializadas.


       2. Rendimiento y Velocidad

      WordPress puede volverse lento y pesado si no se optimiza adecuadamente. El uso excesivo de plugins, temas mal codificados o alojamiento de baja calidad pueden afectar negativamente el rendimiento del sitio.

       3. Vulnerabilidades de Seguridad

      Al ser una plataforma tan popular, WordPress es un objetivo atractivo para los hackers. Las vulnerabilidades de seguridad pueden exponer tu sitio a riesgos de malware, piratería y robo de datos.

       4. Dependencia de Plugins

      Aunque los plugins pueden extender la funcionalidad de WordPress, también pueden ser una fuente de problemas. Los plugins mal mantenidos o incompatibles pueden causar conflictos, errores y vulnerabilidades de seguridad.

       5. Mantenimiento y Actualizaciones Constantes

      Mantener un sitio en WordPress requiere un compromiso continuo con las actualizaciones regulares del núcleo, temas y plugins. Ignorar estas actualizaciones puede resultar en vulnerabilidades o problemas técnicos.

       6. Curva de Aprendizaje

      Para los principiantes, WordPress puede tener una curva de aprendizaje empinada. La configuración inicial, la gestión de contenidos y la resolución de problemas técnicos pueden ser desafiantes para aquellos sin experiencia previa.

       7. Costos Ocultos

      Si bien WordPress es gratuito, los costos pueden acumularse rápidamente al considerar la necesidad de plugins premium, temas personalizados y servicios adicionales. Para proyectos a largo plazo, estos costos pueden ser significativos.

       Conclusión

      Si bien WordPress es una plataforma poderosa y versátil, no es la solución adecuada para todos los proyectos. Antes de elegir WordPress, considera cuidadosamente tus necesidades, objetivos y recursos para asegurarte de que sea la mejor opción para tu sitio web.
    `,
    author: "CEO",
    date: "2025-01-25",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/01/05/11/02/wordpress-589121_1280.jpg",
    tags: ["WordPress", "Diseño Web", "Inseguridad"],
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoplay(false);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }

    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const openPost = (post: BlogPost) => {
    setIsAutoplay(false);
    setSelectedPost(post);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay]);

  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  // Obtener los posts visibles (anterior, actual y siguiente)
  const visiblePosts = [
    blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length],
    blogPosts[currentIndex],
    blogPosts[(currentIndex + 1) % blogPosts.length],
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-[#312760] to-[#312760]"
      id="blog"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-center mb-5 gap-2">
          <h2 className="text-4xl font-bold  text-white">Nuestro</h2>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent">
            Blog
          </p>
        </div>

        {/* Slider para pantallas medianas y grandes */}
        <div
          ref={sliderRef}
          className="hidden md:block relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden relative h-[550px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="grid grid-cols-3 gap-8 w-full"
                >
                  {visiblePosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/10 ${
                        index
                          ? "transform scale-110 z-10 shadow-[0_0_30px_rgba(252,174,96,0.15)]"
                          : "opacity-70 hover:opacity-90"
                      }`}
                      onClick={() => openPost(post)}
                      whileHover={{
                        y: -10,
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                          <span className="bg-orange-500/80 text-white text-xs px-2 py-1 rounded-full">
                            {post.tags[0]}
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#fcae60] to-[#ff8fb1]">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-400 mt-6">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] flex items-center justify-center text-white font-bold mr-2">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-white">
                              {post.author}
                            </p>
                            <p className="text-xs">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="w-auto h-auto  text-white text-xs mx-1 rounded-full inline-block"
                              >
                                <Tag className="w-3 h-3 mr-1 inline-block" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-r-xl z-20 border border-white/20 transition-all hover:pl-6"
            aria-label="Artículo anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-l-xl z-20 border border-white/20 transition-all hover:pr-6"
            aria-label="Artículo siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 gap-3">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoplay(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);

                  setTimeout(() => setIsAutoplay(true), 5000);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] w-8"
                    : "bg-gray-600 w-3 hover:bg-gray-400"
                }`}
                aria-label={`Ir al artículo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Vista de tarjetas para móviles */}
        <div className="md:hidden space-y-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openPost(post)}
            >
              <div className="relative h-52">
                <img
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="bg-orange-500/80 text-white text-xs px-2 py-1 rounded-full">
                    {post.tags[0]}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#fcae60] to-[#ff8fb1]">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mt-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] flex items-center justify-center text-white font-bold mr-2">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{post.author}</p>
                    <p className="text-xs">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] text-[#1a1438] font-medium px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => {
            setSelectedPost(null);
            setTimeout(() => setIsAutoplay(true), 1000);
          }}
        />
      )}
    </section>
  );
}
