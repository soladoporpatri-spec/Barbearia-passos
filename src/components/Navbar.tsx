"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import clsx from "clsx";
import { siteConfig } from "@/config";
import { getBusinessStatus, OpenStatus } from "@/utils/businessStatus";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<OpenStatus>({
    isOpen: true,
    statusText: "Aberto agora",
    subText: "Atendendo até 19:00",
  });

  useEffect(() => {
    setStatus(getBusinessStatus());
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne scroll do body quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-4 sm:px-6 md:px-12",
          scrolled
            ? "py-3 bg-brand-bg/90 backdrop-blur-xl border-b border-brand-border shadow-lg shadow-black/40"
            : "py-4 md:py-6 bg-gradient-to-b from-brand-bg/80 via-brand-bg/40 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex flex-col group" aria-label="Barbearia Passos - Início">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink group-hover:text-brand-gold transition-colors">
                Passos<span className="text-brand-gold">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-muted -mt-1 font-sans">
                Barbearia
              </span>
            </a>

            {/* Badge de Funcionamento em tempo real */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs">
              <span
                className={clsx(
                  "w-2 h-2 rounded-full",
                  status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-zinc-500"
                )}
              />
              <span className="text-brand-ink/90 font-medium">{status.statusText}</span>
              <span className="text-brand-muted">•</span>
              <span className="text-brand-muted">{status.subText}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-medium tracking-wide text-brand-ink/80 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-2.5 rounded-full border border-brand-border text-brand-ink/80 hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
              title="Ligar para a Barbearia"
              aria-label="Ligar para a Barbearia"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-ink text-brand-bg font-sans text-sm font-semibold tracking-wide hover:bg-brand-gold hover:text-black transition-all duration-300 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Ações Mobile Topo */}
          <div className="flex md:hidden items-center gap-2">
            {/* Status compacto mobile */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-surface border border-brand-border text-[11px]">
              <span
                className={clsx(
                  "w-2 h-2 rounded-full",
                  status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-zinc-500"
                )}
              />
              <span className={status.isOpen ? "text-emerald-400 font-medium" : "text-brand-muted"}>
                {status.isOpen ? "Aberto" : "Fechado"}
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg bg-brand-surface border border-brand-border text-brand-ink hover:text-brand-gold transition-colors"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Menu Mobile (Tela Cheia com toque suave e atalhos rápidos) */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-brand-bg/95 backdrop-blur-2xl transition-all duration-300 ease-out md:hidden flex flex-col justify-between p-6",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Topo do Drawer */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-brand-border">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-brand-ink">
                Passos<span className="text-brand-gold">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-muted">
                Barbearia Contemporânea
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-brand-surface border border-brand-border text-brand-ink hover:text-brand-gold transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Status no Drawer */}
          <div className="mt-4 p-3 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={clsx(
                  "w-2.5 h-2.5 rounded-full",
                  status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-zinc-500"
                )}
              />
              <span className="text-sm font-medium text-brand-ink">{status.statusText}</span>
            </div>
            <span className="text-xs text-brand-muted">{status.subText}</span>
          </div>

          {/* Links Principais com alvos táteis amplos */}
          <nav className="mt-6 flex flex-col space-y-1" aria-label="Links do Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-brand-surface text-brand-ink text-lg font-serif tracking-wide border-b border-brand-border/40"
              >
                <span>{link.label}</span>
                <span className="text-brand-muted font-sans text-xs">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Rodapé do Drawer com Ações Rápidas de Contato */}
        <div className="pt-6 border-t border-brand-border space-y-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#25D366] text-white font-sans font-semibold text-base shadow-lg shadow-[#25D366]/20 active:scale-[0.98] transition-transform"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-surface border border-brand-border text-brand-ink text-sm font-medium hover:border-brand-gold/50 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Ligar Agora</span>
            </a>

            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-surface border border-brand-border text-brand-ink text-sm font-medium hover:border-brand-gold/50 transition-colors"
            >
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Como Chegar</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-brand-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Ter a Sáb: 09h às 19h
            </span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-brand-ink hover:text-brand-gold"
            >
              <InstagramIcon className="w-3.5 h-3.5" /> {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
