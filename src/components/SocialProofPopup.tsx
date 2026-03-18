import { useState, useEffect, useCallback } from "react";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import avatar4 from "@/assets/avatar4.jpg";
import avatar5 from "@/assets/avatar5.jpg";
import avatar6 from "@/assets/avatar6.jpg";
import avatar7 from "@/assets/avatar7.jpg";
import avatar8 from "@/assets/avatar8.jpg";
import avatar9 from "@/assets/avatar9.jpg";
import avatar10 from "@/assets/avatar10.jpg";
import avatar11 from "@/assets/avatar11.jpg";
import avatar12 from "@/assets/avatar12.jpg";

interface Profile {
  name: string;
  city: string;
  avatar: string;
}

const profiles: Profile[] = [
  { name: "Carlos R.", city: "Guadalajara, MX", avatar: avatar1 },
  { name: "Andrés V.", city: "Ciudad de México, MX", avatar: avatar2 },
  { name: "Miguel Á.", city: "Monterrey, MX", avatar: avatar3 },
  { name: "Patricia L.", city: "Bogotá, CO", avatar: avatar4 },
  { name: "Rodrigo P.", city: "Santiago, CL", avatar: avatar5 },
  { name: "Lorena M.", city: "Lima, PE", avatar: avatar6 },
  { name: "Héctor F.", city: "Buenos Aires, AR", avatar: avatar7 },
  { name: "Claudia S.", city: "Medellín, CO", avatar: avatar8 },
  { name: "Javier T.", city: "Guadalajara, MX", avatar: avatar9 },
  { name: "Gabriela N.", city: "Quito, EC", avatar: avatar10 },
  { name: "Fernando C.", city: "Caracas, VE", avatar: avatar11 },
  { name: "Diana R.", city: "Ciudad de México, MX", avatar: avatar12 },
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
      <img
        src={current.profile.avatar}
        alt={current.profile.name}
        className="w-11 h-11 rounded-full flex-shrink-0 object-cover"
      />
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
