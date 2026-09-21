import React from 'react';
import { ShieldCheck, Heart, Instagram, Facebook, BookOpen, Mail, MapPin, Phone, Globe, MessageCircle, ExternalLink } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';
import tuNutriLensIcon from '../assets/images/TuNutriLens-App-Icon-512x512.png';

interface FooterProps {
  profile: NutritionistProfile;
  onBookClick: () => void;
  onOpenTuNutriLens?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onBookClick,
  onOpenTuNutriLens,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <footer className="bg-transparent dark:bg-slate-900 text-slate-800 dark:text-slate-300 pt-16 pb-12 border-t border-black/5 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-black/5 dark:border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-bold text-lg text-[#3b6e5a] dark:text-[#9fc3b0] tracking-tight block">
                {profile.name}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-medium">{profile.title}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed max-w-sm">
              Consulta de nutrición clínica online para toda España y formación presencial especializada para colectivos y entidades sociosanitarias.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{profile.colegiadorNumber}</span>
              </div>
              {onOpenTuNutriLens ? (
                <button
                  type="button"
                  onClick={onOpenTuNutriLens}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/70 text-orange-950 dark:text-orange-200 border border-orange-300 dark:border-orange-800/60 hover:bg-orange-200 transition-colors cursor-pointer"
                  title="Abrir app TuNutriLens (con retorno directo)"
                >
                  <img
                    src={tuNutriLensIcon}
                    alt="TuNutriLens"
                    className="w-3.5 h-3.5 rounded-sm object-contain shrink-0"
                  />
                  <span>App TuNutriLens</span>
                </button>
              ) : (
                <a
                  href="https://www.tunutrilens.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/70 text-orange-950 dark:text-orange-200 border border-orange-300 dark:border-orange-800/60 hover:bg-orange-200 transition-colors"
                  title="Página oficial de la app TuNutriLens"
                >
                  <img
                    src={tuNutriLensIcon}
                    alt="TuNutriLens"
                    className="w-3.5 h-3.5 rounded-sm object-contain shrink-0"
                  />
                  <span>www.tunutrilens.es</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>
              )}
            </div>
          </div>

          {/* Social Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Ecosistema Digital
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-400 font-medium">
              <li>
                {onOpenTuNutriLens ? (
                  <button
                    type="button"
                    onClick={onOpenTuNutriLens}
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 font-bold text-slate-900 dark:text-white cursor-pointer text-left"
                  >
                    <img
                      src={tuNutriLensIcon}
                      alt="TuNutriLens"
                      className="w-4 h-4 rounded-md object-contain shrink-0 ring-1 ring-orange-400/40"
                    />
                    <span>TuNutriLens (App Oficial)</span>
                  </button>
                ) : (
                  <a
                    href="https://www.tunutrilens.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 font-bold text-slate-900 dark:text-white"
                  >
                    <img
                      src={tuNutriLensIcon}
                      alt="TuNutriLens"
                      className="w-4 h-4 rounded-md object-contain shrink-0 ring-1 ring-orange-400/40"
                    />
                    <span>Web App: www.tunutrilens.es</span>
                    <ExternalLink className="w-3 h-3 text-orange-400" />
                  </a>
                )}
              </li>
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-400 font-medium">
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
                  className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {profile.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <MapPin className={`w-4 h-4 ${theme.primaryText}`} />
                <span>Consulta Online (Toda España)</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Consulta Online
            </h4>
            <div className="space-y-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white transition-colors shadow-md text-center cursor-pointer"
              >
                Pedir Cita Online
              </button>

              <a
                href="#servicios"
                className="block w-full py-2.5 px-4 rounded-xl bg-[#3b6e5a] hover:bg-[#2f5747] active:bg-[#213b30] text-white font-bold text-xs transition-all shadow-sm hover:shadow-md text-center cursor-pointer"
              >
                Ver Servicios Clínicos
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <p className="max-w-2xl">
            © {new Date().getFullYear()} {profile.name} (www.galarodrigueznutricion.es). Todos los derechos reservados. Toda la información disponible en este sitio web tiene fines de educación nutricional y orientación clínica.
          </p>
          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-400 font-medium">
            <span>Portal Oficial</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>Nutrición Clínica y E-Health</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
