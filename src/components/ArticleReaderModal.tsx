import React from 'react';
import { X, Calendar, Clock, ExternalLink, BookOpen, Share2, Heart } from 'lucide-react';
import { BlogPost, NutritionistProfile } from '../types';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  profile: NutritionistProfile;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  post,
  onClose,
  profile,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-xs font-bold uppercase">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Por {profile.name}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Cover */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-900">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                Substack Oficial
              </span>
            </div>
          </div>

          {/* Article Text Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4">
            <p className="font-semibold text-slate-800 dark:text-slate-200 italic border-l-4 border-amber-500 pl-4 py-1">
              {post.summary}
            </p>

            <div className="whitespace-pre-line text-slate-700 dark:text-slate-300">
              {post.content}
            </div>
          </div>

          {/* Substack Call to Action Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                ¿Te ha gustado este artículo?
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Suscríbete gratis a mi Substack para recibir la versión extendida semanal.
              </p>
            </div>

            {post.substackUrl && (
              <a
                href={post.substackUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md flex-shrink-0 transition-colors"
              >
                <span>Leer en Substack</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
