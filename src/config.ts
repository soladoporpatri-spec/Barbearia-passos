// Configurações globais para integração com o ecossistema Barbearia v2 (Nythar/Dashboard)
export const siteConfig = {
  // O número do WhatsApp deve ser configurado aqui (incluindo DDI e DDD, ex: 5562999999999).
  // A mensagem padrão é capturada pelo bot (api-nythar.js) para iniciar o fluxo de atendimento.
  whatsappNumber: "5562995030660", 
  whatsappMessage: "Olá! Gostaria de agendar um horário na Barbearia Passos.",
  instagramUrl: "https://www.instagram.com/barbearia.passoss/",
  
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }
};
