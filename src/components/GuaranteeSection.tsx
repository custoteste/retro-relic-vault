import badge from "@/assets/guarantee-badge.png";

const GuaranteeSection = () => (
  <section className="py-16 px-4 bg-background text-center">
    <img src={badge} alt="Garantía 7 días" className="w-[130px] h-[130px] object-contain mx-auto mb-5" />
    <h2 className="text-[clamp(20px,4vw,30px)] font-extrabold text-primary mb-3.5">
      Garantía Incondicional de 7 Días
    </h2>
    <p className="text-muted-foreground max-w-[580px] mx-auto text-base leading-relaxed">
      Si por cualquier motivo no estás 100% satisfecho con tu adquisición, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones. Tu satisfacción es nuestra prioridad.
    </p>
  </section>
);

export default GuaranteeSection;
