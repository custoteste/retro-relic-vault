const PricingSection = () => (
  <section id="pricing" className="py-16 px-4 bg-secondary">
    <h2 className="font-display text-[clamp(24px,5vw,38px)] text-center text-destructive mb-2 tracking-wide">
      Recupera Lo Que Siempre Debiste Tener
    </h2>
    <p className="text-center text-muted-foreground text-lg mb-10">
      Un solo pago. Acceso de por vida. Abre tu primer Kalimán esta noche.
    </p>

    <div className="max-w-[480px] mx-auto">
      {/* Single Premium Plan */}
      <div className="bg-vintage-bg border-2 border-vintage-border rounded-3xl overflow-hidden flex flex-col shadow-xl">
        <div className="flex justify-center pt-4 pb-2">
          <span className="bg-[#2d8f2d] text-primary-foreground text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">EL FAVORITO DE CARLITOS</span>
        </div>
        <div className="px-6 pb-4 text-center">
          <h3 className="font-display text-[26px] text-foreground tracking-wider">ARCHIVO COMPLETO<br/>DEL COLECCIONISTA</h3>
          <p className="text-muted-foreground text-sm mt-1">Todo lo que estaba en la papelería — y lo que no encontrabas</p>
        </div>
        <div className="h-px bg-vintage-border mx-6" />
        <div className="px-6 pb-7 pt-4 flex-1 flex flex-col">
          {[
            "Colección Kalimán Completa",
            "Colección Condorito Completa",
            "Colección Memín Pinguín Completa",
            "Colección Mafalda Completa",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2.5">
              <span className="text-base">✅</span>
              <span className="text-sm font-bold text-foreground">{f}</span>
            </div>
          ))}

          <div className="space-y-2 mt-4 mb-4">
            <div className="flex items-center gap-2.5 text-sm font-bold text-foreground">
              <span className="text-primary text-[17px]">✔</span>Acepta Mercado Pago, tarjeta y transferencia
            </div>
          </div>

          <div className="text-center my-2">
            <span className="text-muted-foreground line-through text-lg">De $69.00</span>
            <div className="flex justify-center my-2">
              <span className="bg-gold text-gold-foreground text-xs font-black px-3.5 py-1 rounded-full">90% OFF</span>
            </div>
            <div>
              <span className="text-[50px] font-black text-[#1a8c1a] leading-none">$ </span>
              <span className="text-[56px] font-black text-[#1a8c1a] leading-none">6</span>
            </div>
          </div>

          <a href="https://pay.cakto.com.br/3925p2w" className="block bg-dark text-dark-foreground text-[15px] font-black py-4 rounded-full text-center uppercase tracking-wider hover:bg-dark/80 transition mt-2">
            SÍ, QUIERO MI ARCHIVO ESTA NOCHE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
