import React from "react";
export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4 max-[425px]:text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              BrandAxiom
            </h3>
            <p className="text-gray-400">
              Creando experiencias digitales excepcionales que generan
              resultados.
            </p>
            <p className="text-gray-500">
              <b> Política de privacidad</b>
            </p>
            <p className="text-gray-500">
              <b> Política de Cookies</b>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Identidad de marca
                </a>
              </li>
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
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Projects
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
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              {/* <li>
                <a href="/" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li> */}
              {/* <li>
                <a href="/" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li> */}
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
            &copy; {new Date().getFullYear()} BrandAxiom. Todos los derechos
            reservados por Gianfranco Di Berardino.
          </p>
        </div>
      </div>
    </footer>
  );
};
