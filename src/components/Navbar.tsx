"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { siteConfig } from "@/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Trabalhos", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12 md:py-6",
          scrolled ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight">
            Passos<span className="text-brand-muted">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans tracking-wide uppercase text-brand-ink/70 hover:text-brand-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium uppercase tracking-wider px-6 py-3 bg-brand-ink text-brand-bg hover:bg-brand-accent transition-colors"
            >
              Agendar via WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-brand-ink"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-brand-bg px-6 py-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-serif text-2xl font-bold tracking-tight">
            Passos<span className="text-brand-muted">.</span>
          </span>
          <button
            className="p-2 -mr-2 text-brand-ink"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-col space-y-6 text-2xl font-serif">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-brand-border pb-4 text-brand-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-lg font-sans font-medium uppercase tracking-widest px-6 py-4 bg-brand-ink text-brand-bg text-center"
          >
            Agendar via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
