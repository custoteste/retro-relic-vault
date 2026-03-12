const benefits = [
  {
    icon: "🎬",
    title: "Nostalgia Auténtica",
    text: "Porque esto no son cómics.\nSon las tardes después de la escuela.\nSon los domingos perezosos en el sofá.\nSon las revistas intercambiadas en el recreo.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Legado Para Generaciones",
    text: "Antes de que el celular robara tu atención,\nAntes de que internet lo convirtiera todo en scroll infinito,\nExistía algo que realmente atrapaba tu imaginación.",
  },
  {
    icon: "📱",
    title: "Biblioteca Portátil",
    text: "Organizado como un verdadero archivo histórico:\n✔ Clásicos Disney completos\n✔ Marvel y DC históricos\n✔ Ediciones raras preservadas\n✔ Acceso digital de por vida",
  },
];

const BenefitsSection = () => (
  <section className="py-16 px-4 bg-background">
    <h2 className="font-display text-[clamp(24px,5vw,38px)] text-center text-foreground mb-2 tracking-wide">
      ¿Por Qué Tener Esta Colección?
    </h2>
    <p className="text-center text-[clamp(15px,2vw,19px)] font-bold text-foreground mb-10">
      Por Qué Este Archivo No Es Solo Una Colección
    </p>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7 max-w-[900px] mx-auto">
      {benefits.map((b) => (
        <div key={b.title} className="border border-border rounded-lg p-7 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            {b.icon}
          </div>
          <h3 className="text-[clamp(20px,3vw,26px)] font-black text-destructive mb-2.5">{b.title}</h3>
          <p className="text-[17px] text-muted-foreground whitespace-pre-line leading-relaxed">{b.text}</p>
        </div>
      ))}
    </div>

    <div className="bg-primary/10 border border-primary/40 rounded-lg p-6 text-center max-w-[680px] mx-auto mt-7 text-xl font-semibold text-foreground/80 whitespace-pre-line leading-relaxed">
      "No estás comprando archivos.{"\n"}Estás garantizando acceso permanente a una parte de tu propia historia."
    </div>
  </section>
);

export default BenefitsSection;
