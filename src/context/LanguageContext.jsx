import { createContext,useEffect,useState } from "react";
export const LanguageContext = createContext();
export const LanguageProvider = ({children})=>{
  const [language,setLanguage] = useState(()=>{
    const savedLang = localStorage.getItem("language");
    return savedLang || "tr";

  });
  useEffect(()=>{
    localStorage.setItem("language",language)
  },[language]);
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };
  return (
    <LanguageContext.Provider value={{language,toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
  }
