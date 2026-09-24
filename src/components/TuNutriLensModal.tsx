import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  X,
  Calendar,
  Sparkles,
  Loader2,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import tuNutriLensIconRaw from '../assets/images/TuNutriLens-App-Icon-512x512.png';
import tuNutriLensBannerRaw from '../assets/images/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png';

const tuNutriLensIcon = `${tuNutriLensIconRaw}?v=20260924_final`;
const tuNutriLensBanner = `${tuNutriLensBannerRaw}?v=20260924_final`;

interface TuNutriLensModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToServices: () => void;
  onBookAppointment?: () => void;
}

export const TuNutriLensModal: React.FC<TuNutriLensModalProps> = ({
  isOpen,
  onClose,
  onGoToServices,
  onBookAppointment,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      setLoadError(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onGoToServices();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onGoToServices]);

  if (!isOpen) return null;

  const handleReload = () => {
    setIsLoading(true);
    setLoadError(false);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
      id="modal-tunutrilens-overlay"
    >
      {/* Top Header Bar */}
      <header className="shrink-0 bg-[#234336] dark:bg-slate-900 border-b border-[#3b6e5a]/40 dark:border-slate-800 text-white px-3 sm:px-6 py-2.5 sm:py-3 shadow-md z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Main Return Button: Volver a la web original con mis servicios */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onGoToServices}
              id="btn-return-to-gala-services"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-black text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              title="Volver a la página web original y a los servicios clínicos de Gala Rodríguez"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" />
              <span>Volver a mis servicios</span>
            </button>

            {/* App branding */}
            <div className="hidden md:flex items-center gap-2.5 pl-2 border-l border-white/20">
              <img
                src={tuNutriLensIcon}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/TuNutriLens-App-Icon-512x512.png?v=20260924_final';
                }}
                alt="TuNutriLens"
                loading="eager"
                className="w-7 h-7 rounded-lg object-contain ring-1 ring-white/30"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm text-white">TuNutriLens</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/90 text-[10px] font-bold uppercase tracking-wider text-white">
                    App Oficial
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200 leading-none">
                  Tu Nutricionista de bolsillo
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {onBookAppointment && (
              <button
                onClick={() => {
                  onClose();
                  onBookAppointment();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition-colors cursor-pointer border border-white/20"
                title="Pedir Cita Nutricional Online"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Pedir Cita Online</span>
              </button>
            )}

            <button
              onClick={handleReload}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Recargar aplicación"
              aria-label="Recargar"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <a
              href="https://www.tunutrilens.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer border border-white/15"
              title="Abrir en pestaña nueva externa"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nueva pestaña</span>
            </a>

            <button
              onClick={onGoToServices}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Cerrar y volver a la web de Gala Rodríguez"
              aria-label="Cerrar y volver a servicios"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </header>

      {/* Helpful Context Notice Banner */}
      <div className="shrink-0 bg-emerald-900/90 dark:bg-slate-800 border-b border-emerald-700/60 dark:border-slate-700 px-3 sm:px-6 py-2 text-white text-xs flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>
            Estás explorando <strong>TuNutriLens</strong> (Tu Nutricionista de bolsillo). Tu navegación principal y servicios clínicos de nutrición siguen activos.
          </span>
        </div>
        <button
          onClick={onGoToServices}
          className="text-amber-300 hover:text-amber-200 font-bold underline cursor-pointer text-xs ml-auto sm:ml-0"
        >
          ← Regresar ahora a Servicios y Tarifas
        </button>
      </div>

      {/* Embedded Iframe Container */}
      <div className="relative flex-1 w-full bg-slate-900 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900 z-10 text-white">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            <p className="text-sm font-semibold text-slate-300">
              Cargando www.tunutrilens.es...
            </p>
            <p className="text-xs text-slate-400">
              Tu Nutricionista de bolsillo por Gala Rodríguez
            </p>
          </div>
        )}

        {loadError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-900 z-10 text-white p-6 text-center overflow-y-auto">
            <div className="max-w-md w-full rounded-2xl overflow-hidden border border-slate-700 shadow-xl mb-2">
              <img
                src={tuNutriLensBanner}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png?v=20260924_final';
                }}
                alt="TuNutriLens - Tu Nutricionista de bolsillo"
                loading="eager"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-base font-bold text-slate-200">
              TuNutriLens · Tu Nutricionista de bolsillo
            </p>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://www.tunutrilens.es"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Abrir www.tunutrilens.es</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onGoToServices}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver a mis servicios</span>
              </button>
            </div>
          </div>
        ) : (
          <iframe
            key={iframeKey}
            src="https://www.tunutrilens.es"
            title="TuNutriLens - Aplicación de Nutrición Inteligente"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setLoadError(true);
            }}
            allow="camera; microphone; clipboard-write; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        )}

        {/* Floating Quick-Return Pill for effortless return on mobile & desktop */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            onClick={onGoToServices}
            id="floating-return-to-services-btn"
            className="px-5 py-2.5 rounded-full bg-[#1b3329] hover:bg-[#13251e] active:scale-95 text-white text-xs sm:text-sm font-extrabold shadow-2xl border-2 border-emerald-400/80 flex items-center gap-2.5 transition-all cursor-pointer backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 text-amber-300 stroke-[3]" />
            <span>Volver a la web original con mis servicios</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
