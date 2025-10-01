'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { GovCard } from '@/components/ui/GovCard';
import { GovButton } from '@/components/ui/GovButton';
import { Wheat, Trees, Droplets, Chrome as Home, Search, ZoomIn, ZoomOut, Layers } from 'lucide-react';

export default function Atlas() {
  const { language } = useLanguage();
  const [layers, setLayers] = useState({
    agriculture: true,
    forest: true,
    water: true,
    settlement: true,
    boundaries: true,
  });

  const content = {
    en: {
      title: 'Interactive Atlas',
      subtitle: 'Visualize FRA land assets on WebGIS',
      mapPlaceholder: 'Interactive map will load here',
      mapDescription: 'Integration with Leaflet/Mapbox GL JS for production deployment',
      layers: 'Map Layers',
      agriculture: 'Agriculture',
      forest: 'Forest',
      water: 'Water Bodies',
      settlement: 'Settlements',
      boundaries: 'FRA Boundaries',
      search: 'Search Village',
      searchPlaceholder: 'Enter village name...',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      legend: 'Legend',
      resetView: 'Reset View',
      fullscreen: 'Fullscreen',
    },
    hi: {
      title: 'इंटरैक्टिव एटलस',
      subtitle: 'WebGIS पर एफआरए भूमि संपत्तियों की कल्पना करें',
      mapPlaceholder: 'इंटरैक्टिव मानचित्र यहां लोड होगा',
      mapDescription: 'उत्पादन परिनियोजन के लिए Leaflet/Mapbox GL JS के साथ एकीकरण',
      layers: 'मानचित्र परतें',
      agriculture: 'कृषि',
      forest: 'वन',
      water: 'जल निकाय',
      settlement: 'बस्तियां',
      boundaries: 'एफआरए सीमाएं',
      search: 'गांव खोजें',
      searchPlaceholder: 'गांव का नाम दर्ज करें...',
      zoomIn: 'ज़ूम इन',
      zoomOut: 'ज़ूम आउट',
      legend: 'लेजेंड',
      resetView: 'व्यू रीसेट करें',
      fullscreen: 'पूर्ण स्क्रीन',
    },
  };

  const t = content[language];

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const layerConfig = [
    { key: 'agriculture' as const, label: t.agriculture, icon: Wheat, color: '#FFD700' },
    { key: 'forest' as const, label: t.forest, icon: Trees, color: '#228B22' },
    { key: 'water' as const, label: t.water, icon: Droplets, color: '#1E90FF' },
    { key: 'settlement' as const, label: t.settlement, icon: Home, color: '#FF6347' },
    { key: 'boundaries' as const, label: t.boundaries, icon: Layers, color: '#8B4513' },
  ];

  return (
    <div className="bg-govBg py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <GovCard className="p-0 overflow-hidden">
              <div
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                style={{ height: '600px' }}
                role="img"
                aria-label={t.mapPlaceholder}
              >
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10 text-center px-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Layers className="w-10 h-10 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.mapPlaceholder}</h3>
                  <p className="text-gray-600 max-w-md">{t.mapDescription}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
                    <div className="flex items-center gap-2">
                      <Wheat className="w-5 h-5 text-yellow-600" aria-hidden="true" />
                      <span>{t.agriculture}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trees className="w-5 h-5 text-green-700" aria-hidden="true" />
                      <span>{t.forest}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <span>{t.water}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-red-600" aria-hidden="true" />
                      <span>{t.settlement}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    className="w-10 h-10 bg-white shadow-md rounded flex items-center justify-center hover:bg-gray-50 focus-visible-ring"
                    aria-label={t.zoomIn}
                  >
                    <ZoomIn className="w-5 h-5 text-gray-700" aria-hidden="true" />
                  </button>
                  <button
                    className="w-10 h-10 bg-white shadow-md rounded flex items-center justify-center hover:bg-gray-50 focus-visible-ring"
                    aria-label={t.zoomOut}
                  >
                    <ZoomOut className="w-5 h-5 text-gray-700" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </GovCard>
          </div>

          <div className="space-y-6">
            <GovCard>
              <h2 className="text-xl font-bold text-primary mb-4">{t.search}</h2>
              <div className="relative">
                <label htmlFor="village-search" className="sr-only">
                  {t.searchPlaceholder}
                </label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  id="village-search"
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <GovButton variant="primary" className="w-full mt-3">
                {t.search}
              </GovButton>
            </GovCard>

            <GovCard>
              <h2 className="text-xl font-bold text-primary mb-4">{t.layers}</h2>
              <div className="space-y-3">
                {layerConfig.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <label
                      key={layer.key}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={layers[layer.key]}
                        onChange={() => toggleLayer(layer.key)}
                        className="w-5 h-5 text-primary focus:ring-2 focus:ring-primary rounded"
                      />
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${layer.color}20` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: layer.color }} aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium">{layer.label}</span>
                    </label>
                  );
                })}
              </div>
            </GovCard>

            <GovCard>
              <h2 className="text-xl font-bold text-primary mb-4">{t.legend}</h2>
              <div className="space-y-2 text-sm">
                {layerConfig.slice(0, 4).map((layer) => (
                  <div key={layer.key} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: layer.color }}></div>
                    <span>{layer.label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border-2" style={{ borderColor: layerConfig[4].color }}></div>
                  <span>{layerConfig[4].label}</span>
                </div>
              </div>
            </GovCard>

            <div className="space-y-2">
              <GovButton variant="outline" className="w-full">
                {t.resetView}
              </GovButton>
              <GovButton variant="secondary" className="w-full">
                {t.fullscreen}
              </GovButton>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-primary mb-2">
            {language === 'en' ? 'Technical Note' : 'तकनीकी नोट'}
          </h3>
          <p className="text-sm text-gray-700">
            {language === 'en'
              ? 'This is a placeholder for the WebGIS interface. In production, this would integrate with Leaflet or Mapbox GL JS to display interactive maps with FRA claim boundaries, asset layers, and spatial analytics.'
              : 'यह WebGIS इंटरफेस के लिए एक प्लेसहोल्डर है। उत्पादन में, यह एफआरए दावा सीमाओं, संपत्ति परतों और स्थानिक विश्लेषण के साथ इंटरैक्टिव मानचित्र प्रदर्शित करने के लिए Leaflet या Mapbox GL JS के साथ एकीकृत होगा।'}
          </p>
        </div>
      </div>
    </div>
  );
}
