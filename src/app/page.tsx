import { QuizManager } from '@/components/quiz/quiz-manager';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <header className="p-6 md:p-10 flex justify-center z-10">
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-accent">Centro Decisor</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center z-10">
        <QuizManager />
      </section>

      <footer className="p-6 text-center text-xs text-muted-foreground/60 z-10 font-body">
        &copy; {new Date().getFullYear()} Jornada da Consciência • Reflexão e Autoconhecimento
      </footer>
    </main>
  );
}
