"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface QuizPhaseProps {
  onComplete: () => void
}

const questions = [
  {
    question: "Qual é a sua faixa etária?",
    answers: ["18 a 25 anos", "25 a 35 anos", "35 a 50 anos", "Acima de 50 anos"],
    correct: 0,
  },
  {
    question: "Qual é o seu gênero?",
    answers: ["Masculino", "Feminino", "Não-binário", "Prefiro não responder"],
    correct: 0,
  },
  {
    question: "Para qual atendimento veio?",
    answers: ["Psicologia", "Nutrição", "Fisioterapia", "Outro"],
    correct: 0,
  },
  {
    question: "Usa plano de saúde?",
    answers: ["Sim", "Não", "", ""],
    correct: 0,
  },
]

export function QuizPhase({ onComplete }: QuizPhaseProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed
      setTimeout(onComplete, 500)
    }
  }

  const current = questions[currentQuestion]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12">
      {/* Progress Indicator */}
      <div className="absolute right-12 top-12">
        <div className="rounded-2xl bg-white px-8 py-4">
          <p className="text-4xl font-bold text-[#FF6B00]">
            PERGUNTA {currentQuestion + 1} / {questions.length}
          </p>
        </div>
      </div>

      {/* Question */}
      <div className="mb-16 max-w-5xl text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">{current.question}</h1>
      </div>

      {/* Answers */}
      <div className="flex w-full max-w-4xl flex-col gap-6">
        {current.answers.map((answer, index) => (
          <button
            key={index}
            onClick={handleAnswer}
            className={cn(
              "rounded-3xl bg-white px-12 py-8 text-4xl font-bold text-[#FF6B00] transition-all",
              "hover:scale-105 hover:shadow-2xl",
              "focus-visible:scale-110 focus-visible:shadow-[0_0_0_6px_white,0_8px_24px_rgba(0,0,0,0.4)] focus-visible:outline-none",
            )}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  )
}
