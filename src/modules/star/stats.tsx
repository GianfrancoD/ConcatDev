import React from "react";
const stats = [
  { number: "1200+", label: "Ingresos generados", icon: "💰" },
  { number: "10", label: "Años de experiencia", icon: "🏆" },
  { number: "2", label: "Miembros del equipo", icon: "👥" },
  { number: "100", label: "Participación del usuario", icon: "📈" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0F172A] via-[#0F172A] ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
