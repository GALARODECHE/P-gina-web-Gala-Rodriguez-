import React from 'react';
import { ShieldCheck, Heart, Instagram, Facebook, BookOpen, Mail, MapPin, Phone, Globe, MessageCircle } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface FooterProps {
  profile: NutritionistProfile;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onBookClick,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <footer className="bg-[#e8f2fa] dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-16 pb-12 border-t border-sky-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sky-200/80 dark:border-slate-800/80">
          
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
                <span className="font-bold text-lg text-slate-700 dark:text-white tracking-tight">
                  {profile.name}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{profile.title}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Diplomada en Nutrición Humana y Dietética (Univ. de Navarra). Experta en salud de la mujer, disfagia y oncología con más de 20 años de experiencia clínica.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{profile.colegiadorNumber}</span>
              </div>
              <a
                href="https://www.galarodrigueznutricion.es"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
              >
                <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>www.galarodrigueznutricion.es</span>
              </a>
            </div>
          </div>

          {/* Social Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white">
              Ecosistema Digital
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a
                  href={profile.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram (@galanutricion)</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4 text-sky-500" />
                  <span>Facebook (Gala Nutrición)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Mail className={`w-4 h-4 ${theme.primaryText}`} />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Phone className={`w-4 h-4 ${theme.primaryText}`} />
                  <span>{profile.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {profile.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <MapPin className={`w-4 h-4 ${theme.primaryText}`} />
                <span>Consulta Online (Toda España)</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white">
              Consulta Online
            </h4>
            <div className="space-y-2">
              <button
                onClick={onBookClick}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-colors shadow-md text-center ${theme.primary}`}
              >
                Pedir Cita Online
              </button>

              <a
                href="#tarifas"
                className="block w-full py-2.5 px-4 rounded-xl border border-sky-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors text-center"
              >
                Ver Tarifas y Planes
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="max-w-2xl">
            © {new Date().getFullYear()} {profile.name} (www.galarodrigueznutricion.es). Todos los derechos reservados. Toda la información disponible en este sitio web tiene fines de educación nutricional y orientación clínica.
          </p>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
            <span>Portal Oficial</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>Nutrición Clínica y E-Health</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
