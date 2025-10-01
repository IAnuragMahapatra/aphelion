'use client';

import { useLanguage } from '@/lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-3">{t.siteName}</h3>
            <p className="text-sm text-white/90">{t.footer.ministry}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">{t.footer.contact}</h3>
            <address className="text-sm text-white/90 not-italic">
              <p>Ministry of Tribal Affairs</p>
              <p>Shastri Bhawan, New Delhi - 110001</p>
              <p>Email: support@tribal.nic.in</p>
              <p>Phone: 1800-XXX-XXXX</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-white/90 hover:text-white underline focus-visible-ring">
                  {t.footer.accessibility}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white underline focus-visible-ring">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white underline focus-visible-ring">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/90">
            © {currentYear} Government of India. All rights reserved.
          </p>
          <p className="text-white/90">
            {t.footer.lastUpdated}: October 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
