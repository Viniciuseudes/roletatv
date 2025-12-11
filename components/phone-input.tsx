"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Delete, Check } from "lucide-react";
import { playSound } from "@/lib/sounds";

interface PhoneInputProps {
  onComplete: (phone: string) => void;
}

export function PhoneInput({ onComplete }: PhoneInputProps) {
  const [phone, setPhone] = useState("");

  // Função centralizada de processar inputs
  const processInput = useCallback(
    (key: string) => {
      playSound("click");

      if (key === "backspace") {
        setPhone((prev) => prev.slice(0, -1));
      } else if (key === "confirm" || key === "Enter") {
        if (phone.length >= 10) {
          onComplete(phone);
        }
      } else {
        // Apenas adiciona se for número e menor que 11 dígitos
        if (phone.length < 11 && /^[0-9]$/.test(key)) {
          setPhone((prev) => prev + key);
        }
      }
    },
    [phone, onComplete]
  );

  // OUVINTE DO TECLADO FÍSICO (CONTROLE DA TV)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Mapeia as teclas do controle
      if (/^[0-9]$/.test(e.key)) {
        processInput(e.key);
      } else if (e.key === "Backspace" || e.key === "Delete") {
        // Alguns controles enviam Backspace
        processInput("backspace");
      } else if (e.key === "Enter") {
        processInput("confirm");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [processInput]);

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
      <h2 className="text-5xl font-black text-white mb-6 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] uppercase">
        Último Passo!
      </h2>

      <div className="bg-white p-6 rounded-2xl mb-8 shadow-xl max-w-2xl text-center">
        <p className="text-2xl text-[#431407] font-bold">
          Use o teclado do controle ou clique abaixo:
        </p>
      </div>

      {/* Visor do Número */}
      <div className="bg-[#FFF3E0] w-full max-w-lg h-28 rounded-3xl flex items-center justify-center mb-10 border-4 border-orange-300 shadow-inner">
        <span className="text-6xl font-mono font-black text-[#431407] tracking-widest">
          {formattedPhone || (
            <span className="text-orange-300/50">(__) ____-____</span>
          )}
        </span>
      </div>

      {/* Teclado Virtual (Para quem não quer usar o numérico físico) */}
      <div className="grid grid-cols-3 gap-4">
        {keys.map((k) => (
          <button
            key={k.value}
            onClick={() => processInput(k.value)}
            className={cn(
              "w-28 h-24 rounded-2xl text-4xl font-black transition-all flex items-center justify-center border-b-8 border-transparent active:border-b-0 active:translate-y-2",
              k.value !== "confirm" && k.value !== "backspace"
                ? "bg-white text-[#431407] shadow-lg border-b-gray-200 hover:bg-orange-50 focus-visible:bg-yellow-300"
                : "",
              k.color,
              "focus-visible:scale-110 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none"
            )}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
