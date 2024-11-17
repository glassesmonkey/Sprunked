import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  shortName: string;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const languages: Language[] = [
    { code: 'en', name: 'English', shortName: 'EN' },
  ];

  const handleLanguageChange = (langCode: string) => {
    router.push(router.pathname, router.asPath, { locale: langCode });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='flex justify-between items-center w-full mt-5 border-b border-primary-light/10 pb-7 sm:px-4 px-2'>
      <Link href='/' className='flex space-x-2 items-center group'>
        <Image
          alt='logo'
          src='/icons/logo.webp'
          className='sm:w-10 sm:h-10 w-7 h-7 
                    group-hover:scale-110 transition-transform duration-300'
          width={20}
          height={20}
        />
        <p className='sm:text-3xl text-xl font-bold ml-2 tracking-tight text-text-primary
                     group-hover:text-primary-light transition-colors'>
          {t('header.headerh2')}
        </p>
      </Link>

      <div className='flex items-center'>
        {/* Desktop Language Switcher */}
        <div className="relative inline-block mr-4 sm:block hidden">
          <div className="flex items-center game-card hover:bg-background-light/50 py-2 pl-2 pr-8">
            <Globe className="w-5 h-5 text-primary-light" />
            <select
              onChange={(e) => router.push(router.pathname, router.asPath, { locale: e.target.value })}
              value={router.locale}
              className="appearance-none bg-transparent pl-2 pr-8 text-text-primary focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-background-card text-text-primary">
                  {lang.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <ChevronDown className="w-4 h-4 text-primary-light" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden sm:flex space-x-6 items-center ml-4'>
          <Link href='/' className='border-r border-primary-light/10 pr-4 space-x-2 text-text-primary hover:text-primary-light transition-colors'>
            <span className='font-medium text-base'>{t('header.home')}</span>
          </Link>

          <Link href='/blog-post-list' className='border-r border-primary-light/10 pr-4 space-x-2 text-text-primary hover:text-primary-light transition-colors'>
            <span className='font-medium text-base'>{t('header.blog')}</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="ml-4 sm:hidden text-primary-light hover:text-accent-purple transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-background-card border-b border-primary-light/10 shadow-lg z-20">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              href='/' 
              className='text-text-primary hover:text-primary-light transition-colors' 
              onClick={toggleMobileMenu}
            >
              <span className='font-medium text-base'>{t('header.home')}</span>
            </Link>
            <Link 
              href='/blog-post-list' 
              className='text-text-primary hover:text-primary-light transition-colors' 
              onClick={toggleMobileMenu}
            >
              <span className='font-medium text-base'>{t('header.blog')}</span>
            </Link>

            {/* Language Selector in Mobile Menu */}
            <div className="mt-4 border-t border-primary-light/10 pt-4">
              <h3 className="text-sm font-semibold text-text-secondary mb-2">
                {t('header.selectLanguage')}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md 
                              transition-colors duration-150 ease-in-out
                              ${router.locale === lang.code
                                ? 'bg-primary-main text-text-primary'
                                : 'bg-background-light text-text-secondary hover:text-primary-light'
                              }`}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
