import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { toast } from "react-toastify";
import { hireMeRequest } from "../services/api";
import profileImage from "../assets/alpersahin.jpeg";
const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].hero;
  const handleHireMe = () => {
    const dummyData = {
      name: "Yalcin",
      email: "Yalcin@gmail.com",
      message: "Portfolyonu çok beğendim!"
    };

    hireMeRequest(dummyData)
      .then((data) => {
        toast.success(language === "tr" ? "Mesaj başarıyla iletildi!" : "Message sent successfully!");
        console.log("Sunucu yanıtı:", data);
      })
      .catch((err) => {
        toast.error(language === "tr" ? "Bir hata oluştu!" : "An error occurred!");
      });
  };
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-[1140px] mx-auto px-4 py-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:items-start">
          
          <div className="max-w-[650px] flex flex-col items-center lg:items-start ">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-indigo-600"></span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-sm">
                {t.name}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 text-center lg:text-left text-gray-900 dark:text-white transition-colors duration-500">
              {t.title}
            </h1>
            
            <p className="text-lg mb-10 text-center lg:text-left text-gray-600 dark:text-gray-300 transition-colors duration-500">
              {t.description}
            </p>

            <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            <button 
              data-testid="hireme-button" onClick={handleHireMe}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                >
                        {t.hireMe}
              </button>
              
              <a href="https://github.com/AlperSahin5426" target="_blank" className="px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
                {t.github}
              </a>
              
              <a href="https://www.linkedin.com/in/alper-şahin-0aa322305" target="_blank" className="px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
                {t.linkedin}
              </a>
            </div>
          </div>

          <div className="w-full max-w-[500px] h-[400px] shadow-xl border border-gray-100 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 rounded-3xl flex items-center justify-center overflow-hidden transition-colors duration-500">
              <img 
                  src={profileImage} 
                  alt="Alper Şahin" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;