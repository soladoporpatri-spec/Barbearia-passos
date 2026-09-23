"use client";

import { Coffee, Wind, Clock, Car, Wifi, Shield } from "lucide-react";

export default function Experience() {
  const items = [
    {
      icon: Coffee,
      title: "Café & Cerveja Gelada",
      desc: "Cortesia da casa para você desacelerar do dia a dia e aproveitar o seu momento.",
    },
    {
      icon: Wind,
      title: "100% Climatizado",
      desc: "Temperatura agradável, assentos ergonômicos e acústica relaxante.",
    },
    {
      icon: Clock,
      title: "Pontualidade Britânica",
      desc: "Seu horário é sagrado. Atendimento com agendamento rigoroso e sem esperas chatas.",
    },
    {
      icon: Car,
      title: "Fácil Estacionamento",
      desc: "Localização privilegiada na Av. José Neto Paranhos, com facilidade para estacionar.",
    },
    {
      icon: Wifi,
      title: "Wi-Fi de Alta Velocidade",
      desc: "Conexão rápida disponível para trabalhar ou navegar enquanto aguarda.",
    },
    {
      icon: Shield,
      title: "Higiene & Esterilização",
      desc: "Lâminas 100% descartáveis e materiais esterilizados a cada atendimento.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-brand-surface relative border-y border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold mb-3 block">
            A Experiência Passos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-ink">
            Mais que um corte. Um ritual de cuidado.
          </h2>
          <p className="mt-4 text-brand-muted text-base sm:text-lg font-light">
            Pensamos em cada detalhe para que sua visita seja a pausa mais agradável da sua semana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-brand-bg/50 border border-brand-border/80 hover:border-brand-gold/40 transition-colors duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold-subtle border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
