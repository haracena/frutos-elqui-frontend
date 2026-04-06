"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Helper Component to handle FlyTo
function RecenterMap({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    if (map) {
      map.flyTo(coords, 14, {
        duration: 1.5,
      });
    }
  }, [coords, map]);
  return null;
}

interface Location {
  id: number;
  city: string;
  title: string;
  subtitle: string;
  coords: number[];
}

interface MapProps {
  locations: Location[];
  activeCoords: [number, number];
}

const MapComponent: React.FC<MapProps> = ({ locations, activeCoords }) => {
  // Fix for "Cannot read properties of undefined (reading 'appendChild')"
  // and marker rendering issues in Next.js HMR/Strict Mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fix default icon issue
      const DefaultIcon = L.Icon.Default as any;
      delete DefaultIcon.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });
    }
  }, []);

  return (
    <MapContainer
      key="main-map-container"
      center={activeCoords}
      zoom={12}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RecenterMap coords={activeCoords} />
      {locations.map((loc) => (
        <Marker
          key={`marker-${loc.id}`}
          position={loc.coords as [number, number]}
        >
          <Popup>
            <div className="p-2">
              <h4 className="font-serif text-brand-purple text-lg leading-tight mb-1">
                {loc.title}
              </h4>
              <p className="text-xs text-brand-wine">{loc.subtitle}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
