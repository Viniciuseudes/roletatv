"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Gift, Cookie, Candy, Banknote, Star } from "lucide-react";
import { playSound, stopSpinSound } from "@/lib/sounds";

interface RoulettePhaseProps {
  onReset?: () => void;
  onUnlockRequest?: () => void;
  isLocked?: boolean;
}

// CORES DAS FATIAS
const SLICE_COLOR_1 = "#FF6B00"; // Laranja Vibrante
const SLICE_COLOR_2 = "#FFF3E0"; // Branco/Laranja Claro

const prizes = [
  { id: 1, label: "R$ 300 PIX", icon: Banknote },
  { id: 2, label: "Chocolate", icon: Cookie },
  { id: 3, label: "Baganas", icon: Candy },
  { id: 4, label: "Brinde Surpresa", icon: Gift },
  { id: 5, label: "Chocolate", icon: Cookie },
  { id: 6, label: "Baganas", icon: Candy },
  { id: 7, label: "Consulta Grátis", icon: Star },
  { id: 8, label: "Baganas", icon: Candy },
];

export function RoulettePhase({
  onReset,
  onUnlockRequest,
  isLocked = false,
}: RoulettePhaseProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showPrize, setShowPrize] = useState(false);
  const [wonPrize, setWonPrize] = useState<(typeof prizes)[0] | null>(null);

  const handleAction = () => {
    playSound("click");

    if (isLocked) {
      if (onUnlockRequest) onUnlockRequest();
      return;
    }

    if (isSpinning) return;

    setIsSpinning(true);
    setShowPrize(false);
    playSound("spin");

    const spins = 5;
    const randomOffset = Math.floor(Math.random() * 360);
    const newRotation = rotation + spins * 360 + randomOffset;

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      stopSpinSound();

      const actualDeg = newRotation % 360;
      const sliceSize = 360 / prizes.length;
      const winningIndex = Math.floor(
        ((360 - actualDeg + 90) % 360) / sliceSize
      );

      const winner = prizes[winningIndex] || prizes[0];
      setWonPrize(winner);
      setShowPrize(true);
      playSound("win");
    }, 4000);
  };

  const conicGradient = `conic-gradient(${prizes
    .map((_, i) => {
      const start = (i / prizes.length) * 100;
      const end = ((i + 1) / prizes.length) * 100;
      const color = i % 2 === 0 ? SLICE_COLOR_2 : SLICE_COLOR_1;
      return `${color} ${start}% ${end}%`;
    })
    .join(", ")})`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 animate-in fade-in duration-700">
      {/* CABEÇALHO CORRIGIDO: Dentro de um cartão branco para garantir leitura */}
      <div className="mb-10 text-center space-y-4 bg-white/90 p-8 rounded-[3rem] shadow-xl border-4 border-[#FF6B00]/30 backdrop-blur-md max-w-4xl">
        <h1 className="text-7xl font-black text-[#FF6B00] uppercase tracking-wider italic drop-shadow-sm leading-none">
          Roleta Fusion
        </h1>
        <p className="text-4xl text-[#431407] font-bold leading-tight">
          {isLocked
            ? "Gire para tentar liberar o prêmio!"
            : "Sorte liberada! Valendo!"}
        </p>
      </div>

      {/* MOLDURA DA ROLETA */}
      <div className="relative mb-14 p-3 rounded-full shadow-[0_30px_60px_rgba(255,107,0,0.6)] bg-gradient-to-b from-orange-400 to-orange-700 border-8 border-orange-300">
        {/* PONTEIRO */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 z-20 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
          <div className="w-16 h-24 bg-gradient-to-b from-white via-orange-100 to-orange-200 rounded-b-full border-[6px] border-[#FF6B00] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#FF6B00] rounded-full mt-6 shadow-inner"></div>
          </div>
        </div>

        {/* DISCO GIRATÓRIO */}
        <div
          className="relative w-[550px] h-[550px] rounded-full border-[12px] border-[#FF6B00] shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] overflow-hidden bg-white"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)"
              : "none",
          }}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{ background: conicGradient }}
          />

          {/* Centro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#FF6B00] to-orange-600 rounded-full border-[6px] border-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center z-10">
            <Star className="w-14 h-14 text-white fill-white drop-shadow-md" />
          </div>

          {/* Ícones e Textos */}
          {prizes.map((prize, i) => {
            const angle = (360 / prizes.length) * i + 360 / prizes.length / 2;
            const radius = 180;
            const x = Math.sin((angle * Math.PI) / 180) * radius;
            const y = -Math.cos((angle * Math.PI) / 180) * radius;

            const isDarkSlice = i % 2 !== 0;
            const textColor = isDarkSlice ? "text-white" : "text-[#431407]";

            return (
              <div
                key={prize.id}
                className={cn(
                  "absolute left-1/2 top-1/2 flex flex-col items-center justify-center font-bold text-center w-40",
                  textColor
                )}
                style={{
                  marginLeft: "-5rem",
                  marginTop: "-3rem",
                  transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                }}
              >
                <prize.icon
                  className="w-14 h-14 mb-2 drop-shadow-sm"
                  strokeWidth={2.5}
                />
                <span className="text-xl uppercase leading-none font-black drop-shadow-sm tracking-tight">
                  {prize.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTÃO DE AÇÃO BRANCO REFEITO */}
      <button
        onClick={handleAction}
        disabled={isSpinning}
        autoFocus
        className={cn(
          "relative px-24 py-12 rounded-full font-black text-5xl uppercase tracking-widest transition-all",
          // Estilo Base: Branco, Texto Laranja, Borda Grossa Laranja, Sombra Escura
          "bg-white text-[#FF6B00] border-[10px] border-[#FF6B00] shadow-[0_15px_0_#c2410c]",

          // Hover e Active (Clique)
          "hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_0_#c2410c] hover:bg-orange-50",
          "active:translate-y-4 active:shadow-none active:scale-95",

          // Foco TV: Borda Amarela Brilhante Externa
          "focus-visible:scale-110 focus-visible:ring-[12px] focus-visible:ring-yellow-400 focus-visible:outline-none focus-visible:shadow-[0_0_50px_rgba(255,255,0,0.8)] focus-visible:z-30",

          isSpinning &&
            "bg-gray-300 text-gray-500 border-gray-400 shadow-none cursor-not-allowed opacity-80 translate-y-4 scale-95"
        )}
      >
        <span className="drop-shadow-sm">
          {isSpinning ? "GIRANDO..." : isLocked ? "GIRAR AGORA" : "GIRAR! ($)"}
        </span>
      </button>

      {/* MODAL DE VITÓRIA */}
      {showPrize && wonPrize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white p-12 rounded-[4rem] max-w-3xl w-full flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300 border-[16px] border-[#FF6B00]">
            <div className="w-48 h-48 rounded-full flex items-center justify-center mb-10 shadow-[0_20px_40px_rgba(255,107,0,0.4)] bg-gradient-to-br from-[#FF6B00] to-orange-600 animate-bounce">
              <wonPrize.icon className="w-24 h-24 text-white" />
            </div>

            <h2 className="text-8xl font-black text-[#431407] mb-6 uppercase leading-none tracking-tight">
              {wonPrize.label.includes("300") ? "UAU! PIX!" : "Parabéns!"}
            </h2>
            <p className="text-6xl font-bold text-gray-500 mb-14 leading-tight">
              Você ganhou: <br />
              <span className="text-[#FF6B00] font-black text-7xl">
                {wonPrize.label}
              </span>
            </p>

            <button
              onClick={() => {
                playSound("click");
                if (onReset) onReset();
              }}
              autoFocus
              className="w-full bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white text-5xl font-black py-10 rounded-3xl hover:from-orange-500 hover:to-orange-700 focus-visible:ring-[12px] focus-visible:ring-yellow-400 focus-visible:outline-none transition-all shadow-[0_12px_0_#9a3412] active:translate-y-4 active:shadow-none uppercase tracking-wider"
            >
              RESGATAR AGORA
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
