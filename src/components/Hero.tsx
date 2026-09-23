"use client";

import Image from "next/image";
import { Star, ShieldCheck, MapPin, Calendar, ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow sutil para profundidade */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Coluna de Texto & Conteúdo */}
        <div className="lg:col-span-7 flex flex-col z-10 text-left">
          {/* Badge de Prestígio e Localização */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border mb-6 shadow-sm">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-brand-ink">4.9 no Google</span>
            <span className="text-xs text-brand-muted">•</span>
            <span className="text-xs text-brand-muted flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-gold" /> Jundiaí, Anápolis
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-brand-ink mb-6 text-balance">
            Cuidado masculino com{" "}
            <span className="italic font-normal text-brand-gold">precisão milimétrica.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl font-light mb-8 leading-relaxed">
            Sua identidade, nossa técnica. Cortes clássicos e modernos, ritual de barba com toalha quente e uma experiência única no coração do Jundiaí.
          </p>

          {/* CTAs Principais (Otimizados para toque no celular) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-semibold text-base shadow-lg shadow-[#25D366]/20 active:scale-[0.98] transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Agendar via WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-surface hover:bg-brand-surface-raised border border-brand-border hover:border-brand-gold/40 text-brand-ink font-sans font-medium text-base active:scale-[0.98] transition-all duration-200"
            >
              <span>Ver Serviços & Horários</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </a>
          </div>

          {/* Selos de Confiança Rápidos */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-border/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-ink">Com Hora Marcada</span>
                <span className="text-[11px] text-brand-muted">Sem filas de espera</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-ink">Ter a Sábado</span>
                <span className="text-[11px] text-brand-muted">09h às 19h</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-ink">Fácil Acesso</span>
                <span className="text-[11px] text-brand-muted">Av. José Neto Paranhos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Visual: Imagem com moldura técnica e badge de assinatura */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl">
            {/* Foto com proporção harmônica em qualquer tela */}
            <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] w-full">
              <Image
                src="/imagens/corte.jpg"
                alt="Corte técnico na Barbearia Passos em Anápolis"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Gradiente escuro na base da foto para contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent pointer-events-none" />

              {/* Card flutuante sobre a imagem com a assinatura */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-bg/90 backdrop-blur-md border border-brand-border">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-brand-ink">
                      Barbearia Passos
                    </span>
                    <span className="text-xs text-brand-gold font-sans font-medium">
                      Excelência e precisão em cada detalhe
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-sm">
                    BP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
