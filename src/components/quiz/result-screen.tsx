"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { PROFILES, ProfileType } from '@/lib/quiz-data';
import { Compass, Shield, Eye, Target, Share2, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultScreenProps {
  profile: ProfileType;
  onRestart: () => void;
}

const profileIcons: Record<ProfileType, any> = {
  Explorador: Compass,
  Protetor: Shield,
  Visionário: Eye,
  Estrategista: Target
};

export function ResultScreen({ profile, onRestart }: ResultScreenProps) {
  const info = PROFILES[profile];
  const Icon = profileIcons[profile];

  return (
    <div className="w-full space-y-10 fade-in text-center">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Resultado Encontrado</p>
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-accent">
          Seu Centro é {info.title}
        </h2>
      </div>

      <div className="bg-white/60 backdrop-blur-md border border-white/40 p-10 md:p-14 rounded-[3rem] shadow-xl space-y-8 relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-700" />
        
        <div className="flex justify-center relative">
          <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Icon size={48} />
          </div>
        </div>

        <div className="space-y-6 relative">
          <p className="text-xl md:text-2xl font-body leading-relaxed text-foreground/90 max-w-2xl mx-auto">
            {info.description}
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onRestart}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 h-auto text-lg flex items-center gap-2 group"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Refazer Quiz
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Share2 className="w-5 h-5" />
            Compartilhar Perfil
          </Button>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-sm text-muted-foreground font-body italic">
          "Conhecer a si mesmo é o começo de toda sabedoria."
        </p>
      </div>
    </div>
  );
}
