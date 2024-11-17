import React from 'react';
import { useTranslation } from 'next-i18next';
import { Gamepad, Music, Wand2, Zap, Users } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center order-2 lg:order-1 lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-text-primary text-center md:mb-10 md:text-5xl lg:mb-12">
            {t('features.title')}
          </h2>
          <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
            {[
              { icon: <Music />, key: 'music' },
              { icon: <Gamepad />, key: 'gameplay' },
              { icon: <Wand2 />, key: 'characters' },
              { icon: <Users />, key: 'community' },
              { icon: <Zap />, key: 'sprunked2' }
            ].map(({ icon, key }) => (
              <li key={key} className="game-card group">
                {React.cloneElement(icon, {
                  className: "mb-4 h-10 w-10 text-primary-light group-hover:text-accent-purple transition-colors"
                })}
                <p className="mb-4 font-semibold text-text-primary">
                  {t(`features.${key}.title`)}
                </p>
                <p className="text-sm text-text-secondary">
                  {t(`features.${key}.description`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 lg:w-1/2">
          <img
            src="https://cdn.sprunkiphase3.online/sprunked-features.webp"
            alt={t('features.mainImage.alt')}
            className="h-auto w-full max-w-md object-contain rounded-xl 
                     hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] 
                     transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
