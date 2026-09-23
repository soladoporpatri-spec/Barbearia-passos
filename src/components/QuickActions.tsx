"use client";

import { MessageSquare, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config";

export default function QuickActions() {
  const actions = [
    {
      title: "Agendar",
      subtitle: "WhatsApp Direto",
      icon: MessageSquare,
      href: siteConfig.whatsappUrl,
      external: true,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Como Chegar",
      subtitle: "Jundiaí, Anápolis",
      icon: MapPin,
      href: siteConfig.address.mapsUrl,
      external: true,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Ligar Direto",
      subtitle: "(62) 99503-0660",
      icon: Phone,
      href: `tel:${siteConfig.phoneRaw}`,
      external: false,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Horários",
      subtitle: "Ter a Sáb 09h-19h",
      icon: Clock,
      href: "#horarios",
      external: false,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto -mt-4 sm:-mt-8 md:-mt-12 mb-16 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-brand-surface/90 backdrop-blur-xl border border-brand-border shadow-xl">
        {actions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <a
              key={idx}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-brand-bg/70 hover:bg-brand-surface-raised border border-brand-border/60 hover:border-brand-gold/40 transition-all duration-200 active:scale-[0.98] group"
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center border shrink-0 ${action.accent} transition-transform group-hover:scale-105`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-brand-ink truncate group-hover:text-brand-gold transition-colors">
                  {action.title}
                </span>
                <span className="text-[11px] sm:text-xs text-brand-muted truncate">
                  {action.subtitle}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
