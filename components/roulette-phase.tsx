"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Gift, Cookie, Candy, Banknote } from "lucide-react"; // Ícones sugeridos

interface RoulettePhaseProps {
  onReset?: () => void;
  onUnlockRequest?: () => void; // Quando clica para tentar liberar
  isLocked?: boolean;
}

// Configuração dos Prêmios
const prizes = [
  {
    id: 1,
    label: "R$ 300 PIX",
    icon: Banknote,
    color: "bg-green-600",
    text: "text-white",
    isGrandPrize: true,
  },
  {
    id: 2,
    label: "Chocolate",
    icon: Cookie,
    color: "bg-[#5D4037]",
    text: "text-white",
  }, // Marrom Chocolate
  {
    id: 3,
    label: "Baganas",
    icon: Candy,
    color: "bg-[#FF4081]",
    text: "text-white",
  }, // Rosa chiclete
  {
    id: 4,
    label: "Chocolate",
    icon: Cookie,
    color: "bg-[#5D4037]",
    text: "text-white",
  },
  {
    id: 5,
    label: "Baganas",
    icon: Candy,
    color: "bg-[#FFCD40]",
    text: "text-white",
  }, // Amarelo
  {
    id: 6,
    label: "Chocolate",
    icon: Cookie,
    color: "bg-[#5D4037]",
    text: "text-white",
  },
  {
    id: 7,
    label: "Baganas",
    icon: Candy,
    color: "bg-[#FF4081]",
    text: "text-white",
  },
  {
    id: 8,
    label: "Chocolate",
    icon: Cookie,
    color: "bg-[#5D4037]",
    text: "text-white",
  },
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
    // Se estiver bloqueada, pede para desbloquear (vai pro quiz)
    if (isLocked) {
      if (onUnlockRequest) onUnlockRequest();
      return;
    }

    // Se estiver liberada, gira!
    if (isSpinning) return;

    setIsSpinning(true);
    setShowPrize(false);

    // Sorteio viciado? Se quiser forçar algo, altere a lógica aqui.
    // Por enquanto é aleatório.
    const spins = 5;
    const randomOffset = Math.floor(Math.random() * 360);
    const newRotation = rotation + spins * 360 + randomOffset;

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const actualDeg = newRotation % 360;
      const sliceSize = 360 / prizes.length;
      const winningIndex = Math.floor(
        ((360 - actualDeg + 90) % 360) / sliceSize
      );
      setWonPrize(prizes[winningIndex] || prizes[0]);
      setShowPrize(true);
    }, 4000);
  };

  // Gera o gradiente dinâmico baseado nas cores dos prêmios
  const conicGradient = `conic-gradient(${prizes
    .map((p, i) => {
      const start = (i / prizes.length) * 100;
      const end = ((i + 1) / prizes.length) * 100;
      // Mapeia classes tailwind para hex (simplificado para o exemplo funcionar visualmente sem CSS complexo)
      // O ideal é usar valores HEX diretos no array prizes para garantir
      let colorHex = p.color.includes("green")
        ? "#16a34a"
        : p.color.includes("#5D4037")
        ? "#5D4037"
        : p.color.includes("#FF4081")
        ? "#FF4081"
        : p.color.includes("#FFCD40")
        ? "#FFCD40"
        : "#ffffff";
      return `${colorHex} ${start}% ${end}%`;
    })
    .join(", ")})`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 animate-in fade-in duration-700">
      <div className="mb-8 text-center space-y-2">
        <h1 className="text-7xl font-black text-white drop-shadow-lg uppercase tracking-wider italic">
          Roleta Fusion
        </h1>
        <p className="text-2xl text-white/90 font-medium">
          {isLocked
            ? "Gire e tente sua sorte agora!"
            : "Sorte liberada! Boa sorte!"}
        </p>
      </div>

      <div className="relative mb-12 p-4 bg-white/20 rounded-full backdrop-blur-sm border-4 border-white/30 shadow-2xl">
        {/* Ponteiro */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-20">
          <div className="w-12 h-16 bg-red-600 rounded-b-full shadow-lg border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </div>

        {/* Roda */}
        <div
          className="relative w-[500px] h-[500px] rounded-full border-[8px] border-white shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] overflow-hidden bg-slate-800"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)"
              : "none",
          }}
        >
          {/* Fundo colorido */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ background: conicGradient }}
          />

          {/* Ícones */}
          {prizes.map((prize, i) => {
            const angle = (360 / prizes.length) * i + 360 / prizes.length / 2;
            const radius = 160;
            const x = Math.sin((angle * Math.PI) / 180) * radius;
            const y = -Math.cos((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={prize.id}
                className={cn(
                  "absolute left-1/2 top-1/2 flex flex-col items-center justify-center font-bold text-center w-32",
                  prize.text
                )}
                style={{
                  marginLeft: "-4rem",
                  marginTop: "-2rem",
                  transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                }}
              >
                <prize.icon
                  className="w-10 h-10 mb-1 drop-shadow-md"
                  strokeWidth={2.5}
                />
                <span className="text-sm uppercase leading-tight drop-shadow-sm">
                  {prize.label}
                </span>
              </div>
            );
          })}

          {/* Centro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-4 border-[#FF6B00] shadow-lg flex items-center justify-center z-10">
            <Gift className="w-10 h-10 text-[#FF6B00]" />
          </div>
        </div>
      </div>

      <button
        onClick={handleAction}
        disabled={isSpinning}
        autoFocus
        className={cn(
          "relative px-20 py-8 rounded-full font-black text-4xl shadow-[0_10px_0_rgb(0,0,0,0.2)] transition-all uppercase tracking-widest",
          "hover:scale-105 hover:-translate-y-1",
          "focus-visible:ring-8 focus-visible:ring-yellow-300 focus-visible:scale-110 focus-visible:outline-none",
          isSpinning && "opacity-50 cursor-not-allowed",
          isLocked
            ? "bg-[#FF6B00] text-white hover:shadow-[0_15px_0_#cc5500]"
            : "bg-green-500 text-white shadow-[0_10px_0_#15803d] hover:bg-green-400"
        )}
      >
        {isSpinning ? "GIRANDO..." : isLocked ? "GIRAR AGORA" : "GIRAR ROLETA!"}
      </button>

      {/* Modal */}
      {showPrize && wonPrize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white p-12 rounded-[2rem] max-w-2xl w-full flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300 border-8 border-[#FF6B00]">
            <div
              className={cn(
                "w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-inner",
                wonPrize.color
              )}
            >
              <wonPrize.icon className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-6xl font-black text-slate-800 mb-2 uppercase">
              {wonPrize.label.includes("300") ? "PARABÉNS!!!" : "Você Ganhou!"}
            </h2>
            <p className="text-4xl font-bold text-gray-500 mb-8">
              Prêmio: <span className="text-[#FF6B00]">{wonPrize.label}</span>
            </p>

            <button
              onClick={onReset}
              autoFocus
              className="w-full bg-[#FF6B00] text-white text-3xl font-bold py-6 rounded-xl hover:bg-[#e56000] focus-visible:ring-8 focus-visible:ring-yellow-400 focus-visible:outline-none transition-all shadow-[0_8px_0_#cc5500] active:translate-y-2 active:shadow-none"
            >
              RESGATAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
