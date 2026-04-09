import React from "react";
import { projectsData } from "../data/projects";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
const Projects = () => {
  const {language} = useContext(LanguageContext);
  const t = translations[language].projects;
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
  <div className="max-w-[1140px] mx-auto px-4">
    
    <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
      {t.title}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <div 
          key={project.id} 
          className="flex flex-col p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-sm transition-colors"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-2xl mb-4 shadow-sm"
          />

          <h3 className="text-2xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description[language]}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-white dark:bg-indigo-900/40 border border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-md transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-auto">
            <a href={project.github} className="text-gray-700 dark:text-gray-300 font-medium hover:underline">GitHub</a>
            <a href={project.site} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">View Site</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Projects;