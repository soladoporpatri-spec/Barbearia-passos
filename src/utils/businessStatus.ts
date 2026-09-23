export interface OpenStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
}

export function getBusinessStatus(): OpenStatus {
  // Horário local do navegador
  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Segunda, 2 = Terça, ..., 6 = Sábado
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour * 60 + minute;

  const openTime = 9 * 60; // 09:00
  const closeTime = 19 * 60; // 19:00

  // Terça (2) a Sábado (6)
  const isWorkDay = day >= 2 && day <= 6;

  if (isWorkDay) {
    if (currentTime >= openTime && currentTime < closeTime) {
      const remainingMinutes = closeTime - currentTime;
      const closingSoon = remainingMinutes <= 60;
      return {
        isOpen: true,
        statusText: "Aberto agora",
        subText: closingSoon ? `Fecha em ${remainingMinutes} min (às 19:00)` : "Atendendo hoje até 19:00",
      };
    } else if (currentTime < openTime) {
      return {
        isOpen: false,
        statusText: "Fechado agora",
        subText: "Abre hoje às 09:00",
      };
    } else {
      // Passou das 19h
      if (day === 6) {
        return {
          isOpen: false,
          statusText: "Fechado agora",
          subText: "Reabre terça-feira às 09:00",
        };
      } else {
        return {
          isOpen: false,
          statusText: "Fechado agora",
          subText: "Reabre amanhã às 09:00",
        };
      }
    }
  } else {
    // Segunda (1) ou Domingo (0)
    return {
      isOpen: false,
      statusText: "Fechado hoje",
      subText: "Atendimento de terça a sábado, das 09h às 19h",
    };
  }
}
