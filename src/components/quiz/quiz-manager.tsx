"use client"

import React, { useState } from 'react';
import { WelcomeScreen } from './welcome-screen';
import { QuestionCard } from './question-card';
import { LoadingScreen } from './loading-screen';
import { ResultScreen } from './result-screen';
import { QUIZ_QUESTIONS, ProfileType, Answer } from '@/lib/quiz-data';

type QuizState = 'welcome' | 'questions' | 'loading' | 'results';

export function QuizManager() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finalProfile, setFinalProfile] = useState<ProfileType | null>(null);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
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

  const calculateResult = (allAnswers: Answer[]) => {
    setState('loading');

    // Lógica de perfil baseada nas primeiras 5 perguntas
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
      // Desempate: Usa o perfil da 5ª pergunta (índice 4)
      const tieBreakerProfile = allAnswers[4].profile;
      winner = candidates.includes(tieBreakerProfile) ? tieBreakerProfile : candidates[0];
    }

    setFinalProfile(winner);

    // Simula tempo de processamento
    setTimeout(() => {
      setState('results');
    }, 2500);
  };

  const restartQuiz = () => {
    setState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setFinalProfile(null);
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
        <ResultScreen profile={finalProfile} onRestart={restartQuiz} />
      )}
    </div>
  );
}
