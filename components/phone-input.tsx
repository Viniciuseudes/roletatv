"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Delete, Check } from "lucide-react";
import { playSound } from "@/lib/sounds";

interface PhoneInputProps {
  onComplete: (phone: string) => void;
}

export function PhoneInput({ onComplete }: PhoneInputProps) {
  const [phone, setPhone] = useState("");

  const handlePress = (key: string) => {
    playSound("click"); // Som ao digitar

    if (key === "backspace") {
      setPhone((prev) => prev.slice(0, -1));
    } else if (key === "confirm") {
      if (phone.length >= 10) {
        onComplete(phone);
      }
    } else {
      if (phone.length < 11) {
        setPhone((prev) => prev + key);
      }
    }
  };

  const formattedPhone = phone
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");

  const keys = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    {
      label: <Delete className="w-10 h-10" />,
      value: "backspace",
      color: "text-red-600 bg-red-50 hover:bg-red-100",
    },
    { label: "0", value: "0" },
    {
      label: <Check className="w-10 h-10" />,
      value: "confirm",
      color:
        "bg-green-600 text-white hover:bg-green-500 shadow-[0_8px_0_#15803d]",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 animate-in zoom-in duration-300 pt-24">
      <h2 className="text-6xl font-black text-white mb-6 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] uppercase">
        Último Passo!
      </h2>
      {/* Cartão de Instrução Branco para Contraste */}
      <div className="bg-white p-6 rounded-2xl mb-10 shadow-xl">
        <p className="text-3xl text-[#431407] text-center font-bold">
          Digite seu WhatsApp para{" "}
          <strong className="text-[#FF6B00] underline decoration-4">
            liberar seu prêmio
          </strong>
        </p>
      </div>

      {/* Visor do Número (Fundo Branco, Texto Escuro) */}
      <div className="bg-[#FFF3E0] w-full max-w-lg h-28 rounded-3xl flex items-center justify-center mb-12 border-4 border-orange-300 shadow-inner">
        <span className="text-6xl font-mono font-black text-[#431407] tracking-widest">
          {formattedPhone || (
            <span className="text-orange-300/50">(__) ____-____</span>
          )}
        </span>
      </div>

      {/* Teclado Numérico */}
      <div className="grid grid-cols-3 gap-6">
        {keys.map((k) => (
          <button
            key={k.value}
            onClick={() => handlePress(k.value)}
            className={cn(
              "w-32 h-32 rounded-3xl text-5xl font-black transition-all flex items-center justify-center border-4 border-transparent",
              // Estilo padrão das teclas numéricas: Fundo Branco, Texto Escuro
              k.value !== "confirm" && k.value !== "backspace"
                ? "bg-white text-[#431407] shadow-[0_8px_0_#FFCC80] hover:border-[#FF6B00] hover:text-[#FF6B00]"
                : "",
              k.color, // Aplica cores específicas para backspace/confirm
              "active:translate-y-2 active:shadow-none",
              // Foco de TV
              "focus-visible:scale-110 focus-visible:ring-[8px] focus-visible:ring-white focus-visible:border-[#FF6B00] focus-visible:z-10 focus-visible:outline-none"
            )}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
