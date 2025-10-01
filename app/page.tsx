'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { GovButton } from '@/components/ui/GovButton';
import { GovCard } from '@/components/ui/GovCard';
import { Archive, Map, Brain, TrendingUp, Users, FileCheck } from 'lucide-react';
import { kpiData } from '@/lib/mockData';

export default function Home() {
  const { language } = useLanguage();

  const hero = {
    en: {
      title: 'Turning Forest Rights into Actionable Insights',
      subtitle: 'A WebGIS-powered platform for digitizing FRA claims and generating evidence-based policy recommendations',
      exploreAtlas: 'Explore Atlas',
      viewDashboard: 'View Dashboard',
    },
    hi: {
      title: 'वन अधिकारों को कार्रवाई योग्य अंतर्दृष्टि में बदलना',
      subtitle: 'एफआरए दावों को डिजिटल बनाने और साक्ष्य-आधारित नीति सिफारिशें उत्पन्न करने के लिए एक WebGIS-संचालित मंच',
      exploreAtlas: 'एटलस देखें',
      viewDashboard: 'डैशबोर्ड देखें',
    },
  };

  const features = {
    en: [
      {
        title: 'Digital Archive',
        description: 'Search and analyze 12,450+ FRA claims with advanced filters and export capabilities',
        icon: Archive,
        link: '/archive',
      },
      {
        title: 'Interactive Atlas',
        description: 'Visualize land assets on WebGIS with layers for agriculture, forest, water, and settlements',
        icon: Map,
        link: '/atlas',
      },
      {
        title: 'AI-Powered DSS',
        description: 'Get automated scheme recommendations based on detected assets and community needs',
        icon: Brain,
        link: '/dss',
      },
    ],
    hi: [
      {
        title: 'डिजिटल संग्रह',
        description: '12,450+ एफआरए दावों को उन्नत फ़िल्टर और निर्यात क्षमताओं के साथ खोजें और विश्लेषण करें',
        icon: Archive,
        link: '/archive',
      },
      {
        title: 'इंटरैक्टिव एटलस',
        description: 'कृषि, वन, जल और बस्तियों के लिए परतों के साथ WebGIS पर भूमि संपत्तियों की कल्पना करें',
        icon: Map,
        link: '/atlas',
      },
      {
        title: 'एआई-संचालित डीएसएस',
        description: 'पता लगाई गई संपत्तियों और सामुदायिक जरूरतों के आधार पर स्वचालित योजना सिफारिशें प्राप्त करें',
        icon: Brain,
        link: '/dss',
      },
    ],
  };

  const stats = {
    en: [
      { label: 'Total FRA Claims', value: kpiData.totalClaims, icon: FileCheck },
      { label: 'Villages Mapped', value: kpiData.villagesMapped, icon: Map },
      { label: 'Beneficiaries', value: '85,000+', icon: Users },
      { label: 'Approval Rate', value: '66%', icon: TrendingUp },
    ],
    hi: [
      { label: 'कुल एफआरए दावे', value: kpiData.totalClaims, icon: FileCheck },
      { label: 'मैप किए गए गांव', value: kpiData.villagesMapped, icon: Map },
      { label: 'लाभार्थी', value: '85,000+', icon: Users },
      { label: 'स्वीकृति दर', value: '66%', icon: TrendingUp },
    ],
  };

  const currentHero = hero[language];
  const currentFeatures = features[language];
  const currentStats = stats[language];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {currentHero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
            {currentHero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/atlas">
              <GovButton size="lg" variant="secondary">
                {currentHero.exploreAtlas}
              </GovButton>
            </Link>
            <Link href="/dashboard">
              <GovButton size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                {currentHero.viewDashboard}
              </GovButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.link}>
                  <GovCard className="h-full hover:border-primary transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-govGreen/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-govGreen" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </GovCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-govBg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            {language === 'en' ? 'Platform Impact' : 'मंच प्रभाव'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <GovCard key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value.toLocaleString()}</p>
                  <p className="text-sm font-semibold text-gray-600 uppercase">{stat.label}</p>
                </GovCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-govGreen text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Ready to Get Started?' : 'शुरू करने के लिए तैयार हैं?'}
          </h2>
          <p className="text-lg mb-8 opacity-95">
            {language === 'en'
              ? 'Explore the platform features or reach out for technical support'
              : 'प्लेटफॉर्म सुविधाओं का अन्वेषण करें या तकनीकी सहायता के लिए संपर्क करें'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/archive">
              <GovButton size="lg" variant="secondary">
                {language === 'en' ? 'Browse FRA Claims' : 'एफआरए दावे ब्राउज़ करें'}
              </GovButton>
            </Link>
            <Link href="/feedback">
              <GovButton size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-govGreen">
                {language === 'en' ? 'Contact Support' : 'सहायता से संपर्क करें'}
              </GovButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
