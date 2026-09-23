"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/config";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  const galleryItems = [
    {
      src: "/imagens/corte2.jpg",
      title: "Corte Contemporâneo",
      category: "Cabelo",
      desc: "Texturização superior com volume equilibrado e acabamento limpo na tesoura.",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      aspect: "aspect-[4/3] sm:aspect-[16/10]",
    },
    {
      src: "/imagens/degrade.jpg",
      title: "Degradê de Precisão",
      category: "Fade",
      desc: "Transição suave milimétrica (skin fade) e alinhamento impecável de costeletas.",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/imagens/cortebarba.jpg",
      title: "Corte & Barboterapia",
      category: "Combo Passos",
      desc: "Ritual completo com toalha quente e barba alinhada com navalha de lâmina única.",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      aspect: "aspect-[4/3] sm:aspect-[16/9]",
    },
    {
      src: "/imagens/corte.jpg",
      title: "Perfil Alinhado",
      category: "Acabamento",
      desc: "Design de linhas e finalização com pomada matte para efeito natural duradouro.",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/5]",
    },
  ];

  return (
    <section id="galeria" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Cabeçalho da Galeria */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold mb-3 block">
            Galeria & Portfólio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-ink">
            Nossos Resultados.
          </h2>
          <p className="mt-3 text-brand-muted text-base sm:text-lg font-light max-w-xl">
            Fotos reais de clientes atendidos no espaço Barbearia Passos no Jundiaí. Toque em qualquer foto para ampliar.
          </p>
        </div>

        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surface-raised border border-brand-border hover:border-brand-gold/50 text-brand-ink text-sm font-medium transition-colors"
        >
          <InstagramIcon className="w-4 h-4 text-brand-gold" />
          <span>Ver mais no Instagram</span>
          <ChevronRight className="w-3.5 h-3.5 text-brand-muted" />
        </a>
      </div>

      {/* Grade de Fotos Responsiva (Touch-Friendly para Celular) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() =>
              setSelectedImage({
                src: item.src,
                title: item.title,
                desc: item.desc,
              })
            }
            className={`group relative rounded-2xl overflow-hidden bg-brand-surface border border-brand-border cursor-pointer active:scale-[0.99] transition-all duration-300 ${item.span}`}
          >
            <div className={`relative w-full ${item.aspect}`}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradiente permanente para garantir legibilidade perfeita no celular sem precisar de hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Botão sutil de lupa no canto */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Conteúdo legível diretamente em telas mobile e desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[10px] font-sans uppercase tracking-widest font-semibold mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-white font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal de Foto em Tela Cheia para Celular e Desktop */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botão de Fechar */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="mt-4 text-center max-w-md" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-serif text-xl sm:text-2xl text-white font-bold">
              {selectedImage.title}
            </h4>
            <p className="text-sm text-zinc-400 mt-1">{selectedImage.desc}</p>
            <a
              href={siteConfig.getWhatsAppBookingUrl(selectedImage.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider shadow-lg"
            >
              <span>Quero este corte</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
