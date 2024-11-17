import React from 'react';
import { useTranslation } from 'next-i18next';
import { Gamepad, Star, Music, Users, Wand2, Sparkles, HelpCircle } from 'lucide-react';

const GameGuide = () => {
  const { t } = useTranslation('common');

  const sections = [
    'basics',
    'characters',
    'composition',
    'effects',
    'sprunked2',
    'advanced',
    'community'
  ];

  const icons = {
    basics: <Gamepad className="h-6 w-6" />,
    characters: <Star className="h-6 w-6" />,
    composition: <Music className="h-6 w-6" />,
    effects: <Wand2 className="h-6 w-6" />,
    sprunked2: <Sparkles className="h-6 w-6" />,
    advanced: <HelpCircle className="h-6 w-6" />,
    community: <Users className="h-6 w-6" />
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-5xl">
          {t('gameGuide.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-xl">
          {t('gameGuide.description')}
        </p>
      </div>
      <div className="mx-auto max-w-3xl space-y-6">
        {sections.map((section) => (
          <div 
            key={section} 
            className="game-card group hover:bg-background-light/50"
          >
            <div className="flex items-center mb-6">
              {React.cloneElement(icons[section as keyof typeof icons], {
                className: "h-8 w-8 text-primary-light group-hover:text-accent-purple transition-colors mr-3"
              })}
              <h3 className="text-2xl font-bold text-text-primary">
                {t(`gameGuide.${section}.title`)}
              </h3>
            </div>
            <p className="mb-6 text-text-secondary">
              {t(`gameGuide.${section}.description`)}
            </p>
            <ul className="space-y-3">
              {(t(`gameGuide.${section}.tips`, { returnObjects: true }) as string[]).map((tip: string, index: number) => (
                <li key={index} className="flex items-start group/tip">
                  <span className="mr-3 text-primary-light group-hover/tip:text-accent-purple transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span className="text-text-secondary group-hover/tip:text-text-primary transition-colors">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="relative mt-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-main/5 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary-main/5 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default GameGuide;
