
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle } from 'lucide-react';

export default function VideoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-accent text-white p-6 md:p-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[100px]" />
      </div>

      <header className="max-w-4xl mx-auto w-full z-10 flex items-center justify-between mb-12">
        <Link 
          href="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </Link>
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs uppercase tracking-[0.4em] font-medium">Análise Completa</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </header>

      <section className="flex-1 max-w-4xl mx-auto w-full z-10 space-y-8 flex flex-col justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
            Assuma o Domínio Real das Suas Decisões
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto">
            Descubra os três elementos fundamentais para sair do automático e alinhar suas escolhas ao seu propósito.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="aspect-video bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group cursor-pointer hover:border-primary/50 transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          <PlayCircle className="w-20 h-20 text-primary group-hover:scale-110 transition-transform" />
          <p className="mt-4 font-bold uppercase tracking-widest text-primary/80">O vídeo começará em breve</p>
        </div>

        <div className="text-center pt-8">
          <Button 
            className="bg-primary hover:bg-[#5A3FFF] text-white px-12 py-8 rounded-full text-xl shadow-lg transition-all"
          >
            Começar Jornada
          </Button>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto w-full p-6 text-center text-xs text-white/40 z-10 font-body">
        &copy; {new Date().getFullYear()} Jornada da Consciência • Reflexão e Autoconhecimento
      </footer>
    </main>
  );
}
