"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking on a link
  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Productos", href: "#productos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-cream/90 backdrop-blur-md border-b border-brand-purple/10 transition-all duration-300">
        <nav
          className="container mx-auto flex items-center justify-between px-6 py-4"
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/assets/images/logo-new.webp"
              alt="Frutos de Elqui Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 active:scale-95"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-brand-purple transition-all hover:tracking-[0.25em]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden relative z-50 p-2 text-brand-purple focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop blur */}
        <div
          className="absolute inset-0 bg-brand-purple/20 backdrop-blur-xl"
          onClick={toggleMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-brand-cream shadow-2xl flex flex-col pt-24 px-10 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute top-10 left-10 opacity-20">
            <img
              src="/assets/images/logo-new.webp"
              alt=""
              className="h-8 grayscale"
            />
          </div>

          <ul className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                className={`transition-all duration-500 delay-[${(i + 1) * 100}ms] ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-3xl font-serif text-brand-wine hover:text-brand-purple transition-colors block"
                >
                  {link.name}
                </a>
                <div className="w-8 h-[3px] bg-brand-purple/20 mt-2 rounded-full" />
              </li>
            ))}
          </ul>

          <div className="mt-auto mb-10 space-y-4">
            <img
              src="/assets/images/logo-new.webp"
              alt=""
              className="mx-auto w-[80%] opacity-80"
            />
            <p className="text-xs text-center uppercase tracking-widest text-brand-purple/60 font-bold">
              Sabores del Valle de Elqui
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
