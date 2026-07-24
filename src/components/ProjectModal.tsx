import React from 'react';
import { X, ExternalLink, Calendar, User, Tag, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: (subject: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 shadow-inner">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-xs sm:text-sm">
            {project.client && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-indigo-500" />
                <div>
                  <p className="text-slate-400">Cliente</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{project.client}</p>
                </div>
              </div>
            )}
            {project.completionDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500" />
                <div>
                  <p className="text-slate-400">Año</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{project.completionDate}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <div>
                <p className="text-slate-400">Estado</p>
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">Completado</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Descripción del Proyecto
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-indigo-500" />
              <span>Tecnologías Utilizadas</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onContactClick(`Consulta sobre Proyecto: ${project.title}`);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Quiero un sitio como este
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
