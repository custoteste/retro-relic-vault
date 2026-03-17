import { useState } from "react";

const faqs = [
  { q: "¿Es pago mensual o pago único?", a: "Pago único — pagas una sola vez y el acceso es tuyo de por vida. Sin mensualidades, sin renovaciones automáticas, sin sorpresas en tu tarjeta. Como comprar una revista en la papelería: pagas una vez y es tuya para siempre." },
  { q: "¿Cómo recibo el acceso? ¿Tarda mucho?", a: "En menos de 5 minutos después de confirmar el pago recibes un correo con el enlace directo a tu Google Drive personal. No hay que instalar nada raro. Solo abres el link y ya están todas tus historietas organizadas por título y listas para leer." },
  { q: "¿Funciona en mi tablet y celular? ¿Y sin internet?", a: "Sí, en todos. Los archivos son PDFs de alta resolución que abres desde cualquier Android, iOS, Windows o Mac. Puedes leerlos en línea o descargarlos al dispositivo para leer en el camión, en la sala o donde sea — sin necesitar internet." },
  { q: "¿La calidad es buena o son scans pixelados como en Scribd?", a: "Esa fue exactamente la razón por la que creamos esto. Cada edición fue digitalizada en alta definición — colores nítidos, texto legible, ilustraciones como las recordabas. No son los scans torcidos y pixelados que encontrabas en foros y grupos de Facebook." },
  { q: "¿Puedo mostrárselo a mis hijos en el mismo dispositivo?", a: "Sí, ese es justo el punto. Puedes abrir el tablet, buscar el número exacto que leías con tu abuelo, y explicarle a tu hijo cada panel — quién es Kalimán, por qué usa el turbante, qué significa \"serenidad y paciencia\". Es una conversación que vale más que cualquier contenido de TikTok." },
  { q: "¿Puedo pagar con Mercado Pago o transferencia? No me gusta dar mi tarjeta en sitios desconocidos.", a: "Totalmente válido — y entendemos por qué lo preguntas. El pago se procesa a través de plataformas seguras que aceptan Mercado Pago, tarjeta de crédito/débito y transferencia bancaria según tu país. Tu información financiera nunca pasa directamente por nosotros." },
  { q: "¿Y si pago y después no lo uso?", a: "Hay una sola respuesta para eso: el abuelo hubiera querido que lo tuvieras. Pero más allá del sentimiento — tienes 7 días de garantía total. Si abres el archivo y no es lo que esperabas, te devolvemos todo tu dinero sin preguntas. No hay riesgo real." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const scrollToPlans = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-dark">
      <h2 className="font-display text-[clamp(24px,5vw,38px)] text-dark-foreground text-center mb-9 tracking-wide">
        Lo Que Carlos Se Preguntó Antes de Comprar
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

      {/* Carlos testimonial */}
      <div className="max-w-[680px] mx-auto mt-10 bg-vintage-bg border-2 border-vintage-border rounded-2xl p-7">
        <p className="text-sm text-gold font-extrabold uppercase tracking-wider mb-3">💬 Carlos, 42 años — Guadalajara, México</p>
        <p className="text-base text-foreground/80 leading-relaxed italic">
          "Voy a ser honesto: tardé como tres semanas en comprar. Abría el link, veía el precio, lo cerraba. No porque fuera caro. Era más bien como… si comprarlo significara admitir que ya soy grande y que la única forma de volver a la infancia es pagando por ella.<br/><br/>
          Pero un día estaba con Sofía y le estaba contando de Kalimán — el personaje que leía con mi abuelo todos los domingos — y ella me preguntó cómo era. Y yo no tenía cómo mostrárselo. Sentí algo raro, como si hubiera dejado perder algo que no era mío perder.<br/><br/>
          Compré esa noche. Llamé a Sofía. Le fui explicando cada panel. Ella escuchó con esa cara que tienen los niños cuando algo les parece genuinamente interesante, no educativo.<br/><br/>
          <strong className="text-foreground/90 not-italic">No compré una colección de historietas. Compré una tarde de domingo que pensé que había perdido para siempre."</strong>
        </p>
      </div>

      <div className="text-center mt-9">
        <button onClick={scrollToPlans} className="inline-block bg-primary text-primary-foreground text-base font-extrabold py-4 px-9 rounded-lg hover:brightness-110 transition animate-pulse-glow">
          QUIERO RECUPERAR MI TARDE DE DOMINGO
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
