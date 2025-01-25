import { useState, React } from "react";
import { motion } from "framer-motion";
import { Tag, User } from "lucide-react";
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

  return (
    <section className="py-20 " id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Nuestro Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-58">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  {/* <Clock className="w-4 h-4 mr-2" /> */}
                  <span>{new Date(post.date).toLocaleDateString()}</span>

                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
}
