import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Twitter, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const isIndexPage = pathname === '/';

  return (
    <footer className="bg-background-main/50 text-text-primary border-t border-primary-light/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-bold text-text-primary hover:text-primary-light transition-colors"
            >
              Sprunked
            </Link>
            <p className="text-sm text-text-secondary">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation links */}
          <nav className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2 text-text-primary">{t('footer.product')}</p>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/features" 
                    className="text-sm text-text-secondary hover:text-primary-light transition-colors"
                  >
                    {t('footer.features')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/media-coverage" 
                    className="text-sm text-text-secondary hover:text-primary-light transition-colors"
                  >
                    {t('footer.mediaCoverage')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2 text-text-primary">{t('footer.partner')}</p>
              <ul className="space-y-2">
                {isIndexPage && (
                  <li>
                    <a 
                      href="https://ai-hug.org/" 
                      className="text-sm text-text-secondary hover:text-primary-light transition-colors"
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      AI HUG
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </nav>

          {/* Social links */}
          <div className="space-y-4">
            <p className="font-semibold text-text-primary">{t('footer.followUs')}</p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/sprunked', label: 'Twitter' },
                { icon: <MessageCircle className="h-5 w-5" />, href: 'https://discord.gg/sprunked', label: 'Discord' },
                { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com/@sprunked', label: 'YouTube' }
              ].map(({ icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-secondary hover:text-primary-light transition-colors"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary-light/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-secondary">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/terms" 
              className="text-sm text-text-secondary hover:text-primary-light transition-colors"
            >
              {t('footer.terms')}
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-text-secondary hover:text-primary-light transition-colors"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center text-sm text-text-secondary py-4">
          {t('footer.credits.poweredBy')}{' '}
          <a 
            href="https://cloudflare.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-primary-light hover:text-accent-purple transition-colors"
          >
            Cloudflare
          </a>
          . {t('footer.credits.createdBy')}{' '}
          <a 
            href="https://twitter.com/sprunked" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-primary-light hover:text-accent-purple transition-colors"
          >
            Sprunked Team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;