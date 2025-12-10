"use client"

import { useState } from "react"
import { QuizPhase } from "@/components/quiz-phase"
import { RoulettePhase } from "@/components/roulette-phase"

type Phase = "quiz" | "roulette"

export default function TVQuizApp() {
  const [phase, setPhase] = useState<Phase>("quiz")

  const handleQuizComplete = () => {
    setPhase("roulette")
  }

  const handleReset = () => {
    setPhase("quiz")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6B00] via-[#FF8533] to-[#FF6B00]">
      {phase === "quiz" && <QuizPhase onComplete={handleQuizComplete} />}
      {phase === "roulette" && <RoulettePhase onReset={handleReset} />}
    </div>
  )
}
