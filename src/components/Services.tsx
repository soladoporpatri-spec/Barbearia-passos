"use client";

import { siteConfig } from "@/config";

export default function Services() {
  const services = [
    { name: "Corte", description: "Execução técnica adaptada ao seu perfil e estilo pessoal." },
    { name: "Barba", description: "Alinhamento, hidratação e contorno com toalha quente." },
    { name: "Corte e Barba", description: "O serviço completo de assinatura da Barbearia Passos." },
    { name: "Acabamento", description: "Manutenção do corte e alinhamento do perfil." },
  ];

  return (
    <section id="servicos" className="py-32 px-6 md:px-12 bg-brand-ink text-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Nossos<br />
            Serviços.
          </h2>
          <p className="text-brand-bg/60 text-lg font-light max-w-sm leading-relaxed">
            Consulte a disponibilidade e os valores atualizados através de nosso atendimento rápido.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-brand-bg uppercase tracking-widest text-sm font-semibold hover:opacity-70 transition-opacity border-b border-brand-bg/30 pb-1"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="md:w-2/3">
          <div className="flex flex-col w-full border-t border-brand-bg/20">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row md:items-baseline justify-between py-10 border-b border-brand-bg/20 hover:bg-brand-bg/5 transition-colors px-4 -mx-4"
              >
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-brand-bg mb-2 md:mb-0 md:w-2/5">
                  {service.name}
                </h3>
                <p className="text-brand-bg/60 font-sans font-light md:w-3/5 text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
