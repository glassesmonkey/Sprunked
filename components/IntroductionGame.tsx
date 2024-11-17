import { useTranslation } from 'next-i18next';
import { Sparkles } from 'lucide-react';

const IntroductionGame = () => {
  const { t } = useTranslation('common');

  return (
    <section className="w-full max-w-[768px] mt-6 sm:mt-8">
      <div className="bg-background-card rounded-xl p-6 sm:p-8 
                    border border-primary-light/20
                    hover:border-primary-light/40 
                    hover:shadow-[0_0_20px_rgba(147,51,234,0.2)]
                    transition-all duration-300">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-primary-light mr-2" />
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary text-center">
            {t('introduction.title')}
          </h1>
        </div>
        
        <p className="text-text-secondary mb-6 text-base sm:text-lg leading-relaxed">
          {t('introduction.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(t('introduction.highlights', { returnObjects: true }) as string[]).map((highlight, index) => (
            <div 
              key={index}
              className="flex items-start space-x-2 bg-background-main/50 p-3 rounded-lg
                         border border-primary-light/10 
                         hover:border-primary-light/30
                         hover:shadow-[0_0_15px_rgba(147,51,234,0.15)]
                         transition-all duration-300"
            >
              <svg 
                className="w-5 h-5 text-primary-light flex-shrink-0 mt-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-sm text-text-secondary">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionGame; 