'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { GovCard } from '@/components/ui/GovCard';
import { GovButton } from '@/components/ui/GovButton';
import { Wheat, Droplets, CircleCheck as CheckCircle, Circle as XCircle, MessageSquare } from 'lucide-react';

export default function Validation() {
  const { language } = useLanguage();
  const [remarks, setRemarks] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState<Record<string, 'approved' | 'flagged' | null>>({
    asset1: null,
    asset2: null,
  });

  const content = {
    en: {
      title: 'Gram Sabha Validation',
      subtitle: 'Community verification of detected assets',
      village: 'Village: Bhilwara, Kotra Block',
      instructions: 'Please review the detected assets and approve or flag them based on ground reality',
      assetList: 'Detected Assets for Validation',
      approve: 'Approve',
      flag: 'Flag Issue',
      remarks: 'Remarks / Additional Information',
      remarksPlaceholder: 'Enter your remarks or observations...',
      submit: 'Submit Validation',
      approved: 'Approved',
      flagged: 'Flagged',
      pending: 'Pending Review',
      thankyou: 'Thank You!',
      successMessage: 'Your validation has been recorded successfully. The data will be reviewed by the authorities.',
      submitAnother: 'Submit Another Validation',
    },
    hi: {
      title: 'ग्राम सभा सत्यापन',
      subtitle: 'पता लगाई गई संपत्तियों का सामुदायिक सत्यापन',
      village: 'गांव: भीलवाड़ा, कोतरा ब्लॉक',
      instructions: 'कृपया पता लगाई गई संपत्तियों की समीक्षा करें और जमीनी वास्तविकता के आधार पर उन्हें स्वीकृत या फ्लैग करें',
      assetList: 'सत्यापन के लिए पता लगाई गई संपत्तियां',
      approve: 'स्वीकृत करें',
      flag: 'समस्या फ्लैग करें',
      remarks: 'टिप्पणी / अतिरिक्त जानकारी',
      remarksPlaceholder: 'अपनी टिप्पणी या अवलोकन दर्ज करें...',
      submit: 'सत्यापन जमा करें',
      approved: 'स्वीकृत',
      flagged: 'फ्लैग किया गया',
      pending: 'समीक्षा लंबित',
      thankyou: 'धन्यवाद!',
      successMessage: 'आपका सत्यापन सफलतापूर्वक दर्ज किया गया है। डेटा की अधिकारियों द्वारा समीक्षा की जाएगी।',
      submitAnother: 'एक और सत्यापन जमा करें',
    },
  };

  const t = content[language];

  const assets = [
    {
      id: 'asset1',
      type: 'Crop Field',
      typeHi: 'फसल क्षेत्र',
      area: '5.2',
      icon: Wheat,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'asset2',
      type: 'Pond',
      typeHi: 'तालाब',
      area: '0.8',
      icon: Droplets,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const handleValidation = (assetId: string, status: 'approved' | 'flagged') => {
    setValidations((prev) => ({ ...prev, [assetId]: status }));
  };

  const handleSubmit = () => {
    if (Object.values(validations).every((v) => v !== null)) {
      setSubmitted(true);
    } else {
      alert(language === 'en' ? 'Please validate all assets before submitting' : 'जमा करने से पहले कृपया सभी संपत्तियों को मान्य करें');
    }
  };

  const handleReset = () => {
    setValidations({ asset1: null, asset2: null });
    setRemarks('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-govBg py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6">
          <GovCard className="text-center">
            <div className="w-24 h-24 bg-govSuccess/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-govSuccess" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-4">{t.thankyou}</h1>
            <p className="text-lg text-gray-700 mb-8">{t.successMessage}</p>
            <GovButton variant="primary" size="lg" onClick={handleReset}>
              {t.submitAnother}
            </GovButton>
          </GovCard>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-govBg py-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-gray-600 text-lg mb-2">{t.subtitle}</p>
          <p className="text-primary font-semibold">{t.village}</p>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">{t.instructions}</p>
        </div>

    <GovCard className="mb-6">
  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 overflow-hidden">
    <div className="absolute inset-0 opacity-20 z-10">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <pattern id="grid-validation" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="green" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-validation)" />
      </svg>
    </div>

    <img
      src="/satellite.png"
      alt="Satellite"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="text-center text-gray-600">
      </div>
    </div>
  </div>
</GovCard>


        <GovCard className="mb-6">
          <h2 className="text-2xl font-bold text-primary mb-6">{t.assetList}</h2>
          <div className="space-y-4">
            {assets.map((asset) => {
              const Icon = asset.icon;
              const validation = validations[asset.id];
              return (
                <div
                  key={asset.id}
                  className={`border-2 rounded-lg p-6 transition-colors ${
                    validation === 'approved'
                      ? 'border-govSuccess bg-govSuccess/5'
                      : validation === 'flagged'
                      ? 'border-govError bg-govError/5'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg ${asset.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${asset.color}`} aria-hidden="true" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {language === 'en' ? asset.type : asset.typeHi}
                      </h3>
                      <p className="text-gray-600">
                        {asset.area} {language === 'en' ? 'hectares' : 'हेक्टेयर'}
                      </p>
                      {validation && (
                        <div className="mt-2">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                              validation === 'approved'
                                ? 'bg-govSuccess/10 text-govSuccess'
                                : 'bg-govError/10 text-govError'
                            }`}
                          >
                            {validation === 'approved' ? (
                              <>
                                <CheckCircle className="w-3 h-3" aria-hidden="true" />
                                {t.approved}
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3 h-3" aria-hidden="true" />
                                {t.flagged}
                              </>
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3 md:flex-col lg:flex-row">
                      <GovButton
                        variant={validation === 'approved' ? 'success' : 'outline'}
                        size="md"
                        onClick={() => handleValidation(asset.id, 'approved')}
                        className="flex-1 md:flex-none min-w-[120px] touch-manipulation"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                        {t.approve}
                      </GovButton>
                      <GovButton
                        variant={validation === 'flagged' ? 'error' : 'outline'}
                        size="md"
                        onClick={() => handleValidation(asset.id, 'flagged')}
                        className="flex-1 md:flex-none min-w-[120px] touch-manipulation"
                      >
                        <XCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                        {t.flag}
                      </GovButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </GovCard>

        <GovCard className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" aria-hidden="true" />
            {t.remarks}
          </h2>
          <label htmlFor="remarks" className="sr-only">
            {t.remarksPlaceholder}
          </label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder={t.remarksPlaceholder}
            rows={5}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            maxLength={500}
          />
          <p className="text-sm text-gray-600 mt-2">
            {remarks.length}/500 {language === 'en' ? 'characters' : 'अक्षर'}
          </p>
        </GovCard>

        <div className="text-center">
          <GovButton
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={Object.values(validations).some((v) => v === null)}
            className="w-full md:w-auto min-w-[300px] touch-manipulation"
          >
            {t.submit}
          </GovButton>
        </div>
      </div>
    </div>
  );
}
