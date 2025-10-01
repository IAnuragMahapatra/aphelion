'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { Chrome as Home, LayoutDashboard, Archive, Map, FileText, SquareCheck as CheckSquare, MessageSquare } from 'lucide-react';

export function NavBar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t.navigation.home, icon: Home },
    { href: '/dashboard', label: t.navigation.dashboard, icon: LayoutDashboard },
    { href: '/archive', label: t.navigation.archive, icon: Archive },
    { href: '/atlas', label: t.navigation.atlas, icon: Map },
    { href: '/dss', label: t.navigation.dss, icon: FileText },
    { href: '/validation', label: t.navigation.validation, icon: CheckSquare },
    { href: '/feedback', label: t.navigation.feedback, icon: MessageSquare },
  ];

  return (
    <nav className="bg-primary text-white shadow-md" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex overflow-x-auto gap-1" role="menubar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-colors hover:bg-white/10 focus-visible-ring ${
                    isActive ? 'bg-white/20 border-b-2 border-secondary' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm md:text-base">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
