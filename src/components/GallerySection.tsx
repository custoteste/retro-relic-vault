import { useRef } from "react";
import comic1 from "@/assets/comic1.jpg";
import comic2 from "@/assets/comic2.jpg";
import comic3 from "@/assets/comic3.jpg";
import comic4 from "@/assets/comic4.jpg";
import comic5 from "@/assets/comic5.jpg";

const covers = [comic1, comic2, comic3, comic4, comic5, comic1, comic2, comic3, comic4, comic5];

const GallerySection = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  const scrollToPlans = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-dark relative overflow-hidden" id="galeria">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.07] to-transparent pointer-events-none" />
      <div className="max-w-[1100px] mx-auto relative z-10 px-2">
        <h2 className="font-display text-[clamp(24px,5vw,38px)] text-dark-foreground text-center mb-2 tracking-wide">
          📚 Reconocerás Cada Portada Como Si Nunca Las Hubieras Olvidado
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-8">
          Kalimán con su turbante blanco. Condorito. Memín Pinguín. La fuente que parecía telegrama urgente. Cada edición digitalizada en HD — colores, trazos y detalles exactamente como los recordabas de la papelería.
        </p>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-dark/70 text-dark-foreground border-none rounded-full w-[38px] h-[38px] text-xl cursor-pointer hover:bg-dark/90 transition">‹</button>
          <div ref={trackRef} className="flex gap-4 overflow-x-auto px-10 py-4 scroll-hide cursor-grab active:cursor-grabbing">
            {covers.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-44 rounded-lg overflow-hidden border-2 border-primary/30 hover:scale-105 transition-transform">
                <img src={src} alt={`Comic ${i + 1}`} className="w-full h-[260px] object-cover" />
              </div>
            ))}
          </div>
          <button onClick={() => scroll(1)} className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-dark/70 text-dark-foreground border-none rounded-full w-[38px] h-[38px] text-xl cursor-pointer hover:bg-dark/90 transition">›</button>
        </div>

        <div className="text-center mt-8">
          <button onClick={scrollToPlans} className="inline-block bg-primary text-primary-foreground text-base font-black py-4 px-9 rounded-lg hover:brightness-110 transition">
            QUIERO MI COLECCIÓN AHORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
