import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  
  const t = translations[language].header;

  return (
    <header className="py-6 bg-white dark:bg-gray-900 transition-colors duration-500"> 
      <div className="max-w-[1140px] mx-auto px-4">
        
        <div className="flex justify-end items-center gap-3 mb-6">
          <div 
            onClick={toggleTheme} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className={`w-10 h-5 flex items-center bg-indigo-600 rounded-full p-1 transition-all`}>
                <div className={`bg-yellow-300 w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-bold text-xs tracking-wider uppercase">
              {theme === "light" ? t.darkMode : t.lightMode}
            </span>
          </div>

          <span className="text-gray-300 dark:text-gray-700">|</span>

          <div 
            onClick={toggleLanguage} 
            data-testid="language-toggle" 
            className="cursor-pointer text-indigo-700 dark:text-indigo-400 font-bold text-xs tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            {t.switchLanguage}
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="w-12 h-12 bg-[#EEEBFF] text-[#4731D3] rounded-full flex items-center justify-center dark:bg-[#4731D3] dark:text-[#CBF281] font-bold text-2xl transform -rotate-12 shadow-sm">
            A
          </div>

          <div className="flex items-center gap-12">
            <nav className="flex items-center gap-8">
              <a href="#skills" className="text-gray-600 dark:text-gray-400 font-medium hover:text-indigo-700 transition-colors">
                {t.skills}
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 font-medium hover:text-indigo-700 transition-colors">
                {t.projects}
              </a>
            </nav>
            <button className="px-8 py-3 bg-white dark:bg-gray-900 border border-indigo-700 text-indigo-700 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-bold hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all">
              {t.hireMe}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;