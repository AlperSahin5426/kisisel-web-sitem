import React from "react";
import { skillsData } from "../data/skills";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
const Skills = () => {
  const {language} = useContext(LanguageContext);
  const t = translations[language].skills;
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-[1140px] mx-auto px-4">
        
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((item) => {
            return (
              <div 
                key={item.id} 
                className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800/30 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
              >
                <h3 className="font-bold text-2xl mb-4 text-indigo-600 dark:text-indigo-400">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;