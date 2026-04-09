import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
const Footer = () => {
  const {language} = useContext(LanguageContext);
  const t = translations[language].footer;
  return (
    <footer className="bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-[1140px] mx-auto px-4 py-24">
        <h2 className="text-4xl lg:text-5xl font-extrabold max-w-2xl mb-20 leading-tight text-gray-900 dark:text-white">
              {t.title}
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-10">
          <a href="mailto:sdalpersahin@gmail.com" className="text-xl font-bold text-gray-900 dark:text-indigo-400 hover:underline transition-colors">
            sdalpersahin@gmail.com
          </a>

          <div className="flex gap-8 font-bold text-gray-700 dark:text-gray-400">
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#">{t.github}</a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">{t.linkedin}</a>
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">{t.blog}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;