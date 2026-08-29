import React, { useState } from 'react';
import { BookOpen, ExternalLink, Calendar, Clock, Sparkles, Filter, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { BlogPost, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface BlogSubstackProps {
  profile: NutritionistProfile;
  posts: BlogPost[];
  onReadPost: (post: BlogPost) => void;
}

export const BlogSubstack: React.FC<BlogSubstackProps> = ({
  profile,
  posts,
  onReadPost,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const theme = themeStyles[profile.themeColor || 'teal'];

  const categories = ['Todos', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((p) => {
    const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        window.open('https://galanutricion.substack.com/subscribe', '_blank');
      }, 1000);
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
              <BookOpen className="w-3.5 h-3.5" />
              <span>Substack Oficial · Publicaciones Reales</span>
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-300/40">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>galanutricion.substack.com</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Artículos y Divulgación Nutricional
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Mis artículos reales publicados en Substack sobre nutrición clínica, salud de la mujer, mitos y hábitos saludables.
          </p>
        </div>

        {/* Substack Newsletter Banner */}
        <div className="mt-10 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900/10 border border-amber-500/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center justify-center md:justify-start gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Boletín Semanal en Substack
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
              Recibe mis nuevos artículos directamente en tu email
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Sin spam ni dietas milagro. Ciencia, hábitos sostenibles y reflexiones de consulta.
            </p>
          </div>

          {isSubscribed ? (
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold text-center">
              ¡Redirigiendo a la suscripción de Substack!
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
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Search & Categories Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
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

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar en los artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Posts Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="mt-12 text-center p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No se encontraron artículos con el criterio de búsqueda seleccionado.
            </p>
            <button
              onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-amber-600 hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

                    <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-700/50 mt-4">
                  <button
                    onClick={() => onReadPost(post)}
                    className="font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 py-1"
                  >
                    <span>Leer Artículo</span>
                  </button>

                  {post.substackUrl && (
                    <a
                      href={post.substackUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white font-medium flex items-center gap-1 py-1"
                      title="Abrir en Substack oficial"
                    >
                      <span>En Substack</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA: Link to full Substack profile */}
        <div className="mt-12 text-center">
          <a
            href={profile.substackUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all hover:shadow-lg"
          >
            <span>Ver todas las publicaciones en galanutricion.substack.com</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
