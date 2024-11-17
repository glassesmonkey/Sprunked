import React from 'react';
import { useTranslation } from 'next-i18next';
import { Gamepad, Star, Wand2, Users, Sparkles } from 'lucide-react';

const GameTips = () => {
  const { t } = useTranslation('common');

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-5xl">
          {t('gameTips.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-xl">
          {t('gameTips.description')}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {[
          { key: 'basics', icon: <Gamepad className="mb-4 h-14 w-14" /> },
          { key: 'rhythm', icon: <Star className="mb-4 h-14 w-14" /> },
          { key: 'combinations', icon: <Wand2 className="mb-4 h-14 w-14" /> },
          { key: 'sharing', icon: <Users className="mb-4 h-14 w-14" /> },
          { key: 'advanced', icon: <Sparkles className="mb-4 h-14 w-14" /> }
        ].map(({ key, icon }) => (
          <div key={key} className="game-card group">
            {React.cloneElement(icon, { 
              className: `${icon.props.className} text-primary-light group-hover:text-accent-purple transition-colors` 
            })}
            <p className="mb-4 text-xl font-bold text-text-primary">
              {t(`gameTips.${key}.title`)}
            </p>
            <p className="text-sm text-text-secondary">
              {t(`gameTips.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameTips;
