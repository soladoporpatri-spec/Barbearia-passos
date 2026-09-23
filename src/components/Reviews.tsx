"use client";

import { Star, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-brand-gold font-sans font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Avaliação 4.9 ★★★★★ no Google</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-ink">
            O que nossos clientes dizem.
          </h2>
          <p className="mt-3 text-brand-muted text-base sm:text-lg font-light max-w-xl">
            A satisfação e o retorno contínuo de quem confia seu visual à Barbearia Passos.
          </p>
        </div>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold shadow-lg shadow-[#25D366]/20 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Viver Essa Experiência</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteConfig.reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between"
          >
            <div>
              {/* Estrelas */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Comentário */}
              <p className="text-sm sm:text-base text-brand-ink/90 font-light leading-relaxed mb-6 italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Autor e Serviço */}
            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
              <div>
                <span className="block text-sm font-semibold text-brand-ink">
                  {rev.author}
                </span>
                <span className="text-xs text-brand-muted">{rev.date}</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-brand-surface-subtle text-brand-gold font-sans font-medium">
                {rev.service}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
