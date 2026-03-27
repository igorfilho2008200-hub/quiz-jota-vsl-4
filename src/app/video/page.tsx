import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CirclePlay } from 'lucide-react';

export default function VideoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-background text-foreground p-6 md:p-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <header className="max-w-4xl mx-auto w-full z-10 flex items-center justify-between mb-12">
        <Link 
          href="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent/60 hover:text-accent transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </Link>
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-accent">Análise Profunda</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </header>

      <section className="flex-1 max-w-4xl mx-auto w-full z-10 space-y-12 flex flex-col justify-center py-10">
        <div className="space-y-8 text-center">
          <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-accent max-w-4xl mx-auto">
            12 minutos que vão mudar o jeito que você enxerga sua própria vida — e explicar por que suas decisões fazem você não estar onde sabe que poderia.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed">
            3 elementos que separam <span className="text-accent font-bold">"Os automáticos"</span> (pessoas que apenas sobrevivem reagindo à vida) dos <span className="text-primary font-bold">"Decisores"</span> (pessoas que constroem uma vida com direção, liberdade e prosperidade).
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="space-y-6">
          <div className="aspect-video bg-white border border-border rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl shadow-primary/5 group cursor-pointer hover:border-primary/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CirclePlay className="w-12 h-12 text-primary" />
            </div>
            <p className="mt-4 font-bold uppercase tracking-widest text-primary/80 text-xs">O vídeo começará em breve</p>
          </div>
          
          <p className="text-center text-sm text-muted-foreground font-body italic">
            Recomendamos assistir até o final para entender completamente a transição para o seu novo centro decisor.
          </p>
        </div>

        <div className="text-center pt-4">
          <Button 
            className="bg-[#6B4EFF] hover:bg-[#5A3FFF] text-white px-12 py-8 rounded-full text-xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            Quero Me Tornar Um Decisor
          </Button>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto w-full p-6 text-center text-xs text-muted-foreground/40 z-10 font-body">
        &copy; {new Date().getFullYear()} Jornada da Consciência • Reflexão e Autoconhecimento
      </footer>
    </main>
  );
}
