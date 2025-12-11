"use client";

import { useState } from "react";
import { QuizPhase } from "@/components/quiz-phase";
import { RoulettePhase } from "@/components/roulette-phase";
import { PhoneInput } from "@/components/phone-input";
import { Loader2 } from "lucide-react";

// Estados do Fluxo
type FlowState =
  | "LOCKED_ROULETTE"
  | "QUIZ"
  | "PHONE_INPUT"
  | "SAVING"
  | "UNLOCKED_ROULETTE";

export default function TVQuizApp() {
  const [flow, setFlow] = useState<FlowState>("LOCKED_ROULETTE");
  const [formData, setFormData] = useState<any>({}); // Armazena dados temporários

  // 1. Usuário clica em "Girar" na roleta bloqueada
  const handleUnlockRequest = () => {
    setFlow("QUIZ");
  };

  // 2. Usuário termina o Quiz
  const handleQuizComplete = (answers: string[]) => {
    setFormData({ ...formData, answers });
    setFlow("PHONE_INPUT"); // Vai para o telefone
  };

  // 3. Usuário digita o telefone
  const handlePhoneComplete = async (phone: string) => {
    setFormData({ ...formData, phone });
    setFlow("SAVING");

    // Simula salvamento no Supabase/API
    // Aqui você faria o `supabase.insert` com answers + phone
    setTimeout(() => {
      setFlow("UNLOCKED_ROULETTE");
    }, 1500);
  };

  // 4. Reiniciar tudo
  const handleReset = () => {
    setFlow("LOCKED_ROULETTE");
    setFormData({});
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff8533] to-[#FF6B00] overflow-hidden selection:bg-white selection:text-[#FF6B00]">
      {/* Fase 1: Roleta Bloqueada (Mostra a roleta mas o botão abre o quiz) */}
      {flow === "LOCKED_ROULETTE" && (
        <RoulettePhase isLocked={true} onUnlockRequest={handleUnlockRequest} />
      )}

      {/* Fase 2: Quiz (Com aviso de bloqueio) */}
      {flow === "QUIZ" && (
        <div className="animate-in slide-in-from-bottom-20 duration-500">
          {/* Banner de Aviso no topo do Quiz */}
          <div className="absolute top-0 left-0 w-full bg-black/30 backdrop-blur-md p-4 z-10 text-center border-b border-white/10">
            <p className="text-xl md:text-2xl text-white font-bold animate-pulse">
              🔒 Responda rápido para liberar a Roleta Fusion!
            </p>
          </div>
          <QuizPhase onComplete={() => handleQuizComplete([])} />
          {/* Nota: Atualize o QuizPhase para retornar as respostas no onComplete se for usar o Supabase real */}
        </div>
      )}

      {/* Fase 3: Telefone */}
      {flow === "PHONE_INPUT" && (
        <PhoneInput onComplete={handlePhoneComplete} />
      )}

      {/* Fase 4: Loading (Salvando) */}
      {flow === "SAVING" && (
        <div className="flex min-h-screen flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
          <div className="bg-white/20 p-8 rounded-full backdrop-blur-md animate-spin mb-8">
            <Loader2 className="w-24 h-24 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white uppercase tracking-widest">
            LIBERANDO ROLETA...
          </h2>
        </div>
      )}

      {/* Fase 5: Roleta Liberada */}
      {flow === "UNLOCKED_ROULETTE" && (
        <RoulettePhase isLocked={false} onReset={handleReset} />
      )}
    </div>
  );
}
