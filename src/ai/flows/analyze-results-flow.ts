'use server';
/**
 * @fileOverview Fluxo de IA para análise personalizada do Centro Decisor.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { ProfileType, Answer } from '@/lib/quiz-data';

const AnalyzeResultsInputSchema = z.object({
  profile: z.string().describe('O perfil dominante identificado no quiz.'),
  answers: z.array(z.object({
    questionText: z.string(),
    answerText: z.string(),
  })).describe('A lista de perguntas e respostas escolhidas pelo usuário.'),
});

export type AnalyzeResultsInput = z.infer<typeof AnalyzeResultsInputSchema>;

const AnalyzeResultsOutputSchema = z.object({
  personalizedAnalysis: z.string().describe('Uma análise profunda e empática sobre o padrão decisório do usuário.'),
  advice: z.string().describe('Um conselho prático para equilibrar esse centro decisor no dia a dia.'),
});

export type AnalyzeResultsOutput = z.infer<typeof AnalyzeResultsOutputSchema>;

const analyzeResultsPrompt = ai.definePrompt({
  name: 'analyzeResultsPrompt',
  input: { schema: AnalyzeResultsInputSchema },
  output: { schema: AnalyzeResultsOutputSchema },
  prompt: `Você é um mentor especialista em autoconhecimento e psicologia cognitiva, com foco em tomada de decisão.

O usuário realizou um quiz chamado "Centro Decisor" e foi identificado com o perfil dominante: {{profile}}.

Aqui estão as respostas específicas que ele deu para entender o contexto:
{{#each answers}}
Pergunta: {{questionText}}
Resposta: {{answerText}}
---
{{/each}}

Sua tarefa é gerar uma análise personalizada de dois parágrafos:
1. "personalizedAnalysis": Explique como as escolhas específicas dele reforçam o perfil {{profile}}, mas aponte nuances interessantes baseadas nas respostas (ex: se ele é Explorador mas escolheu algo seguro em uma pergunta, comente sobre esse equilíbrio).
2. "advice": Dê um conselho curto, poético e prático para ele começar a "regular" esse centro decisor hoje mesmo.

Use um tom acolhedor, profundo (estilo "Jornada da Consciência") e evite clichês corporativos.`,
});

export async function analyzeResults(input: AnalyzeResultsInput): Promise<AnalyzeResultsOutput> {
  const result = await analyzeResultsFlow(input);
  return result;
}

const analyzeResultsFlow = ai.defineFlow(
  {
    name: 'analyzeResultsFlow',
    inputSchema: AnalyzeResultsInputSchema,
    outputSchema: AnalyzeResultsOutputSchema,
  },
  async (input) => {
    const { output } = await analyzeResultsPrompt(input);
    if (!output) throw new Error('Falha ao gerar análise de IA');
    return output;
  }
);
