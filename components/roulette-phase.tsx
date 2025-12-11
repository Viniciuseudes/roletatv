"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Gift, Cookie, Candy, Banknote, Star } from "lucide-react";
import { playSound, stopSpinSound } from "@/lib/sounds"; // Importa os sons

interface RoulettePhaseProps {
  onReset?: () => void;
  onUnlockRequest?: () => void;
  isLocked?: boolean;
}

// Configuração dos Prêmios com PALETA LARANJA
// Usamos apenas duas cores de fundo para as fatias para um visual "listrado" elegante.
const SLICE_COLOR_1 = "#FF6B00"; // Laranja Vibrante (Texto Branco)
const SLICE_COLOR_2 = "#FFF3E0"; // Laranja Muito Claro/Branco (Texto Laranja Escuro)

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
    playSound("click"); // Som de clique no botão

    if (isLocked) {
      if (onUnlockRequest) onUnlockRequest();
      return;
    }

    if (isSpinning) return;

    setIsSpinning(true);
    setShowPrize(false);
    playSound("spin"); // Toca som de giro contínuo

    const spins = 5;
    const randomOffset = Math.floor(Math.random() * 360);
    const newRotation = rotation + spins * 360 + randomOffset;

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      stopSpinSound(); // Para o som de giro

      const actualDeg = newRotation % 360;
      const sliceSize = 360 / prizes.length;
      const winningIndex = Math.floor(
        ((360 - actualDeg + 90) % 360) / sliceSize
      );

      const winner = prizes[winningIndex] || prizes[0];
      setWonPrize(winner);
      setShowPrize(true);
      playSound("win"); // Toca som de vitória
    }, 4000); // Duração do giro
  };

  // Gerador de Conic Gradient Monocromático
  const conicGradient = `conic-gradient(${prizes
    .map((_, i) => {
      const start = (i / prizes.length) * 100;
      const end = ((i + 1) / prizes.length) * 100;
      // Alterna entre as duas cores da paleta laranja
      const color = i % 2 === 0 ? SLICE_COLOR_2 : SLICE_COLOR_1;
      return `${color} ${start}% ${end}%`;
    })
    .join(", ")})`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 animate-in fade-in duration-700">
      <div className="mb-10 text-center space-y-2">
        {/* Título com sombra para contraste */}
        <h1 className="text-7xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] uppercase tracking-wider italic">
          Roleta Fusion
        </h1>
        <p className="text-3xl text-white font-bold drop-shadow-md">
          {isLocked
            ? "Gire e tente sua sorte agora!"
            : "Sorte liberada! Boa sorte!"}
        </p>
      </div>

      {/* Moldura Externa da Roleta - Estilo "Premium Laranja" */}
      <div className="relative mb-12 p-3 rounded-full shadow-[0_20px_50px_rgba(255,107,0,0.5)] bg-gradient-to-b from-orange-300 to-orange-600 border-4 border-orange-200">
        {/* Ponteiro Fixo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 z-20 filter drop-shadow-lg">
          <div className="w-14 h-20 bg-gradient-to-b from-white to-orange-100 rounded-b-full border-4 border-orange-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-orange-600 rounded-full mt-4"></div>
          </div>
        </div>

        {/* Disco Giratório */}
        <div
          className="relative w-[520px] h-[520px] rounded-full border-[10px] border-orange-500 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] overflow-hidden"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)"
              : "none",
          }}
        >
          {/* Fundo Colorido (Conic Gradient) */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ background: conicGradient }}
          />

          {/* Centro Decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10">
            <Star className="w-12 h-12 text-white fill-white" />
          </div>

          {/* Ícones e Textos nas Fatias */}
          {prizes.map((prize, i) => {
            const angle = (360 / prizes.length) * i + 360 / prizes.length / 2;
            const radius = 170;
            const x = Math.sin((angle * Math.PI) / 180) * radius;
            const y = -Math.cos((angle * Math.PI) / 180) * radius;

            // Lógica de Cor Inversa para Contraste
            const isDarkSlice = i % 2 !== 0; // Fatias ímpares são laranjas escuras
            const textColor = isDarkSlice ? "text-white" : "text-[#431407]"; // Branco no escuro, Marrom no claro

            return (
              <div
                key={prize.id}
                className={cn(
                  "absolute left-1/2 top-1/2 flex flex-col items-center justify-center font-bold text-center w-36",
                  textColor
                )}
                style={{
                  marginLeft: "-4.5rem",
                  marginTop: "-2.5rem",
                  transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                }}
              >
                {/* Sombra sutil no ícone para destacar */}
                <prize.icon
                  className="w-12 h-12 mb-1 drop-shadow-sm"
                  strokeWidth={2.5}
                />
                <span className="text-lg uppercase leading-none font-black drop-shadow-sm tracking-tight">
                  {prize.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleAction}
        disabled={isSpinning}
        autoFocus
        className={cn(
          "relative px-24 py-10 rounded-full font-black text-5xl shadow-[0_12px_0_rgb(0,0,0,0.3)] transition-all uppercase tracking-widest border-4 border-white/50",
          "hover:scale-105 hover:-translate-y-1",
          "focus-visible:ring-[10px] focus-visible:ring-white focus-visible:scale-110 focus-visible:outline-none",
          isSpinning &&
            "opacity-70 cursor-not-allowed scale-95 shadow-none translate-y-2",
          isLocked
            ? // Botão de Ação Principal: Laranja Vibrante com Texto Branco
              "bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white hover:shadow-[0_15px_0_#cc5500]"
            : // Botão Liberado (Verde para indicar "Go"):
              "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-[0_12px_0_#15803d]"
        )}
      >
        {isSpinning ? "GIRANDO..." : isLocked ? "GIRAR AGORA" : "GIRAR ROLETA!"}
      </button>

      {/* Modal de Vitória (Corrigido Contraste) */}
      {showPrize && wonPrize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white p-12 rounded-[3rem] max-w-3xl w-full flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300 border-[12px] border-[#FF6B00]">
            <div className="w-40 h-40 rounded-full flex items-center justify-center mb-8 shadow-xl bg-gradient-to-br from-[#FF6B00] to-orange-500 animate-bounce">
              <wonPrize.icon className="w-20 h-20 text-white" />
            </div>

            <h2 className="text-7xl font-black text-[#431407] mb-4 uppercase leading-none">
              {wonPrize.label.includes("300") ? "PARABÉNS!!!" : "Você Ganhou!"}
            </h2>
            <p className="text-5xl font-bold text-gray-500 mb-12">
              Prêmio:{" "}
              <span className="text-[#FF6B00] font-black">
                {wonPrize.label}
              </span>
            </p>

            <button
              onClick={() => {
                playSound("click");
                if (onReset) onReset();
              }}
              autoFocus
              className="w-full bg-gradient-to-r from-[#FF6B00] to-orange-500 text-white text-4xl font-black py-8 rounded-2xl hover:from-orange-600 hover:to-orange-700 focus-visible:ring-[10px] focus-visible:ring-orange-300 focus-visible:outline-none transition-all shadow-[0_10px_0_#c2410c] active:translate-y-2 active:shadow-none uppercase"
            >
              RESGATAR PRÊMIO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
