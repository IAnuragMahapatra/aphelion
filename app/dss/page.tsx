'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { GovCard } from '@/components/ui/GovCard';
import { GovButton } from '@/components/ui/GovButton';
import { districts, blocks, schemeRecommendations } from '@/lib/mockData';
import { CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, FileText, Wheat, Trees, Droplets, Chrome as Home } from 'lucide-react';

export default function DSS() {
  const { language } = useLanguage();
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [showResults, setShowResults] = useState(false);

  const content = {
    en: {
      title: 'Decision Support System',
      subtitle: 'AI-powered scheme recommendations based on detected assets',
      selectLocation: 'Select Location',
      district: 'District',
      block: 'Block',
      village: 'Village',
      selectPlaceholder: 'Select...',
      generateReport: 'Generate Recommendations',
      detectedAssets: 'Detected Assets',
      schemeRecommendations: 'Scheme Recommendations',
      eligible: 'Eligible',
      requiresReview: 'Requires Review',
      notEligible: 'Not Eligible',
      downloadPDF: 'Download PDF Report',
      agriculture: 'Agricultural Land',
      forest: 'Forest Land',
      water: 'Water Bodies',
      settlement: 'Settlement Area',
      hectares: 'hectares',
      recommendation: 'Recommendation',
    },
    hi: {
      title: 'निर्णय सहायता प्रणाली',
      subtitle: 'पता लगाई गई संपत्तियों के आधार पर एआई-संचालित योजना सिफारिशें',
      selectLocation: 'स्थान चुनें',
      district: 'जिला',
      block: 'ब्लॉक',
      village: 'गांव',
      selectPlaceholder: 'चुनें...',
      generateReport: 'सिफारिशें उत्पन्न करें',
      detectedAssets: 'पता लगाई गई संपत्तियां',
      schemeRecommendations: 'योजना सिफारिशें',
      eligible: 'पात्र',
      requiresReview: 'समीक्षा आवश्यक',
      notEligible: 'अपात्र',
      downloadPDF: 'पीडीएफ रिपोर्ट डाउनलोड करें',
      agriculture: 'कृषि भूमि',
      forest: 'वन भूमि',
      water: 'जल निकाय',
      settlement: 'बस्ती क्षेत्र',
      hectares: 'हेक्टेयर',
      recommendation: 'सिफारिश',
    },
  };

  const t = content[language];

  const availableBlocks = selectedDistrict ? blocks[selectedDistrict] || [] : [];
  const villages = ['Bhilwara', 'Dungri', 'Jhadol', 'Gogunda', 'Kherwara'];

  const handleGenerate = () => {
    if (selectedDistrict && selectedBlock && selectedVillage) {
      setShowResults(true);
    }
  };

  const assetData = [
    { type: 'agriculture', label: t.agriculture, value: 45, icon: Wheat, color: 'text-yellow-600' },
    { type: 'forest', label: t.forest, value: 12, icon: Trees, color: 'text-green-700' },
    { type: 'water', label: t.water, value: 2, icon: Droplets, color: 'text-blue-600' },
    { type: 'settlement', label: t.settlement, value: 2.2, icon: Home, color: 'text-red-600' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'eligible':
        return <CheckCircle className="w-6 h-6 text-govSuccess" aria-hidden="true" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-secondary" aria-hidden="true" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-govError" aria-hidden="true" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'eligible':
        return (
          <span className="px-3 py-1 bg-govSuccess/10 text-govSuccess rounded-full text-xs font-semibold">
            {t.eligible}
          </span>
        );
      case 'warning':
        return (
          <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
            {t.requiresReview}
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-govError/10 text-govError rounded-full text-xs font-semibold">
            {t.notEligible}
          </span>
        );
    }
  };

  return (
    <div className="bg-govBg py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <GovCard className="mb-6">
          <h2 className="text-2xl font-bold text-primary mb-6">{t.selectLocation}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="dss-district" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.district} *
              </label>
              <select
                id="dss-district"
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setSelectedBlock('');
                  setShowResults(false);
                }}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus-visible-ring"
              >
                <option value="">{t.selectPlaceholder}</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="dss-block" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.block} *
              </label>
              <select
                id="dss-block"
                value={selectedBlock}
                onChange={(e) => {
                  setSelectedBlock(e.target.value);
                  setShowResults(false);
                }}
                disabled={!selectedDistrict}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus-visible-ring disabled:bg-gray-100"
              >
                <option value="">{t.selectPlaceholder}</option>
                {availableBlocks.map((block) => (
                  <option key={block} value={block}>
                    {block}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="dss-village" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.village} *
              </label>
              <select
                id="dss-village"
                value={selectedVillage}
                onChange={(e) => {
                  setSelectedVillage(e.target.value);
                  setShowResults(false);
                }}
                disabled={!selectedBlock}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus-visible-ring disabled:bg-gray-100"
              >
                <option value="">{t.selectPlaceholder}</option>
                {villages.map((village) => (
                  <option key={village} value={village}>
                    {village}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <GovButton
              variant="primary"
              size="lg"
              onClick={handleGenerate}
              disabled={!selectedDistrict || !selectedBlock || !selectedVillage}
              className="w-full md:w-auto"
            >
              <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
              {t.generateReport}
            </GovButton>
          </div>
        </GovCard>

        {showResults && (
          <>
            <GovCard className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-6">{t.detectedAssets}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {assetData.map((asset) => {
                  const Icon = asset.icon;
                  return (
                    <div key={asset.type} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-sm flex items-center justify-center ${asset.color}`}>
                        <Icon className="w-8 h-8" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-gray-700 mb-1">{asset.label}</h3>
                      <p className="text-2xl font-bold text-primary">
                        {asset.value} <span className="text-sm font-normal text-gray-600">{t.hectares}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </GovCard>

            <GovCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">{t.schemeRecommendations}</h2>
                <GovButton variant="secondary" onClick={() => alert(language === 'en' ? 'Downloading PDF...' : 'पीडीएफ डाउनलोड हो रहा है...')}>
                  <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t.downloadPDF}
                </GovButton>
              </div>

              <div className="space-y-4">
                {schemeRecommendations.map((scheme, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{getStatusIcon(scheme.status)}</div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-lg font-bold text-primary">
                            {language === 'en' ? scheme.name : scheme.nameHi}
                          </h3>
                          {getStatusBadge(scheme.status)}
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {language === 'en' ? scheme.reason : scheme.reasonHi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-govGreen/10 border border-govGreen rounded-lg">
                <h3 className="font-bold text-govGreen mb-2">
                  {language === 'en' ? 'Next Steps' : 'अगले कदम'}
                </h3>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-govGreen mt-1">•</span>
                    <span>
                      {language === 'en'
                        ? 'Download and share the PDF report with relevant departments'
                        : 'संबंधित विभागों के साथ पीडीएफ रिपोर्ट डाउनलोड और साझा करें'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-govGreen mt-1">•</span>
                    <span>
                      {language === 'en'
                        ? 'Conduct ground verification for schemes marked as "Requires Review"'
                        : '"समीक्षा आवश्यक" चिह्नित योजनाओं के लिए जमीनी सत्यापन करें'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-govGreen mt-1">•</span>
                    <span>
                      {language === 'en'
                        ? 'Coordinate with Gram Sabha for final validation'
                        : 'अंतिम सत्यापन के लिए ग्राम सभा के साथ समन्वय करें'}
                    </span>
                  </li>
                </ul>
              </div>
            </GovCard>
          </>
        )}
      </div>
    </div>
  );
}
