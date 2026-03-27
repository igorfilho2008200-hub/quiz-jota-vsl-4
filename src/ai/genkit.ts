import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

/**
 * Configuração do Genkit otimizada para o Google AI Studio.
 * Utiliza o modelo Gemini 2.5 Flash para um equilíbrio entre velocidade e profundidade analítica.
 */
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
