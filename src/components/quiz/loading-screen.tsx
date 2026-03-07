"use client"

import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center space-y-10 fade-in w-full max-w-md">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="relative">
             <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 animate-pulse" />
             </div>
          </div>
        </div>
        <h2 className="text-2xl font-headline font-medium text-accent">
          Analisando seu padrão decisório...
        </h2>
        <p className="text-muted-foreground font-body italic">
          "A consciência se revela no silêncio entre as escolhas."
        </p>
      </div>

      <div className="space-y-2">
        <Progress value={progress} className="h-2 bg-muted [&>div]:bg-primary" />
        <p className="text-xs uppercase tracking-widest text-primary/60 font-medium">
          Sincronizando intenções {progress}%
        </p>
      </div>
    </div>
  );
}
