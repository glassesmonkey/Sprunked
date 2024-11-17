import { useTranslation } from 'next-i18next';

const VersionComparison = () => {
  const { t } = useTranslation('common');

  const getFeatures = (path: string): string[] => {
    const features = t(path, { returnObjects: true });
    return features as string[];
  };

  return (
    <section className="w-full py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light to-primary-main bg-clip-text text-transparent">
          {t('comparison.title')}
        </h2>
        <p className="text-lg text-text-secondary">
          {t('comparison.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Original Sprunked */}
        <div className="bg-background-light/30 backdrop-blur-md rounded-2xl p-6 border border-primary-light/20
                    transform hover:scale-[1.02] transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
          <h3 className="text-xl font-bold mb-4 text-primary-light">
            {t('comparison.versions.original.title')}
          </h3>
          <ul className="space-y-3">
            {getFeatures('comparison.versions.original.features').map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sprunked 2.0 */}
        <div className="bg-background-light/30 backdrop-blur-md rounded-2xl p-6 border border-primary-light/20
                    transform hover:scale-[1.02] transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]
                    relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <span className="bg-primary-main px-3 py-1 rounded-full text-sm font-semibold">
              Latest
            </span>
          </div>
          <h3 className="text-xl font-bold mb-4 text-primary-light">
            {t('comparison.versions.sprunked2.title')}
          </h3>
          <ul className="space-y-3">
            {getFeatures('comparison.versions.sprunked2.features').map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scratch Version */}
        <div className="bg-background-light/30 backdrop-blur-md rounded-2xl p-6 border border-primary-light/20
                    transform hover:scale-[1.02] transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
          <h3 className="text-xl font-bold mb-4 text-primary-light">
            {t('comparison.versions.scratch.title')}
          </h3>
          <ul className="space-y-3">
            {getFeatures('comparison.versions.scratch.features').map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VersionComparison; 