"use client";

export default function Location() {
  return (
    <section id="localizacao" className="py-32 px-6 md:px-12 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-brand-muted mb-4">
            Visite-nos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-10">
            Jundiaí,<br />
            Anápolis.
          </h2>
          <div className="space-y-8 text-lg text-brand-ink/80 font-light">
            <div>
              <strong className="block font-sans font-semibold tracking-wide text-brand-ink mb-2 uppercase text-sm">
                Endereço Oficial
              </strong>
              <p className="leading-relaxed">
                Avenida José Neto Paranhos, nº 670<br />
                Bairro Jundiaí<br />
                Anápolis - GO, 75110-750
              </p>
            </div>
            
            <div className="pt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+José+Neto+Paranhos+670+Jundiaí+Anápolis+GO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-ink font-semibold uppercase tracking-widest text-sm hover:text-brand-muted transition-colors border-b border-brand-ink pb-1"
              >
                Abrir no aplicativo
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full h-[450px] relative overflow-hidden bg-brand-border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.30269623653936!2d-48.93514533842054!3d-16.330957230252523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea4f604661591%3A0x81210f7772fb3b2!2sR.%20Jos%C3%A9%20Neto%20Paranhos%2C%20670%20-%20Jundia%C3%AD%2C%20An%C3%A1polis%20-%20GO%2C%2075110-750!5e0!3m2!1spt-BR!2sbr!4v1789929164492!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[0.5] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
