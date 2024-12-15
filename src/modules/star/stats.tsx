import React from "react";
const stats = [
  { number: "25.4M+", label: "Revenue Generated" },
  { number: "13.7", label: "Years Experience" },
  { number: "25", label: "Team Members" },
  { number: "34M+", label: "User Engagement" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0F172A] via-[#0F172A] ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
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
