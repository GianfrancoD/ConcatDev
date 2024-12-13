import React from "react";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#020617] to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Elevate{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              tu Branding
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Consultoría creativa creando marcas y experiencias exitosas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
              Empezar
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-600 text-white font-medium hover:bg-white/10 transition-all">
              Más información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
