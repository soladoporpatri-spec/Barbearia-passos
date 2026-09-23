"use client";

import { MessageCircle } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config";

export function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
      aria-label="Agendar via WhatsApp (Bot)"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-brand-ink text-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif text-2xl font-bold tracking-tight">
          Passos<span className="text-brand-muted">.</span>
        </div>
        <p className="text-brand-bg/60 text-sm">
          © {new Date().getFullYear()} Barbearia Passos. Anápolis - GO.
        </p>
        <div className="flex gap-8">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans uppercase tracking-widest text-brand-bg/70 hover:text-brand-bg transition-colors"
          >
            Instagram
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans uppercase tracking-widest text-brand-bg/70 hover:text-brand-bg transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
