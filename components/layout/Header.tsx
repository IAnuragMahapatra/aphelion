'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-b-4 border-secondary shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.96-7-5.54-7-10V8.3l7-3.11 7 3.11V10c0 4.46-3.13 9.04-7 10z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">
                {t.siteName}
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                {t.footer.ministry}
              </p>
            </div>
          </div>

          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-govGreen text-white rounded hover:bg-govGreen/90 transition-colors focus-visible-ring"
            aria-label={t.accessibility.language}
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span className="font-semibold">{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
