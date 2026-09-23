# Barbearia Passos - Frontend

Este é o frontend premium desenvolvido para a **Barbearia Passos**, integrado ao ecossistema existente.

## Tecnologias e Decisões de Design
- **Stack**: Next.js (App Router), React, Tailwind CSS, TypeScript.
- **Design System**: Focado no editorial, "clean" e contemporâneo. Sem clichês de barbearia vintage (como preto/dourado, navalhas, etc).
- **Tipografia**: *Inter* para o corpo (limpeza e modernidade) e *Playfair Display* para os títulos (sofisticação e toque editorial).
- **Mobile-First**: Componentes responsivos, botão flutuante de WhatsApp exclusivo para mobile, navegação simplificada.
- **Animações**: Utilizadas transições CSS nativas de alta performance (sem dependência exagerada de libs externas). Efeitos de hover sutis na galeria e na listagem de serviços para sensação de acabamento premium.

## Integração com o Ecossistema
Para alinhar essa loja ao backend multi-tenant já existente (Nythar / WhatsApp Bot):
1. Foi criado um arquivo de configuração `data/demo-passos.json` na raiz do projeto principal.
2. Esse arquivo contém os dados básicos de locação e serviços ("corte", "barba") sem preços inventados.
3. O administrador da loja é configurado como `passos-admin` / `Passos@2026!`.
4. Os CTAs do site redirecionam nativamente para o WhatsApp da barbearia (preparados para o bot com a mensagem contextual).

## Rodando o Projeto Localmente
1. Entre na pasta `barbearia-passos`.
2. Rode `npm install`.
3. Rode `npm run dev`.

A página está pronta para receber fotografias reais em alta resolução (atualmente usando placeholders do Unsplash com aspect-ratios definidos).
