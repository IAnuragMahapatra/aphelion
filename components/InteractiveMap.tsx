"use client";

import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { GeoJsonObject } from "geojson";


import agriculture from "../app/data/agriculture.json";
import settlements from "../app/data/settlements.json";
import waterBodies from "../app/data/waterBodies.json";
import forest from "../app/data/forest.json";

import L from "leaflet";

// Fix: override default marker icons safely with empty transparent image
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  iconUrl:
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  shadowUrl:
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
});



const { BaseLayer } = LayersControl;


interface InteractiveMapProps {
  layers: {
    agriculture: boolean;
    forest: boolean;
    water: boolean;
    settlement: boolean;
    boundaries: boolean;
  };
}

export default function InteractiveMap({ layers }: InteractiveMapProps) {
  const center: LatLngExpression = [20.4625, 85.8828]; // Odisha

  return (
    <div className="w-full h-[90vh] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ height: "100%", width: "100%" }}
      >
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
        </BaseLayer>
        <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
/>
            {layers.water && waterBodies?.features?.length > 0 && (
  <GeoJSON
    data={waterBodies as GeoJsonObject}
    style={{ color: "#4fc3f7", weight: 2, fillOpacity: 0.5 }}
  />
)}

        {/* Conditional layers */}
        {layers.agriculture && (
          <GeoJSON data={agriculture as GeoJsonObject} style={{
    color: "#1E90FF",       
    weight: 2,              
    fillColor: "#1E90FF",   
    fillOpacity: 0.4,       
  }} />
        )}
        {layers.settlement && (
          <GeoJSON data={settlements as GeoJsonObject} style={{ color: "#ff7f50" }} />
        )}
        {layers.water && (
          <GeoJSON data={waterBodies as GeoJsonObject} style={{ color: "#4fc3f7" }} />
        )}
        {layers.forest && (
          <GeoJSON data={forest as GeoJsonObject} style={{ color: "#2e7d32" }} />
        )}
      </MapContainer>
    </div>
  );
}
