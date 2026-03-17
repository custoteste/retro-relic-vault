import { useState, useEffect, useCallback } from "react";

interface Profile {
  name: string;
  city: string;
  color: string;
  initial: string;
}

const profiles: Profile[] = [
  { name: "Carlos R.", city: "Guadalajara, MX", color: "#1565c0", initial: "C" },
  { name: "Andrés V.", city: "Ciudad de México, MX", color: "#c62828", initial: "A" },
  { name: "Miguel Á.", city: "Monterrey, MX", color: "#2e7d32", initial: "M" },
  { name: "Patricia L.", city: "Bogotá, CO", color: "#6a1b9a", initial: "P" },
  { name: "Rodrigo P.", city: "Santiago, CL", color: "#e65100", initial: "R" },
  { name: "Lorena M.", city: "Lima, PE", color: "#00695c", initial: "L" },
  { name: "Héctor F.", city: "Buenos Aires, AR", color: "#4527a0", initial: "H" },
  { name: "Claudia S.", city: "Medellín, CO", color: "#ad1457", initial: "C" },
  { name: "Javier T.", city: "Guadalajara, MX", color: "#0277bd", initial: "J" },
  { name: "Gabriela N.", city: "Quito, EC", color: "#558b2f", initial: "G" },
  { name: "Fernando C.", city: "Caracas, VE", color: "#4e342e", initial: "F" },
  { name: "Diana R.", city: "Ciudad de México, MX", color: "#00838f", initial: "D" },
];

const messages = [
  "adquirió el Archivo Completo del Coleccionista",
  "acaba de abrir su primer Kalimán",
  "se unió al Archivo del Coleccionista",
  "compró el Archivo Completo esta noche",
  "encontró los números que buscaba hace años",
];

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({ profile: profiles[0], message: messages[0], mins: 5 });
  const [shown, setShown] = useState(0);

  const showPopup = useCallback(() => {
    if (shown >= 6) return;
    const p = profiles[Math.floor(Math.random() * profiles.length)];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const mins = Math.floor(Math.random() * 23) + 2;
    setCurrent({ profile: p, message: msg, mins });
    setVisible(true);
    setShown((s) => s + 1);

    setTimeout(() => {
      setVisible(false);
      const next = Math.floor(Math.random() * 10000 + 18000);
      setTimeout(showPopup, next + 7000);
    }, 6500);
  }, [shown]);

  useEffect(() => {
    const init = Math.floor(Math.random() * 6000 + 12000);
    const timer = setTimeout(showPopup, init);
    return () => clearTimeout(timer);
  }, [showPopup]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-white/60 max-w-[290px] flex items-center gap-3 animate-[slideDown_0.5s_ease]">
      <div
        className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-lg"
        style={{ backgroundColor: current.profile.color }}
      >
        {current.profile.initial}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-foreground">{current.profile.name} • {current.profile.city}</p>
        <p className="text-xs text-muted-foreground">{current.message}</p>
        <p className="text-[11px] text-muted-foreground/70">hace {current.mins} minutos</p>
      </div>
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] flex-shrink-0" />
    </div>
  );
};

export default SocialProofPopup;
