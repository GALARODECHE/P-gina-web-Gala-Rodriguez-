import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Calendar,
  Clock,
  Sparkles,
  Filter,
  Search,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  ChevronDown,
  LayoutGrid,
  List,
  Flame
} from 'lucide-react';
import { BlogPost, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface BlogSubstackProps {
  profile: NutritionistProfile;
  posts: BlogPost[];
  onReadPost: (post: BlogPost) => void;
  onRefreshFeed?: () => Promise<void>;
  isSyncing?: boolean;
  lastUpdated?: number | null;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200';

export const BlogSubstack: React.FC<BlogSubstackProps> = ({
  profile,
  posts,
  onReadPost,
  onRefreshFeed,
  isSyncing = false,
  lastUpdated,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        window.open('https://galanutricion.substack.com/subscribe', '_blank');
      }, 1000);
    }
  };

  const formattedLastUpdated = lastUpdated
    ? new Date(lastUpdated).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    : null;

  return (
    <section id="blog" className="py-14 sm:py-20 border-b border-black/5 dark:border-slate-800/80 bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
              <BookOpen className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span>Substack Oficial · Publicaciones Reales</span>
            </span>

            <span
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-300/60 dark:border-emerald-800 shadow-xs"
              title="Sincronización continua activa en segundo plano"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>En directo · Auto-actualización continua</span>
              {formattedLastUpdated && (
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono">
                  ({formattedLastUpdated})
                </span>
              )}
            </span>

            {onRefreshFeed && (
              <button
                type="button"
                onClick={() => onRefreshFeed()}
                disabled={isSyncing}
                title="Comprobar y forzar actualización inmediata con Substack"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer disabled:opacity-60"
              >
                <RefreshCw className={`w-3 h-3 text-amber-600 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Actualizando...' : 'Actualizar ahora'}</span>
              </button>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3b6e5a] dark:text-[#9fc3b0] tracking-tight">
            Artículos y Divulgación Nutricional
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Entradas actualizadas automáticamente desde mi Substack oficial (<strong>galanutricion.substack.com</strong>).
          </p>
        </div>

        {/* Substack Newsletter Banner - Streamlined */}
        <div className="mt-8 max-w-4xl mx-auto p-4 sm:p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left w-full md:w-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center justify-center md:justify-start gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Boletín Semanal Gratuito
            </span>
            <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
              Recibe mis nuevos artículos directamente en tu bandeja de entrada
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Sin dietas milagro: ciencia, hábitos sostenibles y reflexiones de consulta.
            </p>
          </div>

          {isSubscribed ? (
            <div className="p-2.5 px-4 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold text-center w-full md:w-auto">
              ¡Redirigiendo a Substack!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-2">
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-56 min-w-0"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Suscribirme</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Controls Bar: Categories, Search & View Mode Switcher */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" />
              <span>Categoría:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(8);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & View Mode */}
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar artículo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* View Switcher: Compact Grid vs Mini List */}
            <div className="flex items-center rounded-lg border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Vista en cuadrícula compacta"
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-700 text-amber-600 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                title="Vista en lista compacta"
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-slate-700 text-amber-600 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 ? (
          <div className="mt-8 text-center p-8 rounded-2xl bg-slate-200 dark:bg-slate-800/40 border border-slate-400 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              No se encontraron artículos con el criterio seleccionado.
            </p>
            <button
              onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
              className="mt-2 text-xs font-bold text-amber-600 hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Much Smaller Compact Grid (4 columns on desktop) */
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {displayedPosts.map((post, idx) => (
              <article
                key={post.id}
                className="group rounded-xl bg-slate-200 dark:bg-slate-800/70 border border-slate-400/80 dark:border-slate-700/80 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Compact Cover Image */}
                  <div
                    onClick={() => onReadPost(post)}
                    className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Compact Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1.5 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      
                      {idx === 0 || post.isLatest ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs animate-pulse">
                          <Flame className="w-2.5 h-2.5" />
                          <span>Última</span>
                        </span>
                      ) : post.isFeatured ? (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Destacado</span>
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Compact Body Content */}
                  <div className="p-3 sm:p-3.5 space-y-1.5">
                    {/* Meta Row: Date & Reading Time */}
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Compact Title */}
                    <h3
                      onClick={() => onReadPost(post)}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug cursor-pointer"
                      title={post.title}
                    >
                      {post.title}
                    </h3>

                    {/* Compact Summary (2 lines) */}
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {post.summary || 'Lectura de divulgación nutricional basada en evidencia clínica.'}
                    </p>
                  </div>
                </div>

                {/* Compact Action Bar */}
                <div className="p-3 sm:p-3.5 pt-0 mt-2 flex items-center justify-between text-xs border-t border-slate-300/80 dark:border-slate-700/60 pt-2">
                  <button
                    type="button"
                    onClick={() => onReadPost(post)}
                    className="font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1 cursor-pointer text-[11px] sm:text-xs"
                  >
                    <span>Leer</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  {post.substackUrl && (
                    <a
                      href={post.substackUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 text-[11px] transition-colors"
                      title="Abrir en Substack oficial"
                    >
                      <span>Substack</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Ultra-Compact Horizontal Mini-List View */
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {displayedPosts.map((post, idx) => (
              <article
                key={post.id}
                className="group rounded-xl bg-slate-200 dark:bg-slate-800/70 border border-slate-400/80 dark:border-slate-700/80 p-2.5 sm:p-3 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all duration-200 flex items-center gap-3"
              >
                {/* Square Mini Thumbnail */}
                <div
                  onClick={() => onReadPost(post)}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {(idx === 0 || post.isLatest) && (
                    <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded-full bg-emerald-600 text-white text-[9px] font-bold">
                      Última
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-amber-700 dark:text-amber-400 truncate">
                      {post.category}
                    </span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h3
                    onClick={() => onReadPost(post)}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1 leading-snug cursor-pointer"
                    title={post.title}
                  >
                    {post.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-1">
                    {post.summary || 'Lectura de divulgación nutricional en Substack.'}
                  </p>

                  <div className="pt-0.5 flex items-center justify-between text-[11px]">
                    <button
                      type="button"
                      onClick={() => onReadPost(post)}
                      className="font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                    {post.substackUrl && (
                      <a
                        href={post.substackUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1"
                      >
                        <span>Substack</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load more button */}
        {filteredPosts.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold border border-slate-400 dark:border-slate-700 transition-colors cursor-pointer shadow-xs"
            >
              <span>Ver más entradas anteriores ({filteredPosts.length - visibleCount} restantes)</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Bottom CTA: Link to full Substack profile */}
        <div className="mt-10 text-center">
          <a
            href={profile.substackUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md"
          >
            <span>Ver perfil completo en galanutricion.substack.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
