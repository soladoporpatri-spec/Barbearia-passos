"use client";

import { Clock, MessageSquare, Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config";

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-brand-surface relative">
      {/* Detalhe de iluminação suave */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold mb-3 block">
              Menu de Cuidados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-ink">
              Serviços & Assinaturas.
            </h2>
            <p className="mt-4 text-brand-muted text-base sm:text-lg font-light leading-relaxed">
              Técnicas contemporâneas e atendimento individualizado. Cada serviço é planejado para valorizar suas características e seu estilo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-surface-raised hover:bg-brand-surface-subtle border border-brand-border text-brand-ink text-sm font-medium hover:border-brand-gold/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Dúvidas ou Valores via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Grade de Serviços Responsiva (Cards com toque tátil no celular) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                service.popular
                  ? "bg-brand-surface-raised border-brand-gold/40 shadow-xl shadow-brand-gold/5"
                  : "bg-brand-bg/60 hover:bg-brand-surface-raised border-brand-border hover:border-brand-border-strong"
              }`}
            >
              {/* Badge de Destaque Popular */}
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-brand-gold text-black text-[11px] font-sans font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>Mais Escolhido</span>
                </div>
              )}

              <div>
                {/* Nome & Duração */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-ink font-semibold tracking-tight">
                    {service.name}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-xs text-brand-muted mb-4">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Duração: {service.duration}</span>
                </div>

                {/* Descrição */}
                <p className="text-sm text-brand-ink/80 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Recomendação */}
                {service.recommendedFor && (
                  <div className="flex items-start gap-2 text-xs text-brand-muted mb-6 pt-4 border-t border-brand-border/40">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{service.recommendedFor}</span>
                  </div>
                )}
              </div>

              {/* Botão de Agendamento do Serviço com mensagem contextualizada */}
              <a
                href={siteConfig.getWhatsAppBookingUrl(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-sans text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  service.popular
                    ? "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-[#25D366]/20"
                    : "bg-brand-surface hover:bg-brand-surface-subtle text-brand-ink border border-brand-border hover:border-brand-gold/50"
                }`}
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Agendar este Serviço</span>
              </a>
            </div>
          ))}
        </div>

        {/* Rodapé da seção de serviços */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-bg/40 border border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
            <span className="text-sm text-brand-muted">
              Atendimento exclusivo com horário marcado para seu conforto total.
            </span>
          </div>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-brand-gold font-semibold hover:text-brand-gold-hover transition-colors"
          >
            Consultar Tabela Completa →
          </a>
        </div>
      </div>
    </section>
  );
}
