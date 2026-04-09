import React from "react";
import { profileDetails } from "../data/profile";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
export const Profile = () => {
  const {language} = useContext(LanguageContext);
  const t = translations[language].profile;
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-[1140px] mx-auto px-4">
        
        <div className="border-t border-gray-200 dark:border-gray-800 mb-12"></div>
        
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
          {t.title}
        </h2>
  
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
             <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
               {t.infoTitle}
             </h3>
             {profileDetails.map((item) => {
              return (
                <div key={item.id} className="flex gap-6 mb-4">
                  <span className="font-bold w-32 text-gray-900 dark:text-gray-100">
                    {item.label[language]}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.value[language]}
                  </span>
                </div>
              );
             })}
          </div>
  
          <div className="flex-1">
             <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
               {t.aboutTitle}
             </h3>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t.aboutParagraph1}
             </p>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.aboutParagraph2}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;