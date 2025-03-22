import { useCallback, useEffect, useState } from "react";

type Lenguaje = "es" | "en";

export const useTranslate = (initialLenguaje: Lenguaje = "es") => {
  const [lenguaje, setLenguaje] = useState<Lenguaje>(initialLenguaje);
  const [translations, setTranslations] = useState({});
  console.log("Idioma actual:", lenguaje);

  useEffect(() => {
    (async () => {
      try {
        const module = await import(`../i18n/locales/${lenguaje}.json`);
        setTranslations(module.default);
        console.log("Traducciones cargadas:", module.default);
      } catch (err) {
        console.error("Error al cargar traducciones:", err);
      }
    })();
  }, [lenguaje]);

  const changeLanguage = useCallback((lenguajeNew: Lenguaje) => {
    setLenguaje(lenguajeNew);
  }, []);

  const t = useCallback(
    (key: string, defaultValue?: string) => {
      const keys = key.split(".");
      const value = keys.reduce((acc, key) => {
        if (typeof acc === "object" && key in acc) return acc[key];
        return defaultValue || key;
      }, translations);
      return value ? value : defaultValue || key;
    },
    [translations]
  );

  return [lenguaje, changeLanguage, t] as const;
};

export default useTranslate;
