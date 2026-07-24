import React, { useState } from 'react';
import { ExternalLink, Layers, Eye } from 'lucide-react';
import { WebsiteConfig, ProjectItem } from '../types';
import { themeStyles } from '../utils/theme';

interface PortfolioProps {
  config: WebsiteConfig;
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  config,
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const theme = themeStyles[config.themeColor];

  const categories = ['Todos', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${theme.badge}`}>
            Nuestro Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proyectos destacados que marcan la diferencia
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explora algunos de nuestros trabajos más recientes creados para empresas y emprendedores.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? `${theme.primary} shadow-sm`
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-4 h-4 text-indigo-500" />
                    <span>Ver Detalles</span>
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        Cliente: {project.client}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
