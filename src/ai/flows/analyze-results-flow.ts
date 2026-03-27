'use server';
/**
 * @fileOverview Fluxo de IA para análise personalizada do Centro Decisor.
 * Integração direta com Google AI Studio utilizando Gemini.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

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

O usuário realizou o quiz "Centro Decisor" e foi identificado como: {{profile}}.

Aqui estão as respostas específicas para análise de contexto:
{{#each answers}}
Pergunta: {{questionText}}
Resposta: {{answerText}}
---
{{/each}}

Sua tarefa é gerar uma análise de "Mentor" em dois campos:
1. "personalizedAnalysis": Um parágrafo profundo que conecte as respostas dele ao perfil {{profile}}. Mostre como as escolhas dele revelam um padrão (ex: se ele busca segurança mas é curioso, como essas forças se chocam ou se ajudam). Use um tom acolhedor e poético.
2. "advice": Um conselho direto de uma frase para o dia de hoje, focado em trazer mais consciência para a próxima decisão dele.

Evite linguagem corporativa ou motivacional genérica. Seja visceral e autêntico.`,
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
    if (!output) throw new Error('Falha na geração da análise de IA');
    return output;
  }
);
