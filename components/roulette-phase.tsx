"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface RoulettePhaseProps {
  onReset: () => void
}

const prizes = [
  { id: 1, label: "Prêmio A", icon: "🎁" },
  { id: 2, label: "Tente Novamente", icon: "🔄" },
  { id: 3, label: "Prêmio B", icon: "🏆" },
  { id: 4, label: "Prêmio C", icon: "💎" },
  { id: 5, label: "Tente Novamente", icon: "🔄" },
  { id: 6, label: "Prêmio D", icon: "⭐" },
  { id: 7, label: "Prêmio E", icon: "🎊" },
  { id: 8, label: "Tente Novamente", icon: "🔄" },
]

export function RoulettePhase({ onReset }: RoulettePhaseProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [showPrize, setShowPrize] = useState(false)
  const [wonPrize, setWonPrize] = useState<(typeof prizes)[0] | null>(null)

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setShowPrize(false)

    // Random number of full rotations (5-10) plus random final position
    const spins = 5 + Math.random() * 5
    const finalIndex = Math.floor(Math.random() * prizes.length)
    const degreePerPrize = 360 / prizes.length
    const finalRotation = spins * 360 + finalIndex * degreePerPrize

    setRotation(rotation + finalRotation)

    // Show prize after animation
    setTimeout(() => {
      setIsSpinning(false)
      setWonPrize(prizes[finalIndex])
      setShowPrize(true)
    }, 4000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12">
      {/* Title */}
      <div className="mb-12">
        <h1 className="text-7xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">ROLETA DA SORTE</h1>
      </div>

      {/* Roulette Wheel */}
      <div className="relative mb-16">
        {/* Pointer */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="h-0 w-0 border-l-[30px] border-r-[30px] border-t-[50px] border-l-transparent border-r-transparent border-t-white drop-shadow-lg" />
        </div>

        {/* Wheel */}
        <div
          className="relative h-[500px] w-[500px] rounded-full border-8 border-white shadow-2xl"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
          }}
        >
          {prizes.map((prize, index) => {
            const degreePerPrize = 360 / prizes.length
            const rotation = index * degreePerPrize
            const isOrange = index % 2 === 0

            return (
              <div
                key={prize.id}
                className={cn(
                  "absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left",
                  isOrange ? "bg-white" : "bg-[#FF6B00]",
                )}
                style={{
                  transform: `rotate(${rotation}deg) skewY(${-90 + degreePerPrize}deg)`,
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              >
                <div
                  className="absolute left-1/4 top-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{
                    transform: `rotate(${-rotation + degreePerPrize / 2}deg) skewY(${90 - degreePerPrize}deg)`,
                  }}
                >
                  <span className="text-4xl">{prize.icon}</span>
                  <span
                    className={cn("whitespace-nowrap text-lg font-bold", isOrange ? "text-[#FF6B00]" : "text-white")}
                  >
                    {prize.label}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#FF6B00]" />
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        autoFocus
        className={cn(
          "rounded-3xl bg-white px-20 py-10 text-5xl font-bold text-[#FF6B00] transition-all",
          "hover:scale-105 hover:shadow-2xl",
          "focus-visible:scale-110 focus-visible:shadow-[0_0_0_6px_white,0_8px_24px_rgba(0,0,0,0.4)] focus-visible:outline-none",
          isSpinning && "opacity-50",
        )}
      >
        {isSpinning ? "GIRANDO..." : "GIRAR ROLETA"}
      </button>

      {/* Prize Modal */}
      {showPrize && wonPrize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-12">
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-white p-16 shadow-2xl">
            <h2 className="text-6xl font-bold text-[#FF6B00]">VOCÊ GANHOU!</h2>
            <div className="text-8xl">{wonPrize.icon}</div>
            <p className="text-5xl font-bold text-[#FF6B00]">{wonPrize.label}</p>
            <button
              onClick={onReset}
              autoFocus
              className={cn(
                "mt-4 rounded-3xl bg-[#FF6B00] px-16 py-8 text-4xl font-bold text-white transition-all",
                "hover:scale-105 hover:shadow-2xl",
                "focus-visible:scale-110 focus-visible:shadow-[0_0_0_6px_#FF6B00,0_8px_24px_rgba(0,0,0,0.4)] focus-visible:outline-none",
              )}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
