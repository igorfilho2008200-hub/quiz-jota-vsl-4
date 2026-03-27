# Centro Decisor - Quiz de Autoconhecimento

Este é um projeto Next.js focado em autoconhecimento, utilizando Genkit para futuras integrações de IA e Firebase para infraestrutura.

## Integração com Google AI Studio

O projeto já está configurado para usar o **Genkit** com os modelos Gemini. Para habilitar as funcionalidades de IA (se desejar expandir o quiz com análises personalizadas por IA):

1. Vá até o [Google AI Studio](https://aistudio.google.com/).
2. Crie uma nova API Key.
3. No seu ambiente de desenvolvimento ou no seu arquivo `.env.local` (não versionado), adicione a seguinte variável:

```env
GOOGLE_GENAI_API_KEY=sua_chave_aqui
```

O arquivo `src/ai/genkit.ts` já está configurado para utilizar este plugin por padrão.

## Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Estilização**: Tailwind CSS & Shadcn UI
- **IA/GenAI**: Genkit (Google AI Plugin)
- **Ícones**: Lucide React
- **Animações**: CSS Transitions & Animate.css

---

Desenvolvido para a Jornada da Consciência.
