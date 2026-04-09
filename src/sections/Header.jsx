import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  
  const t = translations[language].header;

  return (
    <header className="mt-4 bg-white dark:bg-gray-900 transition-colors duration-500"> 
      <div className="max-w-[1140px] mx-auto px-4">
        
        <div className="flex justify-end items-center gap-2 mb-4 text-xs font-medium text-gray-500 dark:text-gray-400">
          <div onClick={toggleTheme} className="cursor-pointer hover:text-indigo-600 transition-colors uppercase font-bold">
            {theme === "light" ? t.darkMode : t.lightMode}
          </div>
          <span className="text-gray-400"> | </span>
          <div onClick={toggleLanguage} data-testid="language-toggle" className="cursor-pointer text-indigo-700 dark:text-indigo-400 uppercase font-bold">
            {t.switchLanguage}
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center dark:bg-indigo-700 dark:text-white font-bold text-xl rotate-[-310deg]">
            A
          </div>

          <div className="flex items-center gap-12 font-medium text-gray-600 dark:text-gray-300">
            <nav className="flex items-center gap-6 uppercase">
              <a href="#skills" className="hover:text-indigo-700 transition-colors dark:hover:text-indigo-400">
                {t.skills}
              </a>
              <a href="#projects" className="hover:text-indigo-700 transition-colors dark:hover:text-indigo-400">
                {t.projects}
              </a>
            </nav>
            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-medium dark:hover:text-indigo-300 dark:hover:bg-indigo-900/30 transition-all uppercase hover:bg-indigo-50">
              {t.hireMe}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;