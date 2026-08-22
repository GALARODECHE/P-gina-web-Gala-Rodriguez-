import React, { useState } from 'react';
import { BookOpen, ExternalLink, Calendar, Clock, Plus, Sparkles, Heart, Filter, Mail, Send } from 'lucide-react';
import { BlogPost, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface BlogSubstackProps {
  profile: NutritionistProfile;
  posts: BlogPost[];
  onReadPost: (post: BlogPost) => void;
  onOpenCMS: () => void;
}

export const BlogSubstack: React.FC<BlogSubstackProps> = ({
  profile,
  posts,
  onReadPost,
  onOpenCMS,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const theme = themeStyles[profile.themeColor || 'teal'];

  const categories = ['Todos', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === 'Todos'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        window.open(profile.substackUrl, '_blank');
      }, 1200);
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blog & Substack Clínico</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Divulgación Nutricional Basada en la Ciencia
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Artículos semanales sobre nutrición clínica, mitos alimentarios, recetas sencillas y tecnología en salud. Lee aquí o suscríbete directo a mi Substack.
          </p>
        </div>

        {/* Substack Newsletter Banner */}
        <div className="mt-10 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900/10 border border-amber-500/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Boletín Semanal Gratuito
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
              Recibe mis nuevos artículos de Substack en tu correo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Sin spam. Solo consejos prácticos, evidencia científica y recetas rápidas.
            </p>
          </div>

          {isSubscribed ? (
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold text-center">
              ¡Suscrito/a! Redirigiendo a Substack...
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2">
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[200px]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Suscribirme</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Categories Bar & Add Post Button */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Categoría:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenCMS}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-amber-500" />
            <span>Añadir / Editar Artículo en Gestor</span>
          </button>
        </div>

        {/* Posts Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    {post.isFeatured && (
                      <span className="px-2 py-0.5 rounded bg-amber-500 text-white text-[10px] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Destacado</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-slate-200/50 dark:border-slate-700/50 mt-4">
                <button
                  onClick={() => onReadPost(post)}
                  className="font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Leer Artículo</span>
                </button>

                {post.substackUrl && (
                  <a
                    href={post.substackUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1"
                    title="Ver en Substack"
                  >
                    <span>Substack</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
