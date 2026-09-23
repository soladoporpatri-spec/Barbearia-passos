"use client";

import { MessageSquare, Phone, MapPin, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/config";

export function MobileBottomBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-bg/95 backdrop-blur-2xl border-t border-brand-border px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* Botão de Ligar */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-brand-surface border border-brand-border text-brand-ink active:scale-95 transition-transform"
          aria-label="Ligar para a Barbearia"
        >
          <Phone className="w-4 h-4 text-brand-gold" />
          <span className="text-[10px] text-brand-muted mt-0.5">Ligar</span>
        </a>

        {/* Botão de Rota */}
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-brand-surface border border-brand-border text-brand-ink active:scale-95 transition-transform"
          aria-label="Ver rota no mapa"
        >
          <MapPin className="w-4 h-4 text-brand-gold" />
          <span className="text-[10px] text-brand-muted mt-0.5">Rota</span>
        </a>

        {/* Botão Primário: WhatsApp 1-toque com polegar */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-semibold text-sm shadow-lg shadow-[#25D366]/25 active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>Agendar Horário</span>
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-brand-ink pt-16 pb-24 md:pb-16 px-4 sm:px-6 md:px-12 border-t border-brand-border/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo e Resumo */}
          <div className="md:col-span-2">
            <span className="font-serif text-3xl font-bold tracking-tight text-white block">
              Passos<span className="text-brand-gold">.</span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-muted block mt-1">
              Barbearia Contemporânea
            </span>
            <p className="mt-4 text-sm text-brand-muted max-w-sm font-light leading-relaxed">
              Cuidado masculino contemporâneo e de alta precisão. Atendimento com horário marcado no coração do bairro Jundiaí, Anápolis - GO.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-ink hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
                aria-label="Instagram da Barbearia Passos"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-ink hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                aria-label="WhatsApp da Barbearia Passos"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-ink hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                aria-label="Telefone da Barbearia Passos"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-muted font-light">
              <li>
                <a href="#servicos" className="hover:text-brand-ink transition-colors">
                  Serviços & Combos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-brand-ink transition-colors">
                  Galeria de Trabalhos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-brand-ink transition-colors">
                  Diferenciais do Espaço
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-brand-ink transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-brand-ink transition-colors">
                  Endereço & Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Contato */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mb-4">
              Atendimento
            </h4>
            <div className="space-y-3 text-sm text-brand-muted font-light">
              <p>
                <strong className="text-brand-ink block font-normal">Telefone / WhatsApp:</strong>
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-brand-gold transition-colors">
                  {siteConfig.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="text-brand-ink block font-normal">Horário de Funcionamento:</strong>
                Terça a Sábado: 09h às 19h
              </p>
              <p>
                <strong className="text-brand-ink block font-normal">Endereço:</strong>
                Av. José Neto Paranhos, 670<br />Jundiaí, Anápolis - GO
              </p>
            </div>
          </div>
        </div>

        {/* Linha de Direitos & Voltar ao Topo */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-dim">
          <p>
            © {new Date().getFullYear()} Barbearia Passos. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-brand-muted hover:text-brand-gold transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
