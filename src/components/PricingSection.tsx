const PricingSection = () => (
  <section id="pricing" className="py-16 px-4 bg-secondary">
    <h2 className="font-display text-[clamp(24px,5vw,38px)] text-center text-destructive mb-2 tracking-wide">
      Elige Cómo Quieres Acceder a Tu Historia
    </h2>
    <p className="text-center text-muted-foreground text-lg mb-10">
      Paga una sola vez y tendrás acceso permanente PARA SIEMPRE. Sin mensualidades.
    </p>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7 max-w-[860px] mx-auto">
      {/* Basic */}
      <div className="bg-background border border-border rounded-[20px] overflow-hidden flex flex-col shadow-lg">
        <div className="p-6 text-center border-b border-border">
          <h3 className="font-display text-[28px] text-[#1e3a5f] tracking-wider">MINI COLECCIÓN</h3>
          <p className="text-muted-foreground text-sm mt-1">Lo esencial de los clásicos</p>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <ul className="space-y-3.5 mb-5 flex-1">
            {["Colección Mónica Completa", "Calidad Full HD + Acceso Vitalicio", "Bono: Tina + Minnie + Zé Carioca"].map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span className="text-primary flex-shrink-0 text-lg mt-0.5">✓</span>
                <span className="text-[17px] font-bold text-foreground/80">{f}</span>
              </li>
            ))}
          </ul>
          <p className="text-center">
            <span className="text-destructive line-through text-sm font-bold">De $197.00</span>
            <span className="bg-orange-500 text-primary-foreground text-xs font-extrabold px-2 py-0.5 rounded ml-1.5">86% OFF</span>
          </p>
          <div className="text-center my-2">
            <span className="text-[#1e3a5f] text-lg font-black">$</span>
            <span className="text-[52px] font-black text-[#1e3a5f] leading-none">10</span>
          </div>
          <a href="#" className="block bg-[#2c3e50] text-primary-foreground text-base font-black py-4 rounded-full text-center uppercase tracking-wider hover:bg-[#1a252f] transition">
            QUIERO ESTE ARCHIVO
          </a>
        </div>
      </div>

      {/* Premium */}
      <div className="bg-vintage-bg border-2 border-vintage-border rounded-3xl overflow-hidden flex flex-col shadow-xl">
        <div className="flex justify-center pt-4 pb-2">
          <span className="bg-primary/80 text-primary-foreground text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">MÁS VENDIDO</span>
        </div>
        <div className="px-6 pb-4 text-center">
          <h3 className="font-display text-[26px] text-foreground tracking-wider">COLECCIONISTA PREMIUM COMPLETO</h3>
          <p className="text-muted-foreground text-sm mt-1">Acceso total al Mega Archivo Nostálgico</p>
        </div>
        <div className="px-6 pb-7 flex-1 flex flex-col">
          {[
            "Colección Mónica Completa", "Colección Mickey Mouse", "Colección Pato Donald",
            "Colección Zé Carioca", "Colección Cebolinha Completa", "Colección Cascão Completa",
            "Colección Magali Completa", "Colección Chico Bento Completa", "Colección Disney Completa",
            "Colección Chespirito y Chapulín", "Colección Tío Rico Completa", "Colección Tom y Jerry",
            "Colección Recruta Zero", "Colección Tex", "Colección Revista Xuxa",
            "Colección Pelezinho", "Colección Bidu",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2">
              <span className="text-base">✅</span>
              <span className="text-sm font-bold text-foreground">{f}</span>
            </div>
          ))}

          {/* Bonus box */}
          <div className="border border-vintage-border rounded-xl overflow-hidden my-4">
            <div className="flex justify-center py-2">
              <span className="bg-gold text-gold-foreground text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider">🏆 BONOS EXCLUSIVOS</span>
            </div>
            <div className="bg-[hsl(50,90%,94%)] p-3 space-y-1.5">
              {["Colección MARVEL Completa", "Colección DC COMICS", "Clásicos Turma da Mônica", "Hanna Barbera + Astérix"].map((b) => (
                <div key={b} className="text-sm text-foreground/80 flex items-center gap-2">
                  <span className="text-primary font-bold">✔</span>{b}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2.5 text-sm font-bold text-foreground">
              <span className="text-primary text-[17px]">✔</span>+ 90.000 cómics en PDF
            </div>
            <div className="flex items-center gap-2.5 text-sm font-bold text-foreground">
              <span className="text-primary text-[17px]">✔</span>Actualizaciones Gratuitas Vitalicias
            </div>
          </div>

          <p className="text-center">
            <span className="text-destructive line-through text-sm font-bold">De $697.00</span>
            <span className="bg-orange-500 text-primary-foreground text-xs font-extrabold px-2 py-0.5 rounded ml-1.5">90% OFF</span>
          </p>
          <div className="text-center my-2">
            <span className="text-[50px] font-black text-primary leading-none">$</span>
            <span className="text-[56px] font-black text-primary leading-none">27</span>
          </div>
          <a href="#" className="block bg-dark text-dark-foreground text-[15px] font-black py-4 rounded-full text-center uppercase tracking-wider hover:bg-dark/80 transition">
            QUIERO ESTE ARCHIVO
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
