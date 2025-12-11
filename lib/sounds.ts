// lib/sounds.ts

// Crie a pasta 'public/sounds' e adicione seus arquivos mp3 lá:
// - click.mp3 (som curto e seco, tipo "tec")
// - spin.mp3 (som de catraca/giro contínuo ou longo)
// - win.mp3 (som de fanfarra/vitória)

const sounds = {
  click: typeof Audio !== "undefined" ? new Audio("/sounds/click.mp3") : null,
  spin: typeof Audio !== "undefined" ? new Audio("/sounds/spin.mp3") : null,
  win: typeof Audio !== "undefined" ? new Audio("/sounds/win.mp3") : null,
}

// Ajustar volume se necessário
if (sounds.spin) sounds.spin.volume = 0.5
if (sounds.click) sounds.click.volume = 0.3

export const playSound = (type: "click" | "spin" | "win") => {
  const audio = sounds[type]
  if (!audio) return

  // Reinicia o som se já estiver tocando
  audio.currentTime = 0
  audio.play().catch((e) => console.log("Interação do usuário necessária para tocar som", e))
}

export const stopSpinSound = () => {
  if (sounds.spin) {
    sounds.spin.pause()
    sounds.spin.currentTime = 0
  }
}