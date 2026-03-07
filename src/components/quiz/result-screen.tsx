"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { PROFILES, ProfileType } from '@/lib/quiz-data';
import { Compass, Shield, Eye, Target, Share2, RotateCcw, Lightbulb, AlertTriangle, CheckCircle2, MessageSquare } from 'lucide-react';
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
    <div className="w-full space-y-12 fade-in py-8">
      <div className="text-center space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Operador Dominante Identificado</p>
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-accent">
          Seu Centro é {info.title}
        </h2>
      </div>

      <div className="space-y-8">
        {/* Main Card with Intro & Icon */}
        <div className="bg-white/70 backdrop-blur-md border border-white/40 p-10 md:p-14 rounded-[3rem] shadow-xl space-y-8 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
          
          <div className="flex justify-center relative">
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Icon size={48} />
            </div>
          </div>

          <div className="text-center space-y-4 relative">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <MessageSquare className="w-3.5 h-3.5" />
                Intuição Decisória
             </div>
             <p className="text-2xl md:text-3xl font-headline font-medium italic text-accent leading-tight">
               {info.thought}
             </p>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid gap-6">
          {/* Benefits */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/30 p-8 rounded-[2.5rem] shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">O que isso traz para você</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 font-body">
              {info.benefits}
            </p>
          </div>

          {/* Challenges */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/30 p-8 rounded-[2.5rem] shadow-sm space-y-4 border-l-4 border-l-destructive/30">
            <div className="flex items-center gap-3 text-destructive">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">Quando o operador domina</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 font-body">
              {info.challenges}
            </p>
          </div>

          {/* Regulated */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/30 p-8 rounded-[2.5rem] shadow-sm space-y-4 border-l-4 border-l-primary/30">
            <div className="flex items-center gap-3 text-primary">
              <CheckCircle2 className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">Quando o centro é regulado</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 font-body">
              {info.regulated}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <Button 
          onClick={onRestart}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 py-7 h-auto text-lg flex items-center gap-3 group transition-all"
        >
          <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          Refazer Reflexão
        </Button>
        <Button 
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 h-auto text-lg flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
        >
          <Share2 className="w-5 h-5" />
          Compartilhar Perfil
        </Button>
      </div>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground font-body italic max-w-sm mx-auto">
          "A consciência se revela no silêncio entre as escolhas."
        </p>
      </div>
    </div>
  );
}