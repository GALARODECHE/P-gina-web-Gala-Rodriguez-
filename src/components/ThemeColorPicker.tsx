import React from 'react';
import { Palette, Check, Layout, Paintbrush } from 'lucide-react';
import { ThemeColorKey, BgThemeKey } from '../utils/theme';

interface ThemeColorPickerProps {
  currentColor: ThemeColorKey;
  currentBg?: BgThemeKey;
  onSelectColor: (color: ThemeColorKey) => void;
  onSelectBg?: (bg: BgThemeKey) => void;
}

export const ThemeColorPicker: React.FC<ThemeColorPickerProps> = ({
  currentColor,
  currentBg = 'default',
  onSelectColor,
  onSelectBg,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'bg' | 'accent'>('bg');

  const accentOptions: { key: ThemeColorKey; name: string; colorBg: string }[] = [
    { key: 'teal', name: 'Teal Clínico', colorBg: 'bg-teal-600' },
    { key: 'navy', name: 'Azul Sanitario', colorBg: 'bg-sky-600' },
    { key: 'slate', name: 'Gris Platino', colorBg: 'bg-slate-700' },
    { key: 'sage', name: 'Salvia Orgánica', colorBg: 'bg-emerald-600' },
    { key: 'amber', name: 'Coral / Cálido', colorBg: 'bg-amber-600' },
  ];

  const bgOptions: { key: BgThemeKey; name: string; desc: string; preview: string }[] = [
    { key: 'default', name: 'Gris Neutro', desc: 'Fondo estándar equilibrado', preview: 'bg-slate-200' },
    { key: 'pure-white', name: 'Blanco Puro', desc: 'Fondo totalmente blanco', preview: 'bg-white border border-slate-300' },
    { key: 'warm-cream', name: 'Crema / Marfil', desc: 'Tono cálido descansado', preview: 'bg-[#f5f0e6]' },
    { key: 'soft-mint', name: 'Menta / Salvia', desc: 'Matiz verde fresco', preview: 'bg-[#e2f0e8]' },
    { key: 'cool-sky', name: 'Azul Hielo', desc: 'Tono azul claro limpio', preview: 'bg-[#e0f2fe]' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-slate-800 text-teal-900 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
        title="Cambiar color de fondo y acentos de la web"
      >
        <Palette className="w-4 h-4 text-teal-600 dark:text-teal-400" />
        <span>Fondo y Colores</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-50 space-y-3 animate-in fade-in zoom-in-95">
            <div className="px-1 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Diseño & Paleta de Colores</p>
                <p className="text-[10px] text-slate-500">Personaliza el fondo y los tonos de la web</p>
              </div>
            </div>

            {/* Selector Tabs */}
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-medium">
              <button
                onClick={() => setActiveTab('bg')}
                className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'bg'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>1. Color Fondo</span>
              </button>
              <button
                onClick={() => setActiveTab('accent')}
                className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'accent'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Paintbrush className="w-3.5 h-3.5" />
                <span>2. Color Botones</span>
              </button>
            </div>

            {/* Tab 1: Backgrounds */}
            {activeTab === 'bg' && (
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 px-1">
                  Selecciona el color de fondo general:
                </p>
                {bgOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      if (onSelectBg) onSelectBg(opt.key);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition-all ${
                      currentBg === opt.key
                        ? 'bg-teal-50 dark:bg-slate-800 text-teal-900 dark:text-white font-bold ring-1 ring-teal-500/50'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full ${opt.preview} shadow-sm ring-1 ring-black/10 shrink-0`} />
                      <div className="text-left">
                        <p className="font-semibold text-xs leading-none">{opt.name}</p>
                        <p className="text-[10px] text-slate-400 font-normal mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                    {currentBg === opt.key && <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />}
                  </button>
                ))}
              </div>
            )}

            {/* Tab 2: Accent Colors */}
            {activeTab === 'accent' && (
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 px-1">
                  Selecciona el color de botones y destacados:
                </p>
                {accentOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      onSelectColor(opt.key);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition-colors ${
                      currentColor === opt.key
                        ? 'bg-teal-50 dark:bg-slate-800 text-teal-900 dark:text-white font-bold ring-1 ring-teal-500/50'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3.5 h-3.5 rounded-full ${opt.colorBg} shadow-sm ring-1 ring-black/10`} />
                      <span>{opt.name}</span>
                    </div>
                    {currentColor === opt.key && <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
