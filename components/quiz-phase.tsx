"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface QuizPhaseProps {
  onComplete: () => void;
}

const questions = [
  {
    question: "Qual sua faixa etária?",
    answers: ["18 - 25 anos", "26 - 35 anos", "36 - 50 anos", "50+ anos"],
  },
  {
    question: "Qual seu gênero?",
    answers: ["Masculino", "Feminino", "Outro", "Prefiro não dizer"],
  },
  {
    question: "Qual especialidade busca?",
    answers: ["Psicologia", "Nutrição", "Fisioterapia", "Odontologia"],
  },
  {
    question: "Possui convênio médico?",
    answers: [
      "Sim, possuo",
      "Não, particular",
      "Quero saber valores",
      "Tenho encaminhamento",
    ],
  },
];

export function QuizPhase({ onComplete }: QuizPhaseProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isExiting, setIsExiting] = useState(false); // Para animação de saída

  const handleAnswer = () => {
    // Inicia animação de saída
    setIsExiting(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsExiting(false); // Reseta para próxima pergunta entrar
      } else {
        onComplete();
      }
    }, 300); // Tempo da animação
  };

  const current = questions[currentQuestion];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12 max-w-6xl mx-auto">
      {/* Barra de Progresso Visual */}
      <div className="w-full max-w-3xl h-4 bg-black/20 rounded-full mb-12 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-500 ease-out"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <div
        key={currentQuestion}
        className={cn(
          "w-full flex flex-col items-center transition-all duration-300",
          isExiting
            ? "opacity-0 -translate-x-10"
            : "opacity-100 translate-x-0 animate-in slide-in-from-right-10 fade-in"
        )}
      >
        {/* Pergunta */}
        <h1 className="text-5xl md:text-6xl font-black text-white text-center mb-16 drop-shadow-md leading-tight">
          {current.question}
        </h1>

        {/* Grid de Respostas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {current.answers.map((answer, index) => (
            <button
              key={index}
              onClick={handleAnswer}
              className={cn(
                "group relative flex items-center justify-between px-10 py-8 bg-white rounded-3xl text-left transition-all duration-200",
                "shadow-[0_8px_0_rgba(0,0,0,0.1)]", // Sombra estilo "botão físico"
                "hover:scale-[1.02] hover:shadow-[0_12px_0_rgba(0,0,0,0.15)]",
                "active:scale-[0.98] active:translate-y-2 active:shadow-none",
                "focus-visible:ring-8 focus-visible:ring-yellow-300 focus-visible:z-10 focus-visible:scale-105 focus-visible:outline-none" // Foco TV
              )}
            >
              <span className="text-3xl font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors">
                {answer}
              </span>
              <ChevronRight className="w-8 h-8 text-slate-300 group-hover:text-[#FF6B00] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
