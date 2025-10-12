"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { GovCard } from "@/components/ui/GovCard";
import { GovButton } from "@/components/ui/GovButton";
import {
  Wheat,
  Trees,
  Droplets,
  Chrome as Home,
  Search,
  Layers,
} from "lucide-react";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false, // disable SSR for leaflet
});

export default function Atlas() {
  const { language } = useLanguage();

  const [layers, setLayers] = useState({
    agriculture: true,
    forest: true,
    water: true,
    settlement: true,
    boundaries: true,
  });

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };
type Translation = {
  title: string;
  subtitle: string;
  layers: string;
  agriculture: string;
  forest: string;
  water: string;
  settlement: string;
  boundaries: string;
};

const translations: Record<string, Translation> = {
  en: {
    title: "Interactive Atlas",
    subtitle: "Visualize FRA land assets on WebGIS",
    layers: "Map Layers",
    agriculture: "Agriculture",
    forest: "Forest",
    water: "Water Bodies",
    settlement: "Settlements",
    boundaries: "Boundaries",
  },
};

const t = translations[language] || translations.en;

const layerConfig = [
  { key: "agriculture", label: t.agriculture, icon: Wheat, color: "#FFD700" },
  { key: "forest", label: t.forest, icon: Trees, color: "#228B22" },
  { key: "water", label: t.water, icon: Droplets, color: "#1E90FF" },
  { key: "settlement", label: t.settlement, icon: Home, color: "#FF6347" },
  { key: "boundaries", label: t.boundaries, icon: Layers, color: "#8B4513" },
];

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
});

  return (
    <div className="bg-govBg py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <InteractiveMap layers={layers} />
        </div>

        <div className="space-y-6">
          <GovCard>
            <h2 className="text-xl font-bold text-primary mb-4">{t.layers}</h2>
            {layerConfig.map(({ key, label, icon: Icon, color }) => (
              <label
                key={key}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition"
              >
                <input
                  type="checkbox"
                  checked={layers[key as keyof typeof layers]}
                  onChange={() => toggleLayer(key as keyof typeof layers)}
                  className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                />
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </label>
            ))}
          </GovCard>
        </div>
      </div>
    </div>
  );
}
