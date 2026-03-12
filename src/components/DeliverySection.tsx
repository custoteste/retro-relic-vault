const steps = [
  { title: "Biblioteca Organizada Como un Archivo Real", desc: "Cada edición separada por categoría, línea de tiempo y colección — para que navegues como en una biblioteca histórica digital." },
  { title: "Compatible Con Cualquier Dispositivo", desc: "Accede desde tu celular, tablet o computadora — donde y cuando quieras." },
  { title: "Acceso de Por Vida", desc: "Una vez liberado, el acceso es tuyo. Sin mensualidades. Sin bloqueos." },
];

const DeliverySection = () => (
  <section className="py-16 px-4 bg-secondary">
    <div className="bg-background border border-primary/40 rounded-xl p-10 max-w-[900px] mx-auto text-center">
      <h2 className="font-display text-[clamp(18px,3.5vw,28px)] text-foreground mb-2 tracking-wide">
        🔒 ACCESO LIBERADO INMEDIATAMENTE DESPUÉS DE CONFIRMAR EL PAGO
      </h2>
      <p className="text-muted-foreground text-lg mb-9">
        Recibes acceso automático a tu Archivo Era Dorada 80/90 en pocos minutos — organizado, estructurado y listo para explorar.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
              {i + 1}
            </div>
            <h3 className="text-[clamp(14px,2vw,18px)] font-extrabold text-foreground mb-1.5">{s.title}</h3>
            <p className="text-base text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverySection;
