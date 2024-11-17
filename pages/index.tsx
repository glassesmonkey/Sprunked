import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useRef } from 'react';
import { theme } from '../styles/theme';

// Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import GameTips from '../components/GameTips';
import FAQSection from '../components/FAQSection';
import GameGuide from '../components/GameGuide';
import IntroductionGame from '../components/IntroductionGame';
import OtherVersionGames from '../components/OtherVersionGames';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const canonicalUrl = `https://sprunked.com${locale === defaultLocale ? '' : `/${locale}`}${pathname}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-b from-background-main to-background-light text-text-primary'>
      <Head>
        <title>{t('meta.title')}</title>
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang tags */}
        {locales?.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://sprunked.com${l === defaultLocale ? '' : `/${l}`}${pathname}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://sprunked.com${pathname}`}
        />

        {/* Structured data remains the same */}
      </Head>

      <div className='flex max-w-7xl mx-auto flex-col items-center justify-center py-2 px-4 sm:px-6'>
        <Header />

        {/* Hero Section with Game Preview and Other Versions */}
        <div className='w-full flex flex-col lg:flex-row items-start gap-6 mt-8 sm:mt-12'>
          {/* Game Preview */}
          <div className='flex-1 w-full lg:w-auto'>
            <div className='relative w-full max-w-[768px] h-[320px] sm:h-[573px] rounded-2xl 
                           shadow-[0_0_15px_rgba(147,51,234,0.3)] overflow-hidden 
                           transform hover:scale-[1.02] transition-all duration-300
                           hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]'>
              {!showIframe ? (
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => setShowIframe(true)}
                  style={{
                    backgroundImage: 'url(https://cdn.sprunked.cloud/1092260342_480x360.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="backdrop-blur-md bg-background-main/22 p-8 rounded-2xl text-center 
                                 transform hover:scale-105 transition-all duration-300
                                 border border-primary-light/20">
                    <h2 className="text-text-primary text-2xl sm:text-3xl font-bold mb-6">
                      {t('game.clickToPlay')}
                    </h2>
                    <div
                      className="px-8 py-4 bg-primary-main text-text-primary rounded-xl 
                               hover:bg-primary-light transform hover:-translate-y-1 
                               transition-all duration-300 shadow-lg
                               hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                    >
                      {t('game.playNow')}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <iframe
                    ref={iframeRef}
                    src="https://cdn.sprunked.cloud/Sprunked%20(Unofficial%20Scratch%20Version).html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Sprunked"
                    onLoad={() => setIframeLoaded(true)}
                    className={`${iframeLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                  />
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-purple-900/10 backdrop-blur-sm">
                      <div className="p-8 rounded-full">
                        <div className="animate-bounce text-purple-600">
                          <svg className="w-16 h-16 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Other Versions - Only show on larger screens */}
          <div className="hidden lg:block">
            <OtherVersionGames />
          </div>
        </div>

        {/* Show Other Versions below on mobile */}
        <div className="lg:hidden w-full mt-6">
          <OtherVersionGames />
        </div>

        <IntroductionGame />

        {/* Main content sections */}
        <div className="w-full space-y-12 sm:space-y-16 mt-8 sm:mt-12">
          <div className="relative">
            {/* Floating music notes animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="music-notes-animation" />
            </div>
            
            <FeaturesSection />
            <HowItWorksSection />
            <GameTips />
            <FAQSection />
            <Testimonials />
            <GameGuide />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  if (!locale) {
    throw new Error('Locale is not defined');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'otherversiongame'])),
    },
  };
};

export default Home;






