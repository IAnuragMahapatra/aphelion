'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { GovButton } from '@/components/ui/GovButton';
import { GovCard } from '@/components/ui/GovCard';
import { mockClaims, districts, blocks } from '@/lib/mockData';
import { Search, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Archive() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const content = {
    en: {
      title: 'FRA Archive',
      subtitle: 'Search and analyze Forest Rights Act claims',
      searchPlaceholder: 'Search by village name or Patta ID...',
      district: 'District',
      block: 'Block',
      status: 'Status',
      claimType: 'Claim Type',
      all: 'All',
      individual: 'Individual',
      community: 'Community',
      approved: 'Approved',
      pending: 'Pending',
      rejected: 'Rejected',
      export: 'Export Data',
      pattaId: 'Patta ID',
      village: 'Village',
      hectares: 'Hectares',
      claimDate: 'Claim Date',
      actions: 'Actions',
      viewDetails: 'View Details',
      downloadPDF: 'Download PDF',
      showing: 'Showing',
      to: 'to',
      of: 'of',
      results: 'results',
      previous: 'Previous',
      next: 'Next',
    },
    hi: {
      title: 'एफआरए अभिलेख',
      subtitle: 'वन अधिकार अधिनियम दावों को खोजें और विश्लेषण करें',
      searchPlaceholder: 'गांव के नाम या पट्टा आईडी से खोजें...',
      district: 'जिला',
      block: 'ब्लॉक',
      status: 'स्थिति',
      claimType: 'दावा प्रकार',
      all: 'सभी',
      individual: 'व्यक्तिगत',
      community: 'सामुदायिक',
      approved: 'स्वीकृत',
      pending: 'लंबित',
      rejected: 'अस्वीकृत',
      export: 'डेटा निर्यात करें',
      pattaId: 'पट्टा आईडी',
      village: 'गांव',
      hectares: 'हेक्टेयर',
      claimDate: 'दावा तिथि',
      actions: 'कार्रवाई',
      viewDetails: 'विवरण देखें',
      downloadPDF: 'पीडीएफ डाउनलोड करें',
      showing: 'दिखा रहे हैं',
      to: 'से',
      of: 'कुल',
      results: 'परिणाम',
      previous: 'पिछला',
      next: 'अगला',
    },
  };

  const t = content[language];

  const filteredClaims = useMemo(() => {
    return mockClaims.filter((claim) => {
      const matchesSearch =
        !searchTerm ||
        claim.villageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.villageNameHi.includes(searchTerm) ||
        claim.pattaId.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDistrict = !selectedDistrict || claim.district === selectedDistrict;
      const matchesBlock = !selectedBlock || claim.block === selectedBlock;
      const matchesStatus = selectedStatus === 'All' || claim.status === selectedStatus;

      return matchesSearch && matchesDistrict && matchesBlock && matchesStatus;
    });
  }, [searchTerm, selectedDistrict, selectedBlock, selectedStatus]);

  const totalPages = Math.ceil(filteredClaims.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClaims = filteredClaims.slice(startIndex, startIndex + itemsPerPage);

  const availableBlocks = selectedDistrict ? blocks[selectedDistrict] || [] : [];

  const handleExport = () => {
    alert(language === 'en' ? 'Exporting data to CSV...' : 'डेटा को सीएसवी में निर्यात किया जा रहा है...');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-govSuccess/10 text-govSuccess';
      case 'Pending':
        return 'bg-secondary/10 text-secondary';
      case 'Rejected':
        return 'bg-govError/10 text-govError';
      default:
        return 'bg-gray-100 text-gray-700';
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
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                {t.searchPlaceholder}
              </label>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.district}
                </label>
                <select
                  id="district"
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setSelectedBlock('');
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus-visible-ring"
                >
                  <option value="">{t.all}</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="block" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.block}
                </label>
                <select
                  id="block"
                  value={selectedBlock}
                  onChange={(e) => {
                    setSelectedBlock(e.target.value);
                    setCurrentPage(1);
                  }}
                  disabled={!selectedDistrict}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus-visible-ring disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">{t.all}</option>
                  {availableBlocks.map((block) => (
                    <option key={block} value={block}>
                      {block}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.status}
                </label>
                <select
                  id="status"
                  value={selectedStatus}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus-visible-ring"
                >
                  <option value="All">{t.all}</option>
                  <option value="Approved">{t.approved}</option>
                  <option value="Pending">{t.pending}</option>
                  <option value="Rejected">{t.rejected}</option>
                </select>
              </div>

              <div className="flex items-end">
                <GovButton variant="success" className="w-full flex justify-center gap-4 items-center" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t.export}
                </GovButton>
              </div>
            </div>
          </div>
        </GovCard>

        <GovCard>
          <div className="overflow-x-auto">
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th scope="col" className="text-left py-3 px-4 font-semibold text-gray-700">
                    {t.pattaId}
                  </th>
                  <th scope="col" className="text-left py-3 px-4 font-semibold text-gray-700">
                    {t.village}
                  </th>
                  <th scope="col" className="text-left py-3 px-4 font-semibold text-gray-700">
                    {t.claimType}
                  </th>
                  <th scope="col" className="text-left py-3 px-4 font-semibold text-gray-700">
                    {t.status}
                  </th>
                  <th scope="col" className="text-right py-3 px-4 font-semibold text-gray-700">
                    {t.hectares}
                  </th>
                  <th scope="col" className="text-left py-3 px-4 font-semibold text-gray-700">
                    {t.claimDate}
                  </th>
                  <th scope="col" className="text-center py-3 px-4 font-semibold text-gray-700">
                    {t.actions}
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedClaims.map((claim) => (
                  <tr key={claim.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{claim.pattaId}</td>
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-semibold">{claim.villageName}</div>
                        <div className="text-sm text-gray-600">
                          {claim.block}, {claim.district}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm">{claim.claimType}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(claim.status)}`}>
                        {language === 'en' ? claim.status : claim.status === 'Approved' ? 'स्वीकृत' : claim.status === 'Pending' ? 'लंबित' : 'अस्वीकृत'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">{claim.hectares}</td>
                    <td className="py-3 px-4 text-sm">
                      {new Date(claim.claimDate).toLocaleDateString(language === 'en' ? 'en-IN' : 'hi-IN')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => alert(`${t.viewDetails}: ${claim.pattaId}`)}
                          className="text-primary hover:text-primary/80 focus-visible-ring p-1 rounded"
                          aria-label={`${t.viewDetails} ${claim.pattaId}`}
                        >
                          <FileText className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                          onClick={() => alert(`${t.downloadPDF}: ${claim.pattaId}`)}
                          className="text-govGreen hover:text-govGreen/80 focus-visible-ring p-1 rounded"
                          aria-label={`${t.downloadPDF} ${claim.pattaId}`}
                        >
                          <Download className="w-5 h-5" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredClaims.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              {language === 'en' ? 'No claims found matching your criteria' : 'आपके मानदंडों से मेल खाने वाला कोई दावा नहीं मिला'}
            </div>
          )}

          {filteredClaims.length > 0 && (
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                {t.showing} {startIndex + 1} {t.to} {Math.min(startIndex + itemsPerPage, filteredClaims.length)} {t.of} {filteredClaims.length} {t.results}
              </p>
              <div className="flex gap-2">
                <GovButton
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" aria-hidden="true" />
                  {t.previous}
                </GovButton>
                <div className="flex items-center gap-2 px-4">
                  <span className="text-sm font-semibold">
                    {currentPage} / {totalPages}
                  </span>
                </div>
                <GovButton
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  {t.next}
                  <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </GovButton>
              </div>
            </div>
          )}
        </GovCard>
      </div>
    </div>
  );
}
