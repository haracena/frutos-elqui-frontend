"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      {/* Background Main */}
      <img
        src="/assets/images/bg-hero-parallax.webp"
        alt="Valle de Elqui"
        className="absolute inset-0 -z-30 object-cover brightness-[0.85] w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Contenedor del Sol (Maneja el Parallax) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-25"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* El Sol (Maneja la animación de entrada "Sun Drop") */}
        <div className="relative animate-sun-drop">
          <div
            className="size-44 rounded-full bg-[radial-gradient(circle,_#fff7ed_0%,_#fbbf24_30%,_#f59e0b_60%,_transparent_100%)] blur-2xl opacity-95 mix-blend-screen"
            style={{
              boxShadow:
                "0 0 160px rgba(251, 191, 36, 0.9), 0 0 300px rgba(245, 158, 11, 0.7), 0 0 500px rgba(244, 63, 94, 0.2)",
            }}
          >
            {/* Núcleo interno más brillante */}
            <div className="absolute inset-0 m-auto size-32 rounded-full bg-white blur-md opacity-80" />
          </div>
        </div>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        {/* Left Image */}
        <img
          src="/assets/images/hero-parallax-left.webp"
          alt=""
          className="absolute left-[-5%] bottom-[-10%] w-[45%] object-contain transition-opacity duration-300"
          style={{
            transform: `translateY(${scrollY * -0.06}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        />
        {/* Right Image */}
        <img
          src="/assets/images/hero-parallax-right.webp"
          alt=""
          className="absolute right-[-10%] bottom-[-15%] w-[45%] object-contain transition-opacity duration-300"
          style={{
            transform: `translateY(${scrollY * -0.06}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center gap-8">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-serif text-5xl md:text-8xl font-normal leading-none tracking-tight text-brand-cream drop-shadow-lg drop-shadow-brand-purple">
            Sabores del <br /> <span className="">Valle de Elqui</span>
          </h1>
          <div className="mx-auto max-w-2xl flex flex-col items-center gap-8">
            <p className="text-pretty text-xl tracking-widest text-white/95 leading-relaxed font-medium drop-shadow-lg drop-shadow-brand-purple">
              Más de 25 años elaborando mermeladas, manjares y conservas
              artesanales 100% naturales.
            </p>
            <a
              href="#productos"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-purple px-10 text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105 hover:bg-brand-purple/90 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
