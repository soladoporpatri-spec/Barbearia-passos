"use client";

import Image from "next/image";
import { siteConfig } from "@/config";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-12 h-full">
        <div className="w-full md:w-1/2 flex flex-col z-10">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-brand-muted mb-4">
            Anápolis — GO
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-balance mb-6">
            Barbearia<br />
            <span className="italic">Passos.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/80 max-w-md font-light mb-10 leading-relaxed">
            Sua identidade, nossa técnica. Cuidado masculino executado com precisão no coração do Jundiaí.
          </p>
          <div>
            <a
              href={siteConfig.whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              title="Atendimento via WhatsApp (Bot Barbearia-v2)"
              className="inline-flex items-center justify-center text-base font-medium px-8 py-4 bg-brand-ink text-brand-bg hover:bg-brand-accent transition-all duration-300"
            >
              Agendar Horário
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative bg-brand-border flex items-center justify-center overflow-hidden">
          <Image
            src="/imagens/corte.jpg"
            alt="Corte na Barbearia Passos"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
