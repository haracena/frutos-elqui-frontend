"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import for the Map component to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-brand-cream/30 animate-pulse flex items-center justify-center">
      Cargando Mapa...
    </div>
  ),
});

// Location Data from Image
const locations = [
  {
    id: 1,
    city: "Vicuña",
    title: "Pueblo Artesanal de Vicuña",
    subtitle: "Centro del Valle",
    coords: [-30.033385040243953, -70.7127337117075],
  },
  {
    id: 2,
    city: "Horcón",
    title: "Pueblo Artesanal de Horcón",
    subtitle: "Comuna de Paihuano",
    coords: [-30.201458178299116, -70.48616630390039],
  },
  {
    id: 3,
    city: "Embalse Puclaro",
    title: "Pueblo Artesanal Embalse Puclaro",
    subtitle: "Acceso al Embalse",
    coords: [-29.997952625837527, -70.86398025686718],
  },
  {
    id: 4,
    city: "La Serena",
    title: "La Recova / Aeropuerto",
    subtitle: "Puntos clave de venta",
    coords: [-29.90167951922854, -71.24632197324144],
  },
  {
    id: 5,
    city: "Coquimbo",
    title: "Puerto / Pueblito de Peñuelas",
    subtitle: "Borde Costero",
    coords: [-29.949149968911993, -71.29200531086978],
  },
  {
    id: 6,
    city: "Santiago",
    title: "Mundo Rural / Pargua Gourmet",
    subtitle: "Metro Pajaritos, Moneda, Mall",
    coords: [-33.457484447432535, -70.7151179208298],
  },
];

export default function LocationMap() {
  const [activeCoords, setActiveCoords] = useState<[number, number]>([
    -30.033385040243953, -70.7127337117075,
  ]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <div className="h-[600px] bg-brand-cream/50 animate-pulse rounded-[3rem]" />
    );

  return (
    <section id="ubicaciones" className="pt-24 pb-32 px-6 relative -mt-20">
      <picture className="absolute inset-0 -z-10 pointer-events-none saturate-50">
        <source
          media="(max-width: 767px)"
          srcSet="/assets/images/bg-texture-vertical.webp"
        />
        <img
          src="/assets/images/bg-texture.webp"
          alt="Textura crema"
          className="h-full w-full object-cover opacity-100 object-top"
        />
      </picture>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 space-y-4">
          <div className="flex justify-center items-center gap-2 lg:gap-4 overflow-hidden">
            <img
              src="/assets/images/title-decor.webp"
              alt=""
              className="opacity-40 w-32"
            />
            <h2 className="font-serif text-4xl md:text-7xl font-normal tracking-tight text-nowrap text-brand-purple">
              Ubicados en
            </h2>
            <img
              src="/assets/images/title-decor.webp"
              alt=""
              className="opacity-40 w-32 rotate-180"
            />
          </div>
        </header>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-4 lg:gap-8 bg-white/25 backdrop-blur-sm p-4 rounded-2xl shadow-[0_32px_64px_-12px_rgba(46,15,47,0.15)] border border-white/40 overflow-hidden min-h-[600px]">
          {/* Sidebar - Location List */}
          <div className="lg:col-span-1 flex lg:flex-col gap-4 overflow-y-auto lg:max-h-[600px] pr-4 custom-scrollbar pl-2 py-1">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveCoords(loc.coords as [number, number])}
                className={`w-full min-w-fit text-left p-4 lg:p-6 rounded-2xl transition-all duration-500 border-2 group ${
                  activeCoords[0] === loc.coords[0]
                    ? "bg-brand-purple text-white border-brand-purple shadow-xl shadow-brand-purple/20 scale-[1.02]"
                    : "bg-white/40 text-brand-purple border-transparent hover:border-brand-purple/20 hover:bg-white/70"
                }`}
              >
                <span
                  className={`block text-xs uppercase tracking-widest font-bold opacity-60 mb-2 transition-colors ${
                    activeCoords[0] === loc.coords[0]
                      ? "text-brand-cream"
                      : "text-brand-purple"
                  }`}
                >
                  {loc.city}
                </span>
                <h3 className="text-xl lg:text-2xl font-serif mb-2 leading-tight">
                  {loc.title}
                </h3>
                <p
                  className={`text-sm transition-colors ${activeCoords[0] === loc.coords[0] ? "text-brand-cream/80" : "text-brand-wine/70"}`}
                >
                  {loc.subtitle}
                </p>
                <div
                  className={`h-1 w-12 rounded-full mt-4 transition-all duration-500 ${
                    activeCoords[0] === loc.coords[0]
                      ? "bg-brand-cream w-20"
                      : "bg-brand-purple/20 group-hover:bg-brand-purple/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2 h-[360px] lg:h-full rounded-2xl overflow-hidden shadow-inner border border-brand-purple/5 relative">
            <MapComponent locations={locations} activeCoords={activeCoords} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Dummy OrnamentalDivider for integration
function OrnamentalDivider({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 py-4 ${className}`}>
      <div
        className={`h-[1.5px] w-full bg-linear-to-l from-brand-purple/60 to-transparent`}
      />
      <div className="flex gap-2 opacity-60 items-center">
        <div className={`size-1 mr-1 rounded-full ${color}`}></div>
        <div className={`size-2 rounded-full ${color}`}></div>
        <div className={`size-1 ml-1 rounded-full ${color}`}></div>
      </div>
      <div
        className={`h-[1.5px] w-full bg-linear-to-r from-brand-purple/60 to-transparent`}
      />
    </div>
  );
}
