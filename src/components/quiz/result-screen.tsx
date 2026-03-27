"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { PROFILES, ProfileType } from '@/lib/quiz-data';
import { 
  Compass, 
  Shield, 
  Eye, 
  Target, 
  Share2, 
  RotateCcw, 
  Lightbulb, 
  TriangleAlert, 
  CircleCheck, 
  MessageSquare, 
  CirclePlay 
} from 'lucide-react';
import Link from 'next/link';

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
    <div className="w-full space-y-12 fade-in py-8 max-w-2xl mx-auto">
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

        {/* Detailed Sections */}
        <div className="grid gap-6">
          <div className="bg-white/60 backdrop-blur-sm border border-white/30 p-8 rounded-[2.5rem] shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">O que isso traz para você</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 font-body">
              {info.benefits}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-white/30 p-8 rounded-[2.5rem] shadow-sm space-y-4 border-l-4 border-l-destructive/30">
            <div className="flex items-center gap-3 text-destructive">
              <TriangleAlert className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">Quando domina o centro</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 font-body">
              {info.challenges}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-white/30 p-8 rounded-[2.5rem] shadow-sm space-y-4 border-l-4 border-l-primary/30">
            <div className="flex items-center gap-3 text-primary">
              <CircleCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">O centro regulado</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 font-body">
              {info.regulated}
            </p>
          </div>
        </div>

        {/* Transition to Video */}
        <div className="bg-accent text-white p-10 md:p-14 rounded-[3rem] shadow-2xl space-y-8 mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="space-y-6 relative z-10">
            <h3 className="text-2xl md:text-3xl font-headline font-bold">
              Existe algo importante sobre isso
            </h3>
            
            <div className="space-y-4 text-lg font-body text-white/90 leading-relaxed">
              <p>O seu resultado mostra apenas uma parte do que está influenciando suas decisões hoje.</p>
              <p>Muitas das escolhas que fazemos acontecem no automático, através de padrões que nem sempre percebemos.</p>
              <p>Quando você entende esses padrões, começa a enxergar com mais clareza por que certas decisões te aproximam da vida que você quer — e por que outras acabam te afastando.</p>
              <p>Na próxima etapa, você poderá ver a análise completa do seu resultado e a explicação completa do Jota sobre o que realmente está por trás dessas decisões.</p>
            </div>

            <div className="pt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-white/60 font-body italic text-center">
                "Seu resultado foi calculado com base nas respostas iniciais do teste."
              </p>
              <Button 
                asChild
                className="bg-primary hover:bg-[#5A3FFF] text-white rounded-full px-12 py-8 h-auto text-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto"
              >
                <Link href="/video" className="flex items-center gap-3">
                  Ver análise completa
                  <CirclePlay className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
        <Button 
          onClick={onRestart}
          variant="outline"
          className="border-primary/30 text-primary/60 hover:bg-primary/5 hover:text-primary rounded-full px-8 py-4 h-auto text-sm flex items-center gap-2 group transition-all"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Refazer Reflexão
        </Button>
        <Button 
          variant="ghost"
          className="text-muted-foreground hover:text-primary rounded-full px-8 py-4 h-auto text-sm flex items-center gap-2 transition-all"
        >
          <Share2 className="w-4 h-4" />
          Compartilhar Perfil
        </Button>
      </div>
    </div>
  );
}
