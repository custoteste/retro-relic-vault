import heroComics from "@/assets/hero-comics.jpg";
import comic1 from "@/assets/comic1.jpg";
import comic2 from "@/assets/comic2.jpg";
import TopBar from "./TopBar";

const HeroSection = () => {
  const scrollToPlans = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-dark relative overflow-hidden px-4 pt-6 pb-14">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[900px] mx-auto relative z-10">
        <TopBar />
        
        <h1 className="font-display text-[clamp(30px,6vw,52px)] text-dark-foreground leading-[1.1] text-center mb-5 tracking-wide">
          Tu Abuelo Te Las Leía en Voz Alta.<br />
          <span className="text-destructive">Ahora Puedes Abrirlas en Tu Tablet y Mostrárselas a Tus Hijos.</span>
        </h1>

        {/* Phone mockups */}
        <div className="flex items-end justify-center mb-7 animate-float-y">
          <div className="bg-[#1a1a1a] rounded-2xl p-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-[90px] max-[520px]:w-[72px] -rotate-6 translate-x-[18px] z-[1]">
            <div className="bg-dark rounded-xl overflow-hidden">
              <div className="w-[30px] h-[5px] bg-[#1a1a1a] rounded mx-auto mt-1.5 mb-0.5" />
              <img src={comic1} alt="Comic clásico" className="h-[115px] max-[520px]:h-[95px] w-full object-cover" />
            </div>
          </div>
          <div className="bg-[#1a1a1a] rounded-[20px] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-[180px] max-[520px]:w-[148px] border-2 border-primary/30 z-[3]">
            <div className="bg-dark rounded-xl overflow-hidden">
              <div className="w-[30px] h-[5px] bg-[#1a1a1a] rounded mx-auto mt-1.5 mb-0.5" />
              <img src={heroComics} alt="Colección de cómics" className="h-[220px] max-[520px]:h-[190px] w-full object-cover" />
            </div>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-[90px] max-[520px]:w-[72px] rotate-6 -translate-x-[18px] z-[1]">
            <div className="bg-dark rounded-xl overflow-hidden">
              <div className="w-[30px] h-[5px] bg-[#1a1a1a] rounded mx-auto mt-1.5 mb-0.5" />
              <img src={comic2} alt="Disney comic" className="h-[115px] max-[520px]:h-[95px] w-full object-cover" />
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-[clamp(15px,2.5vw,19px)] text-center max-w-[680px] mx-auto mb-2.5">
          Kalimán con su turbante blanco. Condorito. Memín Pinguín. La fuente que parecía telegrama urgente. Cada edición digitalizada en HD — colores, trazos y detalles exactamente como los recordabas de la papelería.
        </p>
        <p className="text-yellow-400 text-[clamp(14px,2vw,17px)] font-bold text-center mb-6">
          ⚠️ Este archivo es para quienes crecieron leyendo historietas en la papelería de la esquina.
        </p>

        <button onClick={scrollToPlans} className="block w-full max-w-[360px] mx-auto bg-primary text-primary-foreground text-lg font-black py-4 px-6 rounded-full text-center hover:brightness-110 transition animate-pulse-glow">
          QUIERO MI ARCHIVO ESTA NOCHE
        </button>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 gap-x-12 py-4 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-gray-300 text-sm leading-tight">Clientes<br/>Satisfechos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-primary">90K+</span>
            <span className="text-gray-300 text-sm leading-tight">Historietas<br/>Digitalizadas</span>
          </div>
        </div>
        <p className="text-primary text-[17px] font-bold text-center mt-2">
          ✓ PAGO ÚNICO • ACCESO VITALICIO • COMPATIBLE CON TU TABLET Y CELULAR
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
