import React from "react";
import logotipo from "../../assets/concatdev2.png";
import { useLanguageContext } from "../../provider";

export const Footer = () => {
  const { t } = useLanguageContext();
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
              {t(
                "footer.description",
                "Creando experiencias digitales excepcionales que generan resultados."
              )}
            </p>
            <a
              href="/"
              className="text-gray-500 bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent"
            >
              <span>
                {" "}
                {t("footer.privacyPolicy", "Política de privacidad")}
              </span>
            </a>
            <a
              href="/"
              className="text-gray-500 bg-gradient-to-r from-[#fcae60] to-[#ff8fb1] bg-clip-text text-transparent"
            >
              <br />
              <span> {t("footer.cookiesPolicy", "Política de Cookies")}</span>
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.services.title", "Servicios")}
            </h4>
            <ul className="space-y-2 text-orange-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.services.development", "Desarrollo")}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.services.marketing", "Marketing")}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.services.optimization", "Optimización")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.navigation.title", "Navegación")}
            </h4>
            <ul className="space-y-2 text-orange-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.navigation.about", "About")}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.navigation.projects", "Proyectos")}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.navigation.process", "Process")}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footeeer.navigation.contact", "Contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.social.title", "Redes")}
            </h4>
            <ul className="space-y-2 text-orange-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.social.instagram", "Instagram")}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  {t("footer.social.github", "GitHub")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ConcatDev. All rights reserved by
            Gianfranco Di Berardino.
          </p>
        </div>
      </div>
    </footer>
  );
};
