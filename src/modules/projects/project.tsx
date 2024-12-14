import { useState, React } from "react";
import Modal from "../modals/projectModal/modal.tsx";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
      description:
        "A fully responsive e-commerce platform with advanced features like real-time inventory management and personalized recommendations.",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Brand Strategy",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive brand strategy development for a tech startup, including visual identity, messaging, and go-to-market plan.",
      link: "https://example.com/brand-strategy",
    },
    {
      title: "Mobile App",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "An innovative mobile app for health and wellness, featuring AI-powered personalized workout plans and nutrition tracking.",
      link: "https://example.com/mobile-app",
    },
    {
      title: "Digital Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Multi-channel digital marketing campaign that increased client's customer acquisition by 150% within three months.",
      link: "https://example.com/digital-campaign",
    },
    {
      title: "UI/UX Design",
      category: "Design",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Complete redesign of a SaaS platform's user interface, resulting in a 40% improvement in user engagement and retention.",
      link: "https://example.com/ui-ux-design",
    },
    {
      title: "SEO Optimization",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive SEO strategy that boosted organic traffic by 200% and improved search engine rankings for key industry terms.",
      link: "https://example.com/seo-optimization",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Innovative solutions we're proud of
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
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-sm text-blue-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">Click to view details</p>
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
