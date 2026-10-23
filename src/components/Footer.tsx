import React, { useState } from 'react';
import { ShieldCheck, Heart, Instagram, BookOpen, Mail, MapPin, Phone, Globe, MessageCircle, ExternalLink, Palette, Smartphone, Presentation } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface FooterProps {
  profile: NutritionistProfile;
  onBookClick: () => void;
  onOpenTuNutriLens?: () => void;
  onOpenInstitutions?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onBookClick,
  onOpenTuNutriLens,
  onOpenInstitutions,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  const [currentBg, setCurrentBg] = useState<string>(() => {
    try {
      return localStorage.getItem('gala_custom_bg') || '#fff8f1';
    } catch {
      return '#fff8f1';
    }
  });

  const bgPresets = [
    { label: 'Melocotón Luminoso', hex: '#fff8f1' },
    { label: 'Melocotón Crema', hex: '#fff0e4' },
    { label: 'Marfil Suave', hex: '#fefaf6' },
    { label: 'Lino Neutro', hex: '#f5f2eb' },
    { label: 'Blanco Puro', hex: '#ffffff' },
  ];

  const handleApplyBg = (colorHex: string) => {
    setCurrentBg(colorHex);
    document.documentElement.style.setProperty('--bg-page-uniform', colorHex);
    try {
      localStorage.setItem('gala_custom_bg', colorHex);
    } catch {}
  };

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
              Consulta de nutrición clínica online para toda España y formación online especializada para colectivos y entidades sociosanitarias.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{profile.colegiadorNumber}</span>
              </div>
            </div>
          </div>

          {/* Social Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Ecosistema Digital
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-400 font-medium">
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
                  href={profile.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>Substack (Gala Rodríguez)</span>
                </a>
              </li>
              {onOpenTuNutriLens && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenTuNutriLens}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-500" />
                    <span>App TuNutriLens</span>
                  </button>
                </li>
              )}
              {onOpenInstitutions && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenInstitutions}
                    className="hover:text-[#3b6e5a] dark:hover:text-[#9fc3b0] transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <Presentation className="w-4 h-4 text-[#3b6e5a]" />
                    <span>Talleres y Formación para Entidades</span>
                  </button>
                </li>
              )}
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
                Reserva tu consulta
              </button>

              <a
                href="#sesiones-online"
                className="block w-full py-2.5 px-4 rounded-xl bg-[#3b6e5a] hover:bg-[#2f5747] active:bg-[#213b30] text-white font-bold text-xs transition-all shadow-sm hover:shadow-md text-center cursor-pointer"
              >
                Ver Servicios Clínicos
              </a>
            </div>
          </div>

        </div>

        {/* Selector de Tono Uniforme de Fondo */}
        <div className="pt-6 border-t border-black/5 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Palette className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="font-semibold">Fondo uniforme de la web:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {bgPresets.map((preset) => (
              <button
                key={preset.hex}
                type="button"
                onClick={() => handleApplyBg(preset.hex)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border cursor-pointer ${
                  currentBg.toLowerCase() === preset.hex.toLowerCase()
                    ? 'border-amber-600 bg-white dark:bg-slate-800 text-amber-950 dark:text-white shadow-xs font-bold ring-1 ring-amber-500/30'
                    : 'border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white'
                }`}
                title={`Cambiar fondo a ${preset.label} (${preset.hex})`}
              >
                <span className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0" style={{ backgroundColor: preset.hex }} />
                <span>{preset.label}</span>
              </button>
            ))}
            <label className="px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white">
              <input
                type="color"
                value={currentBg}
                onChange={(e) => handleApplyBg(e.target.value)}
                className="w-3.5 h-3.5 rounded cursor-pointer border-0 p-0"
                title="Elegir cualquier color personalizado"
              />
              <span className="hidden sm:inline">Personalizado</span>
            </label>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
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
