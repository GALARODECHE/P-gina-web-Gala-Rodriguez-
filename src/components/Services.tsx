import React, { useState } from 'react';
import { Globe, Layout, ShoppingCart, Zap, Check, ArrowUpRight, Code, Smartphone, Shield, Sparkles } from 'lucide-react';
import { WebsiteConfig, ServiceItem } from '../types';
import { themeStyles } from '../utils/theme';

interface ServicesProps {
  config: WebsiteConfig;
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe':
      return <Globe className="w-6 h-6" />;
    case 'Layout':
      return <Layout className="w-6 h-6" />;
    case 'ShoppingCart':
      return <ShoppingCart className="w-6 h-6" />;
    case 'Zap':
      return <Zap className="w-6 h-6" />;
    case 'Code':
      return <Code className="w-6 h-6" />;
    case 'Smartphone':
      return <Smartphone className="w-6 h-6" />;
    case 'Shield':
      return <Shield className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export const Services: React.FC<ServicesProps> = ({
  config,
  services,
  onSelectService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const theme = themeStyles[config.themeColor];

  const categories = ['Todos', ...Array.from(new Set(services.map((s) => s.category)))];

  const filteredServices =
    selectedCategory === 'Todos'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${theme.badge}`}>
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Soluciones integrales para hacer crecer tu marca
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Ofrecemos servicios de alta calidad diseñados para optimizar tu presencia en línea, atraer más clientes y acelerar tus ventas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? `${theme.primary} shadow-sm`
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl ${theme.primaryBgLight} ${theme.primaryText}`}>
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {service.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <ul className="mt-6 space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <div className="p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold">
                <button
                  onClick={() => onSelectService(service)}
                  className={`inline-flex items-center gap-1 ${theme.primaryText} hover:underline`}
                >
                  <span>Solicitar Información</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
