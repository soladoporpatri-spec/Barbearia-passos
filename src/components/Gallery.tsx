"use client";

import Image from "next/image";
import { siteConfig } from "@/config";

export default function Gallery() {
  const images = [
    {
      src: "/imagens/corte2.jpg",
      label: "Corte Contemporâneo",
      desc: "Textura e volume trabalhados com precisão.",
      className: "col-span-12 md:col-span-8 aspect-[4/3] md:aspect-[16/9]",
    },
    {
      src: "/imagens/degrade.jpg",
      label: "Degradê Perfeito",
      desc: "Transição suave e acabamento limpo.",
      className: "col-span-12 md:col-span-4 aspect-[3/4]",
    },
    {
      src: "/imagens/cortebarba.jpg",
      label: "Corte e Barba",
      desc: "Assinatura completa Barbearia Passos.",
      className: "col-span-12 md:col-span-12 aspect-[4/3] md:aspect-[21/9]",
    }
  ];

  return (
    <section id="galeria" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            Nosso Trabalho.
          </h2>
          <p className="text-brand-ink/60 text-lg font-light max-w-md">
            Acompanhe nossa rotina e os resultados entregues diariamente em nosso espaço no Jundiaí.
          </p>
        </div>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-ink uppercase tracking-widest text-sm font-semibold hover:text-brand-muted transition-colors border-b border-brand-ink pb-1"
        >
          Ver Instagram
        </a>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden group bg-brand-border flex items-center justify-center text-center ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay sutil com o texto no hover */}
            <div className="absolute inset-0 bg-brand-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
              <span className="block font-serif text-xl md:text-2xl text-brand-bg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {img.label}
              </span>
              <span className="block font-sans text-sm md:text-base text-brand-bg/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {img.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
