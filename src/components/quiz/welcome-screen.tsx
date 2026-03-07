"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="text-center fade-in space-y-8 max-w-lg">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 pulse-soft">
          <Compass size={40} />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-accent">
          Como Seu Centro Decisor Opera?
        </h1>
        <p className="text-xl text-foreground/80 leading-relaxed font-body italic">
          "A clareza da alma começa na compreensão de como escolhemos nossos caminhos."
        </p>
        <p className="text-lg text-muted-foreground font-body">
          Responda a 9 perguntas reflexivas para descobrir qual padrão de consciência orienta suas decisões fundamentais.
        </p>
      </div>
      <div className="pt-6">
        <Button 
          onClick={onStart} 
          className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Iniciar Reflexão
        </Button>
      </div>
    </div>
  );
}
