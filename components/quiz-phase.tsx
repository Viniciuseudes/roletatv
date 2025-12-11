"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { playSound } from "@/lib/sounds";

interface QuizPhaseProps {
  onComplete: (answers: string[]) => void; // Retornar respostas
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
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  const handleAnswer = (answer: string) => {
    playSound("click"); // Som de clique

    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    setIsExiting(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsExiting(false);
      } else {
        onComplete(newAnswers); // Finaliza e passa os dados
      }
    }, 300);
  };

  const current = questions[currentQuestion];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 pt-24 max-w-6xl mx-auto">
      {/* Barra de Progresso (Branca sobre fundo laranja) */}
      <div className="w-full max-w-3xl h-6 bg-black/20 rounded-full mb-10 overflow-hidden border-2 border-white/30">
        <div
          className="h-full bg-white shadow-[0_0_10px_white] transition-all duration-500 ease-out rounded-full"
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
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100 animate-in fade-in zoom-in-95"
        )}
      >
        {/* Cartão da Pergunta (Fundo Branco para Contraste) */}
        <div className="bg-white rounded-[2rem] p-10 mb-10 shadow-2xl w-full text-center border-b-8 border-orange-200">
          <h1 className="text-5xl md:text-6xl font-black text-[#431407] leading-tight">
            {current.question}
          </h1>
        </div>

        {/* Grid de Respostas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {current.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              // Botões: Fundo claro (#FFF3E0) com texto escuro (#431407)
              className={cn(
                "group relative flex items-center justify-between px-10 py-8 bg-[#FFF3E0] rounded-3xl text-left transition-all duration-200 border-4 border-transparent",
                "shadow-[0_8px_0_#FFCC80]", // Sombra laranja claro
                "hover:scale-[1.02] hover:bg-white hover:border-[#FF6B00] hover:shadow-[0_12px_0_#FFB74D]",
                "active:scale-[0.98] active:translate-y-2 active:shadow-none",
                "focus-visible:ring-[8px] focus-visible:ring-white focus-visible:border-[#FF6B00] focus-visible:bg-white focus-visible:scale-105 focus-visible:outline-none focus-visible:z-10"
              )}
            >
              <span className="text-3xl font-black text-[#431407] group-hover:text-[#FF6B00] transition-colors">
                {answer}
              </span>
              <ChevronRight
                className="w-10 h-10 text-orange-300 group-hover:text-[#FF6B00] group-focus-visible:text-[#FF6B00] transition-all"
                strokeWidth={3}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
