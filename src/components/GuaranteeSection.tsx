const GuaranteeBadge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" width="130" height="130" className="mx-auto mb-5">
    <defs>
      <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f5c518"/>
        <stop offset="100%" stopColor="#d4a017"/>
      </linearGradient>
      <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#16a34a"/>
        <stop offset="100%" stopColor="#15803d"/>
      </linearGradient>
    </defs>
    <polygon points="65,4 79,18 98,14 102,33 118,42 114,61 126,75 114,89 118,108 99,113 92,130 73,124 65,134 57,124 38,130 31,113 12,108 16,89 4,75 16,61 12,42 28,33 32,14 51,18" fill="url(#gGold)"/>
    <circle cx="65" cy="67" r="44" fill="url(#gGreen)"/>
    <polyline points="45,67 58,80 85,52" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="65" y="24" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="#7a4f00" letterSpacing="1">GARANTÍA</text>
    <text x="65" y="108" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="#7a4f00" letterSpacing="1">7 DÍAS</text>
    <text x="65" y="72" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="34" fontWeight="900" fill="white">7</text>
    <text x="65" y="88" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#bbf7d0">DÍAS</text>
  </svg>
);

const GuaranteeSection = () => (
  <section className="py-16 px-4 bg-background text-center">
    <GuaranteeBadge />
    <h2 className="text-[clamp(20px,4vw,30px)] font-extrabold text-primary mb-3.5">
      Pruébalo 7 Días. Si No Es Lo Que Buscabas, Te Devolvemos Todo.
    </h2>
    <p className="text-muted-foreground max-w-[580px] mx-auto text-base leading-relaxed">
      Abre el archivo. Busca el número exacto que leías con tu abuelo. Navega por los títulos que creías perdidos para siempre. Si por cualquier razón no quedas satisfecho con la calidad, la organización o el contenido — envías un solo correo y te devolvemos <strong className="text-foreground/80">el 100% de tu inversión</strong>, sin preguntas, sin burocracia, sin demoras. El riesgo es completamente nuestro. La tarde de domingo que recuperas — esa es tuya.
    </p>
  </section>
);

export default GuaranteeSection;
