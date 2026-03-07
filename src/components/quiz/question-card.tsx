"use client"

import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Question, Answer } from '@/lib/quiz-data';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  current: number;
  total: number;
  onAnswer: (answer: Answer) => void;
  onBack: () => void;
}

export function QuestionCard({ question, current, total, onAnswer, onBack }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const progress = (current / total) * 100;

  const handleSelect = (index: number) => {
    setSelected(index);
    // Short delay for visual feedback before moving to next
    setTimeout(() => {
      onAnswer(question.options[index]);
      setSelected(null);
    }, 400);
  };

  return (
    <div className="w-full space-y-8 fade-in">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          {current > 1 ? (
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </button>
          ) : (
            <div /> // Spacer
          )}
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-accent">{Math.round(progress)}%</span>
          </div>
        </div>
        <Progress value={progress} className="h-1.5 bg-muted [&>div]:bg-primary" />
      </div>

      <div className="bg-card/40 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-3xl shadow-sm space-y-10">
        <h2 className="text-2xl md:text-3xl font-headline font-medium text-accent leading-snug">
          {question.text}
        </h2>

        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={cn(
                "w-full text-left p-6 rounded-2xl transition-all duration-300 border font-body text-lg",
                "hover:border-primary/50 hover:bg-primary/5 hover:translate-x-1",
                selected === index 
                  ? "border-primary bg-primary/10 shadow-inner translate-x-1" 
                  : "border-border bg-white/60"
              )}
            >
              <div className="flex items-center gap-4">
                <span className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors",
                  selected === index 
                    ? "bg-primary border-primary text-white" 
                    : "border-muted-foreground/30 text-muted-foreground"
                )}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
