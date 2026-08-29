import React from 'react';
import { Instagram, Facebook, BookOpen, MessageCircle, ExternalLink, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface SocialHubProps {
  profile: NutritionistProfile;
}

export const SocialHub: React.FC<SocialHubProps> = ({
  profile,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="redes" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Share2 className="w-3.5 h-3.5" />
            <span>Comunidad y Canales Oficiales</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Canales de Divulgación y Contacto Directo
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Sigue mis publicaciones reales en Instagram y Facebook, o accede a mis artículos científicos en Substack.
          </p>
        </div>

        {/* Social Platforms Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Instagram Platform Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-amber-500 text-white shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Oficial
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold">@galanutricion</h3>
                <p className="text-xs text-white/80 font-medium mt-0.5">Instagram Oficial</p>
              </div>
              <p className="text-xs text-white/90 leading-relaxed">
                Salud de la mujer, disfagia, oncología, educación nutricional rigurosa y pautas prácticas para tu día a día.
              </p>
            </div>

            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs text-center hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Abrir Instagram (@galanutricion)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Substack Publication Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Boletín
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold">galanutricion.substack.com</h3>
                <p className="text-xs text-white/80 font-medium mt-0.5">Substack Oficial</p>
              </div>
              <p className="text-xs text-white/90 leading-relaxed">
                Artículos clínicos en profundidad, desmitificación de tendencias y bienestar integral con base científica.
              </p>
            </div>

            <a
              href={profile.substackUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs text-center hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Leer en Substack</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Facebook Platform Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <Facebook className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Comunidad
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold">Gala Nutrición</h3>
                <p className="text-xs text-white/80 font-medium mt-0.5">Página de Facebook</p>
              </div>
              <p className="text-xs text-white/90 leading-relaxed">
                Espacio de divulgación y novedades sobre salud clínica, nutrición enteral y soporte profesional.
              </p>
            </div>

            <a
              href={profile.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs text-center hover:bg-slate-100 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Seguir en Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
