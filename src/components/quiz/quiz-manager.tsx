"use client"

import React, { useState } from 'react';
import { WelcomeScreen } from './welcome-screen';
import { QuestionCard } from './question-card';
import { LoadingScreen } from './loading-screen';
import { ResultScreen } from './result-screen';
import { QUIZ_QUESTIONS, ProfileType, Answer } from '@/lib/quiz-data';
import { analyzeResults, AnalyzeResultsOutput } from '@/ai/flows/analyze-results-flow';

type QuizState = 'welcome' | 'questions' | 'loading' | 'results';

export function QuizManager() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finalProfile, setFinalProfile] = useState<ProfileType | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<AnalyzeResultsOutput | null>(null);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setAiAnalysis(null);
    setState('questions');
  };

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      setState('welcome');
      setAnswers([]);
    }
  };

  const calculateResult = async (allAnswers: Answer[]) => {
    setState('loading');

    // Perfil dominante (5 primeiras perguntas)
    const firstFive = allAnswers.slice(0, 5);
    const scores: Record<ProfileType, number> = {
      Explorador: 0,
      Protetor: 0,
      Visionário: 0,
      Estrategista: 0
    };

    firstFive.forEach(ans => {
      scores[ans.profile]++;
    });

    let maxScore = -1;
    let candidates: ProfileType[] = [];

    (Object.keys(scores) as ProfileType[]).forEach(profile => {
      if (scores[profile] > maxScore) {
        maxScore = scores[profile];
        candidates = [profile];
      } else if (scores[profile] === maxScore) {
        candidates.push(profile);
      }
    });

    let winner: ProfileType;
    if (candidates.length === 1) {
      winner = candidates[0];
    } else {
      const tieBreakerProfile = allAnswers[4].profile;
      winner = candidates.includes(tieBreakerProfile) ? tieBreakerProfile : candidates[0];
    }

    setFinalProfile(winner);

    // Chamar análise de IA em paralelo
    try {
      const formattedAnswers = QUIZ_QUESTIONS.map((q, idx) => ({
        questionText: q.text,
        answerText: allAnswers[idx].text,
      }));

      const analysis = await analyzeResults({
        profile: winner,
        answers: formattedAnswers,
      });
      setAiAnalysis(analysis);
    } catch (error) {
      console.error("Erro na análise de IA:", error);
      // Mantém nulo, a UI lidará com isso
    }

    // Tempo mínimo para a animação de loading
    setTimeout(() => {
      setState('results');
    }, 3000);
  };

  const restartQuiz = () => {
    setState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setFinalProfile(null);
    setAiAnalysis(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      {state === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {state === 'questions' && (
        <QuestionCard 
          question={QUIZ_QUESTIONS[currentQuestionIndex]}
          current={currentQuestionIndex + 1}
          total={QUIZ_QUESTIONS.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {state === 'loading' && <LoadingScreen />}
      {state === 'results' && finalProfile && (
        <ResultScreen profile={finalProfile} onRestart={restartQuiz} aiAnalysis={aiAnalysis} />
      )}
    </div>
  );
}
