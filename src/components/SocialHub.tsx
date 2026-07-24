import React from 'react';
import { Instagram, Facebook, BookOpen, MessageCircle, Heart, MessageSquare, ExternalLink, Users, Share2 } from 'lucide-react';
import { NutritionistProfile, InstagramPostPreview } from '../types';
import { themeStyles } from '../utils/theme';

interface SocialHubProps {
  profile: NutritionistProfile;
  instagramPosts: InstagramPostPreview[];
}

export const SocialHub: React.FC<SocialHubProps> = ({
  profile,
  instagramPosts,
}) => {
  const theme = themeStyles[profile.themeColor || 'emerald'];

  return (
    <section id="redes" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800">
            <Share2 className="w-4 h-4 text-rose-500" />
            <span>Comunidad & Redes Sociales</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Toda mi actividad digital en un solo lugar
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Sigue mi contenido diario en Instagram y Facebook, o lee mis análisis extensos en Substack.
          </p>
        </div>

        {/* Social Platforms Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Instagram Platform Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-amber-500 text-white shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase">
                  Instagram
                </span>
              </div>
              <h3 className="text-xl font-extrabold">@nutricion_ehealth</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Infografías diarias, mitos desmentidos en reels y consejos de preparación de menús rápidos.
              </p>
            </div>

            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs text-center hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Facebook Platform Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <Facebook className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase">
                  Facebook
                </span>
              </div>
              <h3 className="text-xl font-extrabold">Comunidad en Facebook</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Grupo de discusión y página oficial donde compartimos avances de pacientes, eventos online y recetas.
              </p>
            </div>

            <a
              href={profile.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs text-center hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Unirme a la Comunidad</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Substack Publication Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase">
                  Substack
                </span>
              </div>
              <h3 className="text-xl font-extrabold">Boletín en Substack</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Artículos extensos de nutrición con referencias bibliográficas y novedades de mis apps.
              </p>
            </div>

            <a
              href={profile.substackUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs text-center hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Visitar Substack</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Instagram Post Feed Preview Grid */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-500" />
              <span>Últimas Publicaciones de Instagram</span>
            </h3>

            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>Ver Perfil Completo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white text-xs">
                  <p className="line-clamp-3 font-medium text-[11px] leading-snug">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-around font-bold pt-2 border-t border-white/20 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-300" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
