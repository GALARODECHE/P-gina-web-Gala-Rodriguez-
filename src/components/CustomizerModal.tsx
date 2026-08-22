import React, { useState } from 'react';
import { X, RotateCcw, Palette, Layout, Type, Mail, Check } from 'lucide-react';
import { WebsiteConfig } from '../types';

interface CustomizerModalProps {
  config: WebsiteConfig;
  isOpen: boolean;
  onClose: () => void;
  onUpdateConfig: (newConfig: WebsiteConfig) => void;
  onResetConfig: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  config,
  isOpen,
  onClose,
  onUpdateConfig,
  onResetConfig,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'branding' | 'theme' | 'sections' | 'contact'>('branding');

  const themeOptions: { id: WebsiteConfig['themeColor']; label: string; bg: string }[] = [
    { id: 'teal', label: 'Verde Salvia & Esmeralda', bg: 'bg-emerald-700' },
    { id: 'navy', label: 'Azul Sanitario Sereno', bg: 'bg-sky-700' },
    { id: 'slate', label: 'Grafito & Platino', bg: 'bg-slate-900' },
    { id: 'sage', label: 'Oliva & Eucalipto', bg: 'bg-teal-700' },
    { id: 'amber', label: 'Tierra & Terracota', bg: 'bg-amber-700' },
  ];

  const handleTextChange = (field: keyof WebsiteConfig, value: string) => {
    onUpdateConfig({ ...config, [field]: value });
  };

  const handleToggleSection = (field: keyof WebsiteConfig) => {
    onUpdateConfig({ ...config, [field]: !config[field] });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-indigo-500" />
              <span>Personalizar Sitio Web en Vivo</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Edita textos, colores y secciones en tiempo real.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 pt-2 gap-2 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('branding')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'branding'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Marca y Textos</span>
          </button>

          <button
            onClick={() => setActiveTab('theme')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'theme'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Colores e Identidad</span>
          </button>

          <button
            onClick={() => setActiveTab('sections')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'sections'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>Secciones Visibles</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'contact'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Datos de Contacto</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {/* TAB 1: BRANDING */}
          {activeTab === 'branding' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nombre del Sitio / Marca
                </label>
                <input
                  type="text"
                  value={config.siteName}
                  onChange={(e) => handleTextChange('siteName', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Eslogan / Tagline
                </label>
                <input
                  type="text"
                  value={config.tagline}
                  onChange={(e) => handleTextChange('tagline', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Título Principal del Inicio (Hero Title)
                </label>
                <textarea
                  rows={2}
                  value={config.heroTitle}
                  onChange={(e) => handleTextChange('heroTitle', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subtítulo Principal (Hero Subtitle)
                </label>
                <textarea
                  rows={3}
                  value={config.heroSubtitle}
                  onChange={(e) => handleTextChange('heroSubtitle', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* TAB 2: THEME */}
          {activeTab === 'theme' && (
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Selecciona la Paleta de Color Principal
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {themeOptions.map((opt) => {
                  const isSelected = config.themeColor === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => onUpdateConfig({ ...config, themeColor: opt.id })}
                      className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-500'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${opt.bg} shadow-sm`} />
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {opt.label}
                        </span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: SECTIONS */}
          {activeTab === 'sections' && (
            <div className="space-y-3 text-xs sm:text-sm">
              <label className="block font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-xs">
                Activa o Desactiva Secciones de tu Página Web
              </label>

              {[
                { id: 'showServices', label: 'Sección de Servicios' },
                { id: 'showPortfolio', label: 'Sección de Portafolio' },
                { id: 'showAbout', label: 'Sección Sobre Nosotros' },
                { id: 'showTestimonials', label: 'Sección de Testimonios' },
                { id: 'showContact', label: 'Sección de Contacto' },
              ].map((sec) => {
                const key = sec.id as keyof WebsiteConfig;
                const isChecked = Boolean(config[key]);
                return (
                  <label
                    key={sec.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/60 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="font-medium text-slate-800 dark:text-slate-200">{sec.label}</span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleSection(key)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                  </label>
                );
              })}
            </div>
          )}

          {/* TAB 4: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Correo Electrónico de Contacto
                </label>
                <input
                  type="email"
                  value={config.email}
                  onChange={(e) => handleTextChange('email', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Número de Teléfono / WhatsApp
                </label>
                <input
                  type="text"
                  value={config.phone}
                  onChange={(e) => handleTextChange('phone', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Ubicación Principal
                </label>
                <input
                  type="text"
                  value={config.location}
                  onChange={(e) => handleTextChange('location', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
          <button
            onClick={onResetConfig}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer Valores</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            Guardar y Aplicar
          </button>
        </div>

      </div>
    </div>
  );
};
