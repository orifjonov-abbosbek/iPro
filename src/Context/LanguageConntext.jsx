import React, { createContext, useState, useContext, useEffect } from "react";

import enTranslations from "../localization/en.json";
import esTranslations from "../localization/es.json";

const translations = {
  en: enTranslations,
  es: esTranslations,
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = (key) => translations[language][key] || key;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
