import { Users, Lightbulb, Target, Rocket } from "lucide-react";

import { useState } from "react";
import React from "react";
import TeamMemberModal from "../modals/teamModals/TeamMemberModal.tsx";
// import fotos from "../../assets/fotos.jpeg";
import { useLanguageContext } from "../../provider.tsx";

export default function AboutUs() {
  const { t } = useLanguageContext();

  const teamMembers = [
    {
      name: "Gian",
      role: t(
        "aboutUs.team.gian.role",
        "FullStack Developer | ReactJS & TS | Flask & PostgreSQL"
      ),
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      info: [
        {
          id: 1,
          frases: t(
            "aboutUs.team.gian.info",
            "Programador fullstack con amplios conocimientos en el campo del Frontend y del Backend junto con Base de datos Relacionales, siempre listo para nuevos retos, proyectos."
          ),
        },
      ],
      skill: [
        t("aboutUs.skills.fullstack", "Programador FullStack"),
        t("aboutUs.skills.innovation", "Innovación Tecnológica"),
        t("aboutUs.skills.leadership", "Liderazgo Empresarial"),
        t("aboutUs.skills.traffic", "Análisis de Trafico"),
        t("aboutUs.skills.react", "ReactJS & TS Development"),
        t("aboutUs.skills.postgres", "PostgreSQL & Flask Development"),
        t("aboutUs.skills.frontend", "Frontend & Backend Development"),
      ],
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: t("aboutUs.values.innovation.title", "Innovación"),
      description: t(
        "aboutUs.values.innovation.description",
        "Constantemente buscamos nuevas formas de impulsar el éxito de nuestros clientes."
      ),
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: t("aboutUs.values.precision.title", "Precisión"),
      description: t(
        "aboutUs.values.precision.description",
        "Nos enfocamos en estrategias basadas en datos para lograr resultados medibles."
      ),
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: t("aboutUs.values.collaboration.title", "Colaboración"),
      description: t(
        "aboutUs.values.collaboration.description",
        "Trabajamos estrechamente con nuestros clientes para alcanzar objetivos comunes."
      ),
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: t("aboutUs.values.excellence.title", "Excelencia"),
      description: t(
        "aboutUs.values.excellence.description",
        "Nos esforzamos por superar las expectativas en cada proyecto que emprendemos."
      ),
    },
  ];
  const [selectedMember, setSelectedMember] = useState(null);
  return (
    <section
      id="about-us"
      className="py-20 bg-gradient-to-b from-[#1A1438] to-[#312760] "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent">
          {t("aboutUs.title", "Quiénes Somos")}
        </h2>

        <div className="mb-16">
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            {t(
              "aboutUs.description.part1",
              "En ConcatDev, somos expertos en desarrollo de software y tecnología digital, apasionados por impulsar el crecimiento de tu negocio."
            )}{" "}
            <span className="bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] bg-clip-text text-transparent">
              {t(
                "aboutUs.description.highlight",
                "No creamos páginas web, creamos experiencias de uso"
              )}
            </span>{" "}
            {t(
              "aboutUs.description.part2",
              "y personalizadas que combinan desarrollo web con análisis estratégico para un impacto máximo en Funcionabilidad."
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" rounded-lg p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative w-auto h-40 mx-auto mb-4 overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-300 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            {t("aboutUs.title", "Nuestros Valores")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
              >
                <div className="flex-shrink-0">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedMember && (
          <TeamMemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </section>
  );
}
