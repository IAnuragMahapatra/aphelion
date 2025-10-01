'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { KPICard, GovCard } from '@/components/ui/GovCard';
import { GovButton } from '@/components/ui/GovButton';
import { kpiData } from '@/lib/mockData';
import { FileText, CircleCheck as CheckCircle, Clock, Circle as XCircle, MapPin, Download, FileSpreadsheet, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Dashboard',
      subtitle: 'Real-time insights into FRA claims and scheme mapping',
      totalClaims: 'Total FRA Claims',
      approved: 'Approved',
      pending: 'Pending',
      rejected: 'Rejected',
      villagesMapped: 'Villages Mapped',
      claimsByDistrict: 'Claim Status by District',
      quickActions: 'Quick Actions',
      downloadReport: 'Download Consolidated Report',
      exportMapping: 'Export Scheme Mapping',
      viewPriority: 'View Priority Villages',
      districtPerformance: 'District Performance Overview',
    },
    hi: {
      title: 'डैशबोर्ड',
      subtitle: 'एफआरए दावों और योजना मैपिंग में वास्तविक समय की अंतर्दृष्टि',
      totalClaims: 'कुल एफआरए दावे',
      approved: 'स्वीकृत',
      pending: 'लंबित',
      rejected: 'अस्वीकृत',
      villagesMapped: 'मैप किए गए गांव',
      claimsByDistrict: 'जिले के अनुसार दावा स्थिति',
      quickActions: 'त्वरित क्रियाएं',
      downloadReport: 'समेकित रिपोर्ट डाउनलोड करें',
      exportMapping: 'योजना मैपिंग निर्यात करें',
      viewPriority: 'प्राथमिकता वाले गांव देखें',
      districtPerformance: 'जिला प्रदर्शन अवलोकन',
    },
  };

  const t = content[language];
  const approvalRate = ((kpiData.approved / kpiData.totalClaims) * 100).toFixed(1);

  const districtData = [
    { district: 'Udaipur / उदयपुर', approved: 2450, pending: 980, total: 3430 },
    { district: 'Banswara / बांसवाड़ा', approved: 2100, pending: 1200, total: 3300 },
    { district: 'Pratapgarh / प्रतापगढ़', approved: 1850, pending: 850, total: 2700 },
    { district: 'Chittorgarh / चित्तौड़गढ़', approved: 1450, pending: 750, total: 2200 },
    { district: 'Dungarpur / डूंगरपुर', approved: 380, pending: 440, total: 820 },
  ];

  return (
    <div className="bg-govBg py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title={t.totalClaims}
            value={kpiData.totalClaims}
            icon={<FileText className="w-8 h-8" aria-hidden="true" />}
            color="primary"
          />
          <KPICard
            title={t.approved}
            value={kpiData.approved}
            subtitle={`${approvalRate}%`}
            icon={<CheckCircle className="w-8 h-8" aria-hidden="true" />}
            color="success"
          />
          <KPICard
            title={t.pending}
            value={kpiData.pending}
            icon={<Clock className="w-8 h-8" aria-hidden="true" />}
            color="warning"
          />
          <KPICard
            title={t.villagesMapped}
            value={kpiData.villagesMapped}
            icon={<MapPin className="w-8 h-8" aria-hidden="true" />}
            color="primary"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <GovCard className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-primary">{t.districtPerformance}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      {language === 'en' ? 'District' : 'जिला'}
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">
                      {language === 'en' ? 'Approved' : 'स्वीकृत'}
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">
                      {language === 'en' ? 'Pending' : 'लंबित'}
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">
                      {language === 'en' ? 'Total' : 'कुल'}
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">
                      {language === 'en' ? 'Rate' : 'दर'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {districtData.map((row, index) => {
                    const rate = ((row.approved / row.total) * 100).toFixed(1);
                    return (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 font-medium">{row.district}</td>
                        <td className="py-3 px-2 text-right text-govSuccess font-semibold">
                          {row.approved.toLocaleString()}
                        </td>
                        <td className="py-3 px-2 text-right text-secondary font-semibold">
                          {row.pending.toLocaleString()}
                        </td>
                        <td className="py-3 px-2 text-right font-semibold">
                          {row.total.toLocaleString()}
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span className="inline-block px-2 py-1 bg-govSuccess/10 text-govSuccess rounded font-semibold text-sm">
                            {rate}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">
                  {language === 'en' ? 'Insight:' : 'अंतर्दृष्टि:'}
                </strong>{' '}
                {language === 'en'
                  ? 'Udaipur and Banswara districts show the highest claim volumes. Consider prioritizing resource allocation for pending reviews.'
                  : 'उदयपुर और बांसवाड़ा जिलों में सबसे अधिक दावे हैं। लंबित समीक्षाओं के लिए संसाधन आवंटन को प्राथमिकता देने पर विचार करें।'}
              </p>
            </div>
          </GovCard>

          <GovCard>
            <h2 className="text-2xl font-bold text-primary mb-6">{t.quickActions}</h2>
            <div className="space-y-4">
              <GovButton
                variant="primary"
                className="w-full justify-start"
                onClick={() => alert(language === 'en' ? 'Generating PDF report...' : 'पीडीएफ रिपोर्ट तैयार की जा रही है...')}
              >
                <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                {t.downloadReport}
              </GovButton>
              <GovButton
                variant="success"
                className="w-full justify-start"
                onClick={() => alert(language === 'en' ? 'Exporting CSV data...' : 'सीएसवी डेटा निर्यात किया जा रहा है...')}
              >
                <FileSpreadsheet className="w-5 h-5 mr-2" aria-hidden="true" />
                {t.exportMapping}
              </GovButton>
              <GovButton
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.location.href = '/archive'}
              >
                <MapPin className="w-5 h-5 mr-2" aria-hidden="true" />
                {t.viewPriority}
              </GovButton>
            </div>

            <div className="mt-8 p-4 bg-govGreen/10 rounded-lg border border-govGreen">
              <h3 className="font-bold text-govGreen mb-2">
                {language === 'en' ? 'System Status' : 'सिस्टम स्थिति'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Database' : 'डेटाबेस'}</span>
                  <span className="font-semibold text-govSuccess">
                    {language === 'en' ? 'Online' : 'ऑनलाइन'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'WebGIS API' : 'WebGIS API'}</span>
                  <span className="font-semibold text-govSuccess">
                    {language === 'en' ? 'Active' : 'सक्रिय'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Last Sync' : 'अंतिम सिंक'}</span>
                  <span className="font-semibold">2 {language === 'en' ? 'mins ago' : 'मिनट पहले'}</span>
                </div>
              </div>
            </div>
          </GovCard>
        </div>
      </div>
    </div>
  );
}
