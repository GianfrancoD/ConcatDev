import React, { createContext, ReactNode, useContext } from "react";
import useTranslate from "./modules/navbar/hook/lenguajecontext";

type LanguageContextType = {
  lenguaje: "es" | "en";
  changeLanguage: (lang: "es" | "en") => void;
  t: (key: string, defaultValue?: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lenguaje, changeLanguage, t] = useTranslate();

  return (
    <LanguageContext.Provider value={{ lenguaje, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};
