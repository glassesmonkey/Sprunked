import React from 'react';
import { useTranslation } from 'next-i18next';
import { Star, Heart, Music, Gamepad, PartyPopper, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation('common');

  const testimonials = ['musician', 'parent', 'teacher', 'gamer', 'artist', 'student'];
  const icons = [Star, Music, Heart, Gamepad, PartyPopper, Sparkles];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32" aria-labelledby="testimonials-title">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 id="testimonials-title" className="mb-4 text-3xl font-bold text-text-primary md:text-5xl">
          {t('testimonials.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-xl">
          {t('testimonials.subtitle')}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const Icon = icons[index];
          return (
            <div 
              key={testimonial} 
              className="game-card group hover:bg-background-light/50"
            >
              <div className="mb-4 rounded-full bg-primary-main/10 p-2 
                            group-hover:bg-primary-main/20 transition-colors">
                <Icon className="h-12 w-12 text-primary-light group-hover:text-accent-purple transition-colors" />
              </div>
              <p className="mb-4 text-sm italic text-text-secondary">
                "{t(`testimonials.${testimonial}.content`)}"
              </p>
              <div className="mt-auto">
                <p className="text-base font-semibold text-text-primary">
                  {t(`testimonials.${testimonial}.name`)}
                </p>
                <p className="text-sm text-text-secondary">
                  {t(`testimonials.${testimonial}.role`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-main/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square">
          <div className="absolute inset-0 blur-3xl opacity-20 animate-pulse"
               style={{
                 background: 'radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 70%)'
               }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
