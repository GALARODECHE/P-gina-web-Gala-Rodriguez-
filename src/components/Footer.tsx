import React from 'react';
import { ShieldCheck, Heart, Instagram, Facebook, BookOpen, Mail, MapPin, Phone } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface FooterProps {
  profile: NutritionistProfile;
  onOpenCMS: () => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenCMS,
  onBookClick,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <footer className="bg-stone-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-16 pb-12 border-t border-stone-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-200 dark:border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-stone-200 dark:ring-slate-700 shadow-sm"
              />
              <div>
                <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                  {profile.name}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{profile.title}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Nutrición clínica hospitalaria, reeducación alimentaria y desarrollo de soluciones e-health basadas en evidencia científica.
            </p>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{profile.colegiadorNumber}</span>
            </div>
          </div>

          {/* Social Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Ecosistema Digital
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a
                  href={profile.substackUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>Substack Newsletter</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4 text-sky-500" />
                  <span>Página de Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <Mail className={`w-4 h-4 ${theme.primaryText}`} />
                <span>{profile.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className={`w-4 h-4 ${theme.primaryText}`} />
                <span>{profile.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 ${theme.primaryText}`} />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          {/* Actions & CMS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Accesos Rápidos
            </h4>
            <div className="space-y-2">
              <button
                onClick={onBookClick}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-colors shadow-md text-center ${theme.primary}`}
              >
                Pedir Cita Online
              </button>

              <button
                onClick={onOpenCMS}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors text-center"
              >
                Gestor / Panel Editable
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="max-w-2xl">
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados. Toda la información disponible en este sitio web tiene fines de educación nutricional y orientación clínica.
          </p>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
            <span>Diseñado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>para Nutrición Clínica & E-Health</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
