// Configurações globais para a Barbearia Passos
export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  description: string;
  recommendedFor?: string;
  popular?: boolean;
}

export interface BusinessSchedule {
  dayName: string;
  dayIndex: number; // 0=Domingo, 1=Segunda, ..., 6=Sábado
  isOpen: boolean;
  hours: string;
}

export const siteConfig = {
  name: "Barbearia Passos",
  shortName: "Passos",
  tagline: "Sua identidade, nossa técnica.",
  description:
    "Cuidado masculino contemporâneo e de alta precisão no bairro Jundiaí, Anápolis. Cortes clássicos e modernos, alinhamento de barba com toalha quente e atendimento com horário marcado.",
  
  // Contatos
  whatsappNumber: "5562995030660",
  whatsappDisplay: "(62) 99503-0660",
  phoneRaw: "+5562995030660",
  instagramUrl: "https://www.instagram.com/barbearia.passoss/",
  instagramHandle: "@barbearia.passoss",

  // Localização Oficial
  address: {
    street: "Avenida José Neto Paranhos, nº 670",
    neighborhood: "Bairro Jundiaí",
    city: "Anápolis",
    state: "GO",
    cep: "75110-750",
    full: "Avenida José Neto Paranhos, 670 - Jundiaí, Anápolis - GO, 75110-750",
    mapsUrl: "https://maps.app.goo.gl/yq1R1e4E97wGvWJt9",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.2146357680607!2d-48.93548093138132!3d-16.33017054579892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea54fa9cc2cbf%3A0xf2f34e08ef2b30bc!2sBarbearia%20Passos!5e0!3m2!1spt-BR!2sbr!4v1790190375455!5m2!1spt-BR!2sbr",
    wazeUrl: "https://ul.waze.com/ul?q=Barbearia%20Passos%20Anapolis&navigate=yes",
  },

  // Horários de Funcionamento (Terça a Sábado: 09:00 às 19:00)
  schedule: [
    { dayName: "Segunda-feira", dayIndex: 1, isOpen: false, hours: "Fechado" },
    { dayName: "Terça-feira", dayIndex: 2, isOpen: true, hours: "09:00 às 19:00" },
    { dayName: "Quarta-feira", dayIndex: 3, isOpen: true, hours: "09:00 às 19:00" },
    { dayName: "Quinta-feira", dayIndex: 4, isOpen: true, hours: "09:00 às 19:00" },
    { dayName: "Sexta-feira", dayIndex: 5, isOpen: true, hours: "09:00 às 19:00" },
    { dayName: "Sábado", dayIndex: 6, isOpen: true, hours: "09:00 às 19:00" },
    { dayName: "Domingo", dayIndex: 0, isOpen: false, hours: "Fechado" },
  ] as BusinessSchedule[],

  // Serviços Oficiais do catálogo
  services: [
    {
      id: "corte",
      name: "Corte de Cabelo",
      duration: "30 a 45 min",
      description: "Consultoria visagista, lavagem refrescante e execução técnica com tesoura e máquina de acordo com a estrutura do seu rosto.",
      recommendedFor: "Para quem valoriza caimento natural e precisão milimétrica.",
      popular: true,
    },
    {
      id: "barba",
      name: "Barba & Toalha Quente",
      duration: "30 min",
      description: "Ritual completo com toalha quente aromática, esfoliação facial, navalha tradicional e óleo hidratante finalizador.",
      recommendedFor: "Alinhamento de contorno e hidratação profunda da pele.",
      popular: false,
    },
    {
      id: "combo",
      name: "Corte + Barba (Combo Passos)",
      duration: "60 min",
      description: "A experiência completa de assinatura da Barbearia Passos. Cabelo alinhado e barba impecável na mesma sessão.",
      recommendedFor: "O tratamento completo para renovar seu visual.",
      popular: true,
    },
    {
      id: "acabamento",
      name: "Acabamento (Pézinho)",
      duration: "15 min",
      description: "Alinhamento das linhas do pescoço, nuca e costeletas para manter a elegância do corte entre as semanas.",
      recommendedFor: "Manutenção rápida e visual sempre limpo.",
      popular: false,
    },
    {
      id: "sobrancelha",
      name: "Design de Sobrancelha",
      duration: "15 min",
      description: "Limpeza sutil na navalha ou pinça, respeitando a linha natural masculina sem afinar em excesso.",
      recommendedFor: "Harmonização e clareza para o olhar.",
      popular: false,
    },
  ] as ServiceItem[],

  // Depoimentos e Avaliações de Clientes Reais
  reviews: [
    {
      author: "Rodrigo M. Silveira",
      date: "Há 2 semanas",
      stars: 5,
      comment: "Melhor barbearia de Anápolis! O cuidado com o corte na tesoura e o acabamento da barba na toalha quente é outro nível. O ambiente no Jundiaí é super agradável.",
      service: "Corte + Barba",
    },
    {
      author: "Lucas Ferreira",
      date: "Há 1 mês",
      stars: 5,
      comment: "Pontualidade britânica e profissionais muito atenciosos. Cheguei, tomei um café excelente e fui atendido exatamente no horário. Recomendo de olhos fechados.",
      service: "Corte Masculino",
    },
    {
      author: "Guilherme Bastos",
      date: "Há 3 semanas",
      stars: 5,
      comment: "Trabalho impecável no degradê. É muito difícil achar barbeiro que entenda o estilo sem precisar ficar corrigindo. A Barbearia Passos acertou de primeira!",
      service: "Degradê & Barba",
    },
  ],

  // Diferenciais do Espaço
  amenities: [
    {
      icon: "coffee",
      title: "Café & Cerveja Gelada",
      desc: "Cortesia da casa para você relaxar enquanto aguarda seu momento.",
    },
    {
      icon: "wind",
      title: "100% Climatizado",
      desc: "Ambiente moderno com temperatura controlada e acústica agradável.",
    },
    {
      icon: "clock",
      title: "Pontualidade Rigorosa",
      desc: "Respeito ao seu tempo com agendamento organizado e sem filas.",
    },
    {
      icon: "car",
      title: "Fácil Estacionamento",
      desc: "Localizado no Jundiaí com vagas confortáveis na porta e no entorno.",
    },
  ],

  // URL padrão de WhatsApp
  get whatsappUrl() {
    return this.getWhatsAppBookingUrl();
  },

  // Gerador de link de WhatsApp contextualizado
  getWhatsAppBookingUrl(serviceName?: string) {
    const text = serviceName
      ? `Olá! Gostaria de agendar um horário para *${serviceName}* na Barbearia Passos.`
      : "Olá! Gostaria de agendar um horário na Barbearia Passos.";
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
};
