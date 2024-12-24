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
