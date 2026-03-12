import { useState } from "react";

const faqs = [
  { q: "¿Cómo recibo el acceso al material?", a: "Inmediatamente después de confirmar tu pago, recibirás un correo con las instrucciones de acceso. Todo es digital y automático." },
  { q: "¿Puedo acceder desde cualquier dispositivo?", a: "Sí, puedes acceder desde tu celular, tablet o computadora. Solo necesitas conexión a internet." },
  { q: "¿Realmente es acceso de por vida?", a: "Sí, una vez que adquieres el archivo, el acceso es tuyo para siempre. Sin mensualidades ni renovaciones." },
  { q: "¿Los cómics están en buena calidad?", a: "Cada edición fue cuidadosamente digitalizada en alta resolución, preservando colores y detalles originales." },
  { q: "¿Puedo obtener un reembolso?", a: "Sí, ofrecemos garantía incondicional de 7 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const scrollToPlans = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-dark">
      <h2 className="font-display text-[clamp(24px,5vw,38px)] text-dark-foreground text-center mb-9 tracking-wide">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-[680px] mx-auto flex flex-col gap-2.5">
        {faqs.map((f, i) => (
          <div key={i} className="bg-background border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-5 py-4 text-sm font-bold text-foreground bg-transparent border-none cursor-pointer flex justify-between items-center gap-2"
            >
              {f.q}
              <span className={`text-lg transition-transform flex-shrink-0 ${open === i ? "rotate-180" : ""}`}>▾</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-9">
        <button onClick={scrollToPlans} className="inline-block bg-primary text-primary-foreground text-base font-extrabold py-4 px-9 rounded-lg hover:brightness-110 transition">
          QUIERO MI COLECCIÓN AHORA
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
