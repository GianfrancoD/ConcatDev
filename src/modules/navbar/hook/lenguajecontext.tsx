import { useCallback, useState, useEffect } from "react";

type Lenguaje = "es" | "en";

export const useTranslate = (initialLenguaje: Lenguaje = "es") => {
  const [lenguaje, setLenguaje] = useState<Lenguaje>(initialLenguaje);
  const [translations, setTranslations] = useState({});
  console.log("Idioma actual:", lenguaje);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const module = await import(`../i18n/locales/${lenguaje}.json`);
        setTranslations(module.default);
        console.log("Traducciones cargadas:", module.default);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };

    fetchTranslations();
  }, [lenguaje]);

  const changeLanguage = useCallback((lenguajeNew: Lenguaje) => {
    setLenguaje(lenguajeNew);
  }, []);

  const t = useCallback(
    (key: string, defaultValue?: string) => {
      const keys = key.split(".");
      const value = keys.reduce((acc, key) => {
        if (typeof acc === "object") return acc[key];
        else return defaultValue || key;
      }, translations);
      return typeof value === "string" ? value : defaultValue || key;
    },
    [translations]
  );

  return [lenguaje, changeLanguage, t] as const;
};

export default useTranslate;
