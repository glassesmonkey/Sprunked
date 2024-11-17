import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    'whatIs',
    'howToPlay',
    'characters',
    'musicCreation',
    'sprunked2',
    'sharing',
    'support'
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="w-8 h-8 text-primary-light" />
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl">
            {t('faq.mainTitle')}
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-xl">
          {t('faq.description')}
        </p>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={faq} 
            className="game-card group overflow-hidden hover:bg-background-light/50"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center 
                         text-left transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-light transition-colors">
                {t(`faq.${faq}.question`)}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-primary-light" />
              ) : (
                <ChevronDown className="h-5 w-5 text-primary-light" />
              )}
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out 
                         ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 py-4 border-t border-primary-light/10">
                <p className="text-text-secondary">
                  {t(`faq.${faq}.answer`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-text-secondary">
          {t('faq.needHelp')}{' '}
          <a 
            href="mailto:support@sprunked.com" 
            className="text-primary-light hover:text-accent-purple transition-colors"
          >
            {t('faq.contactSupport')}
          </a>
        </p>
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

export default FAQSection;
