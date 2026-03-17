const benefits = [
  {
    icon: "📖",
    title: "El Ritual del Domingo",
    text: "Tu abuelo leía los primeros balones en voz alta.\nDespués te pasaba la revista para que continuaras.\nEse papel levemente amarillado.\nEl café en la sala.\nEso no lo inventa ningún algoritmo.",
  },
  {
    icon: "👧",
    title: "Antes Que Crezcan Demasiado",
    text: "Tu hija tiene 11 años.\nTienes una ventana de 2 o 3 años antes de la adolescencia.\nEso que quieres mostrarle — quién eras tú, de dónde veniste —\nes urgente de un modo que no siempre puedes explicar,\npero que sientes con claridad.",
  },
  {
    icon: "📱",
    title: "Todo Organizado. Sin Scribd.",
    text: "Ya buscaste en foros.\nYa encontraste links rotos y scans pixelados.\nYa sabes que la piratería no respeta lo que esas historias valen.\nEste archivo es distinto: cada número, en HD,\norganizado por título y año.\nAbierto desde tu tablet esta noche.",
  },
];

const BenefitsSection = () => (
  <section className="py-16 px-4 bg-background">
    <h2 className="font-display text-[clamp(24px,5vw,38px)] text-center text-foreground mb-2 tracking-wide">
      Esto No Es Una Colección. Es Una Conversación Que Quedó Pendiente.
    </h2>
    <p className="text-center text-[clamp(15px,2vw,19px)] font-bold text-foreground mb-10">
      Lo que sientes cuando ves esas portadas no es nostalgia. Es memoria real.
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
      "Wey, es como si alguien hubiera ido a todas las papelerías del país, comprado cada número que existió, los escaneara bien — con buena resolución — y los pusiera todos en un solo lugar en tu celular. Sin anuncios raros, sin links rotos. Solo abres y está ahí."
    </div>
  </section>
);

export default BenefitsSection;
