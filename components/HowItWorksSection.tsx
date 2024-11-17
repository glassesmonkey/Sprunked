import React from 'react';
import { useTranslation } from 'next-i18next';
import { Play, Mouse, Keyboard, Star } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="bg-background-main/30 py-12 md:py-20 rounded-xl">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-5xl">
            {t('howItWorks.title')}
          </h2>
          <p className="mx-auto max-w-3xl text-text-secondary">
            {t('howItWorks.description')}
          </p>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Play />, step: 'step1' },
            { icon: <Mouse />, step: 'step2' },
            { icon: <Keyboard />, step: 'step3' },
            { icon: <Star />, step: 'step4' }
          ].map(({ icon, step }) => (
            <div 
              key={step} 
              className="game-card group hover:bg-background-light/50"
            >
              {React.cloneElement(icon, {
                className: "mb-4 h-12 w-12 text-primary-light group-hover:text-accent-purple transition-colors"
              })}
              <h3 className="mb-2 text-xl font-bold text-text-primary">
                {t(`howItWorks.${step}.title`)}
              </h3>
              <p className="text-sm text-text-secondary">
                {t(`howItWorks.${step}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-12 hidden md:block">
          <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-primary-light/0 via-primary-light/20 to-primary-light/0" />
          <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-primary-light/0 via-primary-light/20 to-primary-light/0 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
