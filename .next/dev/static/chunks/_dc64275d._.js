(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/quiz-phase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizPhase",
    ()=>QuizPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const questions = [
    {
        question: "Qual sua faixa etária?",
        answers: [
            "18 - 25 anos",
            "26 - 35 anos",
            "36 - 50 anos",
            "50+ anos"
        ]
    },
    {
        question: "Qual seu gênero?",
        answers: [
            "Masculino",
            "Feminino",
            "Outro",
            "Prefiro não dizer"
        ]
    },
    {
        question: "Qual especialidade busca?",
        answers: [
            "Psicologia",
            "Nutrição",
            "Fisioterapia",
            "Odontologia"
        ]
    },
    {
        question: "Possui convênio médico?",
        answers: [
            "Sim, possuo",
            "Não, particular",
            "Quero saber valores",
            "Tenho encaminhamento"
        ]
    }
];
function QuizPhase({ onComplete }) {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Para animação de saída
    const handleAnswer = ()=>{
        // Inicia animação de saída
        setIsExiting(true);
        setTimeout(()=>{
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setIsExiting(false); // Reseta para próxima pergunta entrar
            } else {
                onComplete();
            }
        }, 300); // Tempo da animação
    };
    const current = questions[currentQuestion];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col items-center justify-center p-12 max-w-6xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-3xl h-4 bg-black/20 rounded-full mb-12 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-white transition-all duration-500 ease-out",
                    style: {
                        width: `${(currentQuestion + 1) / questions.length * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/quiz-phase.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/quiz-phase.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex flex-col items-center transition-all duration-300", isExiting ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0 animate-in slide-in-from-right-10 fade-in"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-6xl font-black text-white text-center mb-16 drop-shadow-md leading-tight",
                        children: current.question
                    }, void 0, false, {
                        fileName: "[project]/components/quiz-phase.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full",
                        children: current.answers.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAnswer,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex items-center justify-between px-10 py-8 bg-white rounded-3xl text-left transition-all duration-200", "shadow-[0_8px_0_rgba(0,0,0,0.1)]", "hover:scale-[1.02] hover:shadow-[0_12px_0_rgba(0,0,0,0.15)]", "active:scale-[0.98] active:translate-y-2 active:shadow-none", "focus-visible:ring-8 focus-visible:ring-yellow-300 focus-visible:z-10 focus-visible:scale-105 focus-visible:outline-none" // Foco TV
                                ),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors",
                                        children: answer
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz-phase.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-8 h-8 text-slate-300 group-hover:text-[#FF6B00] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz-phase.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/quiz-phase.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/quiz-phase.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, currentQuestion, true, {
                fileName: "[project]/components/quiz-phase.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/quiz-phase.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(QuizPhase, "uq89HqsXvfMr4tjvAxeFapm33sg=");
_c = QuizPhase;
var _c;
__turbopack_context__.k.register(_c, "QuizPhase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/roulette-phase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoulettePhase",
    ()=>RoulettePhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>"); // Ícones sugeridos
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$candy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Candy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/candy.js [app-client] (ecmascript) <export default as Candy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Configuração dos Prêmios
const prizes = [
    {
        id: 1,
        label: "R$ 300 PIX",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
        color: "bg-green-600",
        text: "text-white",
        isGrandPrize: true
    },
    {
        id: 2,
        label: "Chocolate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"],
        color: "bg-[#5D4037]",
        text: "text-white"
    },
    {
        id: 3,
        label: "Baganas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$candy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Candy$3e$__["Candy"],
        color: "bg-[#FF4081]",
        text: "text-white"
    },
    {
        id: 4,
        label: "Chocolate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"],
        color: "bg-[#5D4037]",
        text: "text-white"
    },
    {
        id: 5,
        label: "Baganas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$candy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Candy$3e$__["Candy"],
        color: "bg-[#FFCD40]",
        text: "text-white"
    },
    {
        id: 6,
        label: "Chocolate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"],
        color: "bg-[#5D4037]",
        text: "text-white"
    },
    {
        id: 7,
        label: "Baganas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$candy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Candy$3e$__["Candy"],
        color: "bg-[#FF4081]",
        text: "text-white"
    },
    {
        id: 8,
        label: "Chocolate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"],
        color: "bg-[#5D4037]",
        text: "text-white"
    }
];
function RoulettePhase({ onReset, onUnlockRequest, isLocked = false }) {
    _s();
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPrize, setShowPrize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wonPrize, setWonPrize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleAction = ()=>{
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
        setTimeout(()=>{
            setIsSpinning(false);
            const actualDeg = newRotation % 360;
            const sliceSize = 360 / prizes.length;
            const winningIndex = Math.floor((360 - actualDeg + 90) % 360 / sliceSize);
            setWonPrize(prizes[winningIndex] || prizes[0]);
            setShowPrize(true);
        }, 4000);
    };
    // Gera o gradiente dinâmico baseado nas cores dos prêmios
    const conicGradient = `conic-gradient(${prizes.map((p, i)=>{
        const start = i / prizes.length * 100;
        const end = (i + 1) / prizes.length * 100;
        // Mapeia classes tailwind para hex (simplificado para o exemplo funcionar visualmente sem CSS complexo)
        // O ideal é usar valores HEX diretos no array prizes para garantir
        let colorHex = p.color.includes("green") ? "#16a34a" : p.color.includes("#5D4037") ? "#5D4037" : p.color.includes("#FF4081") ? "#FF4081" : p.color.includes("#FFCD40") ? "#FFCD40" : "#ffffff";
        return `${colorHex} ${start}% ${end}%`;
    }).join(", ")})`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col items-center justify-center p-8 animate-in fade-in duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-7xl font-black text-white drop-shadow-lg uppercase tracking-wider italic",
                        children: "Roleta Fusion"
                    }, void 0, false, {
                        fileName: "[project]/components/roulette-phase.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl text-white/90 font-medium",
                        children: isLocked ? "Gire e tente sua sorte agora!" : "Sorte liberada! Boa sorte!"
                    }, void 0, false, {
                        fileName: "[project]/components/roulette-phase.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/roulette-phase.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-12 p-4 bg-white/20 rounded-full backdrop-blur-sm border-4 border-white/30 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-16 bg-red-600 rounded-b-full shadow-lg border-2 border-white flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-white rounded-full mt-2"
                            }, void 0, false, {
                                fileName: "[project]/components/roulette-phase.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/roulette-phase.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/roulette-phase.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[500px] h-[500px] rounded-full border-[8px] border-white shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] overflow-hidden bg-slate-800",
                        style: {
                            transform: `rotate(${rotation}deg)`,
                            transition: isSpinning ? "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-full h-full",
                                style: {
                                    background: conicGradient
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/roulette-phase.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            prizes.map((prize, i)=>{
                                const angle = 360 / prizes.length * i + 360 / prizes.length / 2;
                                const radius = 160;
                                const x = Math.sin(angle * Math.PI / 180) * radius;
                                const y = -Math.cos(angle * Math.PI / 180) * radius;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 top-1/2 flex flex-col items-center justify-center font-bold text-center w-32", prize.text),
                                    style: {
                                        marginLeft: "-4rem",
                                        marginTop: "-2rem",
                                        transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(prize.icon, {
                                            className: "w-10 h-10 mb-1 drop-shadow-md",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/components/roulette-phase.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm uppercase leading-tight drop-shadow-sm",
                                            children: prize.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/roulette-phase.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, prize.id, true, {
                                    fileName: "[project]/components/roulette-phase.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-4 border-[#FF6B00] shadow-lg flex items-center justify-center z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                    className: "w-10 h-10 text-[#FF6B00]"
                                }, void 0, false, {
                                    fileName: "[project]/components/roulette-phase.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/roulette-phase.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/roulette-phase.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/roulette-phase.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleAction,
                disabled: isSpinning,
                autoFocus: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-20 py-8 rounded-full font-black text-4xl shadow-[0_10px_0_rgb(0,0,0,0.2)] transition-all uppercase tracking-widest", "hover:scale-105 hover:-translate-y-1", "focus-visible:ring-8 focus-visible:ring-yellow-300 focus-visible:scale-110 focus-visible:outline-none", isSpinning && "opacity-50 cursor-not-allowed", isLocked ? "bg-[#FF6B00] text-white hover:shadow-[0_15px_0_#cc5500]" : "bg-green-500 text-white shadow-[0_10px_0_#15803d] hover:bg-green-400"),
                children: isSpinning ? "GIRANDO..." : isLocked ? "GIRAR AGORA" : "GIRAR ROLETA!"
            }, void 0, false, {
                fileName: "[project]/components/roulette-phase.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            showPrize && wonPrize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-12 rounded-[2rem] max-w-2xl w-full flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300 border-8 border-[#FF6B00]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-inner", wonPrize.color),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(wonPrize.icon, {
                                className: "w-16 h-16 text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/roulette-phase.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/roulette-phase.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl font-black text-slate-800 mb-2 uppercase",
                            children: wonPrize.label.includes("300") ? "PARABÉNS!!!" : "Você Ganhou!"
                        }, void 0, false, {
                            fileName: "[project]/components/roulette-phase.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-4xl font-bold text-gray-500 mb-8",
                            children: [
                                "Prêmio: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FF6B00]",
                                    children: wonPrize.label
                                }, void 0, false, {
                                    fileName: "[project]/components/roulette-phase.tsx",
                                    lineNumber: 246,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/roulette-phase.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onReset,
                            autoFocus: true,
                            className: "w-full bg-[#FF6B00] text-white text-3xl font-bold py-6 rounded-xl hover:bg-[#e56000] focus-visible:ring-8 focus-visible:ring-yellow-400 focus-visible:outline-none transition-all shadow-[0_8px_0_#cc5500] active:translate-y-2 active:shadow-none",
                            children: "RESGATAR"
                        }, void 0, false, {
                            fileName: "[project]/components/roulette-phase.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/roulette-phase.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/roulette-phase.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/roulette-phase.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(RoulettePhase, "QFPaiHDL7o01f+GgX6JeqwlQYzY=");
_c = RoulettePhase;
var _c;
__turbopack_context__.k.register(_c, "RoulettePhase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/phone-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneInput",
    ()=>PhoneInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/delete.js [app-client] (ecmascript) <export default as Delete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PhoneInput({ onComplete }) {
    _s();
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handlePress = (key)=>{
        if (key === "backspace") {
            setPhone((prev)=>prev.slice(0, -1));
        } else if (key === "confirm") {
            if (phone.length >= 10) {
                // Validação simples
                onComplete(phone);
            }
        } else {
            if (phone.length < 11) {
                // Limite de caracteres (DDD + 9 dígitos)
                setPhone((prev)=>prev + key);
            }
        }
    };
    // Formata o telefone visualmente (11 99999-9999)
    const formattedPhone = phone.replace(/\D/g, "").replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2");
    const keys = [
        {
            label: "1",
            value: "1"
        },
        {
            label: "2",
            value: "2"
        },
        {
            label: "3",
            value: "3"
        },
        {
            label: "4",
            value: "4"
        },
        {
            label: "5",
            value: "5"
        },
        {
            label: "6",
            value: "6"
        },
        {
            label: "7",
            value: "7"
        },
        {
            label: "8",
            value: "8"
        },
        {
            label: "9",
            value: "9"
        },
        {
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/components/phone-input.tsx",
                lineNumber: 47,
                columnNumber: 14
            }, this),
            value: "backspace",
            color: "text-red-500"
        },
        {
            label: "0",
            value: "0"
        },
        {
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/components/phone-input.tsx",
                lineNumber: 53,
                columnNumber: 14
            }, this),
            value: "confirm",
            color: "bg-green-500 text-white"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col items-center justify-center p-8 animate-in zoom-in duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-5xl font-black text-white mb-4 text-center drop-shadow-md",
                children: "ÚLTIMO PASSO!"
            }, void 0, false, {
                fileName: "[project]/components/phone-input.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl text-white/90 mb-12 text-center",
                children: [
                    "Digite seu WhatsApp para ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "liberar seu prêmio"
                    }, void 0, false, {
                        fileName: "[project]/components/phone-input.tsx",
                        lineNumber: 65,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/phone-input.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white w-full max-w-md h-24 rounded-2xl flex items-center justify-center mb-12 border-4 border-slate-200 shadow-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-5xl font-mono font-bold text-slate-800 tracking-wider",
                    children: formattedPhone || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-300",
                        children: "(__) ____-____"
                    }, void 0, false, {
                        fileName: "[project]/components/phone-input.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/phone-input.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/phone-input.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-6",
                children: keys.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handlePress(k.value),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-28 h-28 rounded-2xl text-4xl font-bold transition-all shadow-[0_6px_0_rgba(0,0,0,0.2)] flex items-center justify-center", k.value === "confirm" ? "bg-green-500 hover:bg-green-600 text-white shadow-[0_6px_0_#15803d]" : "bg-white text-slate-700 hover:bg-slate-50", k.color, "focus-visible:scale-110 focus-visible:ring-8 focus-visible:ring-yellow-400 focus-visible:z-10 focus-visible:outline-none active:translate-y-1 active:shadow-none"),
                        children: k.label
                    }, k.value, false, {
                        fileName: "[project]/components/phone-input.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/phone-input.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/phone-input.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(PhoneInput, "Rh3uEiqewCp0E8HPHmYE4vPaDg8=");
_c = PhoneInput;
var _c;
__turbopack_context__.k.register(_c, "PhoneInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TVQuizApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quiz-phase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roulette$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/roulette-phase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$phone$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/phone-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TVQuizApp() {
    _s();
    const [flow, setFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("LOCKED_ROULETTE");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // Armazena dados temporários
    // 1. Usuário clica em "Girar" na roleta bloqueada
    const handleUnlockRequest = ()=>{
        setFlow("QUIZ");
    };
    // 2. Usuário termina o Quiz
    const handleQuizComplete = (answers)=>{
        setFormData({
            ...formData,
            answers
        });
        setFlow("PHONE_INPUT"); // Vai para o telefone
    };
    // 3. Usuário digita o telefone
    const handlePhoneComplete = async (phone)=>{
        setFormData({
            ...formData,
            phone
        });
        setFlow("SAVING");
        // Simula salvamento no Supabase/API
        // Aqui você faria o `supabase.insert` com answers + phone
        setTimeout(()=>{
            setFlow("UNLOCKED_ROULETTE");
        }, 1500);
    };
    // 4. Reiniciar tudo
    const handleReset = ()=>{
        setFlow("LOCKED_ROULETTE");
        setFormData({});
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff8533] to-[#FF6B00] overflow-hidden selection:bg-white selection:text-[#FF6B00]",
        children: [
            flow === "LOCKED_ROULETTE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roulette$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoulettePhase"], {
                isLocked: true,
                onUnlockRequest: handleUnlockRequest
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            flow === "QUIZ" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-in slide-in-from-bottom-20 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full bg-black/30 backdrop-blur-md p-4 z-10 text-center border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-2xl text-white font-bold animate-pulse",
                            children: "🔒 Responda rápido para liberar a Roleta Fusion!"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuizPhase"], {
                        onComplete: ()=>handleQuizComplete([])
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            flow === "PHONE_INPUT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$phone$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneInput"], {
                onComplete: handlePhoneComplete
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            flow === "SAVING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen flex-col items-center justify-center animate-in fade-in zoom-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/20 p-8 rounded-full backdrop-blur-md animate-spin mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-24 h-24 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl font-bold text-white uppercase tracking-widest",
                        children: "LIBERANDO ROLETA..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            flow === "UNLOCKED_ROULETTE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roulette$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoulettePhase"], {
                isLocked: false,
                onReset: handleReset
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(TVQuizApp, "CtqwhsWsG9ur5lg8zMXk63tMH1k=");
_c = TVQuizApp;
var _c;
__turbopack_context__.k.register(_c, "TVQuizApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_dc64275d._.js.map