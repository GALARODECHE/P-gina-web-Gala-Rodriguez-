import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { WebsiteConfig, TestimonialItem } from '../types';
import { themeStyles } from '../utils/theme';

interface TestimonialsProps {
  config: WebsiteConfig;
  testimonials: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ config, testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = themeStyles[config.themeColor];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${theme.badge}`}>
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            La satisfacción de quienes confían en nuestro trabajo es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-8 sm:p-10 shadow-xl overflow-hidden">
            
            <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-100 dark:text-slate-700/40 pointer-events-none" />

            <div className="relative space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Comment Quote */}
              <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 italic leading-relaxed">
                "{testimonials[currentIndex].comment}"
              </p>

              {/* Author Details */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/30"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonials[currentIndex].role} en{' '}
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {testimonials[currentIndex].company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    id="prev-testimonial-btn"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                    aria-label="Anterior testimonio"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 px-1">
                    {currentIndex + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    id="next-testimonial-btn"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-indigo-600' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
