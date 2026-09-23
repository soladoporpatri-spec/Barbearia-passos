"use client";

import { useState, useEffect } from "react";
import { MapPin, Navigation, Copy, Check, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config";

export default function Location() {
  const [copied, setCopied] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(-1);

  useEffect(() => {
    setCurrentDayIndex(new Date().getDay());
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-brand-surface relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold mb-3 block">
            Endereço & Atendimento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-ink">
            Venha nos visitar no Jundiaí.
          </h2>
          <p className="mt-4 text-brand-muted text-base sm:text-lg font-light leading-relaxed">
            Localização nobre, fácil acesso e vagas de estacionamento na porta e proximidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Coluna 1: Endereço, Ações Rápidas e Horários */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* Card de Endereço */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-bg/70 border border-brand-border shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-subtle border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold font-sans">
                    Endereço Oficial
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-ink mt-1">
                    {siteConfig.address.street}
                  </h3>
                  <p className="text-brand-muted text-sm sm:text-base mt-1">
                    {siteConfig.address.neighborhood} • {siteConfig.address.city} - {siteConfig.address.state}
                  </p>
                  <p className="text-xs text-brand-dim mt-0.5">CEP: {siteConfig.address.cep}</p>
                </div>
              </div>

              {/* Botões de Ação para Celular / Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-brand-border/60">
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-surface hover:bg-brand-surface-raised border border-brand-border text-xs sm:text-sm font-medium text-brand-ink transition-colors active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brand-gold" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-surface hover:bg-brand-surface-raised border border-brand-border text-xs sm:text-sm font-medium text-brand-ink transition-colors"
                >
                  <Navigation className="w-4 h-4 text-brand-gold" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={siteConfig.address.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-surface hover:bg-brand-surface-raised border border-brand-border text-xs sm:text-sm font-medium text-brand-ink transition-colors"
                >
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span>Waze</span>
                </a>
              </div>
            </div>

            {/* Tabela de Horários com Destaque Dinâmico no Dia Atual */}
            <div id="horarios" className="p-6 sm:p-8 rounded-2xl bg-brand-bg/70 border border-brand-border shadow-lg">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-border/60">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-ink">
                    Horários de Atendimento
                  </h3>
                </div>
                <span className="text-xs text-brand-muted">Com hora marcada</span>
              </div>

              <div className="space-y-2.5">
                {siteConfig.schedule.map((item) => {
                  const isToday = item.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={item.dayIndex}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm transition-colors ${
                        isToday
                          ? "bg-brand-gold-subtle border border-brand-gold/40 text-brand-ink font-semibold"
                          : "text-brand-muted hover:text-brand-ink"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.dayName}</span>
                        {isToday && (
                          <span className="px-2 py-0.5 rounded-full bg-brand-gold text-black text-[10px] font-sans font-bold uppercase tracking-wider">
                            Hoje
                          </span>
                        )}
                      </div>
                      <span className={item.isOpen ? "text-brand-ink font-medium" : "text-brand-dim"}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-muted">
                <span>Dúvidas sobre horários ou feriados?</span>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-1 text-brand-gold hover:underline font-medium"
                >
                  <Phone className="w-3 h-3" /> Ligar agora
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Iframe Oficial do Google Maps Atualizado com a Barbearia Passos */}
          <div className="lg:col-span-6 w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl relative">
            <iframe
              src={siteConfig.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Localização da Barbearia Passos no Google Maps"
              className="absolute inset-0 w-full h-full grayscale-[0.35] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            />

            {/* Badge flutuante sobre o mapa */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-brand-bg/90 backdrop-blur-md border border-brand-border shadow-lg pointer-events-none">
              <span className="font-serif font-bold text-sm text-brand-ink block">
                Barbearia Passos
              </span>
              <span className="text-[11px] text-brand-gold font-sans block">
                Av. José Neto Paranhos, 670 - Jundiaí
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
