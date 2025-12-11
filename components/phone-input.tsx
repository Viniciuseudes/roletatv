"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Delete, Check } from "lucide-react";

interface PhoneInputProps {
  onComplete: (phone: string) => void;
}

export function PhoneInput({ onComplete }: PhoneInputProps) {
  const [phone, setPhone] = useState("");

  const handlePress = (key: string) => {
    if (key === "backspace") {
      setPhone((prev) => prev.slice(0, -1));
    } else if (key === "confirm") {
      if (phone.length >= 10) {
        // Validação simples
        onComplete(phone);
      }
    } else {
      if (phone.length < 11) {
        // Limite de caracteres (DDD + 9 dígitos)
        setPhone((prev) => prev + key);
      }
    }
  };

  // Formata o telefone visualmente (11 99999-9999)
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
      label: <Delete className="w-8 h-8" />,
      value: "backspace",
      color: "text-red-500",
    },
    { label: "0", value: "0" },
    {
      label: <Check className="w-8 h-8" />,
      value: "confirm",
      color: "bg-green-500 text-white",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 animate-in zoom-in duration-300">
      <h2 className="text-5xl font-black text-white mb-4 text-center drop-shadow-md">
        ÚLTIMO PASSO!
      </h2>
      <p className="text-2xl text-white/90 mb-12 text-center">
        Digite seu WhatsApp para <strong>liberar seu prêmio</strong>
      </p>

      {/* Visor do Número */}
      <div className="bg-white w-full max-w-md h-24 rounded-2xl flex items-center justify-center mb-12 border-4 border-slate-200 shadow-inner">
        <span className="text-5xl font-mono font-bold text-slate-800 tracking-wider">
          {formattedPhone || (
            <span className="text-slate-300">(__) ____-____</span>
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
              "w-28 h-28 rounded-2xl text-4xl font-bold transition-all shadow-[0_6px_0_rgba(0,0,0,0.2)] flex items-center justify-center",
              k.value === "confirm"
                ? "bg-green-500 hover:bg-green-600 text-white shadow-[0_6px_0_#15803d]"
                : "bg-white text-slate-700 hover:bg-slate-50",
              k.color,
              "focus-visible:scale-110 focus-visible:ring-8 focus-visible:ring-yellow-400 focus-visible:z-10 focus-visible:outline-none active:translate-y-1 active:shadow-none"
            )}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
