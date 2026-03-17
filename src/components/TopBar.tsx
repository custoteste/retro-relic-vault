import { useState, useEffect } from "react";

const TopBar = () => {
  const [time, setTime] = useState(179);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t <= 0 ? 179 : t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");

  return (
    <div className="bg-dark border border-primary/30 rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 flex-wrap text-center mb-7">
      <span className="text-yellow-400 text-sm">⚡</span>
      <span className="text-dark-foreground text-xs font-semibold">OFERTA RELÁMPAGO: Solo</span>
      <span className="bg-[hsl(50,60%,20%)] text-yellow-300 font-extrabold text-sm px-2.5 py-0.5 rounded min-w-[56px] text-center">
        {mins}:{secs}
      </span>
      <span className="text-dark-foreground text-sm font-semibold">para asegurar el precio especial!</span>
    </div>
  );
};

export default TopBar;
