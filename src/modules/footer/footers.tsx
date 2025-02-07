import React from "react";
import logotipo from "../../assets/logobrandaxiom.png";

export const Footer = () => {
  return (
    <footer
      className="py-12 border-t border-white/10 bg-gradient-to-t from-[#312760] to-[#1a1438] "
      id="footer"
    >
      <div className="container mx-auto px-4 max-[425px]:text-center ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="max-[425px]:flex-col max-[425px]:flex max-[425px]:-mt-10">
            <img
              src={logotipo}
              alt=""
              className="min-[425px]:h-[30vh] min-[425px]:w-auto min-[425px]:px-auto min-[425px]:-mt-10  max-[425px]:px-10"
            />
            <p className="text-gray-400">
              Creando experiencias digitales excepcionales que generan
              resultados.
            </p>
            <a
              href="/"
              className="text-gray-500 bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent"
            >
              <span> Política de privacidad</span>
            </a>
            {/* <a
              href="/"
              className="text-gray-500 bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent"
            >
              <span> Política de Cookies</span>
            </a> */}
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-orange-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Desarrollo
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Marketing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Optimización
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-orange-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Redes</h4>
            <ul className="space-y-2 text-orange-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ConcatDev. Todos los derechos
            reservados por Gianfranco Di Berardino.
          </p>
        </div>
      </div>
    </footer>
  );
};
